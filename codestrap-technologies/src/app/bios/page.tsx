'use client'

import Link from "next/link";
import Image from "next/image";
import { Linkedin } from 'lucide-react';

import { Button } from "@codestrap/app/components/ui/button";

export default function BiosPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Team Bios</h1>

            <section id="connor-deeks" className="mb-12">
                <Image
                    src="/cdeeks.png"
                    alt="Team member photo"
                    width={96}
                    height={96}
                    className="object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">Connor Deeks</h2>
                <p className="mb-4">Connor Deeks is the CEO of CodeStrap Technologies. With a background in consulting at PwC, Connor brings a wealth of experience in strategic planning and business development to the team.</p>
                <Button
                    asChild
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                    <Link href="https://www.linkedin.com/in/connordeeks/">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                    </Link>
                </Button>
            </section>

            <section id="dorian-smiley" className="mb-12">
                <Image
                    src="/dsmiley.png"
                    alt="Team member photo"
                    width={96}
                    height={96}
                    className="object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">Dorian Smiley</h2>
                <p className="mb-4">Dorian Smiley serves as the CTO of CodeStrap Technologies. With previous experience at PwC and Brainly, Dorian leads the technical vision of the company, focusing on AI and machine learning applications.</p>
                <Button
                    asChild
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                    <Link href="https://www.linkedin.com/in/dorian-smiley-97a72a14/">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                    </Link>
                </Button>
            </section>

            <Button asChild>
                <Link href="/#team">Back to Home</Link>
            </Button>
        </div>
    )
}