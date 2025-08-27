# The Moorings Cottage - React Website

A modern React-based website for The Moorings Cottage, a beautiful holiday rental property in Y Felinheli, North Wales.

## 🚀 Features

- **Modern React Architecture**: Built with Vite and React for optimal performance
- **Responsive Design**: Fully responsive design that works on all devices
- **Interactive Gallery**: Image gallery with modal view functionality
- **Smooth Navigation**: React Router for seamless page transitions
- **Image Slider**: Swiper.js integration for the cottage image carousel
- **Booking Integration**: Embedded booking calendar from Bookalet
- **Google Analytics**: Comprehensive tracking with Universal Analytics
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Modern CSS with custom properties
- **Image Slider**: Swiper.js
- **Analytics**: Google Analytics (Universal Analytics)
- **Icons**: Custom SVG icons
- **Fonts**: Inter and Playfair Display (Google Fonts)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with mobile menu
│   ├── Footer.jsx          # Footer with contact info
│   ├── Header.css          # Header-specific styles
│   └── Footer.css          # Footer-specific styles
├── pages/
│   ├── Home.jsx            # Homepage with hero, slider, and booking
│   ├── Cottage.jsx         # Cottage details and features
│   ├── Gallery.jsx         # Image gallery with modal
│   ├── Booking.jsx         # Booking calendar and info
│   ├── Review.jsx          # Customer testimonials
│   ├── Area.jsx            # Local area information
│   ├── Terms.jsx           # Terms and conditions
│   ├── Contact.jsx         # Contact info and directions
│   └── *.css               # Page-specific styles
├── hooks/
│   └── useAnalytics.js     # Analytics hooks for React
├── services/
│   └── analytics.js        # Google Analytics service
├── config/
│   └── analytics.js        # Analytics configuration
├── App.jsx                 # Main app component with routing
├── App.css                 # Global styles and design system
└── main.jsx                # App entry point

public/
├── fonts/                  # Custom fonts (if needed)
├── img/                    # All images and icons
└── index.html              # HTML template
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd the-moorings-cottage
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

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages

- **Home**: Hero section, cottage slider, local area info, video tours, booking widget, and reviews
- **Cottage**: Detailed information about the property, amenities, and floor plan
- **Gallery**: Interactive image gallery with modal view
- **Booking**: Booking calendar and important information
- **Reviews**: Customer testimonials and feedback
- **Area**: Information about Y Felinheli and local attractions
- **Terms**: Terms and conditions for bookings
- **Contact**: Contact information and directions

## 🎨 Design Features

- **Responsive Layout**: Mobile-first design approach
- **Smooth Animations**: CSS transitions and React-based animations
- **Interactive Elements**: Hover effects, modal windows, and smooth scrolling
- **Typography**: Modern fonts (Inter and Playfair Display) for brand consistency
- **Color Scheme**: Clean, modern design with focus on readability
- **Design System**: CSS custom properties for consistent styling

## 📊 Analytics

The website includes comprehensive Google Analytics tracking:

- **Page Views**: Automatic tracking of all routes
- **User Engagement**: Scroll depth and time on page
- **Interactions**: Button clicks, form submissions, video plays
- **Booking Funnel**: Track booking-related actions
- **Contact Methods**: Phone and email click tracking
- **Social Media**: Facebook and Instagram link tracking

### Analytics Configuration

Analytics is configured in `src/config/analytics.js`:
- Universal Analytics ID: `UA-175035074-1`
- Ready for GA4 migration
- Custom event tracking
- Enhanced ecommerce tracking

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add the navigation link in `src/components/Header.jsx`

### Styling

- Global styles are in `src/App.css`
- Component-specific styles are in separate CSS files
- Uses CSS custom properties for consistent theming

### Images

- All images are stored in `public/img/`
- Use `/img/filename.ext` to reference images in components

## 📊 Performance

- **Lazy Loading**: Images and components load as needed
- **Optimized Assets**: Images are optimized for web
- **Fast Build**: Vite provides fast development and build times
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Analytics Optimized**: Minimal impact on site performance

## 🌐 Deployment

The site can be deployed to any static hosting service:

- **Netlify**: Connect your repository and build with `npm run build`
- **Vercel**: Automatic deployment from Git repository
- **GitHub Pages**: Deploy from the `dist/` folder
- **Traditional Hosting**: Upload the `dist/` folder contents

## 📞 Support

For questions or support, contact:
- Phone: +44 (0)7742042031 or +44 (0)7796 601576
- Email: themooringscottage@gmail.com

## 📄 License

This project is for The Moorings Cottage. All rights reserved.
