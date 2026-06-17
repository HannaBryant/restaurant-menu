# Southern Comforts

A restaurant web application for Southern Comforts, built with React and Vite. Customers can browse the menu, place orders, and chat with an AI-powered waiter.

## Features

- **Home** — Landing page with restaurant imagery.
- **Menu** — Dynamically loaded menu items (breakfast, lunch, dinner, drinks) fetched from a Supabase database.
- **Order** — Simple order form that submits customer orders to Supabase.
- **AI Chatbot (Sam)** — A conversational chatbot powered by Google Gemini that answers menu-related questions in a friendly southern style.

## Tech Stack

- **Frontend:** React 19, React Router 7, Vite 7
- **Styling:** Bootstrap 5, custom CSS
- **Backend/Database:** Supabase (REST API)
- **AI Integration:** Google Gemini API
- **Build Tool:** Vite with SWC (via @vitejs/plugin-react-swc)

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following variables:

```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_TOKEN=<your-supabase-api-key>
VITE_GEMINI_URL=<your-gemini-api-url>
VITE_GEMINI_KEY=<your-gemini-api-key>
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Card.jsx          # Menu item card
│   ├── ChatbotForm.jsx   # Chatbot conversation UI
│   └── Navbar.jsx        # Navigation bar
├── pages/
│   ├── Home.jsx          # Landing page
│   ├── Menu.jsx          # Menu display page
│   ├── OrderPage.jsx     # Order submission form
│   └── Chatbot.jsx       # AI chatbot page
├── App.jsx               # Root component with routing
├── App.css               # Application styles
├── main.jsx              # Entry point
└── index.css             # Global styles
```
