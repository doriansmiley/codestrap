import { Button } from "@codestrap/app/components/ui/button";
import { ArrowRight, BarChart3, FileSpreadsheet, Lightbulb, Rocket, Target, Users } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-green-400">
            {/* Cyberpunk grid background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(to right, #7dcb87 1px, transparent 1px), linear-gradient(to bottom, #7dcb87 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }} />
            </div>

            {/* Subtle overlay */}
            <div className="fixed inset-0 z-10 pointer-events-none opacity-10 mix-blend-screen">
                <div className="absolute inset-0 bg-[#7dcb87] animate-pulse" style={{ animationDuration: '4s' }} />
            </div>

            <div className="relative z-20">
                {/* Navigation */}
                <nav className="border-b border-[#7dcb87]/20 backdrop-blur-sm">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-20 items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/circleLogo-big.svg"
                                    alt="CodeStrap Technologies Logo"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12"
                                />
                                <span className="text-xl font-bold text-white">CodeStrap Technologies</span>
                            </div>
                            <div className="hidden md:flex md:items-center md:space-x-6">
                                <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-900/20">
                                    Solutions
                                </Button>
                                <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-900/20">
                                    About
                                </Button>
                                <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-900/20">
                                    Contact
                                </Button>
                                <Button className="bg-[#7dcb87] hover:bg-[#7dcb87]/90 text-black">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl mb-6">
                                <span className="block text-[#7dcb87]">Green</span>
                                <span className="block">Pill</span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-green-300 font-mono">
                                You chose the Green Pill.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Button
                                    size="lg"
                                    className="bg-[#7dcb87] hover:bg-[#7dcb87]/90 text-black font-bold py-3 px-6 transition-all duration-300"
                                >
                                    Dominate Your Industry
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-[#7dcb87] text-[#7dcb87] hover:bg-[#7dcb87]/10"
                                >
                                    You Win, Everything
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

