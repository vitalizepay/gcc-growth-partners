import { Link } from 'react-router-dom';
import sectionImg2 from '@/assets/section-img-2.jpg';
import sectionImg3 from '@/assets/section-img-3.jpg';

const WhoWeAreSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={sectionImg2}
                  alt="Team collaboration"
                  className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="pt-8">
                <img
                  src={sectionImg3}
                  alt="Business professionals"
                  className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-primary rounded-full"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="heading-section text-primary-dark">Who We Are?</h2>
            <p className="text-body">
              We are the architects of progress for GCC businesses—from high-growth startups to 
              established family enterprises. Through strategic foresight, disciplined execution, 
              and operational excellence, we deliver enduring value in a rapidly evolving economic landscape.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/who-we-are" className="btn-primary">
                Our Story
              </Link>
              <Link to="/what-we-do" className="btn-outline">
                Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
