import React from "react";
import Layout from "../layout";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import Services from "../Components/Services";
import Property from "../Components/Property";
import StorySection from "../Components/StorySection";
import FindPlace from "../Components/FindPlace";
import LearnMore from "../Components/LearnMore";
import TeamSection from "../Components/TeamSection";
import BlogSection from "../Components/BlogSection";
import ContactUs from "../Components/ContactUs";

function Home() {
  return (
    <div className="overflow-hidden">
      <Layout>
        <div className="-mt-[80px]  relative z-0">
          <div className="absolute mt-[350px] z-10  ">
            <button className="custom-prev-button">
            <img src="/assets/images/bgSliderPrev.png" alt="" />
          </button>
          </div>
          <HeroSection />
          <div className=" mt-[-360px] absolute z-10">
            <button className="custom-next-button ">
            <img className="flex items-end" src="/assets/images/bgSliderNext.png" alt="" />
            </button>
          </div>
        </div>
        <div className="max-w-[1291px] mx-auto w-full">
          <AboutSection />
          <Services />
          <Property />
        </div>
        <StorySection />
        <FindPlace />
        <LearnMore />
        <div className="max-w-[1291px] mx-auto w-full">
          <TeamSection />
          <BlogSection />
        </div>
        <ContactUs />
      </Layout>
    </div>
  );
}

export default Home;
