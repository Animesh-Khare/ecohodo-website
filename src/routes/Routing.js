import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "../shared/components/NotFoundPage/NotFoundPage";

const Home = lazy(() => import("../app/modules/home/pages/Home"));
const AboutUs = lazy(() => import("../app/modules/about/pages/AboutUs"));
const ContactUs = lazy(() => import("../app/modules/contact/pages/ContactUs"));
const JoinUs = lazy(() => import("../app/modules/join/pages/JoinUs"));

const Loading = () => <p>Loading ...</p>;

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/joinus" element={<JoinUs />}></Route>{" "}
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routing;
