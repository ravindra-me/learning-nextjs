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
      {notification}
      {profile}
    </div>
  );
}

export default DashboardLayout;
