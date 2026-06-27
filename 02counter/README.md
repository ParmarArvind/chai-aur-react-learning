# 📚 React Hooks - Day 2 Notes

## 🚀 What are Hooks?

Hooks are special functions introduced in **React 16.8** that allow us to use React features like **state** and **lifecycle methods** inside functional components.

Before Hooks:
- Functional components could only display UI.
- State management was only possible in class components.

After Hooks:
- Functional components can also manage state and side effects.
- Class components are rarely needed.

---

# 🎯 What is useState?

`useState` is the most commonly used Hook.

It allows a functional component to store and update data.

### Syntax

```javascript
const [state, setState] = useState(initialValue);