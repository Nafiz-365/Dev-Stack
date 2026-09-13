# 🚀 Dev Stack - Build Your Ideal Development Stack

A modern, responsive web application for exploring and curating your ideal technology stack. Browse through curated frontend, backend, database, and DevOps technologies, compare them side by side, and build the perfect stack for your next project.

## 🛠 Technologies Used

- **React 19** - Component-based UI with the latest `use()` hook
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first CSS framework
- **DaisyUI v5** - Beautiful UI component library
- **React Toastify** - Toast notifications for user feedback
- **React Icons** - Icon library for UI elements

## ✨ Key Features

1. **Interactive Technology Explorer** - Browse 14+ curated technologies with detailed cards showing ratings, difficulty levels, and category badges. Add technologies to your personal stack with a single click.

2. **Smart Stack Management** - A dynamic sidebar panel that tracks your selected technologies in real-time. Includes duplicate prevention with warning alerts, individual item removal, and a bulk "Remove All" option.

3. **Fully Responsive Design** - Seamlessly adapts across mobile, tablet, and desktop with a collapsible hamburger menu, responsive grid layouts, and a beautiful gradient brand theme (orange to pink to violet).

## 📸 Live Demo

[Visit Live Site](#)

---

## ❓ React Fundamentals Q&A

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that lets us write HTML-like code inside JavaScript files. It makes React components easier to read and write because we can see the UI structure directly in our code instead of using `createElement()` calls. React converts JSX into regular JavaScript behind the scenes.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component - they are read-only and the child cannot change them. State is data that belongs to a component itself and can be changed using `useState`. When state changes, the component re-renders automatically.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` lets us add state variables to functional components. It returns an array with the current value and a setter function. I used it in `Technologies.tsx` for `selectedTechnologies` to track which techs the user added, in `NavBar.tsx` for `isMenuOpen` to toggle the mobile menu, and in `App.tsx` for `technologiesPromise` to store the fetch promise.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after a component renders, like fetching data, setting up subscriptions, or updating the DOM. However, in this project I used React 19's newer `use()` hook with `Suspense` instead of `useEffect` for data loading. The `use()` hook resolves the promise directly and `Suspense` shows a loading state while waiting.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the `key` prop to identify which items in a list have changed, been added, or removed. Without unique keys, React cannot efficiently update the DOM and might re-render everything unnecessarily. I used `tech.id` as the key since each technology has a unique identifier.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition. I used it in `StackPanel.tsx` where I check `selectedTechnologies.length === 0` - if the stack is empty it shows "Your stack is empty." message, otherwise it shows the list of selected technologies with remove buttons.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to child: We pass data through props. For example, `Technologies` passes `selectedTechnologies` array to `StackPanel` as a prop. Child to parent: We pass a callback function as a prop. For example, `Technologies` passes `handleAddToStack` function to `TechCard`, and when the user clicks "Add to Stack", the child calls that function which updates the parent's state.

---

© 2026 Dev Stack. All rights reserved.
