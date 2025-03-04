import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `https://hhpsoftware.in/sitemap.xml/`
    },
    {
      url: `https://hhpsoftware.in/about`
    },
    {
      url: `https://hhpsoftware.in/services/webDevelopment`
    },
    {
      url: `https://hhpsoftware.in/services/mobileAppDevelopment`
    },
    {
      url: `https://hhpsoftware.in/services/softwareDevelopment`
    },
    {
      url: `https://hhpsoftware.in/services/blockchainDevelopment`
    },
    {
      url: `https://hhpsoftware.in/services/digitalMarketingServices`
    },
    {
      url: `https://hhpsoftware.in/additionalServices/ITHardware`
    },
    {
      url: `https://hhpsoftware.in/additionalServices/ITManpower`
    },
    {
      url: `https://hhpsoftware.in/demo`
    },
    {
      url: `https://hhpsoftware.in/contact`
    },

    {
      url: `https://hhpsoftware.in/blogs`
    },

    {
      url: `https://hhpsoftware.in/services/ev-charging/`
    }


  ]

}