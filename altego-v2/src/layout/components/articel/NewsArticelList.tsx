import React from "react";
import Button from "../Button";

// Typisierung für einen einzelnen Post
export type NewsArticel = {
  id: string;
  date: string;
  title: string;
  comments: number;
  img: string;
  autor: string;
  shortText: string;
  newsText: string;
};

type NewsArticelList = {
  data: NewsArticel[];
};

const NewsArticelList: React.FC<NewsArticelList> = ({ data }) => {
  return (
    <div className="space-y-8">
      {data.map((post, index) => (
        <NewsArticelItem key={index} post={post} />
      ))}
    </div>
  );
};

const NewsArticelItem: React.FC<{ post: NewsArticel }> = ({ post }) => {
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
      <div className="flex-row">
        <div>
          Autor: {post.autor} · {post.comments} Kommentare
        </div>
        <Button to={`/article/${post.id}`}>weiter lesen</Button>
      </div>
    </div>
  );
};

export default NewsArticelList;
