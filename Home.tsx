import HeroBanner from './HeroBanner';
import CollectionsCircular from './CollectionsCircular';
import FeaturedProducts from './FeaturedProducts';
import BrandStatement from './BrandStatement';
import CategoryHighlight from './CategoryHighlight';
import StyleCollections from './StyleCollections';
import TopPicks from './TopPicks';
import Testimonials from './Testimonials';
import TrustBadges from './TrustBadges';

function Home() {
  return (
    <>
      <HeroBanner />
      <CollectionsCircular />
      <FeaturedProducts />
      <BrandStatement />
      <CategoryHighlight />
      <StyleCollections />
      <TopPicks />
      <Testimonials />
      <TrustBadges />
    </>
  );
}

export default Home;
