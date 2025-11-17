"use client";

import React from "react";

const features = [
  "Search thousands of recipes by name.",
  "Discover dishes by category, cuisine, and main ingredient.",
  "Get detailed step-by-step cooking instructions.",
  "See ingredient lists with exact measurements.",
  "Explore random recipes when you’re not sure what to cook.",
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-emerald-50">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm mb-6">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
          About Food Recipe
        </div>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
          Cook smarter, not harder.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-3xl">
          Food Recipe is your personal companion in the kitchen. Whether you’re
          a complete beginner or a home chef experimenting with new ideas, our
          app helps you discover, plan, and cook delicious meals with confidence.
        </p>

        {/* Main content grid */}
        <div className="mt-10 grid gap-10 md:grid-cols-[3fr,2fr] items-start">
          {/* Left column */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm border border-slate-100 backdrop-blur">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                What is Food Recipe?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Food Recipe is a web application that brings together a rich
                collection of meals from around the world. You can quickly look
                up recipes, explore different cuisines, and learn how to prepare
                dishes step-by-step — all in one clean, easy-to-use interface.
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm border border-slate-100 backdrop-blur">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                What you can do
              </h2>
              <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-600 ">
                {features.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/80 p-6 shadow-sm border border-slate-100 backdrop-blur">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                How it works
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Just type the name of a dish, pick a category, or explore by
                area and ingredients. Food Recipe then shows you a curated list
                of meals with images, ingredients, and clear instructions, so
                you can focus on cooking instead of searching.
              </p>
            </div>
          </div>

          {/* Right column */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-slate-900 text-slate-50 p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Built for everyday cooking
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                The app is designed to load fast, look great on mobile and
                desktop, and stay out of your way while you cook. Clear
                typography, simple navigation, and a distraction-free layout
                make it easier to follow recipes right from your screen.
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-6 shadow-sm border border-slate-100 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Technology behind the scenes
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Food Recipe is built with modern web technologies like Next.js
                and Tailwind CSS to deliver a smooth, responsive experience.
                Data is fetched in real time from a rich recipe source, so you
                always have access to fresh and diverse meal ideas.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-5 border border-emerald-100">
              <h4 className="text-sm font-semibold text-emerald-900 mb-1">
                Our goal
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                We want to make cooking more approachable for everyone — from
                quick weeknight dinners to weekend experiments. If this app
                helps you discover even one new favorite recipe, it’s a win.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
