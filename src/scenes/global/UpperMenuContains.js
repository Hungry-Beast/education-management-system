import React from "react";
import Academic from "./Academic";
import Administration from "./Administration";
import Users from "./Users";
import Communication from "./Communication";
import Finance from "./Finance";
import Others from "./Others";

const UpperMenuContains = ({ selected }) => {
 console.log(selected);
  switch (selected) {
    case "Academic":
      return <Academic/>;
    case "Administration":
            return <Administration/>;
    case "Users":
        return <Users/>;
    case "Communication":
        return <Communication/>;
    case "Finance":
        return <Finance/>;
    case "Others":
        return <Others/>;
    default:
      break;
  }
};

export default UpperMenuContains;
