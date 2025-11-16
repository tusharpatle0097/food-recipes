"use client";

import { useFood } from "@/app/context/FoodContext";
import Loading from "@/ui/Loading";
import { House } from "lucide-react";
import Link from "next/link";

export default function LambBiryaniPage() {
  const { mealDis } = useFood();
  console.log(mealDis, "lkl");

  if (!mealDis || mealDis.length === 0) {
    return <Loading />;
  }

  const meal = mealDis[0]; // safe now

  const tags = meal?.strTags ? meal.strTags.split(",") : [];

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];

    if (!ingredient || ingredient.trim() === "") return null;

    return {
      id: i,
      text: `${measure ? measure.trim() + " " : ""}${ingredient.trim()}`,
    };
  }).filter(Boolean);

  const steps =
    meal?.strInstructions
      ?.split(/\r?\n\r?\n/)
      ?.map((s) => s.trim())
      ?.filter((s) => s.length > 0) || [];

  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
    {steps?.length ?? 0} steps
  </span>;

  const youtubeId = meal?.strYoutube?.split("v=")[1]?.split("&")[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-emerald-50 text-slate-900">
      {/* Top glow / accent */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-amber-300/50 via-transparent to-transparent blur-3xl opacity-70" />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:px-6 lg:py-12">
        <Link href="/">
          <House style={{ color: "#eb6134" }} />
        </Link>

        {/* Breadcrumb & meta */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-700 shadow-sm">
              Signature Dish
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
              <span className="rounded-full bg-slate-900/5 px-3 py-1">
                {meal.strArea} Cuisine
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <span className="rounded-full bg-slate-900/5 px-3 py-1">
                {meal.strCategory}
              </span>
              {tags.length > 0 && (
                <>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] text-emerald-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow-sm">
              <span>⏱️</span>
              <span className="font-semibold">Long cook</span>
              <span className="text-[11px] text-slate-500">
                (slow-cooked lamb)
              </span>
            </div>
          </div>
        </div>

        {/* Title & subtitle */}
        <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {meal.strMeal}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Rich, fragrant basmati rice layered with tender lamb, crispy fried
              onions, warm spices and saffron milk – a showstopper biryani for
              weekends, guests and celebrations.
            </p>
          </div>
          <div className="mt-2 flex gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-amber-100 shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-slate-800">
              ⭐ Save Recipe
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50/80">
              🖨️ Print
            </button>
          </div>
        </header>

        {/* Main layout */}
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          {/* Left: Image + Steps */}
          <div className="flex flex-col gap-6">
            {/* Hero image card */}
            <div className="group relative overflow-hidden rounded-3xl border border-amber-100 bg-white/60 shadow-xl shadow-amber-100/40 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-rose-500/15 opacity-80 mix-blend-multiply" />

              <div className="relative grid gap-4 p-4 sm:grid-cols-[1.2fr,1fr] sm:p-5 lg:grid-cols-[1.4fr,1fr]">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="h-full w-full max-h-72 object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <div className="space-y-2 text-sm">
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-[11px] font-medium text-slate-700">
                      🍽️ Serves: <span className="font-semibold">4–6</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-2xl bg-amber-50/80 px-3 py-2">
                        <p className="text-[11px] uppercase tracking-wide text-amber-700">
                          Prep
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          ~30 mins
                        </p>
                      </div>
                      <div className="rounded-2xl bg-emerald-50/80 px-3 py-2">
                        <p className="text-[11px] uppercase tracking-wide text-emerald-700">
                          Cook
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          1–1.5 hours
                        </p>
                      </div>
                      <div className="rounded-2xl bg-rose-50/80 px-3 py-2 col-span-2">
                        <p className="text-[11px] uppercase tracking-wide text-rose-700">
                          Skill Level
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          Intermediate • Perfect for weekends
                        </p>
                      </div>
                    </div>
                  </div>

                  {youtubeId && (
                    <a
                      href={meal.strYoutube}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between gap-3 rounded-2xl border border-slate-900/10 bg-slate-900 text-xs font-medium text-amber-50 px-4 py-3 shadow-md shadow-slate-900/30 transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500/90 text-white text-lg">
                          ▶
                        </span>
                        <div className="text-left">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-amber-200">
                            Watch the walkthrough
                          </p>
                          <p className="text-xs font-semibold">
                            Lamb Biryani – step-by-step video
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] text-amber-200">
                        YouTube ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Cooking steps timeline */}
            <div className="rounded-3xl border border-slate-900/5 bg-white/80 p-5 shadow-lg shadow-amber-100/40 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">
                  Step-by-step method
                </h2>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                  {steps.length} steps
                </span>
              </div>

              <ol className="relative space-y-4 border-l border-dashed border-amber-300/70 pl-4 text-sm">
                {steps.map((step, index) => (
                  <li key={index} className="relative pl-4">
                    <span className="absolute -left-[9px] mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-amber-400 bg-amber-50 text-[10px] font-semibold text-amber-700">
                      {index + 1}
                    </span>
                    <p className="leading-relaxed text-slate-700">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Ingredients, chef tips */}
          <aside className="flex flex-col gap-6">
            {/* Ingredients card */}
            <div className="rounded-3xl border border-slate-900/5 bg-white/90 p-5 shadow-lg shadow-emerald-100/40 backdrop-blur">
              <div className="mb-4 flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-900">
                  Ingredients
                </h2>
                <span className="rounded-full bg-slate-900/5 px-3 py-1 text-[11px] font-medium text-slate-700">
                  Mise en place ✅
                </span>
              </div>

              <div className="mb-3 text-xs text-slate-500">
                Organise your ingredients before you start – it makes biryani
                cooking smoother and more fun.
              </div>

              <div className="mt-4 grid gap-2 text-sm sm:grid-cols-1">
                {ingredients.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-2 rounded-2xl border border-slate-900/5 bg-gradient-to-r from-amber-50/80 via-white to-emerald-50/80 px-3 py-2"
                  >
                    <span className="mt-1 text-[10px]">●</span>
                    <p className="leading-snug text-slate-800">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chef notes / tips */}
            <div className="rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-100 via-white to-rose-100 p-5 shadow-lg shadow-amber-200/40">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-sm text-white">
                  👩‍🍳
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Chef’s notes
                </h3>
              </div>

              <ul className="space-y-2 text-xs text-slate-700">
                <li>
                  • Fry onions in batches so they become crisp, not soggy.
                </li>
                <li>
                  • Always add yogurt off the direct heat to prevent curdling.
                </li>
                <li>
                  • Rice should be about 80% cooked before layering – still
                  slightly firm.
                </li>
                <li>
                  • Rest the biryani after final cooking before mixing – it lets
                  the flavours settle.
                </li>
                <li>
                  • Too spicy? Finish with a squeeze of lemon and a spoon of
                  yogurt on the side.
                </li>
              </ul>
            </div>

            {/* Source / attribution */}
            {meal.strSource && (
              <div className="rounded-2xl border border-slate-900/5 bg-white/80 p-4 text-xs text-slate-600">
                <p className="mb-1 font-semibold text-slate-800">
                  Recipe inspiration
                </p>
                <a
                  href={meal.strSource}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 underline-offset-2 hover:underline"
                >
                  View original source ↗
                </a>
              </div>
            )}
          </aside>
        </section>
      </main>
    </div>
  );
}
