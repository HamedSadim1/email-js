import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-white mb-4 animate-slide-up">
        Neem contact met ons op
      </h2>
      <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up animation-delay-200">
        Heb je vragen of wil je meer informatie? Stuur ons een bericht en we
        nemen zo snel mogelijk contact met je op.
      </p>
    </section>
  );
};

export default Hero;
