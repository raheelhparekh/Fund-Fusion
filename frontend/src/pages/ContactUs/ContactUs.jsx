import React, { useState } from "react";

function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <div className="h-full bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-red-600 text-white h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-red-700 opacity-60"></div>
        <div className="relative z-10 text-center text-white pt-24">
          <h1 className="text-3xl sm:text-4xl font-bold">Get in Touch with Us</h1>
          <p className="mt-4 text-lg sm:text-xl">We’re eager to hear from prospective students, parents, and alumni.</p>
          <a href="#contact-form" className="mt-6 inline-block py-2 px-6 bg-blue-700 text-white rounded-full hover:bg-white hover:text-blue-700 transition-all">Contact Us</a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                id="subject"
                type="text"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-700 text-white rounded-md hover:bg-red-800 transition-all"
            >
              Submit
            </button>
          </form>
          {formSubmitted && (
            <p className="mt-4 text-center text-green-500">Thank you for reaching out! We'll get back to you soon.</p>
          )}
          {formError && (
            <p className="mt-4 text-center text-red-500">There was an error submitting your form. Please try again.</p>
          )}
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Our Location</h2>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.792765995658!2d72.89735127502728!3d19.072846982131118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0xb2fd3bcfeac0052a!2sK.%20J.%20Somaiya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1729907307577!5m2!1sen!2sin"
              width="100%" height="300" loading="lazy" title="KJSCE Location" style={{ border: "0", borderRadius: "10px" }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold text-gray-800">Contact Details</h3>
            <p className="mt-2 text-gray-600">
              <span className="font-medium">Address:</span> K. J. Somaiya College of Engineering, Vidya Nagar, Mumbai, India
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-medium">Phone:</span> (022) 6728 8000
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-medium">Email:</span> info@somaiya.edu
            </p>
          </div>
          <div className="flex space-x-6 justify-center sm:justify-start">
            <a href="https://facebook.com" className="hover:text-red-700 transform transition-transform duration-300 scale-110">Facebook</a>
            <a href="https://twitter.com" className="hover:text-red-700 transform transition-transform duration-300 scale-110">Twitter</a>
            <a href="https://linkedin.com" className="hover:text-red-700 transform transition-transform duration-300 scale-110">LinkedIn</a>
            <a href="https://instagram.com" className="hover:text-red-700 transform transition-transform duration-300 scale-110">Instagram</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;