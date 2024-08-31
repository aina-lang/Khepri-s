import ArticleContent from "@/components/ArticleContent";

export default function BlogDetails({ params }: { params: { slug: string } }) {
  const blog = params.slug;
  if (!blog) return <p>Loading...</p>;

  return <ArticleContent blog={blog} />;
}
