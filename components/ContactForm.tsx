"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-10">
      <label className="text-black-500 font-semibold">Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Eg: John"
        className="input p-3 rounded-lg text-black"
      />
      <label className="text-black-500 font-semibold">Email</label>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Eg: john@example.com"
        className="p-3 rounded text-black"
      />
      <label className="text-black-500 font-semibold">Message</label>
      <textarea
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Eg:Let me know how can I help you!"
        className="p-3 rounded text-black"
      />
      <button
        type="submit"
        className="btn p-3 bg-blue-500 rounded-xl hover:bg-blue-600"
      >
        Submit
      </button>
      <p className="text-white">{status}</p>
    </form>
  );
}
