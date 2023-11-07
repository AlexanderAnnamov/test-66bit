import React from "react";
import { useLocalStorage } from "usehooks-ts";
import { useDispatch } from "react-redux";
import PullToRefresh from "react-simple-pull-to-refresh";

import { newsApi } from "../../redux/api/news/news";
import { useGetNewsQuery } from "../../redux/api/news/news";

import AsyncNews from "../../components/asyncNews";
import StoreNews from "../../components/storeNews";

import { ReactComponent as Loader } from "../../assets/img/oval.svg";
import { ReactComponent as Update } from "../../assets/img/update.svg";
import { ReactComponent as LoadingPullToRefresh } from "../../assets/img/puff.svg";
import { ReactComponent as ArrowPullToRefresh } from "../../assets/img/arrow.svg";

import styles from "./news-line.module.css";

const Newsline = () => {
  const [page, setPage] = React.useState(1);
  const [localNews, setLocalNews] = React.useState([]);
  const { data, isFetching, refetch } = useGetNewsQuery(page);
  const [localData, setLocalData] = useLocalStorage("news", "");
  const dispatch = useDispatch();
  const news = data ?? [];

  const refreshNews = React.useCallback(async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setLocalData("");

    dispatch(newsApi.util.resetApiState());

    await refetch();
  }, []);

  React.useEffect(() => {
    if (localData !== "") {
      const news = JSON.parse(localData) ?? [];
      setLocalNews((prev) => (prev = news));
    }
  }, [data]);

  React.useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.body.offsetHeight;

      if (scrolledToBottom && !isFetching) {
        setPage((prev) => prev + 1);
        setLocalData(JSON.stringify(data));
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <div className={styles.newsline}>
      <div className={styles.center}>
        <PullToRefresh
          onRefresh={refreshNews}
          pullingContent={
            <div className={styles.centerPTR}>
              <ArrowPullToRefresh className={styles.iconPTR} />
            </div>
          }
          refreshingContent={
            <LoadingPullToRefresh className={styles.iconPTR} />
          }
        >
          <div>
            {localData === "" ? (
              <AsyncNews news={news} />
            ) : (
              <StoreNews news={localNews} />
            )}
          </div>
        </PullToRefresh>
        <div className={styles.loader}>
          {isFetching ? <Loader className={styles.loaderIcon} /> : <></>}
        </div>
      </div>
      <button onClick={refreshNews} className={styles.refreshBtn}>
        <Update className={styles.refreshIcon} />
      </button>
    </div>
  );
};

export default Newsline;
