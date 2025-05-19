"use client"

import SectionTitle from "@/components/Common/SectionTitle";
import SingleTermsAndConditions from "./singleTermsAndConditions";
import termsAndConditionsData from "./termsAndConditionsData";

const TermsAndConditions = () => {

  return (
    <>
      <section id="features" className="py-10 md:py-10 lg:py-15">
        <div className="container">
          <SectionTitle
            title="IT Manpower  Terms and Conditions"
            paragraph="It seems like there might be a slight typo in your question. If you're referring to the terms and conditions (T&C) related to an IT manpower team, We can provide you with a general overview of what these terms and conditions might include. However, for more specific and accurate information, it's advisable to refer to the actual terms and conditions provided by the relevant service provider or employer. Here's a general outline:"
            center
            mb="100px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {termsAndConditionsData.map((termsAndConditions) => (
              <SingleTermsAndConditions key={termsAndConditions.id} termsAndConditions={termsAndConditions} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;