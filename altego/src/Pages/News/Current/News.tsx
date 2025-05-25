import data from "../../../Data/NewsData.json";
import ArticelList from "../../Componernts/Articel";

const News = () => {
    return (
        <ArticelList data={data} />
    );
};

export default News;
