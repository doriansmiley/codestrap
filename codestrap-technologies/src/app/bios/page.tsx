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
                <p className="mb-4">
                    Connor has served as the Lead Alliance Director for PwC&apos;s relationship with Palantir for ~3 years.
                    He led the commercial strategy for the alliance, scaling revenue from $0 to $40M in consulting services in that timeframe.
                    Connor is an innovation and digital solutions expert with 12+ years of consulting experience focused on driving provable value across various industries including Retail & D2C, Consumer Packaged Goods, Real Estate, Industrials, Power & Utilities, and Healthcare Services.
                    He is a trusted advisor to partners, associates, and US commercial customers.
                </p>
                <p className="mb-4">
                    Connor has led many digital ops engagements and has led or support all of PwC&apos;s Foundry-based engagements, tallying $150M+ in savings for his clients using Palantir platforms.
                    He has also contributed to scaling the platform use across PwC&apos;s ~350k-person organization.
                </p>
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
                <p className="mb-4">
                    Dorian Smiley serves as the CTO of CodeStrap Technologies. With previous experience at PwC and Brainly, Dorian leads the technical vision of the company, focusing on AI and machine learning applications.
                </p>
                <p className="mb-4">
                    At Brainly Dorian led the platform engineering teams across front end, back end, and mobile.
                    He was a key architect and contributor to <Link href="https://github.com/brainly/gene">Brainly Gene</Link>, the open source NX + React framework that allowed Brainly&apos;s
                    product teams to deliver personalized experiences to a global user base in 10 different regions.
                </p>
                <p className="mb-4">
                    At PwC Dorian has been the lead Foundry architect for engagement teams and acting staff software engineer.
                    He has also been a trusted advisor to senior partners and leadership on AI trends.
                </p>
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

            <section id="bryce-leszczynski" className="mb-12">
                <Image
                    src="/bleszczynski.jpg"
                    alt="Team member photo"
                    width={96}
                    height={96}
                    className="object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">Bryce Leszczynski</h2>
                <p className="mb-4">
                    Bryce has served as the Palantir Platform Lead for a large, global heavy equipment manufacturer in the Midwest. Bryce is an accomplished technology leader with a proven track record of sustained value creation and successful implementation of advanced platforms. Bryce currently leads the data, analytics, and technology innovation programs at a global heavy equipment manufacturer, where he is responsible for progressing reformative strategies leading to $18.2 million in economic benefit enablement in less than two years through the implementation of Palantir Foundry. With a strong focus and passion for solving business critical challenges, Bryce has accelerated digital transformation initiatives for over 1,000 users through a commitment to engineering excellence and enabling cross-functional development and analytics teams.
                </p>
                <p className="mb-4">
                    Bryce has a background in digital  and risk consulting with PwC, and holds an MBA in Data Analytics, BBA in Information Technology, and BBA in Finance from the University of Wisconsin Whitewater.
                </p>
                <Button
                    asChild
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                    <Link href="https://www.linkedin.com/in/bryce-leszczynski-350a6a113/">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                    </Link>
                </Button>
            </section>

            <section id="david-dziedzic" className="mb-12">
                <Image
                    src="/ddziedzic.jpg"
                    alt="Team member photo"
                    width={96}
                    height={96}
                    className="object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">David Dziedzic</h2>
                <p className="mb-4">
                    David is a seasoned expert in rapidly building and operationalizing high-performance technology and analytics teams to drive business value. Currently, he leads the Palantir program at a Fortune 500 healthcare company, where he successfully built the program from the ground up, training internal teams and delivering its first impactful Palantir projects in a matter of weeks. Under his leadership, the program is on track to deliver tens of millions in ROI this year while driving company-wide adoption of Palantir.
                </p>
                <p className="mb-4">
                    David excels at navigating complex organizational dynamics, working seamlessly with leaders from the CEO to frontline employees. He is skilled at aligning diverse stakeholders, managing internal politics, and addressing the emotional aspects of change, all while leveraging cutting-edge technology to drive value and create efficient, high-performing operations.
                </p>
                <p className="mb-4">
                    With a dynamic career spanning from trading on Wall Street to consulting for a diverse range of clients to platform leadership, David brings a proven track record of driving measurable business success. From startups to global enterprises, he specializes in helping organizations unlock the power of people, technology, and data to achieve transformative outcomes.
                </p>
                <Button
                    asChild
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                    <Link href="https://www.linkedin.com/in/daviddziedzic/">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                    </Link>
                </Button>
            </section>

            <section id="chris-simpson" className="mb-12">
                <Image
                    src="/csimpson.jpg"
                    alt="Team member photo"
                    width={96}
                    height={96}
                    className="object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">Chris Simpson</h2>
                <p className="mb-4">
                    Christopher has served as the Director of Data Strategy and Analytics for a large, global Tier-1 automotive manufacturer, initiating and driving the global implementation of Palantir&apos;s Foundry platform.  He led enterprise-wide projects to embed Foundry into core manufacturing and back-office operations, promoting a data-centric culture and empowering teams to drive efficiency, innovation, and revenue growth.
                </p>
                <p className="mb-4">
                    Previously, Christopher has held several Industry 4.0 and Continuous Improvement roles for other Tier-1 manufacturers, driving solutions to modernize manufacturing processes, leverage IoT and automation, and streamline data-driven decision-making. His efforts have accelerated digital transformation across multiple business units, resulting in significant cost savings and operational efficiencies.
                </p>
                <p className="mb-4">
                    Christopher&pos;s background also includes consulting at A.T. Kearney, where he led manufacturing and network strategy projects across a wide range of industries. Throughout his tenure, he visited and worked in over 100 factories worldwide, gaining deep, firsthand experience in diverse manufacturing environments and driving operational improvements across various sectors.   He holds an Executive MBA from Quantic School of Business and Technology and a Bachelor of Science in Mechanical Engineering from the Georgia Institute of Technology.
                </p>
                <Button
                    asChild
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                    <Link href="https://www.linkedin.com/in/christophersimpsongt/">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                    </Link>
                </Button>
            </section>

            <section id="chris-knight" className="mb-12">
                <Image
                    src="/cknight.jpg"
                    alt="Team member photo"
                    width={96}
                    height={96}
                    className="object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">Chris Knight</h2>
                <p className="mb-4">
                    Chris is the lead Palantir engineer for Guild Education, a financial services unicorn. His recent work in Palantir Foundry Engineering addresses complex scaling challenges drawn from firsthand experience optimizing his previous organization&apos;s data warehouse strategy. As one of 15 selected for the inaugural developer fellowship at Palantir&apos;s first DevCon, Chris brings a track record of solving critical business problems with high-impact results.
                </p>
                <p className="mb-4">
                    Chris brings 12+ years of experience as a programmer, developer advocate, and engineering manager and offers a robust technical foundation and leadership experience in diverse industries, including education, travel, entertainment, and finance. He has delivered production solutions in e-commerce, ERP, CRM, CMS, and data integration, and his expertise covers full-stack application development & platform engineering, supporting businesses from Series A-F startups to Fortune 100 enterprises.
                </p>
                <Button
                    asChild
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                    <Link href="https://www.linkedin.com/in/serknight/">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                    </Link>
                </Button>
            </section>

            <section id="michael-lau" className="mb-12">
                <Image
                    src="/mlaue.jpg"
                    alt="Team member photo"
                    width={96}
                    height={96}
                    className="object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">Michael Lau</h2>
                <p className="mb-4">
                    Michael is a seasoned data engineering and software development expert with a deep knowledge of Palantir Technologies. Throughout his career, he has consistently led high-impact projects that leverage cutting-edge technologies to solve complex problems across various industries, including healthcare, energy, and technology.
                </p>
                <p className="mb-4">
                    At the National Cancer Institute (NCI), Michael spearheaded the integration of Palantir Foundry and AIP into critical cancer research workflows, serving as the primary subject matter expert. His leadership in designing and executing data pipelines, developing user-friendly applications, and optimizing AI-driven solutions has been instrumental in advancing the NCI’s research capabilities. Michael’s expertise in Palantir Technologies enabled him to streamline operational processes and deliver compounding value.
                </p>
                <p className="mb-4">
                    Before his work at the NCI, Michael led modernization efforts at CITGO Petroleum Corporation. His ability to bridge technical expertise with business needs allowed him to deliver robust solutions that improved operational efficiency and data-driven decision-making. With a strong foundation in software engineering from his time at Hewlett-Packard and DXC Technology, Michael has developed a comprehensive skill set that spans full-stack development, AI/ML integration, and cloud infrastructure management. His continuous pursuit of excellence and ability to mentor teams have made him a recognized leader in the Palantir community.
                </p>
                <Button
                    asChild
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                    <Link href="https://www.linkedin.com/in/michael-lau-01614711a/">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                    </Link>
                </Button>
            </section>

            <section id="derek-schwartz" className="mb-12">
                <Image
                    src="/dschwartz.jpg"
                    alt="Team member photo"
                    width={96}
                    height={96}
                    className="object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">Derek Schwartz</h2>
                <p className="mb-4">
                    Derek is the Group Manager of Data Science & Analytics for Intuit&apos;s Identity Platform. He manages a team of data analysts, scientists, and engineers to build next generation ML solutions to some of the world&apos;s toughest identity and security challenges. Derek spear-headed the adoption of Palantir to internally develop a real-time anomaly detection capability based on time-series forecasting and machine learning frameworks, which led to improved operational excellence and security for some of Intuit&apos;s most critical platform capabilities. As the first adopter at Intuit of Palantir, he championed broader usage and adoption across the organization. Besides his pioneering work on Foundry, he led a team that ran hundreds of experiments for new features and optimizations that drove &gt;$100M in incremental revenue, including Identifier First Sign In, Passkeys, Unified User Management for small and medium sized business, Identity Resolution, and seamless customer access and data-sharing between Credit Karma and TurboTax products.
                </p>
                <p className="mb-4">
                    Prior to his 6+ years at Intuit, Derek worked at Capital One in various roles for 7+ years, across Data Analytics, Business Analytics, and Data Product Management. He drove digital analytics adoption across the ecosystem, trained 500+ associates in Adobe Analytics, tested and launched a mobile-first website for Credit Card acquisitions that resulted in increasing the share of mobile web applications from 10% to over 60%, and launched a full-stack experimentation platform to enable experimentation at scale that resulted in the increase in number of experiments run from 30 to over 500 in less than two years, resulting in &gt;$100M in incremental revenue for the business.
                </p>
                <p className="mb-4">
                    In total, Derek brings 15+ years of experience in applied machine learning, statistics, business strategy, analytics, experimentation, and optimization. He currently resides in San Diego, California with his family and two young children.
                </p>
                <Button
                    asChild
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                    <Link href="https://www.linkedin.com/in/derekscottschwartz/">
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