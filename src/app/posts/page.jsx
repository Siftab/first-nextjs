import Counter from "@/Components/Counter";
import React from "react";
export const metadata = {
  title: "Posts",
  description: "this is description",
};
const PostPage = () => {
  return (
    <div>
      <p>this is post page </p>
      <Counter />
    </div>
  );
};

export default PostPage;
