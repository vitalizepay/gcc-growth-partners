import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import PartneringSection from '@/components/home/PartneringSection';
import RelationshipsSection from '@/components/home/RelationshipsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhoWeAreSection />
      <ExpertiseSection />
      <PartneringSection />
      <RelationshipsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
