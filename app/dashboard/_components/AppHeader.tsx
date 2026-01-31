import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function AppHeader() {
    return (
        <header className="sticky top-0 z-40 flex justify-between items-center w-full px-6 h-20 border-b border-white/5 bg-black/70 backdrop-blur-md">
            <div className="flex items-center gap-4 h-full">
                <SidebarTrigger className="h-8 w-8 text-gray-400 hover:text-primary transition-colors" />

                <div className="h-8 w-px bg-white/10 mx-2 hidden sm:block" />
                <Link href="/" className="flex items-center group h-full">
                    <div className="flex items-center gap-0 tracking-tighter transition-all hover:opacity-90">
                        <div className="text-2xl font-black flex items-center">
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.2)]">Logic</span>
                            <span className="text-accent mx-0.5 transform group-hover:rotate-12 transition-transform duration-300">2</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-600 dark:from-cyan-300 dark:to-blue-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]">Agent</span>
                        </div>
                    </div>
                </Link>

            </div>
            <div className="flex items-center gap-4">
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "w-10 h-10 border border-primary/20 hover:border-accent transition-all shadow-[0_0_15px_rgba(168,162,158,0.1)]"
                        }
                    }}
                />
            </div>
        </header>
    )
}

export default AppHeader
