# Hearth - Household Management Platform

A modern web application designed to streamline household coordination through integrated messaging, expense tracking, chore management, and shared calendars.

## 🌟 Features

### 💬 Real-Time Messaging & Collaboration
- Threaded discussions with read status tracking
- @mentions and notifications
- File/image attachments
- Message reactions and emoji support
- Built-in polling system

### 💰 Expense Management
- Track and split shared expenses
- Customizable split ratios
- Receipt uploads
- Expense categorization
- Settlement tracking

### ✅ Task Management
- Detailed chore checklists
- Subtask tracking
- Task templates
- Due dates and reminders
- Flexible task assignments

### 📅 Shared Calendar
- Household event management
- Automated chore scheduling
- Google Calendar integration
- Event categorization

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **State Management**: 
  - React Query
  - Context API
- **Styling**: Tailwind CSS
- **Real-Time**: Socket.IO client

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT with HTTP-only cookies
- **Real-Time**: Socket.IO

### DevOps & Deployment
- **Frontend Hosting**: Vercel
- **Backend Hosting**: Render
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Monitoring**: Sentry

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- Docker (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hearth.git
cd hearth
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
```bash
# Frontend
cp frontend/.env.example frontend/.env.local

# Backend
cp backend/.env.example backend/.env
```

4. Start the development servers:
```bash
# Frontend
cd frontend
npm run dev

# Backend
cd ../backend
npm run dev
```

## 📝 Documentation

For detailed documentation, please refer to the [docs](./docs) directory.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ for better household living
