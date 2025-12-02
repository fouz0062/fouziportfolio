# Personal Portfolio Website

A modern, fully responsive personal portfolio website built with React. Showcasing my skills, projects, experience, and education with a clean and professional design.

![Portfolio Preview](https://img.shields.io/badge/React-18.1.0-61DAFB?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean and professional design with smooth animations
- **Interactive Sections**:
  - Hero Banner with animated typing effect
  - Skills showcase with carousel
  - Projects portfolio with hover effects
  - Experience timeline
  - Education details
  - Contact form with GetForm.io integration
- **Smooth Scrolling** - Hash-based navigation for seamless section transitions
- **Dark Theme** - Modern dark color scheme with gradient accents
- **Mobile-First** - Optimized mobile navigation with collapsible menu
- **Contact Form** - Integrated with GetForm.io for form submissions
- **Social Links** - Quick access to LinkedIn, GitHub, and Resume

## 🛠️ Technologies Used

### Frontend
- **React** (v18.1.0) - UI library
- **React Bootstrap** (v2.4.0) - Component library
- **Bootstrap** (v5.1.3) - CSS framework
- **React Router DOM** (v6.3.0) - Routing
- **React Router Hash Link** (v2.4.3) - Smooth hash navigation
- **Animate.css** (v4.1.1) - CSS animations
- **React Multi Carousel** (v2.8.1) - Skills carousel
- **React On Screen** (v2.1.1) - Scroll animations
- **React Bootstrap Icons** (v1.8.2) - Icon library

### Form Handling
- **GetForm.io** - Contact form backend

## 📁 Project Structure

```
personal-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── font/          # Custom fonts
│   │   └── img/           # Images and icons
│   ├── components/
│   │   ├── Banner.js      # Hero section
│   │   ├── NavBar.js      # Navigation bar
│   │   ├── Skills.js      # Skills showcase
│   │   ├── Projects.js    # Projects section
│   │   ├── ProjectCard.js # Project card component
│   │   ├── Experience.js  # Work experience
│   │   ├── Education.js   # Education details
│   │   ├── Contact.js     # Contact form
│   │   └── Footer.js      # Footer section
│   ├── App.js             # Main app component
│   ├── App.css            # Global styles
│   └── index.js           # Entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. Optimized and minified for best performance.

### `npm run eject`
**Note: This is a one-way operation.** Ejects from Create React App configuration.

## 🎨 Sections

### 1. **Banner (Hero Section)**
- Animated typing effect for role titles
- Personal introduction and bio
- Call-to-action button

### 2. **Skills**
- Interactive carousel showcasing technical skills
- Icons for technologies (React, Next.js, TypeScript, etc.)

### 3. **Projects**
- Portfolio of featured projects
- Project cards with hover effects
- Links to live demos and repositories

### 4. **Experience**
- Professional work experience timeline
- Detailed role descriptions and achievements

### 5. **Education**
- Educational background and certifications
- AWS Cloud & AI Masterclass
- Bootcamp and degree information

### 6. **Contact**
- Contact form integrated with GetForm.io
- Form validation
- Success/error messaging

### 7. **Footer**
- Social media links
- Copyright information

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop** (1200px+)
- **Laptop** (992px - 1199px)
- **Tablet** (768px - 991px)
- **Mobile** (576px - 767px)
- **Small Mobile** (375px - 575px)
- **Extra Small Mobile** (< 375px)

## 🔧 Configuration

### Contact Form Setup

The contact form is configured to use GetForm.io. Update the form action URL in `src/components/Contact.js`:

```javascript
action="https://getform.io/f/your-form-endpoint"
```

### Customization

1. **Update Personal Information**: Edit the data in each component file
2. **Change Colors**: Modify CSS variables in `src/App.css`
3. **Add Projects**: Update the projects array in `src/components/Projects.js`
4. **Update Experience/Education**: Edit arrays in respective component files

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/personal-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Other Deployment Options

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `build` folder
- **AWS Amplify**: Connect repository for automatic deployments

## 🎯 Features Highlights

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Animated sections on scroll
- ✅ Mobile-optimized navigation
- ✅ Contact form integration
- ✅ Dark theme with gradient accents
- ✅ Professional project showcase
- ✅ Skills carousel
- ✅ Experience and education timeline

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Fouziya Mohamed Ashik**

- LinkedIn: [fouziya-mohamed-ashik](https://www.linkedin.com/in/fouziya-mohamed-ashik-b70b26a3/)
- GitHub: [@fouz0062](https://github.com/fouz0062)
- Email: fouzifathii@gmail.com

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Animate.css](https://animate.style/)
- [GetForm.io](https://getform.io/)

---

⭐ If you like this project, please give it a star!
