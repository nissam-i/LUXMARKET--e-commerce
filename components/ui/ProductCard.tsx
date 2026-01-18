"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./Button";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

import { useCart } from "@/context/CartContext";

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
    const { addItem } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors"
        >
            {/* Product Image */}
            <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden cursor-pointer">
                <Link href={`/product/${id}`} className="block w-full h-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </Link>

                {/* Quick Actions Overlay */}
                <div className="absolute inset-x-0 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-10">
                    <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full bg-white text-black hover:bg-white/90"
                        onClick={(e) => {
                            e.preventDefault();
                            addItem({ id, name, price, image });
                        }}
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-md">
                        <Heart className="w-5 h-5" />
                    </Button>
                </div>

                {/* Category Tag */}
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded pointer-events-none">
                    {category}
                </span>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <div className="mb-1">
                    <h3 className="text-white font-medium text-lg leading-tight truncate">
                        <Link href={`/product/${id}`}>
                            {name}
                        </Link>
                    </h3>
                </div>
                <p className="text-white/60 font-mono text-sm">${price.toLocaleString()}</p>
            </div>
        </motion.div>
    );
}
