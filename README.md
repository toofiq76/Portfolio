# Portfolio - React Version

A modern, responsive portfolio website built with React and Vite. Originally built with HTML/CSS, now converted to a React application.

## Features

- **Modern UI**: Dark theme with gradient accents
- **Responsive Design**: Mobile-friendly layout
- **Component-Based**: Modular React components
- **Project Showcase**: Featured projects with tech stacks
- **Skills Section**: Organized by category
- **Social Links**: Quick access to contact and social profiles

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Skills.jsx
│   ├── SkillCategory.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Styling with CSS variables and grid/flexbox
- **Font Awesome**: Icons

## Customization

### Update Personal Information
- Edit the `Navbar`, `Hero`, and `Footer` components with your information
- Update project details in `Projects.jsx`
- Modify skill categories in `Skills.jsx`

### Change Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
    --bg-dark: #0f172a;
    --accent: #2dd4bf;
    /* ... other variables */
}
```

## Browser Support

Works on all modern browsers that support ES6 and CSS Grid.

## License

© 2026 Taoufiq Khanfri
