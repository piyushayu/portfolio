"use client";

import { useState } from "react";
import { Data } from "@/app/Data";
import { Stack } from "@/app/DataSchema";

export default function Skillcomp() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories: { key: string; label: string }[] = [
    { key: "All", label: "All" },
    { key: "Frontend", label: "Frontend" },
    { key: "Backend", label: "Backend" },
    { key: "Technologies", label: "Technologies" },
  ];

  const Alltech : Stack[] = Data.tech.Frontend.concat(Data.tech.Backend).concat(Data.tech.Technologies)

  return (
    <section id="skills" className="max-w-200 mx-auto px-5 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
          Skills
        </h2>

        <div className="flex items-center gap-1.5 p-1 bg-neutral-900/90 border border-neutral-800 rounded-lg w-fit">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-3 py-1 text-xs font-medium rounded-md cursor-pointer ${
                  isActive
                    ? "bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700/80"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative border border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:border-neutral-700/80">

        <div className="absolute top-2 left-2 text-neutral-700 font-mono text-[10px] select-none pointer-events-none">
          +
        </div>
        <div className="absolute top-2 right-2 text-neutral-700 font-mono text-[10px] select-none pointer-events-none">
          +
        </div>
        <div className="absolute bottom-2 left-2 text-neutral-700 font-mono text-[10px] select-none pointer-events-none">
          +
        </div>
        <div className="absolute bottom-2 right-2 text-neutral-700 font-mono text-[10px] select-none pointer-events-none">
          +
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          { activeTab === "All" ? Alltech.map((tech) => {
            return (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-800/90 bg-neutral-900/60 hover:bg-neutral-800/70 hover:border-neutral-700 text-neutral-300 hover:text-neutral-100 transition-all duration-200 group cursor-default"
              >
                {tech.icons && (
                  <img
                    src={tech.icons}
                    alt={tech.name}
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                )}
                <span className="text-xs sm:text-sm font-medium tracking-tight text-white group-hover:text-neutral-100">
                  {tech.name}
                </span>
              </div>
            )
          }) : activeTab === "Frontend" ? Data.tech.Frontend.map((tech) => {
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-800/90 bg-neutral-900/60 hover:bg-neutral-800/70 hover:border-neutral-700 text-neutral-300 hover:text-neutral-100 transition-all duration-200 group cursor-default"
                >
                  {tech.icons && (
                    <img
                      src={tech.icons}
                      alt={tech.name}
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  <span className="text-xs sm:text-sm font-medium tracking-tight text-white group-hover:text-neutral-100">
                    {tech.name}
                  </span>
                </div>
              )
            }) : activeTab === "Backend" ? Data.tech.Backend.map((tech) => {
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-800/90 bg-neutral-900/60 hover:bg-neutral-800/70 hover:border-neutral-700 text-neutral-300 hover:text-neutral-100 transition-all duration-200 group cursor-default"
                >
                  {tech.icons && (
                    <img
                      src={tech.icons}
                      alt={tech.name}
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  <span className="text-xs sm:text-sm font-medium tracking-tight text-white group-hover:text-neutral-100">
                    {tech.name}
                  </span>
                </div>
              )
            }) : activeTab === "Technologies" ?  Data.tech.Technologies.map((tech) => {
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-800/90 bg-neutral-900/60 hover:bg-neutral-800/70 hover:border-neutral-700 text-neutral-300 hover:text-neutral-100 transition-all duration-200 group cursor-default"
                >
                  {tech.icons && (
                    <img
                      src={tech.icons}
                      alt={tech.name}
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  <span className="text-xs sm:text-sm font-medium tracking-tight text-white group-hover:text-neutral-100">
                    {tech.name}
                  </span>
                </div>
              )
            }) : <p className="text-sm text-neutral-500">
              No Tech Found
            </p>
          }
        </div>
      </div>
    </section>
  );
}