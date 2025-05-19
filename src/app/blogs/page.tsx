"use client";

import Image from "next/image";
import Link from "next/link";
import  { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  slug: string;
  image: string;
  heading: string;
  description: string;
}

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://hhpsoftware.com/blogging/blogapi", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (result?.status && Array.isArray(result?.data)) {
          setBlogPosts(result.data);
        } else {
          throw new Error("Invalid blog data format");
        }
      } catch (error: any) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Helper to strip HTML tags
  function stripHtmlTags(html: string) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  }


  console.log(blogPosts,"kkkkkkkkkkk")

  // Limit description to first 20 words
  function getShortDescription(description: string) {
    const plainText = stripHtmlTags(description);
    const words = plainText.split(" ");
    return words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "");
  }

  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <h1 className="mb-6 text-left text-3xl font-bold">Latest Blog Posts</h1>

      {loading && <p className="text-center">Loading blogs...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && blogPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-dark"
            >
              <Link href={`/blogs/${post.slug}`}>

                <Image
                  src={
                    post.image.startsWith("http")
                      ? post.image
                      : `https://hhpsoftware.com/blogging/images/${post.image}`
                  }
                  alt={post.heading || "Blog Image"}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-xl font-semibold">
                 {post.heading}
                </h2>
                <p className="mt-2 text-gray-600">
                  {getShortDescription(post.description)}{" "}
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && (
          <p className="text-center text-gray-500">No blogs available.</p>
        )
      )}
    </div>
  );
}

export default BlogPage;
