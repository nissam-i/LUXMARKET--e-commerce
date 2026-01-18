"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function CartPage() {
    const { items, removeItem, updateQuantity, total } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-bold text-white mb-4">Your bag is empty</h1>
                <p className="text-white/60 mb-8">Looks like you haven't added anything yet.</p>
                <Button asChild size="lg" className="rounded-full">
                    <Link href="/shop">Start Shopping</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-white mb-8">Shopping Bag ({items.length})</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-6 p-4 bg-white/5 rounded-xl border border-white/5"
                        >
                            <div className="relative w-24 h-24 bg-white/5 rounded-lg overflow-hidden shrink-0">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-white font-medium text-lg">{item.name}</h3>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-white/40 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-3 bg-black/20 rounded-full px-3 py-1">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="text-white/60 hover:text-white">
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="text-white font-mono w-4 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="text-white/60 hover:text-white">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="text-xl font-mono text-white">
                                        ${(item.price * item.quantity).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>

                        <div className="space-y-4 mb-6 text-sm">
                            <div className="flex justify-between text-white/60">
                                <span>Subtotal</span>
                                <span className="text-white font-mono">${total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-white/60">
                                <span>Shipping</span>
                                <span className="text-white">Calculated at checkout</span>
                            </div>
                            <div className="flex justify-between text-white/60">
                                <span>Tax</span>
                                <span className="text-white">Calculated at checkout</span>
                            </div>
                            <div className="h-px bg-white/10 my-4" />
                            <div className="flex justify-between text-lg font-bold text-white">
                                <span>Total</span>
                                <span className="font-mono">${total.toLocaleString()}</span>
                            </div>
                        </div>

                        <Button asChild size="lg" className="w-full rounded-full bg-white text-black hover:bg-white/90 font-bold">
                            <Link href="/checkout">
                                Checkout <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>

                        <p className="mt-4 text-xs text-center text-white/40">
                            Secure Checkout - SSL Encrypted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
