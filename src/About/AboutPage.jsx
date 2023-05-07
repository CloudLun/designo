import React from "react";

import Nav from "../Shared/Nav";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import Locations from "../Shared/Locations";
import Footer from "../Shared/Footer";

import talent_mobile from "../assets/about/mobile/image-world-class-talent.jpg";
import talent_tablet from "../assets/about/tablet/image-world-class-talent.jpg";
import talent_desktop from "../assets/about/desktop/image-world-class-talent.jpg";

import real_mobile from "../assets/about/mobile/image-real-deal.jpg";
import real_tablet from "../assets/about/tablet/image-real-deal.jpg";
import real_desktop from "../assets/about/desktop/image-real-deal.jpg";

const data = [
  {
    title: "World-class talent",
    img_mobile: talent_mobile,
    img_tablet: talent_tablet,
    img_desktop: talent_desktop,
    content:
      "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
    contentTwo:
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
  },
  {
    title: "The real deal",
    img_mobile: real_mobile,
    img_tablet: real_tablet,
    img_desktop: real_desktop,
    content:
      "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
    contentTwo:
      "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
  },
];

const About = () => {
  return (
    <div className="mt-[96px] md:mt-[131px]">
      <Nav />
      <AboutHero />
      <AboutContent
        order={"left"}
        title={data[0].title}
        img_mobile={data[0].img_mobile}
        img_tablet={data[0].img_tablet}
        img_desktop={data[0].img_desktop}
        content={data[0].content}
        contentTwo={data[0].contentTwo}
      />
      <Locations />
      <AboutContent
        order={"right"}
        title={data[1].title}
        img_mobile={data[1].img_mobile}
        img_tablet={data[1].img_tablet}
        img_desktop={data[1].img_desktop}
        content={data[1].content}
        contentTwo={data[1].contentTwo}
      />
      <Footer cta={true} />
    </div>
  );
};

export default About;
