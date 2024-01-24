import React from 'react';
import BannerImg from '../image/welcome.avif';

const Home = () => {
  return (
    <div className='m-8 mt-0 bg-gradient-to-r from-amber-500 to-red-500 text-neutral-100'>
      <div className="h-screen pt-8 flex justify-between">
        <div className='w-2/5 p-8'>
          <h1 className='text-3xl text-amber-400 font-semibold mb-6'>
            Welcome to Mamo Technology! 🚀
          </h1>
          <p className='text-slate-200 leading-relaxed'>
            At Mamo, we are dedicated to pushing the boundaries of technology and delivering cutting-edge solutions. Whether you're a tech enthusiast, a developer, or a business looking to embrace the latest advancements, you've found the right place. Explore the possibilities, collaborate with our talented team, and embark on a journey of technological excellence with Mamo Technology. Let's shape the future together!
          </p>
          <div className="flex justify-start pt-8">
            <button className="bg-amber-500 text-neutral-100 p-3 rounded-md mr-6 hover:bg-amber-600 focus:outline-none focus:shadow-outline">
              Know More
            </button>
            <button className="bg-amber-500 text-neutral-100 p-3 rounded-md hover:bg-amber-600 focus:outline-none focus:shadow-outline">
              Get In Touch
            </button>
          </div>
        </div>
        <div className='w-2/5 p-8'>
          <img src={BannerImg} alt="Hero" className='w-full h-2/3 border-2 border-neutral-300 rounded-xl' />
        </div>
      </div>
    </div>
  );
}

export default Home;
