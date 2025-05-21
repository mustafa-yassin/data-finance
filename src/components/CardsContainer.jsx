import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

const CardsContainer = () => {
  return (
    <div className="w-full py-20 px-4 bg-gradient-to-b from-[#f8fafc] to-[#e6fff6]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-5xl font-extrabold text-[#00df9a] text-center py-6 tracking-tight drop-shadow-lg">
          Find the right plan
        </h2>
        <p className="text-center text-lg text-[#000300] mb-10 max-w-2xl mx-auto">
          Choose a plan that fits your needs. All plans come with 24/7 support,
          secure cloud storage, and access to our analytics tools.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10 mt-10">
        <Card
          image={Single}
          title={"Single User"}
          price={"$149"}
          text_1={"500 GB Storage"}
          text_2={"1 Granted User"}
          text_3={"Send up to 2 GB"}
        />
        <Card
          theme="focus"
          image={Double}
          title={"Double User"}
          price={"$149"}
          text_1={"500 GB Storage"}
          text_2={"1 Granted User"}
          text_3={"Send up to 2 GB"}
        />
        <Card
          image={Triple}
          title={"Triple User"}
          price={"$149"}
          text_1={"500 GB Storage"}
          text_2={"1 Granted User"}
          text_3={"Send up to 2 GB"}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
