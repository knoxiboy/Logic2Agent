"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 h-21 flex items-center ${scrolled
                ? "bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between h-full">
                <Link href="/" className="flex items-center group p-0 m-0 h-full">
                    <Image
                        src="/hero.png"
                        alt="Logic2Agent Logo"
                        width={180}
                        height={65}
                        className="object-contain transition-transform group-hover:scale-105 m-0 p-0 max-h-[160%]"
                        priority
                    />
                </Link>




                <div className="flex items-center space-x-4">
                    <SignedOut>
                        <Link href="/sign-in" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            Sign In
                        </Link>

                    </SignedOut>
                    <SignedIn>
                        <Link href="/dashboard" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            Dashboard
                        </Link>
                        <UserButton
                            afterSignOutUrl="/"
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10"
                                }
                            }}
                        />
                    </SignedIn>
                </div>


            </div>
        </nav>
    );
}
