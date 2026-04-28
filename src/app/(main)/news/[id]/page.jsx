import { getNewsDetails } from "@/lib/DataFetch";
import Image from "next/image";
import Link from "next/link";


const NewsDetails =async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  const details = await getNewsDetails(id)
  const newsDetail = details.data[0];
  console.log(newsDetail);

  return (
    <div className="text-center space-y-5 bg-gray-500 p-5 max-w-5xl mx-auto">
      <h2 className="font-bold">{newsDetail.title}</h2>
      <div className="flex justify-center items-center">
        <Image
          src={newsDetail.image_url}
          alt="ok"
          height={300}
          width={300}
        ></Image>
      </div>
      <p className="line-clamp-3 max-w-4xl mx-auto">{newsDetail.details}</p>
      <Link href={'/category/01'}>
        <button className="btn ">Go Back</button>
      </Link>
    </div>
  );
};

export default NewsDetails;