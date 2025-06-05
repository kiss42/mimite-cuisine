import React from 'react';
import profilePic from '../assets/profilepic.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#00209F] to-[#D21034] text-white py-24 px-6"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed mb-4 text-white/90">
            MimiteCuisine began with one woman, one kitchen, and one dream — to share the flavors of Haiti with love and authenticity. What started as home-cooked meals for family and friends quickly turned into a passion project fueled by dedication and heritage.
          </p>
          <p className="text-lg leading-relaxed text-white/80">
              Every dish is handcrafted with heart, history, and homemade spice blends passed down through generations. Mimite pours her soul into every plate, keeping tradition alive with every bite.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-xl">
          <img
            src={profilePic}
            alt="Founder of MimiteCuisine"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
