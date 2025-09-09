# Farm Machinery Conversational RAG Assistant

An AI-powered **Conversational RAG system** that helps farmers troubleshoot farm machinery issues, recommends **DIY repair videos**, and suggests **relevant spare parts** for purchase.

## Overview
- Farmers can query in **natural language** to resolve machinery issues.
- Uses **RAG pipeline** with embeddings, chunking, and vector search for relevant results.
- Provides **DIY repair videos** and **spare part recommendations** within chat.

## Tech Stack
- **LLM:** Google Gemini
- **Framework:** Node.js (ESM) + LangChain
- **Vector DB:** Pinecone
- **Embeddings:** Gemini Embeddings
- **Database:** MongoDB
- **ORM:** Prisma

## RAG Workflow
- **Document Chunking:** Splits large datasets (videos, manuals, product data) into smaller chunks.
- **Embedding Generation:** Creates dense vector embeddings using **Gemini**.
- **Vector Upserting:** Stores and updates embeddings in **Pinecone** for semantic search.
- **Retrieval:** Fetches top-k relevant chunks for user query.
- **LLM Response:** Combines retrieved context with **Gemini** to generate accurate answers.

## Features
- **Natural language queries** for troubleshooting
- **DIY video recommendations** from knowledge base
- **Relevant spare part suggestions** with purchase links
- **Multi-turn conversations** with context retention
- **Multi-lingual** supports multiple language

