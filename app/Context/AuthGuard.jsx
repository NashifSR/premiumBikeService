"use client";

import { useAuth } from "./AuthContext";
import { Loader2, Lock, ShieldCheck } from "lucide-react";

const ALLOWED_EMAILS = [
  "a.nashif7@gmail.com",
  "sr.nashif@gmail.com",
  "auddinnajma@gmail.com",
  "ahmed.ashiq256@gmail.com"
];

export default function AuthGuard({ children }) {
  const { user, loading, loginWithGoogle, logout } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#090d16]">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Loader2 className="h-12 w-12 animate-spin text-cyan-400" />
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl" />
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
            Verifying Credentials...
          </p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090d16] px-6">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-2xl backdrop-blur-2xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/10">
            <ShieldCheck className="h-10 w-10 text-cyan-400" />
          </div>

          <h1 className="mt-8 text-center text-3xl font-black text-white">
            Admin Access
          </h1>

          <p className="mt-3 text-center text-sm leading-6 text-zinc-400">
            This dashboard contains protected administrative tools.
            Authenticate with your Google account to continue.
          </p>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <button
            onClick={loginWithGoogle}
            className="group flex w-full items-center justify-center gap-4 rounded-2xl bg-white px-6 py-4 font-semibold text-zinc-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
          >
            {/* Google Icon */}
            <svg viewBox="0 0 48 48" className="h-6 w-6">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.9 6 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.9 6 29.2 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"/>
              <path fill="#4CAF50" d="M24 44c5.1 0 9.8-2 13.3-5.2l-6.1-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-8H6.4C9.6 36.8 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.3-6.1 6.8l6.1 5.2C39 36.7 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"/>
            </svg>

            Continue with Google
          </button>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <Lock className="h-3.5 w-3.5" />
            Secure OAuth Authentication
          </div>
        </div>
      </div>
    );
  }

  // Logged in but NOT authorized
  if (!ALLOWED_EMAILS.includes(user.email)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#090d16] px-6">
        <div className="w-full max-w-md rounded-3xl border border-red-500/20 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
            <Lock className="h-8 w-8 text-red-400" />
          </div>

          <h2 className="text-2xl font-bold text-white">
            Access Denied
          </h2>

          <p className="mt-4 text-sm text-zinc-400">
            <strong>{user.email}</strong> is not authorized to access the admin
            dashboard.
          </p>

          <button
            onClick={logout}
            className="mt-8 w-full rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  // Authorized
  return children;
}