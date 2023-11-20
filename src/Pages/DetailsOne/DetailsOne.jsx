import Navbar from "../../Components/Navbar/Navbar";

/* eslint-disable react/no-unescaped-entities */
const DetailsOne = () => {
  return (
    <div className="">
       <Navbar/>


      <div className="bg-[#4030E8]  lg:h-[100vh] md:h-[90vh] h-[80vh] flex flex-col justify-center items-center">
        <h1 className="2xl:text-[120px] lg:text-[88px] md:text-[95px] text-[56px] text-white font-Montserrat font-bold 2xl:w-[900px] lg:w-[700px] md:w-full w-full text-center 2xl:leading-[130px] lg:leading-[91px] md:leading-[110px] leading-[70px]">
          Kimberly-Clark Professional
        </h1>

        <p className="md:text-[32px] text-[24px] text-white font-Montserrat font-normal text-center mt-8">
          UX Research Lead
        </p>
      </div>


      <div className="bg-white h-[300px] w-full ">
        <div className="max-w-[800px] mx-auto flex justify-center items-center h-[300px] px-4 md:px-8 lg:px-0">
          <p className="text-[18px] font-Montserrat font-light text-black leading-7">
            I led UX Research responsibilities at Kimberly-Clark Professional,
            focused on the customer-facing website. My responsibilities included{" "}
            <span className="text-[18px] font-Montserrat font-semibold text-black">
              evaluative research to understand pain points completing the
              site's top tasks, leading co-designing workshops to improve the
              product design process, and conducting concept testing.
            </span>
          </p>
        </div>
      </div>

      <div className="bg-[#666F72] h-[200px] w-full ">
        <div className="max-w-[800px] mx-auto flex justify-center items-center h-[200px]">
          <p className="md:text-[32px] text-[24px] font-Montserrat font-bold text-white leading-7">
            Evaluative Research
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto lg:flex justify-center gap-20 lg:py-32 py-20 px-4 md:px-8 lg:px-4">
          <div className="lg:w-[435px] md:w-[460px] w-full">
            <img
              className="object-contain  md:mx-auto lg:mx-0 w-full h-[250px]"
              src="https://storage.googleapis.com/uxfolio/607dc3b2df0244000305af9b/62e80b15f390fd00034ec3f3/fQVEh4j4dYynL7O9.png"
              alt=""
            />
            <p className="text-[#60676D] text-[16px] font-Montserrat font-normal mt-5 md:text-center text-left lg:text-left">
              Slide from A/B Testing Report
            </p>
          </div>

          <div className="w-[500px] flex flex-col gap-6 font-Montserrat mt-10 md:mt-10 lg:mt-0">
            <p className="text-[#60676D] text-[16px]  font-normal leading-7">
              For the Evaluative Research, I focused primarily on unmoderated
              Usability Testing. The process entailed creating research scoping
              documents with the Product Manager, to identify the research
              goals, personas, number of participants, and timelines to share
              the findings. My focus was on the top 5 tasks on the site, which
              were “Find a specific product”, “Find a refillable product”, “Find
              a spare part”, “FInd a retailer”, “Find a distributor” and “FInd a
              retailer”. I then created test scripts and implemented the
              material into UserZoom
            </p>

            <p className="text-[#60676D] text-[16px]  font-normal leading-7">
              For Qual generation, I asked participants to think out loud to
              help us understand their experience completing tasks. For Quant
              generation, I reviewed task success percentages, correct answers
              to validations questions, and, for participants unable to complete
              tasks, follow-up question responses. Both data points were used to
              build findings and recommendations
            </p>

            <p className="text-[#60676D] text-[16px]  font-normal leading-7">
              To help increase the likelihood of my findings both reaching
              Product Management's roadmap and being developed, I regularly
              conducted additional follow-up research as well. For example, I
              worked with another teammate to conduct an unmoderated Card Sort
              to see if we could replicate the issues notified within Usability
              Testing The strategy proved successful, as some tasks showed over
              15% of Card Sort participants incorrectly associating the tasks'
              content within its corresponding section. For one specific task,
              "Find a refillable product", I also worked with the Calll Center
              to team to pull 30 days' worth of data, and found 20% of calls
              were related to customers requesting assistance finding refillable
              products. I also lead A/B testing of proposed experience changes,
              via Google Optimize, comparing task percentages of the proposed vs
              current experience for the top tasks
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#666F72] h-[200px] w-full ">
        <div className="max-w-[800px] mx-auto flex justify-center items-center h-[200px]">
          <p className="md:text-[32px] text-[24px] font-Montserrat font-bold text-white leading-7">
            Co-designing Workshops
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto lg:flex justify-center gap-20 lg:py-28 py-20 px-4 md:px-8 lg:px-4">
          <div className="lg:w-[535px] md:w-[500px] w-full">
            <img
              className="object-contain md:mx-auto lg:mx-0 w-full h-[250px]"
              src="https://storage.googleapis.com/uxfolio/607dc3b2df0244000305af9b/62e80b15f390fd00034ec3f3/RwULxviOWChjljTP.png"
              alt=""
            />
            <p className="text-[#60676D] text-[16px] font-Montserrat font-normal mt-6 text-center lg:w-[535px] w-full">
              Screenshot of redesigned process
            </p>
          </div>

          <div className="lg:w-[800px] w-full flex flex-col gap-6 mt-10 md:mt-10 lg:mt-0 font-Montserrat">
            <p className="text-[#60676D] text-[16px]  font-normal leading-7">
              While supporting customer-facing product, I also lead the redesign
              of the product design process. The existing process lacked defined
              steps to gather customer and end-user feedback
            </p>

            <p className="text-[#60676D] text-[16px]  font-normal leading-7">
              As a first step, I administered an open-ended survey to understand
              to team pain points on the existing process and requested ideas to
              improve the process. I then synthesize the findings into “what was
              the shared most often”, “what was shared often”, “what was shared
              less frequently”, and “important insights” to co-design a baseline
              process with our Product Manager to begin collecting feedback
            </p>

            <p className="text-[#60676D] text-[16px]  font-normal leading-7">
              With this information, I then lead +20 workshops with impacted
              teams to share the findings, collect feedback on the process and
              make modifications; such as defining their RACI level at each
              certain steps
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#666F72] h-[200px] w-full ">
        <div className="max-w-[800px] mx-auto flex justify-center items-center h-[200px]">
          <p className="md:text-[32px] text-[24px] font-Montserrat font-bold text-white leading-7">
            Concept Validation
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto lg:flex justify-center gap-20 lg:pt-28  lg:py-0 py-20 px-4 md:px-8 lg:px-4 font-Montserrat">
          <div className="lg:w-[550px] md:w-[500px] w-full">
            <img
              className=" object-contain  md:mx-auto lg:mx-0 w-full h-[250px]"
              src="https://storage.googleapis.com/uxfolio/607dc3b2df0244000305af9b/62e80b15f390fd00034ec3f3/Zk7pbktb1nOr2aZm.png"
              alt=""
            />

            <p className="text-[#60676D] text-[16px] font-Montserrat font-normal mt-6 text-center lg:w-[535px] w-full ">
              Example of likert scale used to validate concepts
            </p>
          </div>

          <div className="lg:w-[800px] w-full flex flex-col gap-6 mt-10 md:mt-10 lg:mt-4">
            <p className="text-[#60676D] text-[16px]  font-normal leading-7">
              I also led Concept Testing of new features
            </p>

            <p className="text-[#60676D] text-[16px]  font-normal leading-7">
              My process, when adding new features to our top tasks, was to ask
              participants to complete the top task and then ask follow-up
              questions to understand how adding a new feature would assist them
              when completing the specific tasks
            </p>

            <p className="text-[#60676D] text-[16px]  font-normal leading-7">
              I used a lot of the ideas from the "Customer-Driven Playbook" at
              this stage, specifically the idea of asking participants “Would
              this concept solve a problem or fulfill a need for you?”; using
              the Likert scale of “Definitely would not" to "Definitely would”,
              to help determine whether ideas should proceed into the next step
              of our product design process
            </p>
          </div>
        </div>
      </div>


    <div>
      {/* <Footer/> */}
    </div>




    </div>
  );
};

export default DetailsOne;
