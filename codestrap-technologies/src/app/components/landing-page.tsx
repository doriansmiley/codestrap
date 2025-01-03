'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { CircleDollarSign, Users, Brain, Rocket, Menu, Moon, Sun, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@codestrap/app/components/ui/button";
import { Card, CardContent } from "@codestrap/app/components/ui/card";


export function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7] dark:bg-gray-900 font-sans">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex items-center space-x-2">
          <Image
            src="/circleLogo-big.svg"
            alt="CodeStrap Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-lg font-medium tracking-tight dark:text-white">CodeStrap Technologies</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <nav className="flex flex-col p-4 space-y-2">
            <Button variant="ghost" className="justify-start" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-24 md:py-24 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl dark:text-white">
                Rebooting Western Economies
                <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  with Software that Works!
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                CodeStrap Technologies provides AI Services for the world&apos;s largest enterprises.
                We bootstrap your ontology and codify your business!
              </p>
              <Button onClick={() => router.push('https://calendar.app.google/piwEUL98FGZkAccy5')} variant="outline" className="md:flex bg-green-400 hover:bg-white hover:text-blue-700 font-semibold text-white border hover:border-blue-400">
                Request a Meeting
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-6 bg-gray-900 dark:bg-black flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center items-center text-white text-xs sm:text-sm">
              <div className="flex flex-row items-center m-2">
                <div className="bg-gray-800 dark:bg-gray-800/50 w-32 h-24 p-2 rounded-md border border-gray-700 flex items-center justify-center text-center">
                  <span>Industry Leading Consulting</span>
                </div>
                <ChevronRight className="h-4 w-4 my-1" />
              </div>
              <div className="flex flex-row items-center m-2">
                <div className="bg-gray-800 dark:bg-gray-800/50 w-32 h-24 p-2 rounded-md border border-gray-700 flex items-center justify-center text-center">
                  <span>The Best AI Software</span>
                </div>
                <ChevronRight className="h-4 w-4 my-1" />
              </div>
              <div className="flex flex-row items-center m-2">
                <div className="bg-gray-800 dark:bg-gray-800/50 w-32 h-24 p-2 rounded-md border border-gray-700 flex items-center justify-center text-center">
                  <span>Fixed Fees and Timelines</span>
                </div>
                <ChevronRight className="h-4 w-4 my-1" />
              </div>
              <div className="flex flex-row items-center m-2">
                <div className="bg-gray-800 dark:bg-gray-800/50 w-32 h-24 p-2 rounded-md border border-gray-700 flex items-center justify-center text-center">
                  <span>Maximum Business Value</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:pt-24 bg-white dark:bg-gray-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 space-y-2">
                  <Brain className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                  <h3 className="text-xl font-medium tracking-tight dark:text-white">AI Software, That Works!</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    SaaS companies are optimized for their growth, not your business.
                    Outsourcing your mission is not a winning strategy.
                    It&apos;s time to mold software to the business!
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We provide <span className="font-bold text-green-400">foundational ontologies that ship with an agentic workforce</span>.
                    Our tools and automation rapidly hydrate the ontology and align models with your business to <span className="font-bold text-green-400">deliver value quickly</span>.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 space-y-2">
                  <Users className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                  <h3 className="text-xl font-medium tracking-tight dark:text-white">Palantir SI + Management Consulting</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Traditional management consulting is a rates-and-hours
                    business that is antithetical to AI&apos;s value proposition.
                    A fraction of fees are value accretive to clients, with the rest
                    spent on presentations, project management, and meetings.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-green-400">We specialize in enablement</span>.
                    Our partners are business leaders who have implemented and managed Palantir stacks at
                    Fortune 500 companies. Our teams <span className="font-bold text-green-400">implement strategy and align use cases with value</span>.
                    And we do this at a low fixed cost by <span className="font-bold text-green-400">using the technology we sell</span>.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 space-y-2">
                  <Rocket className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                  <h3 className="text-xl font-medium tracking-tight dark:text-white">Scaled Adoption Framework</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Adopting and scaling AI is difficult. There are challenges
                    across governance, development and value tracking that few have solved.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We scale AI across your enterprise using our framework and specialists.
                    <span className="font-bold text-green-400">We know the challenges you will face and how to overcome them</span>.
                    We will create your champions, scale your teams, and empower you to build solutions that deliver real business value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:pb-24 bg-white dark:bg-gray-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-medium tracking-tight text-center mb-6 dark:text-white">Founding Partners</h2>
            <h3 className="text-1xl font-medium tracking-tight text-center mb-6 dark:text-white">Formerly:</h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/accenture-logo.svg"
                  alt="Accenture"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/pwc-logo.svg"
                  alt="PwC"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/intuit-logo-2.png"
                  alt="Intuit"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/komatsu-logo.png"
                  alt="Komatsu"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/owens-minors-logo.png"
                  alt="Owens & Minors"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/lear-logo.svg"
                  alt="Lear"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/guild-education-logo.webp"
                  alt="Guild Education"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/nih-logo.svg"
                  alt="NIH"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/brainly-logo.png"
                  alt="Brainly"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              CodeStrap Technologies was founded by a <span className="font-bold text-green-400">team of disruptors</span> with a shared mission: reinventing enterprise software to unlock compounding value for customers.
              Our founders are <span className="font-bold text-green-400">industry experts</span> who&apos;ve driven transformation across engineering and business
              operations at some of the world&apos;s largest institutions. We&apos;ve implemented AI solutions at scale, tackling the toughest production challenges.
              By <span className="font-bold text-green-400">combining deep technical expertise with business acumen</span>, we approach software with heterodox thinking—building AI-first systems that redefine what enterprise software can achieve.
            </p>
            <div className="grid gap-8 lg:grid-cols-4">
              <div
                className="relative transition-all duration-300 ease-in-out transform hover:scale-105 flex"
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push('/bios#connor-deeks')}
              >
                <Card className="bg-gray-50/50 dark:bg-gray-800/50 grow">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/cdeeks.png"
                        alt="Team member photo"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium tracking-tight dark:text-white">Connor Deeks</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">PwC</p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400">
                      <li>Palantir Alliance Lead Director</li>
                      <li>Led commercial strategy</li>
                      <li>Pipeline $0 to $40m in 2 years</li>
                      <li>Led implementation at major clients</li>
                    </ul>
                  </CardContent>
                </Card>
                {hoveredCard === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <p className="text-white font-medium">Click to learn more</p>
                  </div>
                )}
              </div>
              <div
                className="relative transition-all duration-300 ease-in-out transform hover:scale-105 flex"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push('/bios#dorian-smiley')}
              >
                <Card className="bg-gray-50/50 dark:bg-gray-800/50 grow">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/dsmiley.png"
                        alt="Team member photo"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium tracking-tight dark:text-white">Dorian Smiley</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">PwC, ex-Brainly</p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400">
                      <li>Palantir Alliance Tech Lead</li>
                      <li>Global Palantir Ambassador</li>
                      <li>Developer Advocate and Influencer</li>
                      <li>20+ years leading engineering teams</li>
                    </ul>
                  </CardContent>
                </Card>
                {hoveredCard === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <p className="text-white font-medium">Click to learn more</p>
                  </div>
                )}
              </div>
              <div
                className="relative transition-all duration-300 ease-in-out transform hover:scale-105 flex"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push('/bios#bryce-leszczynski')}
              >
                <Card className="bg-gray-50/50 dark:bg-gray-800/50 grow">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/bleszczynski.jpg"
                        alt="Team member photo"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium tracking-tight dark:text-white">Bryce Leszczynski</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Platform Lead, Manufacturing</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Komatsu, ex-PwC</p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400">
                      <li>Palantir Platform Leader</li>
                      <li>Heavy Equipment Manufacturer Industry Expert</li>
                      <li>Digital Consulting Expert</li>
                    </ul>
                  </CardContent>
                </Card>
                {hoveredCard === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <p className="text-white font-medium">Click to learn more</p>
                  </div>
                )}
              </div>
              <div
                className="relative transition-all duration-300 ease-in-out transform hover:scale-105 flex"
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push('/bios#david-dziedzic')}
              >
                <Card className="bg-gray-50/50 dark:bg-gray-800/50 grow">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/ddziedzic.jpg"
                        alt="Team member photo"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium tracking-tight dark:text-white">David Dziedzic</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Platform Lead, Healthcare</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Owens & Minor, ex-Wall Street</p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400">
                      <li>Palantir Platform Leader</li>
                      <li>Healthcare Solutions Industry Expert</li>
                      <li>HR Analytics Expert</li>
                      <li>Startup Warrior</li>
                    </ul>
                  </CardContent>
                </Card>
                {hoveredCard === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <p className="text-white font-medium">Click to learn more</p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-4 py-8">
              <div
                className="relative transition-all duration-300 ease-in-out transform hover:scale-105"
                onMouseEnter={() => setHoveredCard(5)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push('/bios#chris-simpson')}
              >
                <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/csimpson.jpg"
                        alt="Team member photo"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium tracking-tight dark:text-white">Chris Simpson</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Platform Lead, Automotive</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lear Corp, , ex-A.T. Kearney</p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400">
                      <li>Palantir Platform Leader</li>
                      <li>Automotive Industry Expert</li>
                      <li>Continuous Improvement Specialist</li>
                      <li>Manufacturing & Operations Consultant</li>
                    </ul>
                  </CardContent>
                </Card>
                {hoveredCard === 5 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <p className="text-white font-medium">Click to learn more</p>
                  </div>
                )}
              </div>
              <div
                className="relative transition-all duration-300 ease-in-out transform hover:scale-105"
                onMouseEnter={() => setHoveredCard(6)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push('/bios#chris-knight')}
              >
                <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/cknight.jpg"
                        alt="Team member photo"
                        width={96}
                        height={96}
                        className="object-cover h-full"
                      />
                    </div>
                    <h3 className="font-medium tracking-tight dark:text-white">Chris Knight</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Platform Lead, Engineering</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Guild Education, ex-Xerot</p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400">
                      <li>Lead Palantir Engineer</li>
                      <li>Senior Software Engineering</li>
                      <li>Financial Services - Payments Expert</li>
                      <li>Data Integration Specialist</li>
                    </ul>
                  </CardContent>
                </Card>
                {hoveredCard === 6 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <p className="text-white font-medium">Click to learn more</p>
                  </div>
                )}
              </div>
              <div
                className="relative transition-all duration-300 ease-in-out transform hover:scale-105 flex"
                onMouseEnter={() => setHoveredCard(7)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push('/bios#michael-lau')}
              >
                <Card className="bg-gray-50/50 dark:bg-gray-800/50 grow">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/mlaue.jpg"
                        alt="Team member photo"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium tracking-tight dark:text-white">Michael Lau</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Platform Lead, Engineering</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Axel, NIC, ex-CITGO Petroleum</p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400">
                      <li>Lead Palantir Engineer</li>
                      <li>ML / Data Engineer</li>
                      <li>Senior Software Engineer</li>
                    </ul>
                  </CardContent>
                </Card>
                {hoveredCard === 7 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <p className="text-white font-medium">Click to learn more</p>
                  </div>
                )}
              </div>
              <div
                className="relative transition-all duration-300 ease-in-out transform hover:scale-105 flex"
                onMouseEnter={() => setHoveredCard(8)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push('/bios#derek-schwartz')}
              >
                <Card className="bg-gray-50/50 dark:bg-gray-800/50 grow">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/dschwartz.jpg"
                        alt="Team member photo"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium tracking-tight dark:text-white">Derek Schwartz</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Platform Lead, Financial Services</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Intuit, ex-Capital One</p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400">
                      <li>Palantir Platform Leader</li>
                      <li>Data Science and Analytics Expert</li>
                      <li>Digital Experience Optimization and Operational Excellence Expert</li>
                    </ul>
                  </CardContent>
                </Card>
                {hoveredCard === 8 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <p className="text-white font-medium">Click to learn more</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8 grow">
                <h2 className="text-3xl font-medium tracking-tight dark:text-white text-center">Engagement Fees</h2>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  The majority of our revenue is generated from engagement fees. We leverage our customers workforce to deliver all projects using our software accelerators.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$500k</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Fixed Fee</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">1-2% Value Delivered</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$2m</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Projected Year 1</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$88m</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Projected Year 5</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="space-y-8 grow flex flex-col justify-between">
                <h2 className="text-3xl font-medium tracking-tight dark:text-white text-center">Software Licensing</h2>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Licensing fees for our foundational ontologies, agentic workforce, tools and training/support generate ARR.
                </p>
                <div className="mt-auto grid gap-4 md:grid-cols-3">
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$100k/yr.</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Ontology Foundations</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$50k/yr.</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Training and Support</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$40m ARR</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Projected Year 5</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 py-6">
        <div className="container flex flex-col gap-2 px-4 text-center md:flex-row md:px-6 md:text-left">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} CodeStrap Technologies. All rights reserved.
          </p>
          <nav className="md:ml-auto flex gap-4 justify-center md:justify-end">
            <a className="text-xs text-gray-500 dark:text-gray-400 hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs text-gray-500 dark:text-gray-400 hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}