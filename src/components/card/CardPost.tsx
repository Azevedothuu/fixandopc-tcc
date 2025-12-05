import { useState } from "react";
import styled from "styled-components";

interface CardPostProps {
  username: string;
  content: string;
  comments?: { user: string; text: string }[];
  className?: string;
}

export const CardPost = ({ username, content, comments = [], className }: CardPostProps) => {
  const [newComment, setNewComment] = useState("");
  const [localComments, setLocalComments] = useState(comments);

  function handleAddComment() {
    if (newComment.trim() === "") return;

    const newC = { user: "Você", text: newComment };
    setLocalComments([...localComments, newC]);
    setNewComment("");
  }

  return (
    <StyledWrapper className={className}>
      <div className="container_card_post">

        {/* CAMADA INTERNA IGUAL AO DO CHAT */}
        <div className="inner">

          {/* --- Cabeçalho --- */}
          <div className="post-header">
            <span className="post-user">@{username}</span>
          </div>

          {/* --- Conteúdo do post --- */}
          <div className="post-content">
            <p>{content}</p>
          </div>

          {/* --- Área de comentário --- */}
          <div className="comments-section">
            <textarea
              placeholder="Comentar algo..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />

            <button className="btn-submit" onClick={handleAddComment}>
              <i>
                <svg viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"
                  />
                </svg>
              </i>
            </button>
          </div>

          {/* --- Comentários --- */}
          <div className="comments-list">
            {localComments.map((c, i) => (
              <div key={i} className="comment-item">
                <strong>@{c.user}: </strong>
                <span>{c.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container_card_post {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;

    background: linear-gradient(
      to bottom right,
      #7e7e7e,
      #363636,
      #363636,
      #363636,
      #363636
    );

    padding: 1.5px;
    border-radius: 12px;
    overflow: hidden;

    &::after {
      position: absolute;
      content: "";
      top: -10px;
      left: -10px;
      background: radial-gradient(
        ellipse at center,
        #ffffff,
        rgba(255,255,255,0.3),
        rgba(255,255,255,0.1),
        rgba(0,0,0,0),
        rgba(0,0,0,0),
        rgba(0,0,0,0),
        rgba(0,0,0,0)
      );
      width: 30px;
      height: 30px;
      filter: blur(1px);
    }
  }

  .inner {
    background-color: rgba(0,0,0,0.5);
    border-radius: 12px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .post-header {
    display: flex;
    font-size: 12px;
    opacity: 0.9;
    color: #fff;
  }

  .post-user {
    font-weight: 600;
  }

  .post-content p {
    font-size: 13px;
    color: #fff;
    line-height: 1.4;
  }

  /* --- Comentários --- */
  .comments-section {
    display: flex;
    gap: 8px;
  }

  .comments-section textarea {
    width: 100%;
    height: 45px;
    background-color: rgba(0,0,0,0.4);
    border: none;
    padding: 8px;
    border-radius: 10px;
    color: #fff;
    resize: none;
    outline: none;
    font-size: 12px;

    &::placeholder {
      color: #f3f6fd;
      transition: all .3s ease;
    }

    &:focus::placeholder {
      color: #363636;
    }

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .btn-submit {
    display: flex;
    padding: 2px;
    background-image: linear-gradient(to top, #292929, #555555, #292929);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all .15s ease;

    & i {
      width: 30px;
      height: 30px;
      padding: 6px;
      background: rgba(0,0,0,0.1);
      border-radius: 10px;
      color: #8b8b8b;
      backdrop-filter: blur(3px);
      transition: all .3s;
    }

    &:hover svg {
      color: #f3f6fd;
      filter: drop-shadow(0 0 5px #fff);
    }

    &:focus svg {
      color: #f3f6fd;
      filter: drop-shadow(0 0 5px #fff);
      transform: scale(1.2) rotate(45deg) translateX(-2px) translateY(1px);
    }

    &:active {
      transform: scale(0.92);
    }
  }

  .comments-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .comment-item {
    background: rgba(0,0,0,0.3);
    padding: 6px 8px;
    border-radius: 8px;
    font-size: 11px;
    color: #fff;
  }
`;
