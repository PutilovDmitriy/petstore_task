import * as React from "react";
import Pet from "./Pet";
import HomeContext from "../context/HomeContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { PetInfo } from "../types/Pet";
import Loading from "./Loading";

interface PetsProps {}

const Pets: React.FC<PetsProps> = () => {
  const { petData } = React.useContext(HomeContext);

  const [data, setData] = React.useState<PetInfo[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [start, setStart] = React.useState<number>(12);
  const [end, setEnd] = React.useState<number>(24);

  console.log(data);

  React.useEffect(() => {
    if (petData !== undefined) {
      setData([...petData.slice(0, 12)]);
    } else setData([]);
  }, [petData]);

  const handleScroll = () => {
    if (petData !== undefined) {
      if (data.length >= petData?.length) {
        setHasMore(false);
        return;
      }
      setData([...data, ...petData.slice(start, end)]);
      setStart(end);
      setEnd(end + 12);
    }
  };

  return petData !== undefined ? (
    <InfiniteScroll
      className="infiniteScroll"
      dataLength={data.length}
      next={handleScroll}
      hasMore={hasMore}
      loader={<Loading />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="pets">
        {data.map((data) => (
          <Pet key={data.id} />
        ))}
      </div>
    </InfiniteScroll>
  ) : (
    <h1>Пусто</h1>
  );
};

export default Pets;
