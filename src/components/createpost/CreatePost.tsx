import { useState } from "react";
import styled from "styled-components";

interface CreatePostProps {
  addPost: (content: string, imageUrl?: string) => void; // callback pra atualizar a lista de posts
}

export function CreatePost({ addPost }: CreatePostProps) {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    // chama a função que vai adicionar o post na lista
    addPost(content, imageUrl || undefined);

    // limpa campos
    setContent("");
    setImageUrl("");
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit} className="create-post-card">
        <textarea
          placeholder="O que você quer dizer?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          type="text"
          placeholder="URL da imagem (opcional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit">Postar</button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .create-post-card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 320px;
    background: #1a1a1a;
    padding: 12px;
    border-radius: 12px;
    color: #eee;
  }

  textarea {
    width: 100%;
    border-radius: 8px;
    padding: 6px;
    background: #212121;
    color: #fff;
    resize: none;
    border: 1px solid #333;
  }

  input {
    width: 100%;
    border-radius: 8px;
    padding: 6px;
    background: #212121;
    color: #fff;
    border: 1px solid #333;
  }

  button {
    background: #a48cf0;
    border: none;
    border-radius: 8px;
    padding: 8px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background: #9162e4;
  }
`;
