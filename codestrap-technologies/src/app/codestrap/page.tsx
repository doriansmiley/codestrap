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
                <section className="relative px-4 sm:px-6 lg:px-8 py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center">
                            <div className="relative flex justify-center mb-8">
                                <Image
                                    src="/matrix.png"
                                    alt="CodeStrap Technologies Logo"
                                    width={974}
                                    height={772}
                                    className="max-w-[50%] h-auto"
                                />
                                {/* Green Pill Glow */}
                                <Link
                                    href="/codestrap/green"
                                    className="absolute w-[100px] h-[100px] rounded-full bg-green-500 opacity-0 hover:opacity-80 hover:shadow-[0_0_20px_10px_rgba(34,197,94,0.8)] transition-all duration-300"
                                    style={{
                                        top: "80%", // Approximate position of the green pill
                                        left: "36%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    title="Consulting 2.0"
                                >
                                    <span className="sr-only">Consulting 2.0</span>
                                </Link>

                                {/* Blue Pill Glow */}
                                <Link
                                    href="/codestrap/blue"
                                    className="absolute w-[100px] h-[100px] rounded-full bg-blue-500 opacity-0 hover:opacity-80 hover:shadow-[0_0_20px_10px_rgba(59,130,246,0.8)] transition-all duration-300"
                                    style={{
                                        top: "80%", // Approximate position of the blue pill
                                        left: "63%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    title="Consulting 1.0"
                                >
                                    <span className="sr-only">Consulting 1.0</span>
                                </Link>
                            </div>
                            {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl mb-6">
                                <span className="block">CONSULTING</span>
                                <span className="block text-[#7dcb87]">EVOLVED</span>
                            </h1> */}
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-green-300 font-mono">
                                &quot;You take the blue pill, the story ends, and you go back to your spreadsheets, dashboards, and power-points.
                                You take the green pill, I pair you with mission-driven engineers, and I show you how fast value can grow.&quot;
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Button
                                    size="lg"
                                    className="bg-[#7dcb87] hover:bg-[#7dcb87]/90 text-black font-bold py-3 px-6 transition-all duration-300"
                                >
                                    Begin Transformation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-[#7dcb87] text-[#7dcb87] hover:bg-[#7dcb87]/10"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                            {/* Traditional Consulting */}
                            <div className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                                <div className="absolute -top-4 left-4 inline-block rounded-full bg-white/5 px-4 py-1 text-sm font-mono text-white/70">
                                    LEGACY SYSTEM
                                </div>
                                <ul className="mt-8 space-y-6">
                                    <li className="flex items-start gap-3">
                                        <div className="flex-shrink-0">
                                            <FileSpreadsheet className="h-6 w-6 text-[#7dcb87]" />
                                        </div>
                                        <span className="text-base text-green-300 font-mono">Traditional spreadsheet analysis</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="flex-shrink-0">
                                            <BarChart3 className="h-6 w-6 text-[#7dcb87]" />
                                        </div>
                                        <span className="text-base text-green-300 font-mono">Static data visualization</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="flex-shrink-0">
                                            <Users className="h-6 w-6 text-[#7dcb87]" />
                                        </div>
                                        <span className="text-base text-green-300 font-mono">Conventional team structures</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Modern Consulting */}
                            <div className="relative p-8 rounded-2xl border border-[#7dcb87]/30 bg-[#7dcb87]/5 backdrop-blur-sm">
                                <div className="absolute -top-4 left-4 inline-block rounded-full bg-[#7dcb87]/10 px-4 py-1 text-sm font-mono text-[#7dcb87]">
                                    NEXT-GEN SOLUTION
                                </div>
                                <ul className="mt-8 space-y-6">
                                    <li className="flex items-start gap-3">
                                        <div className="flex-shrink-0">
                                            <Rocket className="h-6 w-6 text-[#7dcb87]" />
                                        </div>
                                        <span className="text-base text-green-300 font-mono">AI-powered analytics engine</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="flex-shrink-0">
                                            <Target className="h-6 w-6 text-[#7dcb87]" />
                                        </div>
                                        <span className="text-base text-green-300 font-mono">Expert engineering teams</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="flex-shrink-0">
                                            <Lightbulb className="h-6 w-6 text-[#7dcb87]" />
                                        </div>
                                        <span className="text-base text-green-300 font-mono">Innovative value creation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-24 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black via-[#7dcb87]/20 to-black px-6 py-20 shadow-2xl sm:px-12 sm:py-32 border border-[#7dcb87]/20">
                            <div className="relative">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
                                        Ready to Transform?
                                    </h2>
                                    <p className="text-4xl font-bold text-[#7dcb87]">
                                        Let's Begin
                                    </p>
                                    <p className="mx-auto mt-6 max-w-2xl text-lg text-green-300 font-mono">
                                        Join us at the intersection of innovation and execution.
                                    </p>
                                    <div className="mt-10">
                                        <Button
                                            size="lg"
                                            className="bg-[#7dcb87] hover:bg-[#7dcb87]/90 text-black font-bold transition-all duration-300"
                                        >
                                            Start Your Journey
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

