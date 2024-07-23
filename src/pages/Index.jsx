import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Heart, Flower, Candle, Phone, Mail, MapPin } from 'lucide-react';

const FuneralLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Compassionate Farewells</h1>
          <p className="text-xl text-gray-600 mb-8">Honoring Lives with Dignity and Respect</p>
          <Button className="bg-gray-700 hover:bg-gray-800 text-white">Contact Us</Button>
        </header>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Heart className="w-12 h-12 text-gray-600" />}
              title="Compassionate Care"
              description="We provide empathetic support to families during their time of loss."
            />
            <ServiceCard
              icon={<Flower className="w-12 h-12 text-gray-600" />}
              title="Memorial Services"
              description="Personalized ceremonies to celebrate and honor your loved ones."
            />
            <ServiceCard
              icon={<Candle className="w-12 h-12 text-gray-600" />}
              title="Grief Support"
              description="Ongoing counseling and resources to help you through the healing process."
            />
          </div>
        </section>

        {/* Bouquet Designer Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Design a Memorial Bouquet</h2>
          <p className="text-center text-gray-600 mb-8">Create a personalized bouquet to honor your loved one</p>
          <BouquetDesigner />
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="/placeholder.svg" alt="Serene memorial garden" className="mx-auto object-cover w-full h-96 rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">A Tradition of Care</h2>
              <p className="text-gray-600 mb-6">
                For over 50 years, we have been providing compassionate funeral services to our community. Our experienced team is dedicated to guiding you through this difficult time with empathy and professionalism, ensuring that your loved ones are honored with dignity and respect.
              </p>
              <Button className="bg-gray-700 hover:bg-gray-800 text-white self-start">Learn More About Us</Button>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">We're Here for You</h2>
            <p className="text-xl text-gray-600 mb-8">Let us help you honor your loved one's memory. Contact us for support and guidance.</p>
            <Button className="bg-gray-700 hover:bg-gray-800 text-white">Schedule a Consultation</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const BouquetDesigner = () => {
  const canvasRef = useRef(null);
  const [flowers, setFlowers] = useState([]);

  const flowerTypes = [
    { name: 'Rose', color: '#FF0000' },
    { name: 'Lily', color: '#FFFFFF' },
    { name: 'Carnation', color: '#FFC0CB' },
    { name: 'Chrysanthemum', color: '#FFFF00' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    flowers.forEach((flower) => {
      ctx.beginPath();
      ctx.arc(flower.x, flower.y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = flower.color;
      ctx.fill();
    });
  }, [flowers]);

  const addFlower = (flowerType) => {
    setFlowers([...flowers, {
      x: Math.random() * 380 + 10,
      y: Math.random() * 380 + 10,
      color: flowerType.color,
    }]);
  };

  const clearCanvas = () => {
    setFlowers([]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex space-x-2">
        {flowerTypes.map((flowerType) => (
          <Button
            key={flowerType.name}
            onClick={() => addFlower(flowerType)}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Add {flowerType.name}
          </Button>
        ))}
        <Button onClick={clearCanvas} className="bg-red-500 text-white hover:bg-red-600">Clear</Button>
      </div>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border border-gray-300 rounded"
      />
    </div>
  );
};

// ... (Navbar, Footer, and ServiceCard components remain the same)

export default FuneralLandingPage;