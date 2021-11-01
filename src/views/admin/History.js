import React from "react";

// components

import CardTableProductHistory1 from "components/Cards/CardTableProductHistory1";
import CardTableProductHistory from "components/Cards/CardTableProductHistory";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableProductHistory1 color="dark" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTableProductHistory />
        </div>
        
      </div>
    </>
  );
}
