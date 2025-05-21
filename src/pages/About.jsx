import React from "react";
import SectionTitle from "../components/SectionTitle";
import AboutImage from "../components/AboutImage";
import TeamMember from "../components/TeamMember";
import laptopImg from "../assets/laptop.jpg";
import singleImg from "../assets/single.png";
import doubleImg from "../assets/double.png";
import tripleImg from "../assets/triple.png";

const team = [
  {
    name: "Luke Skywalker",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Sara Lee",
    role: "Lead Analyst",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "John Smith",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const About = () => {
  return (
    <div className="w-full min-h-screen mt-20 flex flex-col items-center bg-[#f8fafc] text-[#000300] py-8 px-2">
      <SectionTitle title="Our Team" />
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full justify-center items-stretch">
        <div className="bg-white rounded-lg shadow-md p-8 flex-1 mb-6 md:mb-0">
          <SectionTitle title="Our Mission" />
          <p className="mb-6 text-lg">
            At DFinance, our mission is to empower individuals and businesses
            with cutting-edge financial analytics and resources. We believe in
            making data-driven decisions accessible to everyone.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 flex-1">
          <SectionTitle title="Our Vision" />
          <p className="text-lg">
            To be the leading platform for financial innovation, transparency,
            and growth, helping our users achieve their financial goals with
            confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
