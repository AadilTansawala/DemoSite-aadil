import React from 'react';
import AboutBanner from '../image/about_banner.jpeg';

const About = ({ loggedInUser }) => {
    return (
        <div className='m-8 mt-0 bg-gradient-to-r from-green-400 to-blue-500 text-neutral-100 min-h-[80vh]'>
            {loggedInUser ? (
                <>
                    <h1 className='pt-8 text-4xl text-amber-300 text-center font-semibold'>
                        What Makes Us Unique in the IT World!
                    </h1>
                    <p className="text-xl p-8 leading-relaxed">
                        Mamo Technology distinguishes itself in the IT world through a convergence of cutting-edge technology, a commitment to innovation, and a client-centric approach. With a talented and diverse team, Mamo embraces agile development practices, ensuring flexibility and responsiveness to evolving industry trends. The company's global perspective allows it to transcend geographical boundaries, while an unwavering commitment to quality underscores every project. Mamo stands out as a beacon of innovation, consistently delivering tailored solutions that redefine industry standards and empower clients with a competitive advantage.
                    </p>
                    <div className='flex items-center justify-center'>
                        <img className='p-8 w-2/3 object-cover rounded-lg border-2 border-amber-400' src={AboutBanner} alt="Know About Us" />
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

export default About;
