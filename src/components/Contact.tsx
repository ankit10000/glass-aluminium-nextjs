/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Get In Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a project in mind? We d love to hear from you. Fill out the form below or reach out to us directly.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center">
                  <FiMail className="w-5 h-5 mr-3 text-purple-600" />
                  <span>jangidpooranmal01@gmail.com</span>
                </p>
                <p className="flex items-center">
                  <FiPhone className="w-5 h-5 mr-3 text-purple-600" />
                  <span>+91-9828101833</span>
                </p>
                <p className="flex items-center">
                  <FiMapPin className="w-5 h-5 mr-3 text-purple-600" />
                  <span>123 Modern Lane, City, State 12345</span>
                </p>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src="/images/map.webp" alt="Location map" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
