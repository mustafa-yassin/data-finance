import React from "react";

const resources = [
  {
    title: "Beginner's Guide to Investing",
    description:
      "A comprehensive guide covering the basics of investing, risk management, and portfolio building.",
    link: "https://www.investopedia.com/investing-4427785",
  },
  {
    title: "Financial Analytics Tools",
    description:
      "Explore top tools and platforms for financial data analysis and visualization.",
    link: "https://www.financesonline.com/financial-analytics-tools/",
  },
  {
    title: "Latest Finance Trends",
    description:
      "Stay updated with the latest trends, news, and insights in the finance industry.",
    link: "https://www.forbes.com/finance/",
  },
  {
    title: "Personal Budgeting Templates",
    description:
      "Download free templates to help you manage your personal or business finances.",
    link: "https://www.vertex42.com/ExcelTemplates/personal-budget-spreadsheet.html",
  },
];

const Resources = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#f8fafc] text-[#000300] mt-16 py-16 px-4">
      <h2 className="text-4xl font-bold mb-4 text-center">Resources</h2>
      <p className="text-lg max-w-xl text-center mb-10">
        Explore our curated resources, guides, and tools to help you navigate
        the world of finance and analytics. Stay updated with the latest trends
        and insights.
      </p>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl w-full">
        {resources.map((res, idx) => (
          <a
            key={idx}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 hover:border-blue-400"
          >
            <h3 className="text-2xl font-semibold mb-2 text-black">
              {res.title}
            </h3>
            <p className="text-gray-700 mb-2">{res.description}</p>
            <span className="text-[#02c386] font-medium">
              Learn more &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources;
