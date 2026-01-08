import { Link } from 'react-router-dom';
import heroBuilding from '@/assets/hero-building.jpg';

const HeroSection = () => {
  return (
    <section className="bg-secondary py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <span className="text-primary font-semibold">Dillon & Bird</span>
            <h1 className="heading-display text-primary-dark">
              Driving Unprecedented Growth and Innovation Across the GCC
            </h1>
            <p className="text-primary font-medium text-lg">
              Strategic Partnerships | Sustainable Value | Future-Forward Solutions
            </p>
            <p className="text-body max-w-lg">
              Dillon & Bird is your dedicated strategic partner in the GCC. We integrate finance, 
              technology, and marketing expertise to help ambitious businesses scale with confidence.
            </p>
            <div className="pt-2">
              <Link to="/contact" className="btn-primary">
                Let's Grow
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last animate-slide-in-right">
            <div className="relative">
              <img
                src={heroBuilding}
                alt="Modern GCC corporate architecture"
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
