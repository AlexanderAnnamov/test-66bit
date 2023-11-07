import React from "react";
import type { New } from "../../redux/types";
import NewItem from "../news-item";

interface IStoreNews {
  news: New[];
}

const StoreNews: React.FC<IStoreNews> = ({ news }) => {
  return (
    <>
      {news?.map((item) => (
        <NewItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default StoreNews;
