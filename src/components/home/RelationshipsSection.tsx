import { Link } from 'react-router-dom';
import sectionImg10 from '@/assets/section-img-10.jpg';

const RelationshipsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={sectionImg10}
              alt="Building lasting relationships"
              className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-lg"
            />
            {/* Decorative accent bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-lg"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="heading-section text-primary-dark">Building Lasting Relationships</h2>
            <p className="text-body">
              Our commitment extends beyond engagement. We build trusted partnerships grounded in 
              strategic clarity, reliability, and long-term value creation—supporting your growth 
              today and into the future.
            </p>
            <div className="pt-2">
              <Link to="/contact" className="btn-dark">
                Build With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationshipsSection;
