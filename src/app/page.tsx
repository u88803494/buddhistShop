import HeaderCarousel from "./components/HeaderCarousel";
import HotProductsSection from "./components/HotProductsSection";
import LatestNewsSection from "./components/LatestNewsSection";

export default function Home() {
  return (
    <>
      <HeaderCarousel />
      <HotProductsSection />
      <LatestNewsSection />
    </>
  );
}
