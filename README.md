# Dev Portfolio — React + Vite + Tailwind CSS + MongoDB

Premium developer portfolio website with gold, dark, and light theme, featuring a complete testimonial management system.

## Features
- 🎨 Dark/Light mode toggle
- 📱 Fully responsive design
- ✨ Smooth animations & transitions
- 📝 Testimonial submission with MongoDB backend
- 🔐 Admin panel for testimonial management
- 📧 EmailJS contact form integration
- 🚀 Performance optimized

## Your Live Projects Featured
- [Trendova Shop](https://trendova-shop.vercel.app/) — Luxury E-Commerce
- [TaskDesk](https://taskdesk-rho.vercel.app/) — Task Management SaaS
- [AxionTrade X](https://axiontradex.com/) — Crypto Trading Platform
- [ByVault Finance](https://www.byvaultonline.com/) — Fintech Platform


## Setup & Run

### Frontend Setup
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:3000/api" > .env

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file with your credentials
cat > .env 
PORT=3000
MONGODB_URI=mongodb+srv://portfolio_admin:YOUR_PASSWORD@cluster0.gqgkmil.mongodb.net/portfolio_db?retryWrites=true&w=majority&appName=Cluster0
ADMIN_KEY=your_secret_admin_key_here

# Start backend server
npm run dev

## Repo
https://github.com/Emmirez/devclosure.git

👨‍💻 Author
Emmirez Obaro

Full Stack Developer
Specializing in React, Node.js, and scalable web applications