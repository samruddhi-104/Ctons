import os
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

load_dotenv()

app = FastAPI()

# ✅ CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Load data
with open("data/ctons.txt", "r", encoding="utf-8") as f:
    text = f.read()

# ✅ Split text
splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=50)
docs = splitter.create_documents([text])

# ✅ Embeddings
embeddings = OpenAIEmbeddings()

# ✅ Vector DB
vectorstore = FAISS.from_documents(docs, embeddings)

# ✅ LLM
llm = ChatOpenAI(model="gpt-3.5-turbo")

# ✅ Retrieval QA (stable)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever()
)

# ✅ Request model
class Query(BaseModel):
    question: str

# ✅ API
@app.post("/chat")
def chat(query: Query):
    response = qa_chain.run(query.question)
    return {"answer": response}