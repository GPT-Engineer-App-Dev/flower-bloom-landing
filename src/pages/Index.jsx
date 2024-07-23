import React from 'react';
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

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">Compassionate Farewells</div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 hover:text-gray-900" href="#">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li><NavigationMenuLink href="#">Funeral Services</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="#">Memorial Services</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="#">Grief Support</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 hover:text-gray-900" href="#">
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 hover:text-gray-900" href="#">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Compassionate Farewells</h3>
            <p>Providing caring and dignified funeral services since 1970.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="flex items-center mb-2"><Phone className="mr-2" size={18} /> (555) 123-4567</li>
              <li className="flex items-center mb-2"><Mail className="mr-2" size={18} /> info@compassionatefarewells.com</li>
              <li className="flex items-center"><MapPin className="mr-2" size={18} /> 123 Main St, Anytown, USA</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Compassionate Farewells. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto">{icon}</div>
        <CardTitle className="text-xl font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FuneralLandingPage;