"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Headphones,
  Heart,
  Laptop,
  Mic2,
  Rocket,
  Sparkles,
  Github,
  Coffee,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background glow */}
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

        <div className="absolute -right-40 top-[35%] h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[130px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

        {/* Grid background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:px-12">

          {/* ================= LEFT ================= */}
          <div className="relative z-10">

            {/* Badge */}
            <div className="animate-fade-in-up mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>

              Supporting independent development
            </div>

            {/* Heading */}
            <h1 className="animate-fade-in-up text-5xl font-black leading-[1.02] tracking-[-2px] sm:text-6xl lg:text-7xl xl:text-8xl">

              Buy Me a

              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Headphone.
              </span>

            </h1>

            {/* Description */}
            <p className="animate-fade-in-up-delay mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              I'm building projects, experimenting with new technologies,
              creating tutorials, and sharing what I learn along the way.
              Your support helps turn ideas into better software.
            </p>

            {/* Buttons */}
            <div className="animate-fade-in-up-delay-2 mt-9 flex flex-wrap gap-4">

              <Link
                href="/login"
                className="group flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold shadow-xl shadow-violet-600/30 transition duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-violet-500/40"
              >
                Support My Work

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold text-gray-200 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/10"
              >
                About the Project
              </Link>

            </div>

            {/* Small trust text */}
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#07070a] bg-violet-500">
                  <Code2 size={14} />
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#07070a] bg-pink-500">
                  <Heart size={14} />
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#07070a] bg-blue-500">
                  <Rocket size={14} />
                </div>
              </div>

              <span>
                Built with passion, code & curiosity.
              </span>
            </div>

          </div>


          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative flex items-center justify-center">

            {/* Outer rings */}
            <div className="absolute h-[420px] w-[420px] animate-spin-slow rounded-full border border-white/[0.05]" />

            <div className="absolute h-[340px] w-[340px] rounded-full border border-violet-500/10" />

            <div className="absolute h-[250px] w-[250px] rounded-full bg-violet-600/10 blur-3xl" />

            {/* Floating particles */}
            <div className="absolute right-[15%] top-[10%] h-3 w-3 animate-float rounded-full bg-violet-400 shadow-[0_0_25px_#8b5cf6]" />

            <div className="absolute left-[10%] top-[35%] h-2 w-2 animate-float-delay rounded-full bg-fuchsia-400 shadow-[0_0_20px_#d946ef]" />

            <div className="absolute bottom-[15%] right-[20%] h-2 w-2 animate-float rounded-full bg-pink-400 shadow-[0_0_20px_#ec4899]" />

            {/* Headphone */}
            <div className="relative z-10 h-[350px] w-[350px] animate-headphone-float sm:h-[430px] sm:w-[430px]">

              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[80px]" />

              {/* Headband */}
              <div className="absolute left-1/2 top-[15%] h-[250px] w-[250px] -translate-x-1/2 rounded-t-full border-[22px] border-white/90 border-b-0 shadow-[0_0_80px_rgba(139,92,246,.25)] sm:h-[310px] sm:w-[310px]" />

              {/* Left ear */}
              <div className="absolute bottom-[12%] left-[4%] h-[135px] w-[85px] rotate-[-8deg] rounded-[35px] border border-white/20 bg-gradient-to-br from-[#27232e] to-[#111116] shadow-2xl sm:h-[155px] sm:w-[100px]">

                <div className="absolute inset-4 rounded-[25px] bg-gradient-to-br from-violet-500/30 to-transparent" />

                <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40" />

              </div>

              {/* Right ear */}
              <div className="absolute bottom-[12%] right-[4%] h-33.75 w-21.25 rotate-[8deg] rounded-[35px] border border-white/20 bg-gradient-to-br from-[#27232e] to-[#111116] shadow-2xl sm:h-[155px] sm:w-[100px]">

                <div className="absolute inset-4 rounded-[25px] bg-linear-to-br from-violet-500/30 to-transparent" />

                <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40" />

              </div>

            </div>

            {/* Floating info card */}
            <div className="absolute bottom-[5%] left-[0%] z-20 animate-float rounded-2xl border border-white/10 bg-[#111116]/80 p-4 shadow-2xl backdrop-blur-xl sm:left-[5%]">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                  <Headphones size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Better Equipment
                  </p>

                  <p className="text-xs text-gray-500">
                    One project at a time
                  </p>
                </div>

              </div>

            </div>

            {/* Sound card */}
            <div className="absolute right-[0%] top-[8%] z-20 rounded-2xl border border-white/10 bg-[#111116]/80 p-4 shadow-2xl backdrop-blur-xl sm:right-[5%]">

              <div className="flex items-end gap-1">

                {[18, 28, 12, 35, 22, 30, 15, 26].map((height, i) => (
                  <div
                    key={i}
                    className="w-1.5 animate-sound-wave rounded-full bg-violet-400"
                    style={{
                      height: `${height}px`,
                      animationDelay: `${i * 100}ms`,
                    }}
                  />
                ))}

              </div>

              <p className="mt-2 text-xs text-gray-500">
                Creating something new...
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SUPPORT STRIP
      ====================================================== */}
      <section className="border-y border-white/5 bg-[#0b0b0e]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          <Stat
            title="Build"
            text="Creating new projects"
          />

          <Stat
            title="Learn"
            text="Exploring new technology"
          />

          <Stat
            title="Share"
            text="Sharing what I discover"
          />

          <Stat
            title="Improve"
            text="Making every project better"
          />

        </div>

      </section>


      {/* =====================================================
          WHY SUPPORT
      ====================================================== */}
      <section className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[3px] text-violet-400">
              Where Your Support Goes
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Small support.
              <span className="block text-gray-500">
                Big possibilities.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              Every contribution helps me continue learning,
              building, experimenting, and sharing.
            </p>

          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-3">

            <SupportCard
              icon={<Headphones />}
              title="Better Equipment"
              text="Upgrade headphones, microphones and other equipment used while creating and learning."
            />

            <SupportCard
              icon={<Laptop />}
              title="Development"
              text="Keep building websites, applications, open-source projects and experiments."
            />

            <SupportCard
              icon={<Rocket />}
              title="New Ideas"
              text="Turn new ideas into real projects and explore technologies that push the journey forward."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          DEVELOPMENT JOURNEY
      ====================================================== */}
      <section className="bg-[#0c0c10] px-6 py-24 sm:px-10 lg:px-20 lg:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-violet-400">
              The Bigger Picture
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              This isn't just a
              <span className="block bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                donation page.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Buy Me a Headphone is part of my development journey.
              It's a place where I can experiment with ideas, learn
              new technologies, build real products and share the
              process with others.
            </p>

            <p className="mt-5 leading-8 text-gray-500">
              The goal is simple: keep learning, keep building,
              and make every project better than the last one.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Read the full story

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>


          {/* Code Window */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111116] shadow-2xl">

            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />

              <span className="ml-3 font-mono text-xs text-gray-600">
                developer.js
              </span>

            </div>

            <div className="p-7 font-mono text-sm leading-8">

              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">journey</span>{" "}
                = {"{"}
              </p>

              <p className="pl-6">
                <span className="text-gray-500">learn:</span>{" "}
                <span className="text-green-400">true</span>,
              </p>

              <p className="pl-6">
                <span className="text-gray-500">build:</span>{" "}
                <span className="text-green-400">true</span>,
              </p>

              <p className="pl-6">
                <span className="text-gray-500">experiment:</span>{" "}
                <span className="text-green-400">true</span>,
              </p>

              <p className="pl-6">
                <span className="text-gray-500">giveUp:</span>{" "}
                <span className="text-red-400">false</span>,
              </p>

              <p className="pl-6">
                <span className="text-gray-500">keepImproving:</span>{" "}
                <span className="text-green-400">true</span>
              </p>

              <p>{"}"}</p>

              <p className="mt-5 text-gray-600">
                // The journey continues...
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20 lg:py-32">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[130px]" />

        <div className="relative mx-auto max-w-4xl rounded-[35px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-6 py-16 text-center sm:px-12">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
            <Headphones size={30} />
          </div>

          <h2 className="mt-7 text-4xl font-black sm:text-6xl">
            Fuel the next
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              project.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-500">
            If you like what I'm building, you can help me keep
            learning, experimenting and creating better things.
          </p>

          <Link
            href="/login"
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-semibold shadow-xl shadow-violet-600/30 transition duration-300 hover:-translate-y-1 hover:bg-violet-500"
          >
            Buy Me a Headphone

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>

        </div>

      </section>

    </main>
  );
}


/* =====================================================
   COMPONENTS
===================================================== */

function Stat({ title, text }) {
  return (
    <div className="border-white/5 px-5 py-10 text-center md:border-r">
      <p className="text-xs font-bold tracking-[3px] text-violet-400">
      </p>

      <h3 className="mt-2 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-1 text-xs text-gray-600">
        {text}
      </p>
    </div>
  );
}


function SupportCard({ icon, title, text }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-violet-500/[0.04]">

      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 transition duration-300 group-hover:scale-110 group-hover:bg-violet-500/20">
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