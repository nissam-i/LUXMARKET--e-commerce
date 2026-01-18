"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ShoppingBag, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";

import { useCart } from "@/context/CartContext";

export default function ProductPage() {

    const params = useParams();
    const product = products.find((p) => p.id === params.id);
    const { addItem } = useCart();
    const router = useRouter();

    const [mainImage, setMainImage] = useState(product?.image);

    // Fallback if product has no images array
    // @ts-ignore
    const galleryImages = (product?.images as string[]) || [product?.image];

    const handleBuyNow = () => {
        addItem({
            id: product!.id,
            name: product!.name,
            price: product!.price,
            image: product!.image
        });
        router.push("/checkout");
    };

    if (!product) {
        return <div className="min-h-[50vh] flex items-center justify-center text-white">Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                >
                    <div className="relative aspect-square bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                        <motion.div
                            key={mainImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={mainImage || product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setMainImage(img)}
                                className={`relative aspect-square bg-white/5 rounded-lg overflow-hidden border cursor-pointer transition-all ${mainImage === img ? "border-white" : "border-white/5 hover:border-white/40"}`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${i + 1}`}
                                    fill
                                    className={`object-cover transition-opacity ${mainImage === img ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="mb-2 text-white/50 text-sm uppercase tracking-wider">{product.category}</div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-neutral-700"}`} />
                                ))}
                            </div>
                            <span className="text-white/40 text-sm">({product.reviews} reviews)</span>
                        </div>

                        <div className="text-3xl font-mono text-white mb-8">
                            ${product.price.toLocaleString()}
                        </div>

                        <div className="prose prose-invert prose-sm mb-8 text-white/70">
                            <p>
                                {product.description || `Experience the pinnacle of craftsmanship with the ${product.name}. Designed for those who appreciate fine detail and superior performance.`}
                            </p>
                        </div>

                        <div className="flex gap-4 mb-8">
                            <Button
                                size="lg"
                                className="flex-1 bg-white text-black hover:bg-white/90 font-bold"
                                onClick={() => addItem({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    image: product.image
                                })}
                            >
                                <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="flex-1"
                                onClick={handleBuyNow}
                            >
                                Buy Now
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 py-8 border-t border-white/10">
                            <div className="text-center">
                                <Truck className="w-6 h-6 mx-auto mb-2 text-white/60" />
                                <div className="text-[10px] uppercase text-white/40 font-bold">Free Shipping</div>
                            </div>
                            <div className="text-center">
                                <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-white/60" />
                                <div className="text-[10px] uppercase text-white/40 font-bold">2 Year Warranty</div>
                            </div>
                            <div className="text-center">
                                <RefreshCw className="w-6 h-6 mx-auto mb-2 text-white/60" />
                                <div className="text-[10px] uppercase text-white/40 font-bold">30 Day Returns</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
