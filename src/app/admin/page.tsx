/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from 'next/navigation';
import { useState } from "react";

import Logo from "../../images/downloaded/The_floor_decor_crop.png"
export default function Example() {
    const { push } = useRouter();
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e: { preventDefault: () => void; }) =>{
    e.preventDefault();

    const res = await fetch(`http://localhost:3001/login`, {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          username,
          password
        }) 
      });

    const data = await res.json();
    console.log(data)

    if (res.status === 400 || !data) {
      window.alert("Invalide credentials")
    }
    else if (res.status === 404 || !data) {
        window.alert("not found")
      }
    else{
    //   dispatch({type:"USER", payload:true})
      window.alert("login Successfully")

      push(`/adminPanel/${username}`)
    }

  }
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-1 w-50 m-auto my-5">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto rounded-xl"
              src={Logo.src}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Admin Panel Login
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="username"
                    onChange={(e)=> setUsername(e.target.value)}
                    type="text"
                    value={username}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    name="password"
                    type="password"
                    value={password}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  onClick={loginUser}
                  className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 btn_color focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }