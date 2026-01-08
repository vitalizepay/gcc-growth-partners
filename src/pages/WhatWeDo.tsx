import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import sectionImg4 from '@/assets/section-img-4.jpg';
import sectionImg5 from '@/assets/section-img-5.jpg';
import sectionImg6 from '@/assets/section-img-6.jpg';
import sectionImg7 from '@/assets/section-img-7.jpg';
import { Handshake, LineChart, Building2, FileText, Calculator, TrendingUp, Cpu } from 'lucide-react';

const services = [
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description: 'Collaborative growth models designed to unlock long-term value. We help you identify, structure, and execute partnerships that accelerate your business objectives.',
    image: sectionImg4,
  },
  {
    icon: LineChart,
    title: 'Management Consulting',
    description: 'Data-driven strategies that accelerate performance and transformation. Our consultants bring deep industry expertise to solve your most complex challenges.',
    image: sectionImg5,
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    description: 'End-to-end operational support so you can focus on growth. From HR to legal compliance, we handle the essentials while you build your business.',
    image: sectionImg6,
  },
  {
    icon: FileText,
    title: 'Company Formation',
    description: 'Fast, compliant business setup across the GCC. We navigate regulatory complexities to get your entity established quickly and correctly.',
    image: sectionImg7,
  },
  {
    icon: Calculator,
    title: 'Accounting & Financial Services',
    description: 'Comprehensive financial management including bookkeeping, tax planning, and financial reporting to keep your business fiscally sound.',
    image: sectionImg5,
  },
  {
    icon: TrendingUp,
    title: 'Investor & Financial Planning',
    description: 'Strategic financial advisory services to attract investment, optimize capital structure, and plan for sustainable growth.',
    image: sectionImg4,
  },
  {
    icon: Cpu,
    title: 'Technology Consulting',
    description: 'Digital transformation expertise to modernize your operations, enhance customer experiences, and build competitive advantage.',
    image: sectionImg6,
  },
];

const WhatWeDo = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold mb-4 block">Our Services</span>
            <h1 className="heading-display text-primary-dark mb-6">
              What We Do
            </h1>
            <p className="text-body text-lg">
              Comprehensive consulting services tailored to the unique needs of GCC businesses. 
              From strategy to execution, we partner with you at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="heading-section text-primary-dark">{service.title}</h2>
                  <p className="text-body">{service.description}</p>
                  <Link to="/contact" className="btn-primary inline-block">
                    Learn More
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg object-cover h-72 w-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="heading-section text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your strategic objectives.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
