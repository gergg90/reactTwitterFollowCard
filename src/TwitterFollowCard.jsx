import { useState } from "react";

function TwitterFollowCard({ children, userName, image, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttomClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={image} />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>{userName}</span>
        </div>
      </header>

      <aside>
        <button
          className={buttomClassName}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {text}
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
