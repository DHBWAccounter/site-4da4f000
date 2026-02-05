"use client";

import Link from "next/link";

export function FeatureCards() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Card */}
          <div className="text-center">
            <div className="mb-6 overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
                alt="Bitcoin community event"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "3/2" }}
              />
            </div>
            <h3 className="text-[20px] text-primary uppercase tracking-[0.1em] mb-3"
                style={{ fontFamily: "var(--font-proxima)" }}>
              <Link href="/about-1" className="hover:text-primary-hover transition-colors">
                About
              </Link>
            </h3>
            <p className="text-[17px] text-[#5a5a5a] mb-3"
               style={{ fontFamily: "var(--font-garamond)" }}>
              Find out about our organization and mission.
            </p>
            <Link 
              href="/about-1" 
              className="text-[15px] text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
              style={{ fontFamily: "var(--font-garamond)" }}
            >
              Learn More <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Join Us Card */}
          <div className="text-center">
            <div className="mb-6 overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
                alt="Bitcoin Association gathering"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "3/2" }}
              />
            </div>
            <h3 className="text-[20px] text-primary uppercase tracking-[0.1em] mb-3"
                style={{ fontFamily: "var(--font-proxima)" }}>
              <Link href="/meetups-events" className="hover:text-primary-hover transition-colors">
                Join US
              </Link>
            </h3>
            <p className="text-[17px] text-[#5a5a5a] mb-3"
               style={{ fontFamily: "var(--font-garamond)" }}>
              You can become a contributor to our cause, or participate yourself.
            </p>
            <Link 
              href="/meetups-events" 
              className="text-[15px] text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
              style={{ fontFamily: "var(--font-garamond)" }}
            >
              Find Out How <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}