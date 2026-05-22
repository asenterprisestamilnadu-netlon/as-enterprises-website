import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reviews from '../components/Reviews';
import BookingForm from '../components/BookingForm';

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="AS Enterprises | Customer Reviews — Chennai Mosquito Mesh"
        description="See what Chennai homeowners say about AS Enterprises mosquito mesh installation – quality, punctuality and friendly service."
        canonical="https://asenterprises.in/reviews"
        keywords="AS Enterprises reviews, mosquito mesh Chennai reviews, best mosquito mesh installer Chennai"
      />
      <PageHeader
        title="Customer Reviews"
        description="500+ happy homes in Chennai. Here is what some of them have to say."
      />
      <Reviews showAll />
      <BookingForm />
    </>
  );
}
