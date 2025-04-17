// src/components/Contact.jsx
import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("reservations").insert([form]);
    if (!error) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("예약 중 오류 발생!");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-white">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-teal-600 mb-10">
        문의 및 예약
      </h2>
      {success ? (
        <p className="text-green-600 text-center text-xl">
          예약이 완료되었습니다! 감사합니다.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={form.name}
            onChange={handleChange}
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={form.email}
            onChange={handleChange}
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <textarea
            name="message"
            placeholder="문의 내용"
            value={form.message}
            onChange={handleChange}
            className="p-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 rounded-full text-lg font-bold hover:opacity-90 transition"
          >
            보내기
          </button>
        </form>
      )}
    </section>
  );
}