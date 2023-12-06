/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ResearchImpactCard from "../../Components/ResearchImpact/ResearchImpactCard";
import SectionCardTwo from "../../Components/SectionCardTwo/SectionCardTwo";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const DetailsTwo = () => {
  return (
    <div>
      <Helmet>
        <title>Chad Smith | Automated Equipment Dispatching </title>
      </Helmet>
      <div className="bg-white">
        <Navbar />
        <div className="max-w-containerX mx-auto px-4 md:px-8 lg:px-4 mt-[60px]">
          <p className="text-[#2B2B2B] text-[16px] font-Playfair font-normal leading-6">
            New Product,
          </p>
          <p className="text-[#2B2B2B] text-[24px] font-Playfair font-medium leading-[34px]">
            Automated Equipment Dispatching
          </p>

          <div className="lg:flex items-center gap-[120px] mt-10 md:mt-10 lg:mt-0">
            <div className="lg:w-[740px] w-full mt-[60px]">
              <h2 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
                Hypothesis
              </h2>

              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
                Introducing features that automate equipment dispatching will
                reduce employee workloads, while also decreasing the number of
                days equipment sit idle at jobsites waiting to be picked up.
              </p>

              <h2 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] mt-6">
                Objective
              </h2>

              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
                The research started with understanding how target users
                dispatched equipment, along with top tasks connected to
                equipment dispatching. <span className="font-bold">Experience Mapping</span> was used to visualize
                how these tasks occur and to document existing pain points. The
                insights helped Product Management determine whether the current
                product roadmap addressed discovered issues.
              </p>

              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
                This research was also paired with both <span className="font-bold">Day-in-the-Life</span>
                narrative documents and panel discussion to build a shared
                understanding of the target users standard day. <span className="font-bold">Concept Testing</span>
                of the automation features were then completed to help
                understand the target users expectations, which informed
                training needs & communication.
              </p>

              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
                In support of the features rolling out, <span className="font-bold">feedback surveys</span> were
                distributed at specific checkpoints. Surves were distributed
                <span className="font-bold">post-completion of training</span>, for example, to assess how
                confident pilot users felt using the upcoming features. Surveys
                were also created for distribution at <span className="font-bold">2 weeks of usage</span> of the
                new features to guage ease-of-use and satisfaction.
              </p>

              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
                Future proposed research focused on measuring <span className="font-bold">Engagement,
                Adoption and Retention</span> using the automation features; while also
                rechecking for ease-of-use and satisfaction at 8 weeks of usage.
                Future state concept designs were also slated testing, in tandem
                with a proposed <span className="font-bold">Kano Model</span> identifying unmet needs for future
                enhancements.
              </p>
            </div>

            <div className="lg:w-[448px] w-full mt-14 md:mt-14 lg:mt-0">
              <img
                className="lg:w-[448px] object-cover w-full h-[492px] rounded-lg"
                src="https://img.freepik.com/free-photo/elegant-woman-standing-gas-station_1157-33894.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
                alt=""
              />
            </div>
          </div>

          <div className="mt-[90px] px-4 md:px-8 lg:px-4">
            <h1 className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3">
              Research Impact
            </h1>

            <ResearchImpactCard />
          </div>
        </div>

        <div className="">
          <SectionCardTwo />
        </div>

        <div className="pb-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DetailsTwo;
