import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import sectionImg4 from '@/assets/section-img-4.jpg';
import sectionImg5 from '@/assets/section-img-5.jpg';
import sectionImg6 from '@/assets/section-img-6.jpg';
import sectionImg7 from '@/assets/section-img-7.jpg';
import sectionImg8 from '@/assets/section-img-8.jpg';
import sectionImg9 from '@/assets/section-img-9.jpg';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Business in the GCC: Trends to Watch in 2024',
    excerpt: 'Explore the key economic shifts and opportunities shaping the Gulf region as we move into a new era of growth.',
    image: sectionImg4,
    date: 'December 15, 2024',
    category: 'Market Insights',
  },
  {
    title: 'Strategic Partnerships: The Key to Sustainable Growth',
    excerpt: 'Learn how collaborative business models are transforming how companies scale in the Middle East.',
    image: sectionImg5,
    date: 'December 8, 2024',
    category: 'Strategy',
  },
  {
    title: 'Navigating Company Formation in the UAE',
    excerpt: 'A comprehensive guide to setting up your business in the UAE, from free zones to mainland options.',
    image: sectionImg6,
    date: 'November 28, 2024',
    category: 'Corporate Services',
  },
  {
    title: 'Digital Transformation: A Necessity for GCC Enterprises',
    excerpt: 'Why technology adoption is no longer optional and how to start your digital journey.',
    image: sectionImg7,
    date: 'November 20, 2024',
    category: 'Technology',
  },
  {
    title: 'Financial Planning for Startups: Lessons from the Region',
    excerpt: 'Key financial strategies that successful GCC startups use to attract investment and scale.',
    image: sectionImg8,
    date: 'November 12, 2024',
    category: 'Finance',
  },
  {
    title: 'Building a Culture of Excellence in Your Organization',
    excerpt: 'How leading GCC companies are fostering innovation and attracting top talent.',
    image: sectionImg9,
    date: 'November 5, 2024',
    category: 'Leadership',
  },
];

const Blogs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold mb-4 block">Insights</span>
            <h1 className="heading-display text-primary-dark mb-6">
              Blogs & Insights
            </h1>
            <p className="text-body text-lg">
              Stay informed with the latest trends, strategies, and insights from our team of 
              experts. Discover thought leadership that shapes the future of business in the GCC.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h2 className="heading-card text-primary-dark line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-small line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-outline">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-secondary py-16">
        <div className="container-custom text-center">
          <h2 className="heading-section text-primary-dark mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-body mb-8 max-w-xl mx-auto">
            Get the latest insights delivered directly to your inbox. Join thousands of 
            business leaders staying ahead of the curve.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
