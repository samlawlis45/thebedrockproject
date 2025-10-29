"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Thanks! We'll let you know when we launch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-6">
      <section className="w-full max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
            The Bedrock Project
          </h1>
          <p className="text-lg text-[var(--text-primary)] mb-12">
            Coming soon
          </p>

          <p className="text-sm text-[var(--text-primary)] mb-8">
            Sign up to get notified when we launch.
          </p>

          <form
            className="flex flex-col gap-3 items-center justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              placeholder="you@example.com"
              className="px-4 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 focus:border-[var(--accent)] transition-all text-sm text-center disabled:opacity-50"
              style={{ minWidth: '300px', opacity: '1' }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '10px',
                paddingBottom: '10px',
                backgroundColor: status === "loading" ? '#666' : '#0037FF',
                border: 'none',
                cursor: status === "loading" ? 'not-allowed' : 'pointer'
              }}
              className="rounded-lg text-white font-medium transition-all text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap disabled:hover:scale-100"
              onMouseEnter={(e) => {
                if (status !== "loading") {
                  e.currentTarget.style.backgroundColor = '#002FE0';
                }
              }}
              onMouseLeave={(e) => {
                if (status !== "loading") {
                  e.currentTarget.style.backgroundColor = '#0037FF';
                }
              }}
            >
              {status === "loading" ? "Subscribing..." : "Notify me"}
            </button>
            {message && (
              <p
                className={`text-sm mt-2 ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-[var(--text-primary)]"
                }`}
              >
                {message}
              </p>
            )}
          </form>

          <div className="mt-8 text-sm text-[var(--text-primary)]">
            Or email us at{" "}
            <a 
              href="mailto:inquiries@thebedrockproject.com" 
              style={{ color: '#0037FF' }}
              className="hover:opacity-80 transition-opacity"
            >
              inquiries@thebedrockproject.com
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
