import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTopButton from './components/ScrollToTopButton';
import MobileBottomBar from './components/MobileBottomBar';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import Home from './pages/Home';

const Services = lazy(() => import('./pages/Services'));
const MeshTypesPage = lazy(() => import('./pages/MeshTypesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-200 border-t-primary-700" aria-label="Loading" />
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main className="flex-1 pb-20 sm:pb-0">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mesh-types" element={<MeshTypesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTopButton />
      <MobileBottomBar />
    </div>
  );
}
