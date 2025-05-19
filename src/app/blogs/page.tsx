"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://hhpsoftware.com/blogging/blogapi",
        );
        const result = await response.json();

        if (result?.status && Array.isArray(result?.data)) {
          setBlogPosts(result.data);
        } else {
          throw new Error("Invalid blog data format");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <h1 className="mb-6 text-left text-3xl font-bold">Latest Blog Posts</h1>

      {loading && <p className="text-center">Loading blogs...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && blogPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post?.id}
              onClick={() => router.push(`/blogs/${post.slug}`)} // Navigate using slug
              className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105 dark:bg-gray-dark"
            >
              <Image
                src={
                  post?.image?.startsWith("http")
                    ? post.image
                    : `https://hhpsoftware.com/blogging/images/${post.image}`
                }
                alt={post?.heading || "Blog Image"}
                width={400}
                height={250}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{post?.heading}</h2>
                {/* <p className="mt-2 text-gray-600">
                  {post?.description.substring(0, 100)}...
                </p> */}

                <p
                  className="mt-2 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: post?.description?.substring(0, 100) || "",
                  }}
                />
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