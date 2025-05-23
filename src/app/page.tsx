import HomePage from "@/components/Home/Home";
import data from "@/data/data.json";
import React from "react";

const page = () => {
  return <HomePage {...data} />;
};

export default page;
