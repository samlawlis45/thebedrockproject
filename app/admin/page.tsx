"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AdminPage() {
  const [subscribers, setSubscribers] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch("/api/subscribers");
      const data = await response.json();
      setSubscribers(data.subscribers || []);
      setCount(data.count || 0);
    } catch (error) {
      console.error("Failed to fetch subscribers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = async () => {
    setExporting(true);
    try {
      const response = await fetch("/api/subscribers?format=csv");
      const csv = await response.text();
      
      // Create download link
      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `subscribers-${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to export CSV:", error);
      alert("Failed to export CSV");
    } finally {
      setExporting(false);
    }
  };

  const copyToClipboard = () => {
    const emailsText = subscribers.join("\n");
    navigator.clipboard.writeText(emailsText);
    alert("Emails copied to clipboard!");
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                Subscriber Admin
              </h1>
              <p className="text-[var(--text-secondary)]">
                Manage and export email subscriptions
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={copyToClipboard}
                disabled={subscribers.length === 0}
                className="px-4 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--overlay-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Copy Emails
              </button>
              <button
                onClick={handleExportCSV}
                disabled={subscribers.length === 0 || exporting}
                className="px-4 py-2 rounded-lg bg-[#0037FF] text-white hover:bg-[#002FE0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
              >
                {exporting ? "Exporting..." : "Export CSV"}
              </button>
            </div>
          </div>

          <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-[var(--text-secondary)]">Loading subscribers...</p>
              </div>
            ) : count === 0 ? (
              <div className="text-center py-12">
                <p className="text-[var(--text-secondary)]">
                  No subscribers yet. Check back after people start signing up!
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-[var(--text-primary)] font-medium">
                    {count} {count === 1 ? "subscriber" : "subscribers"}
                  </p>
                  <button
                    onClick={fetchSubscribers}
                    className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    Refresh
                  </button>
                </div>
                <div className="max-h-[600px] overflow-y-auto">
                  <div className="space-y-2">
                    {subscribers.map((email, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] text-sm"
                      >
                        {email}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

