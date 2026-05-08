🚀 PathForge – Interactive Roadmap Planner

## 📌 Overview
PathForge is a visual roadmap planning web application that helps users transform their goals into structured, trackable, and interactive journeys.

Instead of using static to-do lists, PathForge allows users to:
- Break down goals into smaller steps
- Visualize them as connected nodes
- Track progress dynamically
- Organize everything in a clean, drag-and-drop interface

---

## 🎯 Problem Statement
Traditional planning tools are:
- Text-heavy  
- Hard to visualize  
- Difficult to track progress effectively  

PathForge solves this by providing a visual, node-based roadmap system that improves clarity, engagement, and motivation.

---

## ✨ Features

### 🧩 Core Features
- Interactive roadmap canvas (node-based visualization)
- Create, edit, and delete roadmap nodes
- Parent-child hierarchical structure
- Drag-and-drop node positioning
- Zoom and pan canvas

### 📊 Progress Tracking
- Progress percentage per node
- Automatic parent progress calculation
- Visual progress bars

### 🎨 UI/UX
- Clean and minimal interface
- Responsive design
- Smooth animations

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript

### Visualization
- React Flow (for node-based UI)

### Styling
- Tailwind CSS
- Framer Motion (animations)

---

## 🏗️ Project Structure

src/  ┣ components/  ┃ ┣ Sidebar.tsx  ┃ ┣ RoadmapCanvas.tsx  ┃ ┣ NodeCard.tsx  ┃ ┣ NodeModal.tsx  ┃ ┗ ProgressBar.tsx  ┣ store/  ┃ ┗ roadmapStore.ts  ┣ types/  ┣ utils/  ┣ hooks/  ┗ App.tsx

---

## 🖥️ Pages & Navigation

### 1. Landing Page
- Introduction to PathForge
- Call-to-action to start planning

### 2. Dashboard (Main App)
- Sidebar (controls, progress, filters)
- Roadmap canvas (interactive nodes)

### 3. Node Modal
- Edit node details
- Update progress
- Delete node

### 4. Settings Page (Optional)
- Theme toggle
- Export data
- Clear storage

---

## 🔄 Application Flow

Landing Page → Dashboard → Node Interaction → Save Progress

---

## ⚙️ Installation & Setup

### 1. Clone Repository
git clone https://github.com/your-username/pathforge.git cd pathforge

### 2. Install Dependencies
npm install

### 3. Run Development Server
npm run dev

---

## 📦 Dependencies

react typescript reactflow tailwindcss framer-motion

---

## 📊 Future Enhancements

- 🔗 Backend integration (Firebase / Supabase)
- 🤝 Real-time collaboration
- 🧠 AI-based roadmap suggestions
- 📤 Export as PDF / Image
- 🌙 Dark mode support
- 📱 Mobile optimization

---

## ⚡ Performance Considerations

- Use memoization for components
- Optimize rendering for large graphs
- Lazy load nodes if needed

---
## 💡 Final Note
PathForge is not just a project — it’s a practical system that can be used for:
- Learning roadmaps
- Career planning
- Habit tracking
- Personal growth

Build simple first. Then iterate.

---
**“Visualize your path. Execute your plan.
