import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  useEffect(() => {
    // اختيار عنصر HTML الذي سيتم تطبيق تأثير الكتابة عليه
    const options = {
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };

    const typed = new Typed(".text", options);

    // تنظيف التأثير عند فك تركيب المكون
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className="text"></h1>
    </div>
  );
};

export default TypingEffect;
