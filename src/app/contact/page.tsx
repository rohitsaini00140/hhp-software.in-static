import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact"
}

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Feel free to reach out to us. We aim to respond to all inquiries promptly, typically within one business day."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
