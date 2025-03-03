import React from "react";

function DashboardLayout({
  children,
  notification,
  profile,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex gap-16">
        {profile}
        <div>{notification}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
