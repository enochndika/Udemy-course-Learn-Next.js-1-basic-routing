import { Layout } from "../components/layout";
import Link from "next/link";

const PostLink = ({ titre }) => (
  <li>
    <Link href={`/blog/${titre}`}>
      <a>{titre}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        <PostLink titre="react" />
        <PostLink titre="angular" />
        <PostLink titre="vue" />
        <PostLink titre="svelte" />
        <PostLink titre="apprendre Next js" />
      </ul>
    </Layout>
  );
};

export default Blog;
