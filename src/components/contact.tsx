"use client";
import React, { useState } from "react";

export function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <div className="bg-base-200 text-base-content p-20 min-h-screen">
      <div className="container mx-auto max-w-screen-md pt-16">
        <form onSubmit={handleSubmit} className="bg-base-100 p-20 rounded-lg shadow-lg space-y-6">
          <h1 className="text-5xl mb-8 text-center font-extrabold">Contact</h1>
          <h2 className="text-lg mb-8 text-center">Feel free to contact me by submitting the form below.</h2>
          <div className="mb-8">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-base-content placeholder:text-base-content placeholder:text-opacity-50"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-base-content placeholder:text-base-content placeholder:text-opacity-50"
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-8">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-base-content placeholder:text-base-content placeholder:text-opacity-50"
              rows={6}
              placeholder="Message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-base-content text-base-200 font-bold py-4 px-6 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

