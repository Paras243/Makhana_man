import  Hero from './components/Hero';
import  OriginStory  from './components/OriginStory';
import WhyMakhana  from './components/WhyMakhana';
import ProductShowcase  from './components/ProductShowcase';
import  HealthBenefits  from './components/HealthBenefits';
import  LifeStyle  from './components/LifeStyle';
import Footer  from './components/Footer';
import  Navbar  from './components/Navbar';
import ComicGrid from "./components/ComicGrid";
import './index.css';
import'./App.css';

export default function App() {
  return (
    <div className="bg-[#1A1A1D] text-[#F5F3F4] overflow-x-hidden">
      <Navbar page ="home"/>
      <Hero />
      <ComicGrid/>
      <OriginStory />
      <WhyMakhana />
      {/* <Makhana/> */}
      <ProductShowcase />
      <HealthBenefits />
      <LifeStyle />
      <Footer />
    </div>
  );
}
