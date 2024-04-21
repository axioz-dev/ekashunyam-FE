import React, { lazy, Suspense, useRef } from "react";
import Loader from "@/components/Loader/Loader";

const Landing = lazy(() => import("@/components/Additional/Landing/Landing"));
const HorizontalScroll = lazy(() =>
  import("@/components/HorizontalScroll/HorizontalScroll")
);
const Glass = lazy(() => import("@/components/Additional/Glassmorphism/Glass"));
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
      <Suspense fallback={<Loader />}>
        <Glass />
      </Suspense>
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
