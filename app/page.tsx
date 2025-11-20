"use client";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Truck,
  Clock,
  Shield,
  MapPin,
  Package,
  Users,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="text-xl text-gray-900">Future Logistics</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <Button>Get a Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center mt-16">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1738507869660-b44ea20ab037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGhpZ2h3YXklMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzYzNTQ5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Trucking logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">
            Delivering Excellence Across Europe
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your trusted partner in freight transportation. On-time, every time,
            with over 20 years of logistics expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2">Lorem ipsum</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2">Lorem ipsum</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2">Lorem ipsum</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738507869660-b44ea20ab037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGhpZ2h3YXklMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzYzNTQ5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Long haul trucking"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="h-6 w-6" />
                    <h3>Lorem ipsum</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761815139982-0876947bf09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBkaXN0cmlidXRpb24lMjBjZW50ZXJ8ZW58MXx8fHwxNzYzNTk4MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Warehouse distribution"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="h-6 w-6" />
                    <h3>Lorem ipsum</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614568111194-3c251800e81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVpZ2h0JTIwY29udGFpbmVyJTIwc2hpcHBpbmd8ZW58MXx8fHwxNzYzNTk4MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Container freight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-6 w-6" />
                    <h3>Lorem ipsum</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614568111194-3c251800e81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVpZ2h0JTIwY29udGFpbmVyJTIwc2hpcHBpbmd8ZW58MXx8fHwxNzYzNTk4MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Container freight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-6 w-6" />
                    <h3>Lorem ipsum</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6"> Lorem ipsum dolor sit amet</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-blue-600 mb-1">Header</div>
                  <p className="text-gray-600">stats</p>
                </div>
                <div>
                  <div className="text-blue-600 mb-1">Header</div>
                  <p className="text-gray-600">Stats</p>
                </div>
                <div>
                  <div className="text-blue-600 mb-1">Header</div>
                  <p className="text-gray-600">Stats</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738507869660-b44ea20ab037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGhpZ2h3YXklMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzYzNTQ5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Future Logistics fleet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to streamline your logistics? Contact us today for a free
              quote.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="mb-2">Call Us</h4>
                  <p className="text-gray-600">phone number</p>
                  <p className="text-gray-600">Mon-Fri, 8-18 CET</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="mb-2">Email Us</h4>
                  <p className="text-gray-600">info@futurelogistics.se</p>
                  <p className="text-gray-600">Quick response guaranteed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="mb-2">Visit Us</h4>
                  <p className="text-gray-600">gothenburg somewhere</p>
                  <p className="text-gray-600">Gothenburg</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="h-6 w-6" />
                <span className="text-lg">Future Logistics</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in freight transportation since 2003.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>{" "}
                <li>
                  <a href="#" className="hover:text-white">
                    Get Quote
                  </a>
                </li>{" "}
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Future Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
