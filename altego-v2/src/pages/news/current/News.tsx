import data from "../../../Data/NewsData.json";
import NewsArticelList from "../../../layout/components/articel/NewsArticelList";

const News = () => {
    return (
        <NewsArticelList data={data} />
    );
};

export default News;
