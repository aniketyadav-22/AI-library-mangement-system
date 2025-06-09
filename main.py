from fastapi import FastAPI, Query
from pydantic import BaseModel
from typing import List
import nbimporter
from  book_recommendation  import recommend_books_similar_to

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Book Recommendation API",
    description="API for recommending similar books using BERT embeddings and content-based filtering.",
    version="1.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RecommendationRequest(BaseModel):
    book_title: str
    top_n: int = 5

class RecommendationResponse(BaseModel):
    recommendations: List[str]

@app.post("/recommend", response_model=RecommendationResponse)
def recommend_books(request: RecommendationRequest):
    recommended_books = recommend_books_similar_to(request.book_title, request.top_n)
    return {"recommendations": recommended_books}