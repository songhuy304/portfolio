import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      className="Contact relative section bg-slate-100 h-screen"
    >
        <div className="profile pb-16 flex md:gap-[5rem] flex-col md:my-16 md:mt-[14rem] h-full px-4 justify-center max-w-screen-lg mx-auto md:flex-row">

      
      <div classname="flex min-h-screen items-center justify-start ">
        <div classname="mx-auto w-full max-w-lg px-4">
          <h1 classname="text-4xl font-medium">Contact us</h1>
          <p classname="mt-3">Email us at help@domain.com or message us here:</p>

          <form action="https://api.web3forms.com/submit" classname="mt-10">
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <div classname="grid gap-6 sm:grid-cols-2">
              <div classname="relative z-0">
                <input
                  type="text"
                  name="name"
                  classname="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label classname="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your name
                </label>
              </div>
              <div classname="relative z-0">
                <input
                  type="text"
                  name="email"
                  classname="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label classname="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your email
                </label>
              </div>
              <div classname="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  classname="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label classname="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your message
                </label>
              </div>
            </div>
            <button
              type="submit"
              classname="mt-5 rounded-md bg-black px-10 py-2 text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact