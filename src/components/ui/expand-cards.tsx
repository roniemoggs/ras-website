"use client";

import { useState } from "react";

function cn(...classes: Array<string | undefined | null | false>) {
    return classes.filter(Boolean).join(" ");
}

export type ExpandCardItem = {
    id: string | number;
    title: string;
    description?: string;
    imageSrc?: string;
};

export type ExpandCardsProps = {
    items: ExpandCardItem[];
    className?: string;
};

export function ExpandCards({ items, className }: ExpandCardsProps) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    if (!items || items.length === 0) return null;

    return (
        <div className={cn("w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]", className)}>
            {items.map((item, idx) => {
                const isExpanded = idx === expandedIndex;
                return (
                    <div
                        key={item.id}
                        onMouseEnter={() => setExpandedIndex(idx)}
                        className={cn(
                            "relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-in-out group",
                            isExpanded ? "flex-[4]" : "flex-[1]"
                        )}
                    >
                        {item.imageSrc ? (
                            <img
                                className={cn(
                                    "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
                                    isExpanded ? "scale-105" : "scale-100"
                                )}
                                src={item.imageSrc}
                                alt={item.title}
                            />
                        ) : (
                            <div className="absolute inset-0 w-full h-full bg-secondary" />
                        )}
                        <div className={cn(
                            "absolute inset-0 bg-gradient-to-t transition-opacity duration-700",
                            isExpanded
                                ? "from-black/90 via-black/40 to-transparent opacity-100"
                                : "from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80"
                        )} />

                        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col justify-end h-full">
                            <h3 className={cn(
                                "text-xl lg:text-3xl font-bold text-white transition-all duration-700 whitespace-nowrap",
                                isExpanded
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-4"
                            )}>
                                {item.title}
                            </h3>
                            <div className={cn(
                                "overflow-hidden transition-all duration-700",
                                isExpanded ? "max-h-40 opacity-100 mt-2 lg:mt-3" : "max-h-0 opacity-0 mt-0"
                            )}>
                                <p className="text-white/80 text-sm lg:text-base border-l-2 border-[rgba(198,165,90,0.8)] pl-4 line-clamp-2 md:line-clamp-none whitespace-normal">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ExpandCards;
