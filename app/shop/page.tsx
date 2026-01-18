"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/Button";

import { useSearchParams } from "next/navigation";

function ShopContent() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("q")?.toLowerCase();
    const categoryParam = searchParams.get("category");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam || null);

    const filteredProducts = products.filter((p) => {
        const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
        const matchesSearch = searchQuery ? p.name.toLowerCase().includes(searchQuery) : true;
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 space-y-8">
                <div>
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                        <Filter className="w-4 h-4 mr-2" /> Filters
                    </h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === null
                                ? "bg-white text-black font-medium"
                                : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            All Products
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setSelectedCategory(cat.name)}
                                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat.name
                                    ? "bg-white text-black font-medium"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Price Range</h3>
                    <div className="space-y-4">
                        <input type="range" className="w-full accent-white" />
                        <div className="flex justify-between text-xs text-white/60">
                            <span>$0</span>
                            <span>$10,000+</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        {selectedCategory ? selectedCategory : "All Collection"}
                    </h1>
                    <div className="flex gap-2">
                        <Button variant="outline" className="text-xs">
                            Sort by: Featured <ChevronDown className="ml-2 w-3 h-3" />
                        </Button>
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="py-20 text-center text-white/40">
                        No products found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Suspense fallback={<div className="text-white">Loading products...</div>}>
                <ShopContent />
            </Suspense>
        </div>
    );
}
