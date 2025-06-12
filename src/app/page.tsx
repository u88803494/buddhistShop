import HeaderCarousel from "./components/HeaderCarousel";
import HotProductsSection from "./components/HotProductsSection";
import LatestNewsSection from "./components/LatestNewsSection";
import JingSiProductsSection from "./components/JingSiProductsSection";
import JingSiPureProductsSection from "./components/JingSiPureProductsSection";

export default function Home() {
  return (
    <>
      <HeaderCarousel />
      <HotProductsSection />
      <LatestNewsSection />
      <JingSiProductsSection />
      <JingSiPureProductsSection />
    </>
  );
}
