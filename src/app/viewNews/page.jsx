import React from "react";
import "./viewNews.css";

import TargetView from "@/components/TargetView";

function InsidePage() {
  return (
    <div className="news-view-frame">
      <TargetView />;
      <TargetView />;
      <TargetView />;
      <TargetView />;
    </div>
  );
}

export default InsidePage;
