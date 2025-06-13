
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedGuides from '@/components/FeaturedGuides';
import Categories from '@/components/Categories';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedGuides />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
