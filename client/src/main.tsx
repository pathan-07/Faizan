import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { init as initEmailJS } from '@emailjs/browser';

// Initialize EmailJS with public key from environment variable
initEmailJS(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById("root")!).render(<App />);
