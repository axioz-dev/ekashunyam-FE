import React, { lazy, Suspense } from "react";
import Brochure from "@/components/Additional/Brochure/Brochure";
import Footer from "@/components/Additional/Footer/Footer";
import Glass from "@/components/Additional/Glassmorphism/Glass";
// import Developers from "@/components/Additional/Developers/Developers";
import Landing from "@/components/Additional/Landing/Landing";
import Navbar from "@/components/Additional/Navbar/Navbar";

const HorizontalScroll = lazy(() =>
  import("@/components/HorizontalScroll/HorizontalScroll")
);

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Landing></Landing>
      <Glass />
      <Suspense fallback={<div>Loading...</div>}>
        <HorizontalScroll />
      </Suspense>
      <Brochure />
      {/* <Developers /> */}
      <Footer />
    </div>
  );
};

export default Home;
