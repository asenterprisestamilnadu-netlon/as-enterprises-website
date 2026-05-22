import { Search, Ruler, Cog, Wrench } from 'lucide-react';
import { processSteps } from '../data/process';

const iconMap = {
  search: Search,
  ruler: Ruler,
  cog: Cog,
  tool: Wrench,
};

export default function Process() {
  return (
    <section className="bg-primary-50/40 py-12 sm:py-16">
      <div className="site-container">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Simple 4-Step Process
          </h2>
          <p className="mt-2 text-slate-600">From inspection to installation, we handle everything.</p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = iconMap[step.icon] || Wrench;
            return (
              <li
                key={step.id}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
              >
                <span className="absolute -top-3 left-6 rounded-full bg-primary-700 px-3 py-1 text-xs font-bold text-white">
                  {step.id}
                </span>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
