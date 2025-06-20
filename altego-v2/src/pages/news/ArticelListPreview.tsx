import React from "react";

// Der Typ bleibt gleich
type Articel = {
    date: string;
    title: string;
    comments: number;
    img: string;
    autor: string;
    shortText: string;
};

type ArticelListPreviewProps = {
    data: Articel[];
};

const ArticelListPreview: React.FC<ArticelListPreviewProps> = ({ data }) => {
    return (
        <>
            {data.slice(0, 3).map(({ date, title }, index) => (
                <div key={index}>
                    <div className="articel-preview-date">{date}</div>
                    <div className="articel-preview-title">{title}</div>

                </div>
            ))}
        </>
    );
};

export default ArticelListPreview;
