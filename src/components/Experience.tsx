/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";

const stats = [
  { id: 1, name: 'Customers Satisfied', value: '1000+' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'Projects Completed', value: '50+' },
]
export default function LogoClouds() {
    return (
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-black sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div id="category"></div>
    </div>
    )
  }
  