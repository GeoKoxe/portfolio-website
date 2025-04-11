import React from 'react';

export default function DeveloperBio() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <p className="text-lg font-light text-gray-100 leading-relaxed">
        I'm a front-end developer who crafts 
        <span className="text-cyan-400 font-medium"> elegant, responsive interfaces </span> 
        where clean code meets beautiful design. Specializing in 
        <span className="text-blue-400 font-medium"> React </span> 
        and 
        <span className="text-sky-400 font-medium"> Tailwind CSS</span>, 
        I transform complex problems into intuitive user experiences that simply work. 
        When I'm not perfecting pixel-perfect layouts, you'll find me exploring emerging web technologies with a fresh cup of 
        <span className="text-amber-400 font-medium"> coffee </span> 
        in hand. My passion lies in bringing ambitious ideas to life through 
        <span className="text-emerald-400 font-medium"> thoughtful, accessible interfaces </span> 
        that users love to interact with.
      </p>
    </div>
    </div>
  );
}