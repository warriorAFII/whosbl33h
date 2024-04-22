import React from "react";

const PocketMosque = () => {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#F0E4DC", paddingTop: 40 }}
    >
      <div className="text-center ">
        <h1 style={{ color: "#1CC588", fontSize: 40 }}>Pocket Mosque</h1>
        <h3 style={{ color: "#1CC588", fontSize: 15 }}>
          Your friendly prayer app
        </h3>
      </div>
      <div
        style={{
          backgroundColor: "#1CC588",
          margin: 10,
          borderRadius: 8,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
          padding: 20,
          margin: "auto",
          marginTop: 32,
        }}
      >
        <div className="text-center width-[50%]">
          <h1 className="text-[#fff] ">What we did</h1>
          <p className="text-[#fff] text-[12px]">
            Web development, Account management,
            <br />
            payment management
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-[#fff]">Sector</h1>
          <p className="text-[#fff] text-[12px]">AI</p>
        </div>
      </div>
      <div className="ml-6 mt-20 mr-16">
        <h1 style={{ fontSize: 30, color: "#1CC588" }}>Overview</h1>
        <p>
          Faced with the challenge of unifying disparate entities acquired
          within a short span, Voyager Worldwide, a Maritime Navigation software
          company, hired our design agency to build a cohesive website
          consolidating content and products from various global businesses
          under the single Voyager Worldwide brand. With a complex task at hand,
          the goal was to create a unified platform that harmonised multiple
          websites into one, requiring a complete overhaul of site structure,
          user flows, and UI in just 30 days.
        </p>
      </div>
      <div className="ml-6 mt-20 mr-16">
        <h1 style={{ fontSize: 30, color: "#1CC588" }}>Challenge</h1>
        <p>
          Faced with the challenge of unifying disparate entities acquired
          within a short span, Voyager Worldwide, a Maritime Navigation software
          company, hired our design agency to build a cohesive website
          consolidating content and products from various global businesses
          under the single Voyager Worldwide brand. With a complex task at hand,
          the goal was to create a unified platform that harmonised multiple
          websites into one, requiring a complete overhaul of site structure,
          user flows, and UI in just 30 days.
        </p>
      </div>
    </div>
  );
};
export default PocketMosque;
