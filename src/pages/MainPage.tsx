import Slider from "../components/Slider.tsx";
import WelcomeSect from "../components/WelcomeSect.tsx";
import AboutUsSect from "../components/AboutUsSect.tsx";
import AdvantagesSect from "../components/AdvantagesSect.tsx";
import FaqSect from "../components/FaqSect.tsx";
import ContactSect from "../components/ContactSect.tsx";
import LastRegSect from "../components/LastRegSect.tsx";



const MainPage = () => {


  return (
    <div >
      <WelcomeSect/>
      <AboutUsSect/>
      <AdvantagesSect/>
      <section className="px-4" id={"cases"} >
        <h2 className="lg:text-4xl sm:text-2xl sm:font-black lg:font-bold  lg:mt-40 sm:mt-32 text-center ">Кейсы</h2>
        <div className="mx-auto mt-4 flex justify-center">
          <Slider></Slider>
        </div>
      </section>
      <FaqSect/>
      <ContactSect/>
      <LastRegSect/>
    </div>
  );
};
export default MainPage;
