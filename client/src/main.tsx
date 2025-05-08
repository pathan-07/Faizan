import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { init as initEmailJS } from '@emailjs/browser';

// Initialize EmailJS with your public key
initEmailJS("public_key"); // Replace with your actual EmailJS public key

createRoot(document.getElementById("root")!).render(<App />);
