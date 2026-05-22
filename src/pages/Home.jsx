import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import MeshTypes from '../components/MeshTypes';
import MeshFinder from '../components/MeshFinder';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import BookingForm from '../components/BookingForm';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const t = setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(t);
  }, [location.state]);

  return (
    <>
      <SEO
        title="AS Enterprises | Premium Mosquito Mesh Solutions Chennai"
        description="Premium mosquito mesh installation for windows, doors & balconies across Chennai. Custom-fitted sliding mesh and mosquito protection solutions by AS Enterprises."
        canonical="https://asenterprises.in/"
        keywords="mosquito mesh installation Chennai, mosquito net for windows Chennai, sliding mosquito mesh Chennai, balcony mosquito mesh Chennai, mosquito screen installation Tamil Nadu"
      />
      <Hero />
      <MeshTypes />
      <MeshFinder />
      <Gallery />
      <Process />
      <Reviews />
      <BookingForm />
    </>
  );
}
