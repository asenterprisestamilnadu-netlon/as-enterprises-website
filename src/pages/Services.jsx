import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Process from '../components/Process';
import { meshTypes } from '../data/meshTypes';
import { meshIconFor } from '../components/icons/MeshIcons';
import useScrollToSection from '../hooks/useScrollToSection';

export default function Services() {
  const scrollTo = useScrollToSection();

  return (
    <>
      <SEO
        title="AS Enterprises | Mosquito Mesh Services in Chennai"
        description="Professional mosquito mesh installation services in Chennai by AS Enterprises – velcro, sliding, door, balcony, pleated and pet-friendly mesh. Free home inspection & 5-year warranty."
        canonical="https://asenterprises.in/services"
        keywords="mosquito mesh services Chennai, window mesh installation, balcony mesh Chennai, door mosquito mesh"
      />

      <PageHeader
        title="Mosquito Mesh Services in Chennai"
        description="Premium installation, long-lasting frames, and a proper warranty — for every kind of opening in your home or office."
      />

      <section className="bg-white py-10 sm:py-14">
        <div className="site-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {meshTypes.map((m) => {
              const Icon = meshIconFor(m.iconKey);
              return (
                <article
                  key={m.id}
                  className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-cardHover"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="text-lg font-bold text-slate-900">{m.title}</h2>
                  </div>
                  <p className="text-sm text-slate-600">{m.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-700" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-4 text-xs font-semibold text-primary-800">
                    Best for: <span className="font-medium text-primary-700">{m.bestFor}</span>
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/mesh-types"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary-700 px-5 py-3 text-sm font-semibold text-primary-800 hover:bg-primary-50"
            >
              See Mesh Types in Detail
            </Link>
            <button
              type="button"
              onClick={() => scrollTo('booking')}
              className="inline-flex items-center justify-center rounded-xl bg-primary-700 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-800"
            >
              Book Free Inspection
            </button>
          </div>
        </div>
      </section>

      <Process />
    </>
  );
}
