import { Navbar } from "@/components";
import type { JSX } from "react";
import { useEffect, useState } from "react";
import { getPosts, type Post } from "@/api/fakePosts";
import { Card } from "@/components/card";

export function Community(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);
  const username = "Gandula";

  const addPost = (post: Post) => setPosts([post, ...posts]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <>
      <section className="min-h-screen w-full relative bg-gray-900">
        <Navbar />
        <div className="flex flex-col items-center gap-5 pt-32 pb-10 w-full">
          <Card username={username} addPost={addPost} />

          {posts.length === 0 && <p className="text-white">Nenhum post ainda…</p>}

          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 text-white p-4 rounded w-[300px]">
              <p className="font-bold">@{post.user.username}</p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
