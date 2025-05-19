import FAQs from "@/components/Services/blockchainDevelopment/FAQs";
import IndustriesServedIntro from "@/components/Services/blockchainDevelopment/industriesServed";
import Intro from "@/components/Services/blockchainDevelopment/intro";
import Process from "@/components/Services/blockchainDevelopment/process";
import TechnologyIntro from "@/components/Services/blockchainDevelopment/technologyIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Block Chain Development"
}

function BlockchainDevelopment() {
  return (
    <>
      <Intro />
      <TechnologyIntro />
      <Process />
      <IndustriesServedIntro />
      <FAQs />
    </>
  )
}

export default BlockchainDevelopment;