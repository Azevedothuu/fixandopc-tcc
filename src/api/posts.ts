const API_URL = "https://fixando-backend.vercel.app/api/posts";

export async function getPosts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar posts");
  return res.json();
}

export async function createPost(content: string, image?: File) {
  const formData = new FormData();
  formData.append("content", content);

  if (image) formData.append("image", image);

  const token = localStorage.getItem("token");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) throw new Error("Erro ao criar post");
  return res.json();
}
