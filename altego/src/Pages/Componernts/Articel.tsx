import React from "react";
import "./Articel.css";

// Typisierung für einen einzelnen Post
type Articel = {
  date: string;
  title: string;
  comments: number;
  img: string;
  autor: string;
  content: string;
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

      <hr className="neon-orange" />

      {/* Bild + Content */}
      <div className="flex-row">
        <img
          src={post.img}
          alt={post.title}
          className="articel-img"
        />
        <div
          className="flex-1 prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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
