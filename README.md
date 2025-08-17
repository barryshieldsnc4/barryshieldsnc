# Barry Shields - Visual Resume Website

A modern, interactive visual infographic website showcasing Barry Shields' professional resume in an engaging and visually appealing format.

## Features

### 🎨 Visual Design
- Modern gradient design with professional color scheme
- Interactive timeline for professional experience
- Achievement cards with counter animations
- Responsive design for all devices
- Smooth scrolling and hover effects

### 📱 Responsive Layout
- Mobile-first design approach
- Optimized for desktop, tablet, and mobile devices
- Flexible grid system that adapts to screen sizes

### ⚡ Interactive Elements
- Animated counter for achievement numbers
- Smooth scroll animations
- Parallax effects on scroll
- Hover transformations and effects
- Clickable contact information

### 🔧 Technical Features
- Pure HTML, CSS, and JavaScript (no frameworks required)
- Font Awesome icons for visual enhancement
- Google Fonts integration (Inter font family)
- Optimized for performance and accessibility

## File Structure

```
barry-shields-resume-website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
└── README.md           # This file
```

## How to View

### Option 1: Open Locally
1. Double-click on `index.html` to open in your default browser
2. Or right-click and select "Open with" your preferred browser

### Option 2: Live Server (Recommended)
If you have VS Code with Live Server extension:
1. Right-click on `index.html`
2. Select "Open with Live Server"
3. Website will open with auto-reload functionality

### Option 3: Python Simple Server
```bash
# Navigate to the project directory
cd barry-shields-resume-website

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then open http://localhost:8000 in your browser
```

## Customization

### Colors
The main color scheme uses a purple gradient. To change colors, modify these CSS variables:
- Primary gradient: `#667eea` to `#764ba2`
- Text color: `#2c3e50`
- Accent color: `#667eea`

### Content Updates
To update content, edit the `index.html` file:
- Personal information in the header section
- Professional summary
- Achievement numbers and labels
- Experience details and metrics
- Education information

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any interactive features in `script.js`

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images (using FontAwesome icons instead of images)
- Minimal external dependencies
- Efficient CSS animations
- Throttled scroll events for smooth performance

## Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Get instant deployment with custom domain options

### Other Hosting Services
Compatible with any web hosting service that supports static files:
- Vercel
- AWS S3
- Firebase Hosting
- Traditional web hosts

## Technical Notes

### CSS Features Used
- CSS Grid and Flexbox for layout
- CSS Custom Properties (variables)
- Transform and transition animations
- Media queries for responsive design
- Gradients and box shadows

### JavaScript Features
- Intersection Observer API for scroll animations
- Event listeners for interactions
- Counter animations with setInterval
- Smooth scrolling implementation

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for icons (via FontAwesome)
- Color contrast compliance
- Keyboard navigation support

## License

This project is open source and available under the MIT License.

## Contact

For questions about this resume website:
- Email: barryshieldsnc@gmail.com
- LinkedIn: linkedin.com/in/barryshields/
- Phone: 704-724-2058
