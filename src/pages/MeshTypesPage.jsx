import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import MeshTypes from '../components/MeshTypes';
import MeshFinder from '../components/MeshFinder';
import BookingForm from '../components/BookingForm';

export default function MeshTypesPage() {
  return (
    <>
      <SEO
        title="AS Enterprises | Mosquito Mesh Types in Chennai"
        description="Compare velcro, sliding, door, balcony, pleated and pet-friendly mosquito mesh. Find the right one for your Chennai home with our quick mesh finder."
        canonical="https://asenterprises.in/mesh-types"
        keywords="velcro mosquito mesh, sliding mesh Chennai, door mesh Chennai, balcony mesh Chennai, pleated mesh, pet mesh"
      />
      <PageHeader
        title="All Mesh Types We Install"
        description="From budget-friendly velcro mesh to premium pleated systems — we install every popular type of mosquito mesh used in Chennai homes."
      />
      <MeshTypes showAll />
      <MeshFinder />
      <BookingForm />
    </>
  );
}
