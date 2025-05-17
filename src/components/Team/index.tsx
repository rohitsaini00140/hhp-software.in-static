"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleTeamCard from "../Team/SingleTeamCard";
import { teamData } from "./teamData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Team = () => {
  let settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 765,
        settings: {
          dots: false,
          infinite: true,
          autoplay:true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          dots: false,
          infinite: true,
          autoplay:true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <section className="bg-white-300 lg:py-10 relative z-10 py-3 dark:bg-bg-color-dark md:py-16">
      <div className="container">
        <SectionTitle
          title="TEAM MEMBER"
          paragraph="Our Innovative & Visionary Team."
          center
          mb="50px"
        />
        <Slider {...settings}>
          {teamData.map((team) => (
            <div key={team.id} className="px-1">
              <SingleTeamCard team={team} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
