// src/ContactForm.js

import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace this with your form submission logic
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md text-black mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium">
          Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          id="name"
          className="border rounded text-white px-4 py-2 w-full"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium">
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          id="email"
          className="border rounded text-white px-4 py-2 w-full"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium">
          Message
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          id="message"
          className="border rounded text-white px-4 py-2 w-full"
          rows="4"
        ></textarea>
        {errors.message && (
          <p className="text-red-600">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
