# 🚀 Modern Portfolio Website - React & Tailwind CSS

A stunning, fully responsive portfolio website built with React and Tailwind CSS featuring 10 interactive components with beautiful web development themed backgrounds.

# ✨ Live Demo
```
https://portfoilo-one-theta.vercel.app
```
# 📱 Features

# 🎨 Design Features

10 Interactive Components with unique designs

Web Development Themed Backgrounds for each section

Live Background Image Rotation on homepage

Responsive Design optimized for all devices

Dark Mode Aesthetic with gradient accents

Animated Transitions using Framer Motion

# 🔧 Technical Features

Component-Based Architecture with 10 distinct sections

Custom Button System with 6 variants

Live Component Status Tracking

User Activity Detection

Smooth Page Transitions

Interactive Navigation with hover effects

Dynamic Background Changes

# 📊 Component Breakdown

🏠 Home - Hero section with animated backgrounds & social links

💼 Current Company - Professional experience with project details

🚀 Placement Projects - 5 featured projects with live demos

🎯 Internships - 10 internship experiences with details

🎓 College - Higher education information

🔧 Polytechnic - Technical education details

📚 Education - School education (10th & 12th)

🎨 Frontend Skills - Frontend technologies with proficiency levels

⚙️ Backend Skills - Backend technologies and APIs

🔗 Navigation - Interactive navigation system

# 🛠️ Technologies Used

# Frontend
```
https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white
https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
```
# Icons & Animations
```
https://img.shields.io/badge/Lucide_React-000000?style=for-the-badge&logo=lucide&logoColor=white
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
```
# Development Tools
```
https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white
https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white
```
📁 Project Structure
text
```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.jsx              # Main landing page
│   │   ├── CurrentCompany.jsx    # Current company details
│   │   ├── PlacementProjects.jsx # Placement projects showcase
│   │   ├── Internships.jsx       # Internship experiences
│   │   ├── College.jsx           # College education
│   │   ├── Polytechnic.jsx       # Polytechnic education
│   │   ├── Education.jsx         # School education
│   │   ├── FrontendSkills.jsx    # Frontend technologies
│   │   ├── BackendSkills.jsx     # Backend technologies
│   │   ├── Navbar.jsx            # Navigation bar
│   │   └── Button.jsx            # Custom button component
│   ├── App.js                    # Main application component
│   ├── index.js                  # Application entry point
│   └── index.css                 # Global styles & Tailwind
├── tailwind.config.js            # Tailwind configuration
├── package.json                  # Dependencies
└── README.md                     # Documentation
```
# 🚀 Installation & Setup

Prerequisites

Node.js (v14.0.0 or higher)

npm (v6.0.0 or higher)

# Step 1: Clone the Repository
bash
```
git clone https://github.com/yourusername/portfolio-website.git
```
```
cd portfolio
```
# Step 2: Install Dependencies
bash
```
npm install
```
# Step 3: Configure Environment (Optional)

Create a .env file in the root directory:

env
```
REACT_APP_PORTFOLIO_TITLE="My Portfolio"
REACT_APP_GITHUB_USERNAME="yourusername"
REACT_APP_LINKEDIN_USERNAME="yourusername"
REACT_APP_EMAIL="your.email@example.com"
```
# Step 4: Run Development Server
bash
```
npm start
```
Open 
```
http://localhost:3000
```
in your browser.

# Step 5: Build for Production

bash
```
npm run build
```
# 🎯 Customization Guide

Update Personal Information

Personal Details: Edit src/components/Home.jsx

jsx
// Update name, role, contact info
```
const name = "Your Name";
const role = "Your Role";
const phone = "+1234567890";
const email = "your.email@example.com";
Social Links: Update links in Home.jsx
```
jsx
const links = [
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
];
Company & Education: Update respective component files with your details

Change Background Images
Home Page Backgrounds: Update webDevBackgrounds array in Home.jsx

Component Backgrounds: Update background URLs in each component file

Modify Colors
Edit tailwind.config.js to customize colors:

javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'portfolio-primary': '#06b6d4',
        'portfolio-secondary': '#3b82f6',
      }
    }
  }
}

# 🎨 Design Customization

Button Variants

The portfolio includes 6 button variants:

primary - Cyan gradient (default)

secondary - Gray gradient

outline - Transparent with cyan border

success - Green gradient

danger - Red gradient

warning - Orange gradient

ghost - Minimal transparent

Usage Example
```
jsx

import Button from './components/Button';

<Button variant="primary" icon={Github}>
  View on GitHub
</Button>
```
# 📱 Responsive Breakpoints
```
Mobile: < 640px

Tablet: 640px - 1024px

Desktop: > 1024px
```
# 🔧 Development Commands
bash
# Start development server
```
npm start
```
# Build for production
```
npm run build
```
# Run tests
```
npm test
```
# Eject from create-react-app (not recommended)
```
npm run eject
```
# Deploy to GitHub Pages

npm run deploy

# 🚀 Deployment

Deploy to Netlify

Push your code to GitHub

Go to Netlify

Click "New site from Git"

Select your repository

Build command: npm run build

Publish directory: build

Click "Deploy site"

Deploy to Vercel

# 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

# 🙏 Acknowledgments

Unsplash for beautiful background images

Tailwind CSS for the utility-first CSS framework

React for the component-based architecture

Lucide React for beautiful icons

Framer Motion for smooth animations

# 📞 Contact & Support

For questions, feedback, or support:

GitHub Issues: Create an issue

Email: your.email@example.com

LinkedIn: Your Name

# 🌟 Star History

https://api.star-history.com/svg?repos=yourusername/portfolio-website&type=Date

# 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

# 🛡️ Security

This project follows security best practices:

No sensitive data in code

Regular dependency updates

HTTPS enforced

CORS properly configured

# 🔄 Updates & Maintenance

Regular updates are made to:

Keep dependencies current

Fix reported issues

Add new features

Improve performance