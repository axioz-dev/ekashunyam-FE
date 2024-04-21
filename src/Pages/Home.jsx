import React, { lazy, Suspense, useRef } from "react";
// import Brochure from "@/components/Additional/Brochure/Brochure";
// import Footer from "@/components/Additional/Footer/Footer";
import Glass from "@/components/Additional/Glassmorphism/Glass";
// import Navbar from "@/components/Additional/Navbar/Navbar";
import Loader from "@/components/Loader/Loader";

const Landing = lazy(() => import("@/components/Additional/Landing/Landing"));
const HorizontalScroll = lazy(() =>
  import("@/components/HorizontalScroll/HorizontalScroll")
);
const GeneralRules = lazy(() =>
  import("@/components/Additional/GeneralRules/GeneralRules")
);
const Brochure = lazy(() =>
  import("@/components/Additional/Brochure/Brochure")
);

const Navbar = lazy(() => import("@/components/Additional/Navbar/Navbar"));

const Footer = lazy(() => import("@/components/Additional/Footer/Footer"));

const Home = () => {
  const scrollRefs = useRef(null);

  return (
    <div className="overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Navbar scrollRefs={scrollRefs}></Navbar>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Landing scrollRefs={scrollRefs}></Landing>
      </Suspense>
      <Glass />
      <Suspense fallback={<Loader />}>
        <HorizontalScroll />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <GeneralRules />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Brochure />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
