import Button from "../Button";
import type { DownLoadArticel } from "./DownLoadList";

type DownLoadListPreviewProps = {
    data: DownLoadArticel[];
};

const DownLoadListPreview: React.FC<DownLoadListPreviewProps> = ({ data }) => {
    return (
        <>
            {data.slice(0, 3).map(({ date, title, id, type, size }, index) => (
                <div key={index}>
                    <div className="articel-preview-date">
                        {date} – <span style={{ color: "#bbb" }}>{type} ({size})</span>
                    </div>
                    <div className="flex-row-top">
                        <div className="articel-preview-title">{title}</div>
                        <div className="articel-button">
                            <Button to={`/download/${id}`}>zum Download</Button></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DownLoadListPreview;
