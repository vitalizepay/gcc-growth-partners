import { Link } from 'react-router-dom';
import sectionImg11 from '@/assets/section-img-11.jpg';

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={sectionImg11}
          alt="GCC City Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/85"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="heading-section text-primary-foreground">
            Let's Shape the Future of Your Business in the GCC
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Connect with our UAE headquarters to explore tailored partnership opportunities. 
            Whether you are an emerging startup or an established enterprise, we are ready 
            to collaborate and drive impactful growth across the region.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
