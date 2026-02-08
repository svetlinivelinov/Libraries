# 💄 Elegant Makeup - Professional Makeup Artist Website

A stunning, fully responsive makeup artist website featuring **bilingual support (English/Bulgarian)**, professional service showcases, and an elegant design optimized for user comfort and accessibility.

## 🌟 Live Demo

Visit the live website: [Elegant Makeup Website](https://your-username.github.io/elegant-makeup/)

> **New**: Complete bilingual interface with seamless English ⇄ Bulgarian translation system

## ✨ Features

### 🎨 **Beautiful Design**
- Modern gradient color scheme with **warm, eye-friendly colors**
- **Reduced contrast** design for visual comfort (soft grays instead of harsh black/white)
- Smooth animations and hover effects
- Professional typography and layout
- Responsive design for all devices

### 🌍 **Bilingual Support**
- **Complete English/Bulgarian translation system**
- Dynamic language toggle in navigation
- All content fully localized (services, FAQ, contact info)
- Seamless language switching without page reload

### 📱 **Fully Responsive**
- Mobile-first approach
- Optimized for desktop, tablet, and mobile
- Touch-friendly interface
- Adaptive layouts and typography

### 🎭 **Service Showcase**
- **6 Professional Services**:
  - Bridal Makeup
  - Editorial Glam
  - Natural Look
  - Evening Glam
  - Special Effects
  - Prom & Graduation

### 🎠 **Interactive Elements**
- Hero section with gradient overlay and call-to-action
- **3-slide featured work carousel** with professional portfolio images
- **Expandable service accordions** with pricing and details
- Smooth scrolling navigation with language selector
- Interactive service cards with hover effects
- **Bootstrap-powered responsive components**

### 📋 **Comprehensive Information**
- **Detailed FAQ section** with 4 comprehensive questions covering:
  - Session duration and timing
  - Travel services and pricing
  - Professional products used
  - Booking timelines and availability
- Complete contact information and studio hours
- **6 Professional Services**:
  - Bridal Makeup
  - Editorial Glam  
  - Natural Look
  - Evening Glam
  - Special Effects
  - Prom & Graduation
- **Local image assets** (11 professional images)
- Social media integration and booking CTAs

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Custom properties, gradients, animations, flexbox
- **JavaScript (ES6+)** - Dynamic content rendering, bilingual translations
- **Bootstrap 5** - Responsive framework and components
- **Bootstrap Icons** - Professional icon library

## 📁 File Structure

```
elegant-makeup/
├── makeup.html           # Main website structure
├── style.css            # Custom styling with warm color palette
├── script.js            # JavaScript with bilingual translations
├── images/              # Local image assets (11 files)
│   ├── hero.png         # Hero section background
│   ├── bride.png        # Bridal showcase
│   ├── glam.png         # Editorial glam showcase
│   ├── natural.png      # Natural look showcase
│   └── 1 (1-6).png      # Service portfolio images
├── README.md            # Project documentation
├── LICENSE              # MIT License
├── .gitignore          # Git ignore rules
└── deployment-checklist.md # Pre-deployment verification
```

## 🚀 Deployment

### Quick Start
1. **Clone/Download** the repository
2. **Open** `makeup.html` in your web browser
3. **Test** language toggle and responsive features

### Hosting Options
- **GitHub Pages**: Push to repository, enable Pages in settings
- **Netlify**: Drag & drop project folder or connect GitHub
- **Vercel**: Import from GitHub for automatic deployments
- **Traditional Hosting**: Upload all files maintaining structure

### Requirements
- Modern web browser with JavaScript enabled
- No server-side dependencies (static site)
- All assets included locally

## ✅ Features Checklist

- [x] **Responsive Design** - Mobile, tablet, desktop optimized
- [x] **Bilingual Interface** - Complete EN/BG translation system
- [x] **Professional Gallery** - 11 local portfolio images
- [x] **Interactive Components** - Carousels, accordions, modals
- [x] **Accessibility** - Semantic HTML, proper contrast ratios
- [x] **Performance** - Optimized loading, local assets
- [x] **SEO Ready** - Proper meta tags and structure
- [x] **Cross-browser** - Chrome, Firefox, Safari, Edge compatible

## 🎨 Customization

### Color Scheme
Edit CSS custom properties in `style.css`:
```css
:root {
    --primary-pink: #e91e63;
    --secondary-purple: #9c27b0;
    --accent-gold: #ffc107;
    --soft-gray: #2c3e50;
    --light-bg: #fdfdfd;
}
```

### Adding Services
Update the `makeupStyles` array in `script.js`:
```javascript
const makeupStyles = [
    {
        id: 7,
        title: "New Service",
        description: "Service description...",
        image: "images/new-service.png",
        price: "$100 - $200",
        features: ["Feature 1", "Feature 2"]
    }
];
```

### Translation Keys
Add new translations in both languages:
```javascript
const translations = {
    en: { 'new-key': 'English text' },
    bg: { 'new-key': 'Bulgarian text' }
};
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Last Updated**: February 8, 2026 | **Version**: 2.0  
**Status**: ✅ Production Ready with Bilingual Support
- **Bootstrap Icons** - Professional iconography

## 📁 File Structure

```
elegant-makeup/
├── makeup.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── images/             # Local image assets
│   ├── 1 (1).png      # Bridal Makeup
│   ├── 1 (2).png      # Editorial Glam
│   ├── 1 (3).png      # Natural Look
│   ├── 1 (4).png      # Evening Glam
│   ├── 1 (5).png      # Special Effects
│   └── 1 (6).png      # Prom & Graduation
└── README.md           # Documentation
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/elegant-makeup.git
cd elegant-makeup
```

### 2. Open in Browser
Simply open `makeup.html` in your web browser:
```bash
# On Windows
start makeup.html

# On macOS
open makeup.html

# On Linux
xdg-open makeup.html
```

### 3. Live Server (Recommended)
For development, use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx live-server

# Using PHP
php -S localhost:8000
```

## 🌐 GitHub Pages Deployment

### Automatic Deployment
1. Push your code to the `main` branch
2. Go to your repository settings
3. Scroll down to "Pages" section
4. Select "Deploy from a branch"
5. Choose `main` branch and `/ (root)` folder
6. Click Save

Your site will be available at: `https://your-username.github.io/repository-name/`

### Custom Domain (Optional)
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## 📸 Screenshots

### Desktop View
![Desktop Hero Section](https://via.placeholder.com/800x400/d63384/ffffff?text=Desktop+Hero+Section)

### Mobile View
![Mobile Responsive](https://via.placeholder.com/300x600/6f42c1/ffffff?text=Mobile+View)

### Service Cards
![Service Cards](https://via.placeholder.com/800x600/fd7e14/ffffff?text=Service+Cards)

## 🎯 Key Components

### Hero Section
- Full-screen background with makeup brush imagery
- Gradient overlay for text readability
- Call-to-action button with smooth animations

### Featured Carousel
- Showcases signature makeup styles
- Auto-rotating with manual controls
- Responsive image handling

### Service Cards
- Clean, vertical card layout
- Expandable pricing and features
- Professional booking integration

### FAQ Accordion
- Answers common customer questions
- Clean, accessible interface
- Professional information presentation

## 🔧 Customization

### Colors
Update the CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #d63384;    /* Pink */
    --secondary-color: #6f42c1;  /* Purple */
    --accent-color: #fd7e14;     /* Orange */
    --dark-color: #212529;       /* Dark Gray */
    --light-color: #f8f9fa;      /* Light Gray */
}
```

### Services
Modify the `makeupStyles` array in `script.js`:
```javascript
const makeupStyles = [
    {
        id: 1,
        title: "Your Service Name",
        description: "Service description...",
        image: "images/your-image.png",
        price: "$XX - $XX",
        features: ["Feature 1", "Feature 2", "Feature 3"]
    }
    // Add more services...
];
```

### Contact Information
Update contact details in `makeup.html`:
```html
<p><i class="bi bi-telephone me-2"></i>Your Phone</p>
<p><i class="bi bi-envelope me-2"></i>your-email@domain.com</p>
<p><i class="bi bi-instagram me-2"></i>@your-instagram</p>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Chrome Mobile

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Images**: High-quality makeup photography from local portfolio
- **Icons**: Bootstrap Icons for consistent iconography
- **Fonts**: System fonts for optimal performance
- **Design**: Inspired by modern beauty industry trends

## 📞 Support

For support, email your-email@domain.com or create an issue in this repository.

---

**Made with ❤️ for the beauty industry**

*Transform your beauty business with a professional online presence.*