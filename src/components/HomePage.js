import React from "react";
import Header from "./header";
import AboutUs from "./AboutUs";
import HotelLists from "./HotelLists";
import HomePageFooter from "./HomepageFooter";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <section>
        <AboutUs />
      </section>
      <section>
        <HotelLists />
      </section>
      <footer>
        <HomePageFooter />
      </footer>
    </Fragment>
  );
}

export default HomePage;
