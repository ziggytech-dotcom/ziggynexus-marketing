import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up Free | ZiggyNexus",
  description: "Create your free ZiggyNexus account. No credit card required.",
};

export default function SignupPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f0a0a", padding: "2rem" }}>
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem", textAlign: "center" }}>
          Start for free
        </h1>
        <p style={{ color: "#9ca3af", textAlign: "center", marginBottom: "2rem", fontSize: "0.95rem" }}>
          Create your ZiggyNexus account — no credit card required
        </p>
        <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "2rem" }}>
          <a
            href="https://app.ziggynexus.com/signup"
            style={{
              display: "block",
              width: "100%",
              padding: "0.875rem",
              background: "#7c3aed",
              color: "#ffffff",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Create Free Account →
          </a>
          <p style={{ color: "#9ca3af", textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#a78bfa", textDecoration: "none" }}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
