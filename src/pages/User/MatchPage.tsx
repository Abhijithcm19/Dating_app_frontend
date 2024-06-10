import React from "react";
import ViewProfiles from "../../components/User/ui/ViewProfiles";
import SidePanel from "../../components/User/ui/SidePanel";

const MatchPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 ">
        <SidePanel />
      </div>
      <div className="w-3/4 h-screen">
        <ViewProfiles />
      </div>
    </div>
  );
};

export default MatchPage;
