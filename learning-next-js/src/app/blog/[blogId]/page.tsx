export default async function BlogDetail({
  params,
}: {
  params: { blogId: string };
}) {
  const { blogId } = await params;
  return <div>Blog Detail: {blogId}</div>;
}
