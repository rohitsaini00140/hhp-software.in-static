"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://hhpsoftware.com/blogging/blogapi",
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const result = await response.json();

        console.log("API Response:", result);

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

  console.log(blogPosts, "kya aa raha ha");

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
              className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-dark"
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
                <p className="mt-2 text-gray-600">{post?.description}</p>
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
