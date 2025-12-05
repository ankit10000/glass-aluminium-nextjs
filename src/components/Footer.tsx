"use client";
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay Updated With Our Latest Projects</h2>
            <p className="mt-4 text-2xl leading-8 text-white">
              Subscribe to our newsletter for design inspiration, special offers, and updates on our latest furniture collections and interior projects.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-xl border-0 bg-white/10 backdrop-blur-sm px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-xl sm:leading-6 placeholder-gray-300"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md btn_color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="mt-4 font-semibold text-white">Project Showcase</div>
              <div className="mt-2 leading-7 text-white">
                Get inspired by our completed projects and see how we transform spaces with custom furniture and interiors.
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="mt-4 font-semibold text-white">Special Offers</div>
              <div className="mt-2 leading-7 text-white">
                Receive exclusive discounts and early access to our new collections. Unsubscribe anytime.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <ScrollToTop smooth  color='black' className='px-2'/>
    </div>
  )
}