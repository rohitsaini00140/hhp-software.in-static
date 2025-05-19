"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import SingleProcess from "./singleProcess"
import processData from "./processData"

const Process = () => {

  return (
    <>
      <section id="features" className="py-10 md:py-10 lg:py-15">
        <div className="container">
          <SectionTitle
            title="Software Development Process"
            paragraph="We recognize the distinctiveness of each software development endeavor and customize our approach to align perfectly with your requirements. Our software development process is founded on close collaboration, innovative thinking, and leveraging state-of-the-art technology to deliver exceptional solutions."
            center
            mb="100px"
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
