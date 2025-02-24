import { Metadata } from "next";
type props = {
  params: { blogId: string };
};

//dynamic metadata
export const generateMetadata = ({ params }: props): Metadata => {
  return {
    title: `product ${params.blogId}`,
    description: `generate by ${params.blogId}`,
  };
};

export default async function BlogDetail({ params }: props) {
  const { blogId } = await params;
  return <div>Blog Detail: {blogId}</div>;
}
