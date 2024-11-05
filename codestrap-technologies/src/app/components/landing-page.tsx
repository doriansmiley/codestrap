'use client'

import Image from "next/image"
import { Button } from "@codestrap/app/components/ui/button"
import { Card, CardContent } from "@codestrap/app/components/ui/card"
import { CircleDollarSign, Users, Brain, Rocket, Search, Menu, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)

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
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="outline" className="hidden md:flex">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl dark:text-white">
                Rebooting Western Economies
                <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  with Software that Works!
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                CodeStrap Technologies provides services as software to bootstrap AI adoption across the world&apos;s largest enterprises.
                We specialize in Palantir Technologies and offer foundational ontologies that codify your business!
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 space-y-2">
                  <Brain className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                  <h3 className="text-xl font-medium tracking-tight dark:text-white">AI Services</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We provide foundational ontologies that ship with an agentic workforce. Our tools and automation
                    rapidly hydrate the ontology and align models with your business.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 space-y-2">
                  <Users className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                  <h3 className="text-xl font-medium tracking-tight dark:text-white">Consulting + Staffing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We specialize in integrating Palantir Foundry in your organization.
                    We can accelerate data integration, use case development, and strategy execution.
                    Our partners include many ex-Palantir employees who accelerate delivery through staff augmentation.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 space-y-2">
                  <Rocket className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                  <h3 className="text-xl font-medium tracking-tight dark:text-white">Scaled Adoption Framework</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Scale AI across your enterprise using our framework and specialists. We know the challenges you will
                    face and how to overcome them. We will create your champions, scale your teams, and empower you to build
                    your own solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8 grow">
                <h2 className="text-3xl font-medium tracking-tight dark:text-white text-center">Engagement Fees</h2>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  The majority of our revenue is generated from engagement fees. We leverage our customers workforce to deliver all projects. We are a catalyst for our customers, not their workforce.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$500k</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Fixed Fee</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">&nbsp;</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$2m</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Year 1</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$88m</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Year 5</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="space-y-8 grow flex flex-col justify-between">
                <h2 className="text-3xl font-medium tracking-tight dark:text-white text-center">Licensing</h2>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Licensing fees for our foundational ontologies, tools and training/support generate ARR.
                </p>
                <div className="mt-auto grid gap-4 md:grid-cols-3">
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$100k</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Ontology Foundations</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$50k</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Training and Support</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                    <CardContent className="p-6">
                      <CircleDollarSign className="h-12 w-12 mb-4 text-green-400 dark:text-green-100" />
                      <h4 className="text-xl font-medium tracking-tight dark:text-white">$40m ARR</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Year 5</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-medium tracking-tight text-center mb-12 dark:text-white">Founding Team</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4" />
                  <h3 className="font-medium tracking-tight dark:text-white">Connor Deeks</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">PwC</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4" />
                  <h3 className="font-medium tracking-tight dark:text-white">Dorian Smiley</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">PwC, ex-Brainly</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4" />
                  <h3 className="font-medium tracking-tight dark:text-white">TBD</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Position</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Company</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50/50 dark:bg-gray-800/50">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4" />
                  <h3 className="font-medium tracking-tight dark:text-white">TBD</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Position</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Company</p>
                </CardContent>
              </Card>
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