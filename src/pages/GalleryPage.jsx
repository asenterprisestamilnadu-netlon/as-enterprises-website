import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="AS Enterprises | Installation Gallery — Chennai"
        description="Browse real mosquito mesh installations across Chennai by AS Enterprises – windows, doors and balconies."
        canonical="https://asenterprises.in/gallery"
        keywords="mosquito mesh photos Chennai, mesh installation gallery, mesh work Chennai"
      />
      <PageHeader
        title="Our Recent Installations"
        description="Real mosquito mesh installations from homes across Chennai."
      />
      <Gallery />
      <BookingForm />
    </>
  );
}
