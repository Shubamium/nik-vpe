import Header from "./components/header/Header";
import GeneralInfo from "./section/generalInfo/GeneralInfo";
import GeneralPoints from "./section/generalPoints/GeneralPoints";
import HeroSection from "./section/heroSection/HeroSection";

export default function Home() {
  return (
    <main className={""}>
      <HeroSection />
      <GeneralInfo />
      <GeneralPoints />
    </main>
  );
}
