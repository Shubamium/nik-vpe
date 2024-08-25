import Header from "./components/header/Header";
import GeneralInfo from "./section/generalInfo/GeneralInfo";
import GeneralPoints from "./section/generalPoints/generalPoints";
import HeroSection from "./section/heroSection/HeroSection";

export default function Home() {
  return (
    <main className={""}>
      <Header />
      <HeroSection />
      <GeneralInfo />
      <GeneralPoints />
    </main>
  );
}
