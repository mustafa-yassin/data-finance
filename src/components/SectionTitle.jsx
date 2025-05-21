import React from "react";

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8 text-center">
    <h2 className="text-4xl font-bold text-[#00df9a] mb-2">{title}</h2>
    {subtitle && <p className="text-lg text-[#000300]">{subtitle}</p>}
  </div>
);

export default SectionTitle;
