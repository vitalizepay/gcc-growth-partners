import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import sectionImg2 from '@/assets/section-img-2.jpg';
import sectionImg3 from '@/assets/section-img-3.jpg';
import sectionImg10 from '@/assets/section-img-10.jpg';
import { Target, Eye, Heart, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Strategic Excellence',
    description: 'We deliver data-driven strategies that drive measurable outcomes and sustainable growth.',
  },
  {
    icon: Eye,
    title: 'Visionary Thinking',
    description: 'We anticipate market shifts and position our partners ahead of the curve.',
  },
  {
    icon: Heart,
    title: 'Partnership First',
    description: 'We invest in relationships, not transactions. Your success is our success.',
  },
  {
    icon: Shield,
    title: 'Integrity Always',
    description: 'We operate with transparency and ethical rigor in every engagement.',
  },
];

const WhoWeAre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold mb-4 block">About Us</span>
            <h1 className="heading-display text-primary-dark mb-6">
              Who We Are
            </h1>
            <p className="text-body text-lg">
              We are the architects of progress for GCC businesses. Through strategic foresight 
              and operational excellence, we empower organizations to thrive in a dynamic economy.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-section text-primary-dark">Our Story</h2>
              <p className="text-body">
                Founded with a vision to transform how businesses grow in the Gulf region, 
                Dillon & Bird has become a trusted partner for enterprises seeking strategic 
                excellence.
              </p>
              <p className="text-body">
                From ambitious startups to established family enterprises, we bring decades of 
                combined experience in finance, technology, and market expansion. Our approach 
                combines global best practices with deep regional expertise.
              </p>
              <p className="text-body">
                Today, we continue to push boundaries, helping our clients navigate complexity 
                and unlock unprecedented opportunities across the GCC.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={sectionImg2}
                alt="Team collaboration"
                className="rounded-lg shadow-lg object-cover h-64"
              />
              <img
                src={sectionImg3}
                alt="Business meeting"
                className="rounded-lg shadow-lg object-cover h-64 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-section text-primary-dark mb-4">Our Values</h2>
            <p className="text-body max-w-2xl mx-auto">
              These principles guide every decision we make and every partnership we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-card text-primary-dark mb-2">{value.title}</h3>
                <p className="text-small">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src={sectionImg10}
              alt="Leadership"
              className="rounded-lg shadow-lg object-cover h-96"
            />
            <div className="space-y-6">
              <h2 className="heading-section text-primary-dark">Leadership Philosophy</h2>
              <p className="text-body">
                Our leadership team brings together decades of experience from global consulting 
                firms, investment banks, and technology companies. We believe in leading by example, 
                fostering innovation, and maintaining the highest standards of professional excellence.
              </p>
              <p className="text-body">
                We empower our clients to make bold decisions backed by rigorous analysis and 
                strategic insight. Our collaborative approach ensures that every solution is 
                tailored to your unique challenges and aspirations.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
