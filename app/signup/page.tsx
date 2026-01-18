"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function SignupPage() {
    const { signup } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await signup(name, email, password);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-white tracking-tight">Create Account</h2>
                    <p className="mt-2 text-sm text-white/60">
                        Join LuxMarket for exclusive access.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                    {error && <div className="text-red-500 text-sm text-center font-medium bg-red-500/10 p-2 rounded">{error}</div>}
                    <div className="space-y-4">
                        <div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="appearance-none block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/20 sm:text-sm transition-all"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/20 sm:text-sm transition-all"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/20 sm:text-sm transition-all"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center bg-white text-black hover:bg-white/90 font-bold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Creating Account..." : (
                            <>Create Account <ArrowRight className="ml-2 w-4 h-4" /></>
                        )}
                    </Button>

                    <div className="text-center text-sm text-white/60">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-white hover:underline">
                            Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
