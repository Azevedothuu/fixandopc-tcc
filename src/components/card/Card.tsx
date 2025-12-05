import { useState } from "react";
import styled from "styled-components";
import type { Post } from "@/api/fakePosts";

interface CardProps {
  className?: string;
  username: string;
  addPost: (post: Post) => void;
}

export const Card = ({ className, username, addPost }: CardProps) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) return alert("Escreve algo aí...");
    setLoading(true);

    try {
      const { createPost } = await import("@/api/fakePosts");
      const newPost = await createPost(content, username);
      addPost(newPost);
      setContent("");
    } catch {
      alert("Erro ao criar o post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledWrapper className={className}>
      <textarea
        placeholder="O que você está pensando?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Postando..." : "Postar"}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;

  textarea {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    padding: 8px;
    background: #212121;
    color: #fff;
    border: none;
    resize: none;
  }

  button {
    padding: 8px 12px;
    background-color: #6b46c1;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
