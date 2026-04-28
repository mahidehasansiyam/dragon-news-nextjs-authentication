
export const getCatagery = async () => {
  const res =await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json()
  return data;
}


export const getNews = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  const dat = await res.json()
  return dat;
}


export const getNewsDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const dta = await res.json()
  return dta;
}