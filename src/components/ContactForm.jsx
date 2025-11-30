import { form } from 'framer-motion/client';
import { useState } from 'react';
import './ContactForm.css'


export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Submitted sucessfully" : "Something Error");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='Enter your name' required />
      <input type="email" placeholder='Enter your email' required />
       <textarea name="message" required placeholder='Type your message...'></textarea>
       <button type="submit">Submit</button>
      <p>{result}</p>
    </form>
  );
}