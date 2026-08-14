import React from "react";
import Link from "next/link";
import {
    Code2,
    Headphones,
    Palette,
    Smartphone,
    Rocket,
    Heart,
    Sparkles,
    ArrowRight,
} from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-[#070707] text-white">

            {/* HERO */}
            <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20 lg:py-32">

                {/* Background */}
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

                <div className="relative mx-auto max-w-5xl text-center">

                    <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-400">
                        <Code2 size={16} className="text-purple-400" />
                        A developer journey in progress
                    </div>

                    <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
                        Building ideas into
                        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                            real experiences.
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        Buy Me a Headphone is more than a website. It's a development
                        project created to learn, experiment, improve, and turn ideas
                        into a polished digital experience.
                    </p>

                    <div className="mt-9 flex flex-wrap justify-center gap-4">

                        <Link
                            href="#journey"
                            className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:-translate-y-1"
                        >
                            Explore the Journey
                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            href="/"
                            className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold transition hover:bg-white/10"
                        >
                            View Website
                        </Link>

                    </div>
                </div>
            </section>


            {/* PROJECT INTRO */}
            <section className="border-y border-white/5 bg-[#0d0d0d] px-6 py-20 sm:px-10 lg:px-20 lg:py-28">

                <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

                    <div>

                        <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-purple-400">
                            About The Project
                        </p>

                        <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                            From a simple idea
                            <span className="block text-gray-500">
                                to a complete web experience.
                            </span>
                        </h2>

                        <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-400">

                            <p>
                                <span className="font-semibold text-white">
                                    Buy Me a Headphone
                                </span>
                                started as a development idea: create a modern headphone
                                website while learning how real-world websites are designed
                                and developed.
                            </p>

                            <p>
                                Instead of building another basic project, the goal is to
                                continuously improve the design, user experience,
                                responsiveness, animations, components, and overall quality.
                            </p>

                            <p>
                                Every section of the website is an opportunity to learn
                                something new and turn that knowledge into something useful.
                            </p>

                        </div>

                    </div>


                    {/* Code Card */}
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl">

                        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                            <span className="h-3 w-3 rounded-full bg-red-400/70" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                            <span className="h-3 w-3 rounded-full bg-green-400/70" />

                            <span className="ml-3 text-xs text-gray-600">
                                development.js
                            </span>
                        </div>

                        <div className="space-y-3 p-6 font-mono text-sm">

                            <p>
                                <span className="text-purple-400">const</span>
                                <span className="text-blue-400">project</span>
                                
                            </p>

                            <p className="pl-5">
                                <span className="text-gray-500">purpose:</span>
                                <span className="text-green-400">
                                    "Learn & Build"
                                </span>
                                ,
                            </p>

                            <p className="pl-5">
                                <span className="text-gray-500">goal:</span>
                                <span className="text-green-400">
                                    "Create Better Websites"
                                </span>
                                ,
                            </p>

                            <p className="pl-5">
                                <span className="text-gray-500">stack:</span>
                                <span className="text-green-400">
                                    "React + Tailwind"
                                </span>
                                ,
                            </p>

                            <p className="pl-5">
                                <span className="text-gray-500">status:</span>
                                <span className="text-yellow-400">
                                    "Always Improving"
                                </span>
                            </p>

                            <p></p>

                        </div>
                    </div>

                </div>
            </section>


            {/* JOURNEY */}
            <section
                id="journey"
                className="px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
            >

                <div className="mx-auto max-w-6xl">

                    <div className="mx-auto max-w-2xl text-center">

                        <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-purple-400">
                            Development Journey
                        </p>

                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Learning by
                            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                building.
                            </span>
                        </h2>

                        <p className="mt-5 leading-8 text-gray-500">
                            The project is continuously evolving as new skills,
                            ideas, and technologies are discovered.
                        </p>

                    </div>


                    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        <JourneyCard
                            icon={<Code2 />}
                            title="Development"
                            text="Building reusable React components, understanding application structure, managing state, and creating clean and maintainable code."
                        />

                        <JourneyCard
                            icon={<Palette />}
                            title="UI & Design"
                            text="Learning how typography, spacing, colors, layouts, animations, and visual hierarchy come together to create a great interface."
                        />

                        <JourneyCard
                            icon={<Smartphone />}
                            title="Responsive Design"
                            text="Making the website look and work properly across phones, tablets, laptops, and large screens."
                        />

                        <JourneyCard
                            icon={<Rocket />}
                            title="Performance"
                            text="Exploring ways to build faster, smoother, and more efficient experiences for users."
                        />

                        <JourneyCard
                            icon={<Headphones />}
                            title="Real-World Product"
                            text="Using a real product idea to understand how an actual e-commerce experience is planned and developed."
                        />

                        <JourneyCard
                            icon={<Sparkles />}
                            title="Continuous Improvement"
                            text="Every version is an opportunity to improve the design, code, functionality, and overall user experience."
                        />

                    </div>

                </div>
            </section>


            {/* WHAT I'M LEARNING */}
            <section className="bg-[#0d0d0d] px-6 py-20 sm:px-10 lg:px-20 lg:py-28">

                <div className="mx-auto max-w-6xl">

                    <div className="grid gap-12 lg:grid-cols-2">

                        <div>

                            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-purple-400">
                                What This Project Teaches
                            </p>

                            <h2 className="text-4xl font-bold sm:text-5xl">
                                Every feature is
                                <span className="block text-gray-500">
                                    part of the journey.
                                </span>
                            </h2>

                            <p className="mt-6 leading-8 text-gray-400">
                                The goal isn't simply to finish a website. The goal is to
                                understand why things work, how they work, and how they can
                                be improved.
                            </p>

                            <p className="mt-5 leading-8 text-gray-400">
                                This project provides a space to experiment with new
                                technologies, solve problems, make mistakes, and build better
                                solutions.
                            </p>

                        </div>


                        <div className="space-y-4">

                            <Skill
                                title="React"
                                description="Components, props, state & application structure"
                            />

                            <Skill
                                title="Tailwind CSS"
                                description="Responsive layouts, styling & design systems"
                            />

                            <Skill
                                title="UI/UX"
                                description="Creating interfaces that feel intuitive and polished"
                            />

                            <Skill
                                title="JavaScript"
                                description="Logic, interactions and dynamic functionality"
                            />

                            <Skill
                                title="Problem Solving"
                                description="Learning how to approach and solve development challenges"
                            />

                        </div>

                    </div>

                </div>
            </section>


            {/* PHILOSOPHY */}
            <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">

                <div className="mx-auto max-w-4xl text-center">

                    <Heart
                        size={42}
                        className="mx-auto mb-7 text-pink-400"
                    />

                    <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
                        Don't just build websites.
                        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                            Build your skills.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        Buy Me a Headphone is a reminder that every project can be a
                        learning opportunity. Start with an idea, build it, break it,
                        improve it, and keep moving forward.
                    </p>

                </div>

            </section>


            {/* CTA */}
            <section className="relative overflow-hidden px-6 pb-24 sm:px-10 lg:px-20">

                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

                <div className="relative mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-6 py-16 text-center sm:px-12">

                    <h2 className="text-4xl font-bold sm:text-5xl">
                        The journey isn't finished.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-500">
                        There is always something new to learn, something to improve,
                        and another idea waiting to become a project.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <Link
                            href="/"
                            className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:-translate-y-1"
                        >
                            Explore the Website
                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
};


/* ================= COMPONENTS ================= */

function JourneyCard({ icon, title, text }) {
    return (
        <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-white/[0.04]">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                {icon}
            </div>

            <h3 className="text-xl font-bold">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500">
                {text}
            </p>

        </div>
    );
}


function Skill({ title, description }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-purple-500/30">

            <div className="flex items-center justify-between gap-4">

                <h3 className="font-bold">
                    {title}
                </h3>

                <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,.8)]" />

            </div>

            <p className="mt-2 text-sm text-gray-500">
                {description}
            </p>

        </div>
    );
}


export default About;

export const metadata = {
title:"About Page"
}
