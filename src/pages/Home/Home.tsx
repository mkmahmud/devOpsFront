/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import FeedCard from "../../components/Ui/Card/FeedCard/FeedCard";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Loader from "../../components/Ui/Loader/Loader";

const Home = () => {
  // Init states
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  // custom path
  const [handlePath, sethandlePath] = useState("");

  const accessToken = localStorage.getItem("access_token");
  useEffect(() => {
    axios
      // .get("https://api.escuelajs.co/api/v1/products?offset=10&limit=12")
      .get(
        `http://47.128.250.38:8001/api/v1/twitters/feed?limit=10&page=1&type=${handlePath}`,
        {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "insomnia/8.6.1",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => setItems(res.data.data))
      .catch((err) => console.log(err));
  }, [handlePath]);

  const fetchMoreData = () => {
    axios
      .get(
        `http://47.128.250.38:8001/api/v1/twitters/feed?limit=10&page=${index}&type=${handlePath}`,
        {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "insomnia/8.6.1",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setItems((prevItems) => [...prevItems, ...res.data.data]);

        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <div className="flex space-x-2 my-2">
        <button
          className="p-2 border-2 border-primary"
          onClick={() => sethandlePath("error")}
        >
          Type Error
        </button>
        <button
          className="p-2 border-2 border-primary"
          onClick={() => sethandlePath("delay")}
        >
          Type Delay
        </button>
      </div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <div className="container">
          <div className="row">
            {items.length == 0 && (
              <h2 className="text-center text-primary">No Data Found</h2>
            )}
            {items.length > 0 &&
              // @ts-ignore
              items.map((item) => <FeedCard data={item} key={item?.id} />)}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
