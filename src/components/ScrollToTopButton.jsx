import { ArrowUp } from 'lucide-react';
import useScrollPosition from '../hooks/useScrollPosition';

export default function ScrollToTopButton() {
  const visible = useScrollPosition(400);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-40 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-white shadow-card transition hover:bg-primary-800 sm:bottom-24"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
