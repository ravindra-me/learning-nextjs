import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Auth Layout</div>
      {children}
    </div>
  );
}

export default AuthLayout;
