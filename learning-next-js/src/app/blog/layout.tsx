import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>layout</p>
      {children}
    </div>
  );
}

export default layout;
