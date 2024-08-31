import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogById } from "@/lib/constant";
import ArticleContent from "../../components/ArticleContent";


export default function Article({ params }: any) {
  const blog = params.slug;
  if (!blog) {
    notFound();
  }

  return <ArticleContent blog={blog} />;
}
