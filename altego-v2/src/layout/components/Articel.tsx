import React from "react";

// Typisierung für einen einzelnen Post
type Articel = {
  date: string;
  title: string;
  comments: number;
  img: string;
  autor: string;
  shortText: string;
};

type ArticelList = {
  data: Articel[];
};

const ArticelList: React.FC<ArticelList> = ({ data }) => {
  return (
    <div className="space-y-8">
      {data.map((post, index) => (
        <ArticelItem key={index} post={post} />
      ))}
    </div>
  );
};

const ArticelItem: React.FC<{ post: Articel }> = ({ post }) => {
  return (
    <div className="articel">
      {/* Header */}
      <div className="articel-header">
        {post.date} – {post.title}
      </div>

      <hr className="neon-glow-vertical" />

      {/* Bild + Content */}
      <div className="flex-row-top">
        <img
          src={post.img}
          alt={post.title}
          className="articel-img"
        />
        <p
          className="articel-content"
        >{post.shortText}</p>
      </div>

      {/* Footer */}
      <div className="flex-row-between">
        <div>
          Autor: {post.autor} · {post.comments} Kommentare
        </div>
        <a>weiter lesen</a>
      </div>
    </div>
  );
};

export default ArticelList;
