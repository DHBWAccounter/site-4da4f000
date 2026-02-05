"use client";

export function MissionSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[32px] text-[#3a3a3a] mb-8"
            style={{ fontFamily: "var(--font-garamond)" }}>
          Our Mission
        </h2>
        
        <div className="text-center space-y-6">
          <p className="text-[17px] text-[#5a5a5a] leading-[1.8]"
             style={{ fontFamily: "var(--font-garamond)" }}>
            We form an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.
          </p>
          
          <p className="text-[17px] text-[#5a5a5a] leading-[1.8]"
             style={{ fontFamily: "var(--font-garamond)" }}>
            Bitcoin has the potential not only to revolutionize online payments, but also to give control over their financial transactions and assets back to individuals, and to serve as an asset with exceptionally strong property guarantees. Furthermore, its technology has the potential to serve as a platform for countless other services that can benefit from decentralized consensus and cryptographically secure tracking of property. As an Association, we want to pave the way for Bitcoin to flourish and unfold its full potential.
          </p>
        </div>
      </div>
    </section>
  );
}