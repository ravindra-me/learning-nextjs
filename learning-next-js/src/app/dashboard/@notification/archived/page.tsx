import Link from "next/link";
import React from "react";

function ArchivedNotification() {
  return (
    <div>
      <h1 className="my-4">ArchivedNotification</h1>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}

export default ArchivedNotification;
