"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import SingleProcess from "./singleProcess"
import processData from "./processData"

const Process = () => {

  return (
    <>
      <section id="features" className="py-10 md:py-15 lg:py-15">
        <div className="container">
          <SectionTitle
            title="IT Hardware Deployment Process"
            paragraph="At HHP Software, we recognize the distinctiveness of each IT hardware deployment project and customize our approach to align perfectly with your requirements. Our process is grounded in collaboration, innovation, and state-of-the-art technology to ensure optimal results."
            center
            mb="60px"
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
