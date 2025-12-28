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
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b-2 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center h-10 w-10">
                <img
                  src="fls-logo.png"
                  alt="Future Logistics logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <span className="text-2xl text-white tracking-tight">
                  FUTURE
                </span>
                <span className="text-2xl text-red-600 tracking-tight">
                  {" "}
                  LOGISTICS
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-gray-300 hover:text-red-600 transition-colors uppercase tracking-wide text-sm"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-red-600 transition-colors uppercase tracking-wide text-sm"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-red-600 transition-colors uppercase tracking-wide text-sm"
              >
                Contact
              </a>
              <Button className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="hero_image.JPG"
            alt="Trucking logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-red-900/40"></div>
          {/* Diagonal accent stripe */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10"
            style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
          ></div>
        </div>

        {/* Animated stripe decoration */}
        <div className="hidden sm:block absolute left-0 top-1/3 w-32 h-2 bg-red-600"></div>
        <div className="hidden sm:block absolute left-0 top-1/3 mt-4 w-24 h-1 bg-white"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600 text-white px-4 py-1 mb-6 uppercase tracking-wider text-sm">
              Future Logistics Sweden AB
            </div>
            <h1
              className="text-white mb-6 text-6xl md:text-7xl uppercase tracking-tighter"
              style={{ textShadow: "4px 4px 0 rgba(220, 38, 38, 0.3)" }}
            >
              DELIVERING
              <br />
              <span className="text-red-600">HEAVY VEHICLES</span>
              <br />
              ACROSS EUROPE
            </h1>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-1 bg-red-600"></div>
              <div>
                <p className="text-xl text-gray-300">
                  From driving vehicles across Europe to inspecting thousands of
                  units in port, service remains at the heart of everything we
                  do. Future Logistics Sweden AB continues to grow by combining
                  decades of experience with a personal, hands-on approach that
                  larger companies often lose.
                </p>
                <br />
                <p className="text-xl text-gray-300">
                  We don’t just move vehicles or check boxes — we move
                  reliability forward, one vehicle at a time.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 uppercase tracking-wide"
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black uppercase tracking-wide"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-16 bg-red-600"></div>
              <div>
                <div className="text-red-600 uppercase tracking-wider text-sm mb-2">
                  What We Offer
                </div>
                <h2 className="text-white text-5xl uppercase tracking-tight">
                  Our Services
                </h2>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl ml-6 pl-4 border-l-2 border-gray-700">
              Professional vehicle delivery, accurate inspections, and honest
              trading — supporting clients across Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-96 overflow-hidden group">
              <ImageWithFallback
                src="jockey1.webp"
                alt="Long haul trucking"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck className="h-8 w-8 text-red-600" />
                    <h3 className="text-white uppercase tracking-wide">
                      Jockey Delivery
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Future Logistics Sweden AB started with what we know best —
                    moving heavy vehicles on their own wheels.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 overflow-hidden group">
              <ImageWithFallback
                src="automotive_surveys.jpg"
                alt="Warehouse distribution"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Package className="h-8 w-8 text-red-600" />
                    <h3 className="text-white uppercase tracking-wide">
                      Automotive Surveys
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    As our operations grew, the next step was a natural one —
                    automotive and cargo inspections.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 overflow-hidden group bg-red-600">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
                }}
              ></div>
              <div className="relative h-96 overflow-hidden group">
                <ImageWithFallback
                  src="truck_brokerage2.jpeg"
                  alt="Used trucks and passenger cars for trading"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient overlay – SAME as others */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Red accent bar – SAME as others */}
                <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>

                {/* Content – SAME positioning */}
                <div className="absolute inset-0 flex items-end">
                  <div className="p-8 w-full">
                    <div className="flex items-center gap-3 mb-3">
                      <Truck className="h-8 w-8 text-red-600" />
                      <h3 className="text-white uppercase tracking-wide">
                        Truck Brokerage Services
                      </h3>
                    </div>
                    <p className="text-gray-300">
                      Our newest expansion has been into vehicle trading, where
                      we apply our logistical know- how to help clients source,
                      buy, and sell used trucks and passenger cars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20 bg-white relative">
        {/* Diagonal top edge */}
        <div
          className="absolute top-0 left-0 w-full h-20 bg-black"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="group">
              <div className="bg-black h-full p-8 relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 bg-red-600 flex items-center justify-center">
                      <Truck className="h-8 w-8 text-white" />
                    </div>
                    <div className="h-12 w-1 bg-red-600"></div>
                  </div>
                  <h3 className="mb-3 text-white uppercase tracking-wide">
                    Jockey Delivery
                  </h3>
                  <p className="text-gray-400">
                    Our Jockey Delivery service involves the professional
                    transport of trucks, buses, and other large vehicles from
                    point A to B, often between ferry terminals and destinations
                    across Europe.
                  </p>
                  <br />
                  <p className="text-gray-400">
                    Every move is carried out by experienced drivers using green
                    plates under our insurance coverage.
                  </p>
                  <p className="text-gray-400">
                    Safety and compliance are paramount — we train all our
                    drivers annually to stay current with the latest transport
                    laws, ferry regulations, and best practices.
                  </p>
                  <br />
                  <p className="text-gray-400">
                    Although today this is a smaller part of our business, it
                    remains the foundation that shaped who we are: dependable,
                    hands-on professionals who take pride in every kilometer
                    driven.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-red-600 h-full p-8 relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/20 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 bg-black flex items-center justify-center">
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    <div className="h-12 w-1 bg-black"></div>
                  </div>
                  <h3 className="mb-3 text-white uppercase tracking-wide">
                    Automotive Surveys
                  </h3>
                  <p className="text-white/90">
                    Today, this is the core of what we do. At Gothenburg Port
                    and other strategic locations, our certified surveyors
                    inspect vehicles of all kinds — from passenger cars to heavy
                    trucks — to detect and document any transport damage before
                    further shipment.
                  </p>
                  <br />
                  <p className="text-white/90">
                    Each inspection includes detailed photographic evidence and
                    precise reporting, ensuring full transparency for all
                    parties involved.
                  </p>
                  <p className="text-white/90">
                    Beyond vehicles, we also inspect containers and general
                    cargo, checking for structural integrity, seal condition,
                    and proper load security before departure.
                  </p>
                  <br />
                  <p className="text-white/90">
                    We provide survey services that meet strict international
                    standards. Our clients depend on our accuracy, neutrality,
                    and attention to detail — and we deliver, every day.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-black h-full p-8 relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 bg-red-600 flex items-center justify-center">
                      <Truck className="h-8 w-8 text-white" />
                    </div>
                    <div className="h-12 w-1 bg-red-600"></div>
                  </div>
                  <h3 className="mb-3 text-white uppercase tracking-wide">
                    Truck Brokerage Services
                  </h3>
                  <p className="text-gray-400">
                    With decades of experience in the transport industry, we
                    understand both the technical and commercial aspects of
                    every transaction.
                  </p>
                  <br />
                  <p className="text-gray-400">
                    We identify suitable vehicles, verify their condition, and
                    handle the entire process — from purchase to delivery — with
                    the same professionalism that defines our transport and
                    survey operations.
                  </p>
                  <p className="text-gray-400">
                    Our strong network of suppliers and partners ensures that
                    every deal is handled transparently and efficiently, whether
                    for domestic use or export.
                  </p>
                  <br />
                  <p className="text-gray-400">
                    At Future Logistics Sweden AB, vehicle trading isn’t about
                    volume — it’s about trust, quality, and long-term
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Diagonal background accent */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full bg-black"
          style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-600 text-white px-4 py-1 mb-6 uppercase tracking-wider text-sm">
                Founded in 2011
              </div>
              <h2 className="mb-6 text-5xl uppercase tracking-tight">
                Built on
                <br />
                <span className="text-red-600">Service & Trust</span>
              </h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-600 mb-6 text-lg">
                Since 2011, Future Logistics Sweden AB has built its reputation
                on reliability, experience, and a personal commitment to
                service. Founded by Scott Lindahl, a logistics professional with
                more than 30 years in the industry — spanning the United States
                and Sweden — the company started small with one clear mission:
                deliver every vehicle safely and professionally.
              </p>
              <p className="text-gray-600 mb-10 text-lg">
                From those beginnings, we have grown into a trusted partner for
                automotive surveys, vehicle trading, and specialized transport
                services across Sweden and Europe. Our success is built on
                satisfied clients, dedicated drivers, and a focus on quality in
                everything we do.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="border-l-4 border-red-600 pl-4">
                  <div className="text-5xl mb-2 text-black">2011</div>
                  <p className="text-gray-600 uppercase tracking-wide text-sm">
                    Founded
                  </p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <div className="text-5xl mb-2 text-black">30+</div>
                  <p className="text-gray-600 uppercase tracking-wide text-sm">
                    Years Experience
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <div className="text-5xl mb-2 text-white md:text-black">
                    0
                  </div>

                  <p className="text-gray-600 uppercase tracking-wide text-sm">
                    Shortcuts
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-red-600"></div>
              <div className="relative h-[500px] overflow-hidden">
                <ImageWithFallback
                  src="About.png"
                  alt="Future Logistics fleet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600 text-white px-4 py-1 mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </div>
            <h2 className="mb-4 text-white text-5xl uppercase tracking-tight">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">
              No delays. No excuses. Just professional delivery, inspection, and
              service — every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-8 relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
              <div className="text-center pt-4">
                <div className="h-16 w-16 bg-red-600 flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-3 uppercase tracking-wide">Call Us</h4>
                <p className="text-gray-600 text-lg mb-1">
                  Contact us for phone details
                </p>
                <p className="text-gray-500 text-sm">
                  Available for clients across Europe
                </p>
              </div>
            </div>

            <div className="bg-red-600 p-8 relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
              <div className="text-center pt-4">
                <div className="h-16 w-16 bg-black flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-3 text-white uppercase tracking-wide">
                  Email Us
                </h4>
                <p className="text-white text-lg mb-1">
                  Contact us for email details
                </p>
                <p className="text-white/80 text-sm">
                  Quick response and professional support
                </p>
              </div>
            </div>

            <div className="bg-white p-8 relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
              <div className="text-center pt-4">
                <div className="h-16 w-16 bg-red-600 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-3 uppercase tracking-wide">Visit Us</h4>
                <p className="text-gray-600 text-lg mb-1">Swedish West Coast</p>
                <p className="text-gray-500 text-sm">Near Gothenburg Port</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <div className="border-t border-gray-800 py-8 text-center text-gray-400">
        <p>&copy; 2025 Future Logistics Sweden AB. All rights reserved.</p>
      </div>
    </div>
  );
}
