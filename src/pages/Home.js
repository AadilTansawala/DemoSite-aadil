import React from 'react';
import BannerImg from '../image/welcome.avif';

const Home = ({ loggedInUser }) => {
  return (
    <div className='m-8 mt-0 max-md:m-0 bg-gradient-to-r from-amber-500 to-red-500 text-neutral-100 min-h-[80vh]'>
      {loggedInUser ? (
        <>
          <h1 className='pt-8 text-4xl text-amber-300 text-center font-semibold'>
            Welcome, {loggedInUser.firstName}! 🚀
          </h1>
          <p className="text-xl p-8 leading-relaxed">
            At Mamo, we are dedicated to pushing the boundaries of technology and delivering cutting-edge solutions. Whether you're a tech enthusiast, a developer, or a business looking to embrace the latest advancements, you've found the right place. Explore the possibilities, collaborate with our talented team, and embark on a journey of technological excellence with Mamo Technology. Let's shape the future together!
          </p>
          <div className='flex items-center justify-center'>
            <img className='p-8 w-2/3 max-lg:w-full object-cover' src={BannerImg} alt="Hero" />
          </div>
        </>
      ) : (
        <h1 className='pt-8 text-4xl text-red-500 text-center font-bold'>
          Please login / sign up first
        </h1>
      )}
    </div>
  );
}

export default Home;
