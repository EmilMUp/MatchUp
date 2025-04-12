import React from 'react';
import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registreringsdata:", formData);
  
    // Rensa formuläret
    setFormData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  
    // Visa bekräftelse
    setSubmitted(true);
  
    // Dölj efter några sekunder (valfritt)
    setTimeout(() => {
      setSubmitted(false);
    }, 4000); // 4 sekunder
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md mt-4 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Registrera dig</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Namn</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">E-post</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Lösenord</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Kort beskrivning</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows="6"
            placeholder="Berätta lite om dig själv..."
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-800"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Registrera
        </button>
      </form>

      {submitted && (
        <div className="mt-6 text-green-600 font-semibold bg-green-100 border border-green-300 p-4 rounded-xl mb-6">
            Tack för din registrering! 🎉
        </div>
)}
    </div>
  );
}