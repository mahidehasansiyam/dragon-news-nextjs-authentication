import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainNews = ({ mainnews }) => {

  return <div className='p-4 bg-gray-300'>
    {
      mainnews.map((news, index) => {
        // console.log(news);
        return (
          <div key={index} className="border-2 my-4 p-3">
            <h2>{news.title}</h2>
            <Image
              src={news.image_url}
              alt="ok"
              width={300}
              height={300}
            ></Image>
            <Link href={`/news/${news._id}`}>
              <button className="btn bg-emerald-600 text-white border-none mt-3">
                Details
              </button>
            </Link>
          </div>
        );
      })
    }
  </div>;
};

export default MainNews;