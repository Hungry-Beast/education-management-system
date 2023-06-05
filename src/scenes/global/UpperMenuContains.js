import React from "react";
import Academic from "./Academic";
import Administration from "./Administration";

const UpperMenuContains = ({ selected }) => {
 console.log(selected);
  switch (selected) {
    case "Academic":
      return <Academic/>;
    case "Administration":
            return <Administration/>;
    case "Users":
        return <div></div>;
    case "Communications":
        return <div></div>;
    case "Finance":
        return <div></div>;
    case "Other":
        return <div></div>;
    default:
      break;
  }
};

export default UpperMenuContains;
