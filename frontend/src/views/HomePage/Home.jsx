
import {
  CarsForRental,
  Contact,
  FAQ,
  Hero,
  News,
  Pricing,
  RentingProcess,
  Services,
  Testimonials,
  Footer,
} from "../index";

const Home = () => {
  return (
    <main className="w-full">
      <section className=" ">
        <Hero />
      </section>

      <section className=" lg:mt-24 mt-14">
        <RentingProcess />
      </section>

      <section className=" lg:mt-24  mt-14 wrapper">
        <CarsForRental />
      </section>

      <section className=" lg:mt-24 mt-14">
        <Testimonials />
      </section>

      <section className=" lg:mt-24 mt-14 wrapper">
        <Pricing />
      </section>

      <section className=" lg:mt-24 mt-14 ">
        <News />
      </section>

      <section className=" mt-14 ">
        <Services />
      </section>

      <section className=" lg:mt-24 mt-20 ">
        <Contact />
      </section>

      <section className=" lg:mt-24 mt-20 wrapper">
        <FAQ />
      </section>
    </main>
  );
};

export default Home;
