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
            title="Digital Marketing Service Process"
            paragraph="Discover how we elevate your brand through a tailored approach blending strategic planning, creative execution, and continuous optimization. We specialize in crafting personalized digital marketing strategies that drive measurable results and foster long-term growth for your business."
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