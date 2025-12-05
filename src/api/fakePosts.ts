export type Post = {
  id: number;
  user: { username: string };
  content: string;
  imageUrl?: string;
  comments?: { user: string; text: string }[];
};

let posts: Post[] = [
  {
    id: 1,
    user: { username: "Admin" },
    content: "Primeiro post!",
    comments: [],
  },
];

// Simula delay de rede
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPosts(): Promise<Post[]> {
  await wait(200); // simula fetch
  return posts;
}

export async function createPost(content: string, username: string): Promise<Post> {
  await wait(200); // simula delay
  const newPost: Post = {
    id: posts.length + 1,
    user: { username },
    content,
    comments: [],
  };
  posts = [newPost, ...posts];
  return newPost;
}
