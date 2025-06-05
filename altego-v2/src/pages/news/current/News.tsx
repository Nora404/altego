import data from "../../../Data/NewsData.json";
import ArticelList from "../../../layout/components/Articel";


const News = () => {
    return (
        <ArticelList data={data} />
    );
};

export default News;
