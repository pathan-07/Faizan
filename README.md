# Modern Portfolio Website

A sleek, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a modern dark theme.

![Portfolio Screenshot](https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)

## 🌟 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme** - Modern dark UI with custom accent colors
- **Smooth Animations** - Engaging transitions and animations using Framer Motion
- **Section-Based Layout** - Organized content in well-defined sections
- **Interactive Elements** - Animated skill bars, project cards with hover effects
- **Accessible Navigation** - Mobile-friendly navigation with smooth scrolling
- **Live Chat** - Integrated Tidio chat bot for instant messaging
- **Contact Form** - EmailJS integration for direct message delivery

## 🛠️ Technologies

- **Frontend**
  - React 
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animations)
  - Lucide React (icons)
  - Wouter (routing)
  
- **Third-Party Services**
  - EmailJS (contact form)
  - Tidio (chat bot)

- **Development Tools**
  - Vite (build tool)
  - ESLint (code quality)

## 📋 Sections

- **Hero** - Engaging introduction with animated elements
- **About** - Short bio and introduction
- **Experience** - Professional experience with timeline layout
- **Projects** - Showcase of highlighted projects with links
- **Skills** - Visual representation of technical and soft skills including:
  - Programming Languages: Python, Java, C, JavaScript
  - Web Development: HTML/CSS, Flask
  - Data Science: Machine Learning, NLP, Data Analysis
  - Specialized: Vibe Coding
  - Soft Skills: Communication, Problem Solving, Public Speaking
- **Education** - Academic background and certifications
- **Contact** - Secure contact form and personal information

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/pathanmofaizan/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Install cross-env (needed for Windows compatibility)
   ```bash
   npm install --save-dev cross-env
   # or
   yarn add --dev cross-env
   ```

4. Set up environment variables
   - Create a `.env.local` file in the client directory
   - Add the following variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_CONTACT_EMAIL=your_email@example.com
     ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:5000](http://localhost:5000) in your browser

## 📝 Project Structure

```
portfolio-website/
├── client/                # Frontend source files
│   ├── src/               
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions, data
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Backend files (API routes)
├── shared/                # Shared utilities/types
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## 🎨 Customization

### Colors
The main color scheme is defined in `client/src/index.css`:
- **Primary**: #1A1A1A (rich black)
- **Secondary**: #2D2D2D (dark grey)
- **Accent**: #6366F1 (indigo)
- **Highlight**: #8B5CF6 (purple)
- **Text**: #FFFFFF (white)

### Content
Update your personal information in `client/src/lib/data.ts`

### Third-Party Services
- **EmailJS**: Update the service credentials in the `.env.local` file
- **Tidio**: The chat widget script is included in `index.html`

## 📱 Mobile View

The portfolio is fully responsive with a special mobile navigation menu:
- Hamburger menu for navigation on small screens
- Optimized layout for mobile viewing
- Touch-friendly interactive elements
- Repositioned chat widget for better mobile experience

## 🔒 Security Features

- Environment variables for sensitive information
- Form validation using Zod
- Protected email addresses from scrapers
- Loading states for better UX

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Pathan Mo. Faizan Khan - [linkedin.com/in/pathan-mo-faizan-khan](https://linkedin.com/in/pathan-mo-faizan-khan)

Project Link: [https://github.com/pathanmofaizan/portfolio-website](https://github.com/pathanmofaizan/portfolio-website)