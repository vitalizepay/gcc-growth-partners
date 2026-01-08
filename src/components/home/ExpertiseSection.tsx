import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sectionImg4 from '@/assets/section-img-4.jpg';
import sectionImg5 from '@/assets/section-img-5.jpg';
import sectionImg6 from '@/assets/section-img-6.jpg';
import sectionImg7 from '@/assets/section-img-7.jpg';

const expertiseItems = [
  {
    title: 'Strategic Partnerships',
    description: 'Collaborative growth models designed to unlock long-term value.',
    image: sectionImg4,
  },
  {
    title: 'Management Consulting',
    description: 'Data-driven strategies that accelerate performance and transformation.',
    image: sectionImg5,
  },
  {
    title: 'Corporate Services',
    description: 'End-to-end operational support so you can focus on growth.',
    image: sectionImg6,
  },
  {
    title: 'Company Formation',
    description: 'Fast, compliant business setup across the GCC.',
    image: sectionImg7,
  },
];

const ExpertiseSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="heading-section text-primary-dark">Our Expertise</h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="card-expertise flex-shrink-0 w-72 sm:w-80 snap-start"
            >
              <div className="image-overlay h-48 sm:h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="heading-card text-primary-dark">{item.title}</h3>
                <p className="text-small">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
