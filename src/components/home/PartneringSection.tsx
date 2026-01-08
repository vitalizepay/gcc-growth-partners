import { Link } from 'react-router-dom';
import partnerLogos from '@/assets/partner-logos.png';
import sectionImg8 from '@/assets/section-img-8.jpg';
import sectionImg9 from '@/assets/section-img-9.jpg';

const PartneringSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="heading-section text-primary-dark">Partnering for Success</h2>
            <p className="text-body">
              We collaborate with visionary founders and established enterprises to drive innovation 
              across the GCC. Trusted by brands such as Washmen, Kitopi, and Sarwa, we transform 
              ambition into scalable, sustainable impact.
            </p>
            <div className="pt-2">
              <Link to="/what-we-do" className="btn-primary">
                See Our Work
              </Link>
            </div>
            {/* Partner Logos */}
            <div className="pt-6">
              <img
                src={partnerLogos}
                alt="Our Partners - Washmen, Sarwa, Kitopi"
                className="max-w-xs opacity-60"
              />
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-4">
              <img
                src={sectionImg8}
                alt="Modern office space"
                className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-lg"
              />
              <img
                src={sectionImg9}
                alt="Professional workspace"
                className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartneringSection;
