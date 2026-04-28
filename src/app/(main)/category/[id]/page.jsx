import LeftSide from '@/components/homepage/LeftSide';
import MainNews from '@/components/homepage/MainNews';
import RightSide from '@/components/homepage/RightSide';
import { getCatagery, getNews } from '@/lib/DataFetch';

const page = async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  const data = await getCatagery();
  const datas = data.data.news_category;
  // console.log(datas);

  const newsData = await getNews(id);
  const mainnews = newsData.data;
  // console.log(mainnews);


  

  return (
    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">


      <div className="col-span-3 ">
        <div className="font-bold mb-2 ">Category name:</div>
        <LeftSide datas={datas} id={id}></LeftSide>
      </div>

      <div className=" col-span-6">
        <h2 className="font-bold mb-2 ">Main News</h2>
        <MainNews mainnews={mainnews}></MainNews>
      </div>

      <div className=" col-span-3 p-1">
        <h2 className="font-bold mb-2 ">Login with</h2>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default page;
