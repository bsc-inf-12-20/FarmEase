import SearchComponent from './SearchComponent';
import LandImage from './image01.jpg';

const LandingPage = () => {
  return (
    <div className="relative font-poppins min-h-screen">
      <div 
        className="bg-cover bg-center min-h-screen flex flex-col justify-end pb-8 md:pb-12 lg:pb-16"
        style={{
          backgroundImage: `url(${LandImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-20 text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal shadow-md text-white tracking-tight px-4">
            From Farm to Market,{' '}
            <br />
            <span className="text-[#22c55e] drop-shadow-2xl font-semibold">Seamlessly.</span>
          </h1>
        </div>
        <div className="relative z-10">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;