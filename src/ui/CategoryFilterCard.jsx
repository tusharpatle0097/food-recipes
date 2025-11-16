"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const CategoryFilterCard = ({ searchCategoryFilter }) => {

   
  return (
    <>
     
        {searchCategoryFilter.map((item, index) => (
          <Card
            key={index}
            className="
          group relative flex h-full flex-col overflow-hidden
          border border-border/70
          bg-gradient-to-br from-background via-background/95 to-muted/70
          shadow-sm backdrop-blur
          transition-all duration-300
          hover:-translate-y-1.5
          hover:border-primary/70
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]
        "
          >
            {/* soft glow */}
            <div
              className="
            pointer-events-none
            absolute -top-20 -right-20 h-40 w-40 rounded-full
            bg-primary/15 blur-3xl opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
            />

            <div className="relative z-10 flex flex-col gap-5 p-5">
              {/* Top - image + title */}
              <div className="flex items-center gap-4">
                <div
                  className="
                relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl
                border border-border/60 bg-gradient-to-br
                from-muted/60 via-background to-muted/40 shadow-md
                transition-all duration-300
                group-hover:shadow-lg group-hover:border-primary/70
                group-hover:scale-[1.03]
              "
                >
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="object-cover h-full w-full"
                  />
                  
                </div>

                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-semibold tracking-tight">
                      {item.strMeal}
                    </h2>

                    <span
                      className="
                    inline-flex items-center rounded-full border border-primary/30
                    bg-primary/10 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.16em]
                    text-primary/90
                  "
                    >
                      #{item.idMeal}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Quick & delicious meal ready in minutes
                  </p>
                </div>
              </div>

              <div className="mt-1 flex items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Quick recipe
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    Popular Choice
                  </span>
                </div>

                <Link href={`/meal/${item.idMeal}`}>
                  <button
                    type="button"
                    className="
                  cursor-pointer inline-flex items-center gap-1.5
                  rounded-full border border-border/80 bg-background/70
                  px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]
                  transition-all duration-300 group-hover:border-primary/70
                  group-hover:bg-primary/90 group-hover:text-primary-foreground
                "
                  >
                    View Recipe
                    <span className="text-xs group-hover:translate-x-0.5 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
    </>
  );
};

export default CategoryFilterCard;
