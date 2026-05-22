import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (sectionId) => {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } });
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [navigate, location.pathname]
  );
}
