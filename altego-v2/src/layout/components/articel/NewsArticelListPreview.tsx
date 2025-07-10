import React from "react";
import type { NewsArticel } from "./NewsArticelList";
import Button from "../Button";

type NewsArticelListPreviewProps = {
    data: NewsArticel[];
};

const NewsArticelListPreview: React.FC<NewsArticelListPreviewProps> = ({ data }) => {
    return (
        <>
            {data.slice(0, 3).map(({ date, title, id }, index) => (
                <div key={index}>
                    <div className="articel-preview-date">
                        {date}
                    </div>
                    <div className="flex-row-top">
                        <div className="articel-preview-title">{title}</div>
                        <div className="articel-button">
                            <Button to={`/article/${id}`}>Artikel lesen</Button></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default NewsArticelListPreview;
