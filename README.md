# Front-End Expert Portfolio

A stunning personal portfolio website showcasing front-end development expertise with React and GSAP animations. This project demonstrates modern web development practices with beautiful, smooth animations and an engaging user experience.

## 🌟 Features

- **Modern React Architecture**: Built with React 19 and Vite for optimal performance
- **GSAP Animations**: Smooth, professional animations throughout the site using GSAP (GreenSock Animation Platform)
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Interactive Components**: 
  - Animated navigation with scroll detection
  - Hero section with particle effects and gradient animations
  - Skills section with animated progress bars
  - Project showcase with hover effects
  - Contact form with smooth transitions
- **Smooth Scrolling**: Enhanced user experience with smooth section navigation
- **Custom Styling**: Modern gradient effects, glassmorphism, and professional color scheme

## 🚀 Technologies Used

- **React 19** - Modern UI library
- **GSAP 3** - Professional-grade animation library
- **Vite** - Next-generation frontend tooling
- **React Router DOM** - Client-side routing
- **CSS3** - Custom styling with modern features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/theRaven-code/theAnimatedCV.git
cd theAnimatedCV
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
theAnimatedCV/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation component
│   │   └── Navbar.css
│   ├── sections/
│   │   ├── Hero.jsx           # Landing section
│   │   ├── Hero.css
│   │   ├── About.jsx          # About & Skills section
│   │   ├── About.css
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── Projects.css
│   │   ├── Contact.jsx        # Contact form
│   │   └── Contact.css
│   ├── App.jsx                # Main app component
│   ├── App.css
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── public/                     # Static assets
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/sections/Hero.jsx`):
   - Modify the title and subtitle text
   - Customize the call-to-action buttons

2. **About Section** (`src/sections/About.jsx`):
   - Update the bio text
   - Modify skills and proficiency levels

3. **Projects Section** (`src/sections/Projects.jsx`):
   - Add your own projects
   - Update project details, technologies, and links

4. **Contact Section** (`src/sections/Contact.jsx`):
   - Update contact information
   - Add your social media links
   - Configure form submission endpoint

### Customize Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... more colors */
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify/Vercel

Simply connect your GitHub repository to Netlify or Vercel, and they will automatically build and deploy your site.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For opportunities or collaborations, feel free to reach out through the contact form on the website.

---

Built with ❤️ using React and GSAP
