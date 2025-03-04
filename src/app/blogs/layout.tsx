import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
