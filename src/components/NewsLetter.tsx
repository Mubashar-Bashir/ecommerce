import React from 'react';

const NewsLetter = () => {
  return (
    <>
      <div className='center grid mt-20 relative'>
        <h1 className='6xl text-xl font-bold center'>Subscribe Our Newsletter</h1>
        <h3 className='center'>Get the latest information and promo offers directly</h3>
        <div className="max-w-screen-xl mx-auto lg:flex lg:items-center p-10 ml-10 relative">
          <div className="max-w-md mt-3 lg:mt-0 lg:ml-8 relative">
            <form aria-labelledby="newsletter-headline">
              <div className="">
                <div className="sm:flex items-center">
                  <input
                    name="EMAIL"
                    type="email"
                    required={true}
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="w-full px-5 py-3 text-base leading-6 transition duration-150 ease-in-out border-2 rounded-md appearance-none focus:outline-none sm:max-w-xs border-gray-200 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white"
                  />
                  <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="block px-5 py-3 text-white transition duration-100 ease-in-out bg-slate-900 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Notify me
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p className="mt-3 text-sm leading-5 text-gray-500">
              I will never spam or share your email under any circumstance.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-0">
            <div className="text-gray-500 opacity-10 text-8xl font-bold relative z-0">Newsletter</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
