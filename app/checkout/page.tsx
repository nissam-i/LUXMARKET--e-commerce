"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
    const { total, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        setSuccess(true);
        clearCart();
    };

    if (success) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h2>
                <p className="text-white/60 mb-8 max-w-md">
                    Thank you for your purchase. We have sent a confirmation email with your order details.
                </p>
                <Button onClick={() => window.location.href = '/'} className="rounded-full bg-white text-black hover:bg-white/90">
                    Continue Shopping
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>

                <div className="bg-white/5 rounded-xl p-8 border border-white/5 space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Shipping Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" />
                            <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" />
                            <input type="text" placeholder="Address" className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" />
                            <input type="text" placeholder="City" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" />
                            <input type="text" placeholder="Postal Code" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Payment Method</h3>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="border border-white/20 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                                <span className="font-bold text-white">Card</span>
                            </div>
                            <div className="border border-white/10 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors opacity-50">
                                <span className="font-bold text-white">PayPal</span>
                            </div>
                            <div className="border border-white/10 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors opacity-50">
                                <span className="font-bold text-white">Apple Pay</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <input type="text" placeholder="Card Number" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="MM/YY" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" />
                                <input type="text" placeholder="CVC" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                        <div>
                            <div className="text-sm text-white/60">Total Amount</div>
                            <div className="text-2xl font-bold text-white font-mono">${total.toLocaleString()}</div>
                        </div>
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-white/90 font-bold px-8"
                            onClick={handlePayment}
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Pay Now"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
