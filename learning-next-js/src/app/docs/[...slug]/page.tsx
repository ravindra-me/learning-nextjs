import React from "react";

async function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const { slug } = await params;
  if (slug.length > 2) {
    return <div>slug is 2</div>;
  }
  return <div>Docs</div>;
}

export default Docs;
