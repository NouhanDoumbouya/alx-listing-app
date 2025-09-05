import type { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { DEFAULT_IMAGE } from '../constants';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">ALX Listing App</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Cozy Apartment"
          description="2 beds · 1 bath · City Center"
          imageUrl={DEFAULT_IMAGE}
        />
        <Card
          title="Modern Loft"
          description="1 bed · 1 bath · Downtown"
          imageUrl={DEFAULT_IMAGE}
        />
        <Card
          title="Beach House"
          description="3 beds · 2 baths · Beachfront"
          imageUrl={DEFAULT_IMAGE}
        />
      </div>

      <div className="mt-8">
        <Button label="Book Now" onClick={() => alert('Booking...')} />
      </div>
    </div>
  );
};

export default Home;
