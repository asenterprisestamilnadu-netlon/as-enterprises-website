import { useMemo, useState } from 'react';
import { ArrowRight, Home, AppWindow, DoorOpen, LayoutGrid, Bed, Sofa, ChefHat } from 'lucide-react';
import useScrollToSection from '../hooks/useScrollToSection';
import { meshTypes, meshRecommendations } from '../data/meshTypes';
import { OPENING_TYPES, USAGE_TYPES } from '../utils/constants';

const openingIcons = {
  'sliding-window': AppWindow,
  'casement-window': Home,
  door: DoorOpen,
  balcony: LayoutGrid,
};

const usageIcons = {
  living: Sofa,
  bedroom: Bed,
  kitchen: ChefHat,
};

export default function MeshFinder() {
  const [opening, setOpening] = useState(null);
  const [usage, setUsage] = useState(null);
  const scrollTo = useScrollToSection();

  const recommendation = useMemo(() => {
    if (!opening || !usage) return null;
    const id = meshRecommendations[opening]?.[usage];
    return meshTypes.find((m) => m.id === id) || null;
  }, [opening, usage]);

  return (
    <section id="finder" className="bg-white py-12 sm:py-16">
      <div className="site-container">
        <div className="overflow-hidden rounded-3xl bg-primary-700 text-white shadow-card">
          <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
            <div className="flex flex-col items-center justify-center bg-primary-800/20 px-6 py-8 text-center lg:py-10">
              <p className="mb-4 text-lg font-semibold">Find Your Perfect Mesh</p>
              <svg viewBox="0 0 120 140" className="h-32 w-32 text-white" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M60 10l50 30v90H10V40z" />
                <path d="M40 130V80h40v50" />
                <path d="M50 90h6M64 90h6" />
              </svg>
            </div>

            <div className="px-5 py-8 sm:px-8 lg:py-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Find the Right Mesh for Your Home</h2>
              <p className="mt-1 text-sm text-primary-100">
                Answer a few quick questions and get the best recommendation.
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <Step number={1} title="Select Opening Type">
                  <div className="grid grid-cols-2 gap-2.5">
                    {OPENING_TYPES.map((o) => {
                      const Icon = openingIcons[o.id];
                      const active = opening === o.id;
                      return (
                        <button
                          key={o.id}
                          type="button"
                          onClick={() => setOpening(o.id)}
                          className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition ${
                            active
                              ? 'border-white bg-white text-primary-800'
                              : 'border-white/30 bg-primary-700/30 text-white hover:bg-primary-700/60'
                          }`}
                          aria-pressed={active}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </Step>

                <Step number={2} title="Select Usage">
                  <div className="grid grid-cols-1 gap-2.5">
                    {USAGE_TYPES.map((u) => {
                      const Icon = usageIcons[u.id];
                      const active = usage === u.id;
                      return (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => setUsage(u.id)}
                          className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition ${
                            active
                              ? 'border-white bg-white text-primary-800'
                              : 'border-white/30 bg-primary-700/30 text-white hover:bg-primary-700/60'
                          }`}
                          aria-pressed={active}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {u.label}
                        </button>
                      );
                    })}
                  </div>
                </Step>

                <Step number={3} title="Get Recommendation">
                  <div className="rounded-xl bg-white p-4 text-center text-slate-800 shadow-soft">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      Recommended for You
                    </p>
                    <p className="mt-1 text-lg font-bold text-primary-800">
                      {recommendation ? recommendation.title : 'Select options'}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {recommendation
                        ? recommendation.short
                        : 'Choose an opening and usage to see the best fit.'}
                    </p>
                    <button
                      type="button"
                      onClick={() => scrollTo('booking')}
                      disabled={!recommendation}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-700 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Get Price Estimate
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </Step>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, children }) {
  return (
    <div>
      <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-100">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-[11px]">
          {number}
        </span>
        {title}
      </p>
      {children}
    </div>
  );
}
