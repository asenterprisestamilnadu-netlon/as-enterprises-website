import { Star, Home, Award, Zap, ThumbsUp } from 'lucide-react';
import { reviews, ratingsSummary } from '../data/reviews';

const stats = [
  { Icon: Home, value: '500+', label: 'Homes Protected' },
  { Icon: Award, value: 'Premium', label: 'Quality Material' },
  { Icon: Zap, value: 'Fast', label: 'Installation' },
  { Icon: ThumbsUp, value: '100%', label: 'Customer Satisfaction' },
];

export default function Reviews({ showAll = false }) {
  const items = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="reviews" className="bg-white py-12 sm:py-16">
      <div className="site-container">
        <div className="overflow-hidden rounded-3xl bg-primary-700 shadow-card">
          <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
            <div className="grid grid-cols-2 gap-3 bg-primary-800/30 p-6 sm:p-8 lg:grid-cols-1">
              {stats.map((s) => (
                <div key={s.label} className="text-center text-white">
                  <span className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <s.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-xl font-extrabold leading-tight">{s.value}</p>
                  <p className="text-[11px] text-primary-100">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-5 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    What Our Customers Say
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Genuine feedback from {ratingsSummary.total}+ Chennai homes.
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5">
                  <span className="text-2xl font-extrabold text-primary-800">
                    {ratingsSummary.average}
                  </span>
                  <div className="leading-tight">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Based on reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((r) => (
                  <ReviewCard key={r.id} review={r} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-soft">
      <div className="flex items-center gap-1 text-amber-400">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400" aria-hidden="true" />
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-700">"{review.text}"</p>
      <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800">
          {review.name.charAt(0)}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-900">{review.name}</p>
          <p className="text-[11px] text-slate-500">{review.location}</p>
        </div>
      </div>
    </article>
  );
}
