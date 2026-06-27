
# ⚡ Day 1 - React with Vite

## 🎯 Objective

Learn how to create a React project using Vite and understand the project structure.

---

# What is Vite?

Vite is a modern frontend build tool that provides a faster development experience than Create React App.

It offers:

- Fast startup
- Instant Hot Module Replacement (HMR)
- Optimized Production Build
- Lightweight Configuration

---

# Why Vite?

Compared to Create React App:

- Faster project creation
- Faster development server
- Better performance
- Smaller bundle size
- Modern tooling

---

# Creating a React Project

```bash
npm create vite@latest
```

Choose:

```
Framework → React
Variant → JavaScript
ESLint → Yes
```

---

# Install Dependencies

```bash
npm install
```

---

# Run Development Server

```bash
npm run dev
```

Output

```
http://localhost:5173
```

---













# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
