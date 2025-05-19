import { notFound } from "next/navigation";

interface BlogPost {
  id: number;
  slug: string;
  image: string;
  heading: string;
  description: string;
}

async function getAllBlogs(): Promise<BlogPost[]> {
  const res = await fetch("https://hhpsoftware.com/blogging/blogapi", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  next : {revalidate:60},
    cache: "force-cache",
  });

  const result = await res.json();
  return result?.status && Array.isArray(result?.data) ? result.data : [];
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();

  console.log(blogs,"kkkkkkkkk")

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const blogs = await getAllBlogs();
  return blogs.find((post) => post.slug === slug) || null;
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogPost(params.slug);

  if (!blog) notFound();

  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.heading}</h1>
      <img
        src={
          blog.image.startsWith("http")
            ? blog.image
            : `https://hhpsoftware.com/blogging/images/${blog.image}`
        }
        alt={blog.heading}
        className=" w-full max-h-[400px]  mb-6 object-contain"
      />
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
}
  