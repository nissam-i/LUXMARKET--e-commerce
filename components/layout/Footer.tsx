import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold tracking-tight">LUXMARKET</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            The premier marketplace for luxury goods. Experience meaningful shopping.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Shop</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li><Link href="/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link href="/c/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
                            <li><Link href="/c/fashion" className="hover:text-white transition-colors">Fashion</Link></li>
                            <li><Link href="/c/home" className="hover:text-white transition-colors">Home & Living</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Support</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Follow Us</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                    <p>© 2024 LuxMarket. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
