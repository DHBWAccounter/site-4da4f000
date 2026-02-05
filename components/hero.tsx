"use client";

export function Hero() {
  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Swiss mountains at sunset"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-normal tracking-wide uppercase leading-relaxed drop-shadow-lg"
              style={{ fontFamily: "var(--font-proxima)" }}>
            A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
          </h1>
        </div>
      </div>
    </div>
  );
}