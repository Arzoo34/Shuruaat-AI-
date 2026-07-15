# Shuruaat AI — Artisan E-Commerce Companion

Shuruaat AI is a mobile-first, AI-powered business companion built for home-based Indian artisans and micro-sellers (Meesho-style). It enables artisans to easily create product listings, manage customer Q&A, and track business health using voice and image uploads in their native languages.

The visual identity is warm, handcrafted, and deeply rooted in Indian textile and craft traditions (utilizing terracotta, turmeric, and indigo tones with handblock prints, kantha stitches, and ikat weave highlights).

---

## Project Structure

```
/shuruaat-ai
  ├── /frontend      - Vite + React + Zustand + Tailwind CSS Mobile Application
  │    ├── /src/components/icons      - Custom organic folk-art style SVG icons
  │    ├── /src/components/patterns   - Traditional textile border and divider components
  │    ├── /src/components/ui         - Reusable design system components (buttons, badges, pills)
  │    ├── /src/screens               - Screens (Onboarding, Profile, Home, Create, Preview)
  │    └── /src/i18n                  - translation database for 9 Indic target languages
  │
  ├── /backend       - FastAPI + LangChain + Groq + Sarvam AI Asynchronous Backend Services
  │    ├── /agents                    - Listing & Q&A LangChain tool-calling AgentExecutors
  │    ├── /routes                    - Controller routes (Listing, Evaluation, Q&A, Health)
  │    ├── /services                  - Shared vision, translation, and LLM client wrappers
  │    ├── /models                    - Pydantic request/response validation schemas
  │    └── /data                      - Fallback catalog databases and benchmark settings
  │
  └── README.md      - Root documentation and setup guide
```

---

## Key Features

1. **Speak & Snap Listing Agent**:
   * **Voice Transcription**: Speak in native Indic languages to describe fabric, sizes, and defects (processed via Sarvam AI & Groq).
   * **Vision Analysis**: Extracts visual attributes from uploaded product images (color, weave, pattern).
   * **Category Mismatch Hard Stop**: Checks image features against declared categories (e.g. flagging footwear uploaded under "Saree").
   * **Return Risk Scoring**: Assesses sizing gaps and delivery pincodes to calculate a return risk percentage (sage to madder colored CircularProgress).

2. **Buyer Q&A Agent**:
   * Clusters buyer questions by topic to identify trends.
   * Auto-drafts answers in the buyer's language.
   * Recommends catalog updates based on recurring questions.

3. **Health Agent (Bahi-Khata weekly summary)**:
   * Consolidates weekly metrics (return rates, order counts, payment types).
   * Generates a warm, conversational, encouraging narrative in the seller's language (using the LLM client, with template fallback).
   * Recommends cash-saving actions (e.g. setting COD limits above a threshold to reduce return risks).

4. **Quality Evaluator Agent**:
   * Automates validation of the listing agent's output (schema structures, mismatch responses, tool-calling logs) against test cases.

---

## Image Upload Flow & Timing Performance

```
[Mobile React App] ────(Image Upload)────► [FastAPI /api/listing/run-agent]
                                                   │
                                                   ▼
[Return Risk Evaluator] ◄────(Copy Gen)──── [Listing Agent Executor]
          │                                        │
          │                                        ▼
          ▼                              [Vision Weave & Color Analysis]
[React UI Display] ◄───(JSON Response)───[Category Mismatch check]
```

* **Typical Process Duration**: **5s to 12s** (vision analysis, mismatch checks, copywriting, and risk scoring).
* **API Timeout Limit**: **30 seconds** (enforced in backend router).
* **Failure Recovery**: **<100 milliseconds** (instant local fallback via `/data/fallback_listing.json`).

---

## Setup & Running Instructions

### 1. Running the Backend Server
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python -m venv venv
   # Windows:
   .\venv\Scripts\activate
   # macOS/Linux:
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Copy `.env.example` to `.env` and fill in `GROQ_API_KEY` and `SARVAM_API_KEY`.
5. Start the server:
   ```bash
   python -m uvicorn main:app --port 8000 --host 127.0.0.1
   ```

### 2. Running the Frontend Application
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the local address in your browser: `http://localhost:5173/`

---

## Technology Stack
* **Frontend**: React (Vite), Tailwind CSS (v3), Zustand (global state), React Router (routing), Google Fonts (Fraunces, Poppins, Noto Sans, Noto Serif Devanagari).
* **Backend**: Python, FastAPI, Pydantic, LangChain, ChatGroq, Uvicorn.
