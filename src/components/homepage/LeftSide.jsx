import Link from 'next/link';

const LeftSide = ({ datas, id }) => {
  
  return (
    <div className="bg-gray-300 p-3">
      {datas.map(data => {
        return (
          <div className={`p-2 rounded-2xl text-center ${id === data.category_id?"bg-white":""}`} key={data.category_id}>
            <Link className='block' href={`/category/${data.category_id}`}>
              {data.category_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LeftSide;
