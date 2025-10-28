[Watch Demo](https://www.youtube.com/watch?v=ZOrl6fkvzdA)

[Try it Out](https://radiology-frontend-555009189141.us-central1.run.app) 🔗

[DevPost Link](https://devpost.com/software/radiology-intelligence-agent-levia)

[Github Link](https://github.com/hhtzuhh/RadiologyAgent)
## 💡 Inspiration

Radiology departments generate thousands of reports and images daily, creating vast archives of clinical knowledge. Yet when a radiologist needs to find similar cases, identify patterns across patients, or reference past findings, they're stuck with basic keyword search tools that can't understand medical context or visual similarity.

I saw an opportunity in the hackathon to solve this problem. The challenge asked us to build the future of AI-powered search by combining Elasticsearch's hybrid search with Google Cloud's generative AI. I realized that medical imaging was the perfect domain to showcase this synergy—where precise keyword matching (for medical terminology) must coexist with semantic understanding (for natural language queries) and visual similarity (for image-based retrieval).

The vision was clear: **What if clinicians could simply ask questions in natural language and have an AI system intelligently search across text reports, medical entities, and X-ray images to provide comprehensive, contextual answers?**
![Screenshot 1](/images/levia/levia.png)
## 🔍 What it does

Levia transforms radiology archives into an intelligent, conversational assistant. Clinicians can ask complex questions in plain English, and Levia coordinates multiple specialized AI agents to deliver comprehensive answers:

**Example Queries:**
- *"Show me cases of cardiomegaly with pulmonary edema from the past year"* → **Search Agent** uses hybrid search to find relevant reports
- *"What are the most common findings in patients with pneumonia?"* → **Knowledge Agent** analyzes RadGraph entities across the dataset
- *"Find X-rays related to Atelectasis"* → **Vision Agent** performs visual similarity search using image embeddings


![Screenshot 1](/images/levia/Flowchart.jpg)
## 🛠️ How we built it

**Data Pipeline:**
1. **Dataset**: ChexXpert dataset contains huge amount of data. Due to demo, I only select 3,000 images as a subset. https://stanfordmlgroup.github.io/competitions/chexpert/

2. **Entity Extraction**: Processed reports through RadGraph to extract anatomical entities and clinical relationships
3. **Multi-modal Embeddings**:
   - Text embeddings (768-dim) using medical BERT models
   - Image embeddings (1408-dim) using vision transformer models trained on chest X-rays
4. **Elasticsearch Ingestion**: Uploaded to Elastic Cloud with hybrid search mapping (BM25 + kNN fields)

**Multi-Agent System (Google Cloud ADK):**
- Built four agents using **Google Agent Development Kit (ADK)**:
  - Orchestrator with high-level planning capabilities (Gemini)
  - Search, Knowledge, and Vision agents with specialized tools
- Implemented hierarchical delegation using ADK's `AgentTool` for sub-agent coordination
- Shared session state management for multi-turn conversation context
- Custom tools connecting to Elasticsearch API for hybrid search queries

**Elasticsearch Integration:**
- **Hybrid Search Queries**: Implemented adaptive search strategy selection
  - Pure BM25 for medical acronyms and precise terms
  - Pure kNN for natural language conceptual queries
  - RRF fusion for complex mixed queries
- **Multi-modal Indexes**: Separate dense_vector fields for text (768-dim) and images (1408-dim)
- **Structured Data Storage**: RadGraph entities as keyword fields, CheXbert labels as objects

**Deployment Infrastructure:**
- **Agents**: Deployed to **Google Cloud Vertex AI Agent Engines** as a unified hierarchical system
- **Backend**: FastAPI WebSocket server on **Google Cloud Run** for streaming responses
- **Frontend**: React application with real-time chat interface on **Google Cloud Run**
- **Data**: **Elastic Cloud** instance with optimized mappings for medical data

**Tech Stack:**
- Google Cloud: Vertex AI Agent Engines, Cloud Run, ADK (Agent Development Kit)
- Elasticsearch: Elastic Cloud with hybrid search (BM25 + kNN + RRF)
- Backend: Python, FastAPI, WebSockets
- Frontend: React, WebSocket client for real-time streaming
- ML Models: Medical BERT (text embeddings), Vision Transformer (image embeddings)
- Medical NLP: RadGraph (entity extraction), CheXbert (label classification)

The entire system showcases how **Google Cloud's orchestration capabilities** combined with **Elasticsearch's intelligent retrieval infrastructure** creates a platform where AI doesn't just generate answers—it intelligently searches, analyzes, and synthesizes real clinical data.
