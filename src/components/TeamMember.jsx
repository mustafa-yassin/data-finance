import React from "react";

const TeamMember = ({ name, role, img }) => {
  return (
    <div className="flex flex-col items-center m-2 w-60">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-3 border-4 border-[#00df9a]"
      />
      <h4 className="text-xl font-bold text-[#000300]">{name}</h4>
      <p className="text-[#00df9a] font-semibold">{role}</p>
    </div>
  );
};

export default TeamMember;
