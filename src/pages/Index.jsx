import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Flower, Sun, Droplets } from 'lucide-react';

const FlowerLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">Bloom & Grow</h1>
        <p className="text-xl text-gray-700 mb-8">Discover the beauty and joy of flowers</p>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">Explore Our Collection</Button>
      </header>

      {/* Feature Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center text-pink-600 mb-12">Why Choose Our Flowers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Flower className="w-12 h-12 text-pink-500" />}
            title="Fresh & Vibrant"
            description="Our flowers are handpicked daily to ensure maximum freshness and vibrancy."
          />
          <FeatureCard
            icon={<Sun className="w-12 h-12 text-yellow-500" />}
            title="Sustainably Grown"
            description="We use eco-friendly practices to grow our flowers, ensuring a positive impact on the environment."
          />
          <FeatureCard
            icon={<Droplets className="w-12 h-12 text-blue-500" />}
            title="Long-Lasting"
            description="Our special care techniques help our flowers stay fresh and beautiful for longer."
          />
        </div>
      </section>

      {/* Image Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="/placeholder.svg" alt="Colorful flower bouquet" className="mx-auto object-cover w-full h-96 rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-pink-600 mb-4">Bring Nature's Beauty Home</h2>
            <p className="text-gray-700 mb-6">
              Our carefully curated collection of flowers brings the vibrant colors and sweet fragrances of nature right to your doorstep. Whether you're looking for a stunning centerpiece or a thoughtful gift, our flowers are sure to delight.
            </p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white self-start">Shop Now</Button>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-pink-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-pink-600 mb-4">Ready to Start Your Floral Journey?</h2>
          <p className="text-xl text-gray-700 mb-8">Join our community of flower enthusiasts and receive exclusive offers, care tips, and more!</p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">Sign Up for Newsletter</Button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto">{icon}</div>
        <CardTitle className="text-xl font-semibold text-pink-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FlowerLandingPage;