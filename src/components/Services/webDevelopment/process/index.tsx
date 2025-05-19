"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import SingleProcess from "./SingleProcess"
import processData from "./processData"

const Process = () => {

  return (
    <>
      <section id="features" className="py-16 md:py-15 lg:py-10">
        <div className="container">
          <SectionTitle
            title=" Web Development Process"
            paragraph="We understand that every web development project is unique, and tailor our approach to meet your specific needs. Our development process is built on collaboration, creativity, and cutting-edge technology."
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
