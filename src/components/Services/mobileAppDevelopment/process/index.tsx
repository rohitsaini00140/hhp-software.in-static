"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import SingleProcess from "./singleProcess"
import processData from "./processData"

const Process = () => {

  return (
    <>
      <section id="features" className="py-1 md:py-5 lg:py-8">
        <div className="container">
          <SectionTitle
            title=" Mobile Application Development Process"
            paragraph="At HHP Software- A top mobile application development company, our approach is rooted in innovation, collaboration, and a commitment to delivering exceptional results. We understand that every project is unique and tailor our approach to meet our client's needs and goals."
            center
            mb="40px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {processData.map((process) => (
              <SingleProcess key={process.id} process={process} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
