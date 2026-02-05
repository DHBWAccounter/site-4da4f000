"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to Top */}
        <div className="text-center mb-6">
          <Link 
            href="#header" 
            className="text-[11px] text-[#999] uppercase tracking-[0.15em] hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-proxima)" }}
          >
            Back to Top
          </Link>
        </div>

        {/* Footer Navigation */}
        <nav className="flex justify-center items-center gap-6 flex-wrap">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] text-[#999] uppercase tracking-[0.15em] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-proxima)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}