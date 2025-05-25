import HomePage from "@/components/Home/Home";
import Theme2 from "@/components/theme-2/Theme2";
import data from "@/data/data.json";
import React from "react";
import data2 from "@/components/theme-2/data.json";
const page = () => {
  // return <Theme2 data={data2} />;
  return <HomePage {...data} />;
};

export default page;
