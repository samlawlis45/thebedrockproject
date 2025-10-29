"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-base font-semibold text-[var(--text-primary)]">
              Bedrock Project
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {["Crises", "Entanglements", "Evidence", "Solution", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {item}
              </Link>
            ))}
            <button className="px-4 py-2 bg-white text-[var(--bg-primary)] rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Join Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
