import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { meshTypes } from '../data/meshTypes';
import { meshIconFor } from './icons/MeshIcons';

export default function MeshTypes({ showAll = false }) {
  const items = showAll ? meshTypes : meshTypes.slice(0, 4);

  return (
    <section id="mesh-types" className="bg-primary-50/40 py-12 sm:py-16">
      <div className="site-container">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Tired of <span className="text-primary-700">Mosquitoes</span>
              <br />
              Disturbing Your Peace?
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              We have the perfect solution for every window, door and balcony in your home.
            </p>
          </div>

          {!showAll && (
            <Link
              to="/mesh-types"
              className="inline-flex items-center gap-2 self-start rounded-xl bg-primary-700 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-800 lg:self-end"
            >
              Explore Mesh Types
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((m) => {
            const Icon = meshIconFor(m.iconKey);
            return (
              <article
                key={m.id}
                className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-cardHover"
              >
                <div className="mb-4 flex justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                    <Icon className="h-12 w-12" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{m.short}</p>
                {showAll && (
                  <>
                    <p className="mt-4 text-left text-sm text-slate-600">{m.description}</p>
                    <ul className="mt-4 space-y-1 text-left text-sm text-slate-600">
                      {m.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 rounded-lg bg-primary-50 px-3 py-2 text-left text-xs font-semibold text-primary-800">
                      Best for: <span className="font-medium text-primary-700">{m.bestFor}</span>
                    </p>
                  </>
                )}
              </article>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-10 flex justify-center lg:hidden">
            <Link
              to="/mesh-types"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-700 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-800"
            >
              Explore All Mesh Types
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
