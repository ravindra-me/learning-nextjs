import React from "react";
import Link from "next/link";
//Paralele foute
function Notification() {
  return (
    <div>
      <h1 className="my-4">Notification</h1>
      <Link href={"/dashboard/archived"}>ArchivedNotification</Link>
    </div>
  );
}

export default Notification;
