"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export function Header() {
    const { itemCount } = useCart();
    const { user, logout } = useAuth();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/shop?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-white gap-2 flex items-center">
                    LUXMARKET
                </Link>

                {/* Desktop Navigation / Search */}
                <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                    <form onSubmit={handleSearch} className="relative w-full group">
                        <input
                            type="text"
                            placeholder="Search for luxury items..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                        />
                        <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 group-focus-within:text-white transition-colors">
                            <Search className="w-full h-full" />
                        </button>
                    </form>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-6">
                    <button onClick={() => router.push('/shop')} className="text-white/80 hover:text-white transition-colors">
                        <Search className="w-5 h-5 md:hidden" />
                    </button>

                    {user ? (
                        <button onClick={logout} className="text-white/80 hover:text-white transition-colors text-xs font-semibold">
                            SIGNOUT
                        </button>
                    ) : (
                        <Link href="/login" className="text-white/80 hover:text-white transition-colors">
                            <User className="w-5 h-5" />
                        </Link>
                    )}

                    <Link href="/cart" className="relative text-white/80 hover:text-white transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                                {itemCount}
                            </span>
                        )}
                    </Link>

                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="hidden md:block text-xs text-white/60">
                                {user.name}
                            </div>
                            <button
                                onClick={() => {
                                    /* We will need to import logout and perform it here.
                                       For now, let's just expose a basic sign out.
                                    */
                                    window.location.href = '/login'; // Rough fallback, cleaner implementation below
                                }}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                {/* We should probably use a Dropdown here eventually */}
                            </button>
                        </div>
                    ) : null}

                    <button className="md:hidden text-white/80 hover:text-white transition-colors">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}
