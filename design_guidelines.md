# REWA E-Commerce Platform - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing from modern fintech platforms (Stripe, Revolut), booking platforms (Booking.com, Airbnb), and enterprise dashboards (Linear, Notion) to create a professional, trustworthy ecosystem platform.

## Brand Identity & Design System

### Colors
- **Dark Green**: #064F33 (Headers, key typography, brand elements)
- **Teal**: #0AB39C (CTAs, highlights, interactive elements)
- **White**: #FFFFFF (Backgrounds, text on dark)

### Typography
- **Font Family**: Inter or Poppins via Google Fonts
- **Headings**: Bold weight (700)
- **Body Text**: Medium (500) and Regular (400)
- **Hierarchy**: Large hero headlines (4xl-6xl), section headers (3xl-4xl), subsections (xl-2xl), body (base-lg)

### Layout System
- **Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Container**: max-w-7xl for main content, max-w-6xl for text-heavy sections
- **Responsive Breakpoints**: Mobile-first (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

## Visual Language

### UI Style
- **Corners**: Rounded (rounded-lg to rounded-xl for cards, rounded-md for inputs)
- **Shadows**: Soft, layered shadows (shadow-lg for cards, shadow-sm for hover states)
- **Glassmorphism**: Semi-transparent backgrounds with backdrop-blur for overlays and hero sections
- **Circular Motifs**: Incorporate circular design elements inspired by REWA's loop-R logo in icons and decorative elements
- **Transitions**: Smooth 200-300ms transitions on interactive elements

## Component Library

### Navigation
- **Desktop Header**: Horizontal nav with REWA logo left, main links center, "Get Started" CTA right in teal
- **Mobile**: Hamburger menu with slide-in panel, dark green background
- **Footer**: Multi-column layout with Quick Links, Services, Legal, Newsletter signup, Social icons

### Hero Sections
- **Homepage Hero**: Full-width with glassmorphism overlay, large REWA logo, headline "Everything. One platform.", subtext, dual CTAs ("Get Started" teal, "Explore Services" outlined)
- **Device Mockups**: Include 2-3 smartphone/tablet mockups showing REWA app screens (flights, hotels, marketplace) positioned at 15-degree angles
- **Hero Image**: Abstract tech pattern or gradient background with teal-to-dark-green blend

### Service Tiles/Cards
- **Grid Layout**: 3 columns desktop (lg:grid-cols-3), 2 tablet (md:grid-cols-2), 1 mobile
- **Card Design**: White background, rounded-xl, shadow-lg, hover:shadow-xl with scale transform
- **Content**: Icon top, service name (xl font, dark green), short description (sm font), "Learn More" link in teal

### Booking Flows
- **Search Bars**: White cards with shadow, inputs side-by-side (desktop) / stacked (mobile)
- **Results**: List/card hybrid with images left, details center, price/CTA right
- **Mockup Integration**: Every booking page includes 1-2 device mockups showing the mobile app flow

### Dashboard Previews
- **SME Dashboard**: Show analytics charts (line graphs in teal), invoicing table, payment tracking widgets
- **Layout**: Sidebar navigation (dark green), main content area (light gray background)
- **Widgets**: Card-based with consistent spacing, rounded corners, data visualizations using teal accent

### AI Chatbot Interface
- **Message Bubbles**: User messages (teal, right-aligned), AI responses (white with shadow, left-aligned)
- **Quick Actions**: Pill-shaped buttons below input for common tasks
- **Header**: REWA logo, "AI Assistant" title, minimize button
- **Input**: Fixed bottom bar with text input, voice icon, send button (teal)

### Marketplace Components
- **Business Cards**: Grid layout with business logo, name, category tags, rating stars (teal), "View Profile" CTA
- **Filters**: Sidebar (desktop) / collapsible (mobile) with checkboxes and sliders
- **Product Listings**: Image thumbnail, title, price (large, dark green), seller info, "Add to Cart" button

## Page-Specific Guidelines

### Homepage
- 7-8 sections: Hero, Quick Service Tiles (8 tiles), Features (3-column), Partner Logos (6-8 logos), Testimonials carousel (3 visible), Statistics, CTA section
- Vertical spacing: py-16 desktop, py-12 mobile between sections

### Service Subpages (Flights, Hotels, Rides, Meals)
- Hero: 60vh with service-specific background image, search bar overlay
- Content: 2-column layout (features left, device mockup right)
- Booking Flow: Step-by-step visual with numbered circles connected by teal lines

### Marketplace
- Header: Search bar prominent, category filters as tabs
- Grid: 4 columns desktop, 2 tablet, 1 mobile for business listings
- Sidebar: Persistent filters on desktop, toggle drawer on mobile

### AI & Technology Page
- Split sections: Text content 50%, interactive demo/mockup 50%
- Feature List: Checkmarks in teal, descriptions in readable chunks
- Demo: Embedded chat interface mockup with sample conversation

### Pricing
- 3-column comparison table (Free, Premium, Enterprise)
- Highlight "Popular" plan with teal border and badge
- Toggle: Monthly/Annual with slider

## Images

### Required Images
1. **Homepage Hero**: Abstract tech/network visualization or Nigerian cityscape with overlay (1920x1080)
2. **Device Mockups**: Smartphone frames (iPhone/Android style) displaying REWA app screens - needed for Homepage, Services, Dashboard, AI pages
3. **Partner Logos**: Transparent PNGs of banks, fintech, airlines, government bodies (8-12 logos)
4. **Service Icons**: Custom circular icons for each service (flights, hotels, rides, meals, marketplace, SME, government, AI)
5. **Booking Page Headers**: Service-specific images (airplane for flights, hotel room, car interior, restaurant food)
6. **Marketplace**: Sample product images and business profile photos
7. **Team Photos**: Optional for About page
8. **Map**: Abia State location for Contact page

### Image Treatment
- **Overlays**: Dark gradient overlays (60% opacity) on hero images for text readability
- **Mockup Angles**: Device mockups at 10-15 degree rotation for visual interest
- **Consistency**: All service icons use same style (line art or filled, circular containers)

## Responsive Behavior
- **Mobile (<768px)**: Single column, stacked navigation, full-width cards, collapsible sections
- **Tablet (768-1024px)**: 2-column grids, horizontal navigation, side-by-side content where appropriate
- **Desktop (>1024px)**: Multi-column layouts, persistent sidebars, expansive hero sections

## Interactions
- **Hover States**: Subtle scale (1.02-1.05), shadow increase, teal accent appearance
- **Loading States**: Skeleton screens with shimmer effect
- **Transitions**: Consistent 200ms ease-in-out for all interactive elements
- **Scroll Animations**: Minimal - fade-in on scroll for section headers only

## Accessibility
- Maintain WCAG 2.1 AA contrast ratios (4.5:1 for text)
- Focus indicators: 2px teal outline on interactive elements
- Semantic HTML throughout
- ARIA labels for icons and interactive elements