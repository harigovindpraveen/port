
import React, { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed: number = 100) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayedText;
};

const About = () => {
  const typedIntro = useTypingEffect("Hello! I'm Harigovind, an aspiring computer science engineer fueled by a passion for problem-solving and a curiosity that leads me to explore diverse fields of technology.", 50);

  return (
    <section id="about" className="py-24 bg-white fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-gray-700 text-lg md:text-xl">
             <p className="font-medium text-black min-h-[110px] md:min-h-[84px]">
              {typedIntro}
              <span className="inline-block w-1 border-r-4 border-[--accent] typing-cursor" aria-hidden="true"></span>
            </p>
            <p>
              My journey into web development started back in 2015 when I decided to try editing a custom Tumblr theme — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building products and leading projects for our clients at Tech Solutions Inc.
            </p>
             <p>
              When I'm not at the computer, I'm usually exploring new hiking trails, trying out new recipes, or reading a good book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;