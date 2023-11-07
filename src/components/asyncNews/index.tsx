import React from 'react'
import type { New } from "../../redux/types";
import NewItem from "../news-item";

interface IAsyncNews {
    news: New[]
}

const AsyncNews: React.FC<IAsyncNews> = ({news}) => {
  return <>{news?.map((item) => <NewItem key={item.id} {...item} />)}</>;
}

export default AsyncNews;