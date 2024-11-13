
import Navbar from "./Features/LandingPage/MainHead.jsx";
import CategorySlider from "./Features/LandingPage/Subcomponents/CategoriesCards.jsx";
import LandingPage from "./Features/LandingPage/Subcomponents/LandingPage.jsx";
import ProductGrid from "./Features/LandingPage/Subcomponents/ProductsCard.jsx";
import RegisterSection from "./Features/LandingPage/Subcomponents/RegisterAdd.jsx";
import ProductMarket from "./Features/LandingPage/Subcomponents/Marketshow.jsx";
import TestimonialSlider from "./Features/LandingPage/Subcomponents/Testimonial.jsx";
import MarketplaceSection from "./Features/LandingPage/Subcomponents/MarketPlace.jsx";
import BenefitsProcess from "./Features/LandingPage/Subcomponents/Benefits.jsx";
import Footer from './Features/LandingPage/Subcomponents/Footer.jsx';
function App() {
  return (
    <div >
      <Navbar/>
      <LandingPage/>
      <CategorySlider/>
      <ProductGrid/>
      <RegisterSection/>
      <ProductMarket/>
      <MarketplaceSection/>
      <TestimonialSlider/>
      <BenefitsProcess/>
      <Footer/>
    
    </div>
  );
};

export default App;