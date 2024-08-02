import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import Image from "./Image";
import Spinner from "./Spinner";

interface ImageProps {
  id: string;
  urls: {
    thumb: string;
  };
}

function Images() {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function getImages() {
      const result = await axios.get(
        `${BACKEND_URL}/api/photos?page=${page}&perPage=10`
      );
    const newImages: ImageProps[] = result?.data ;
      setImages(prevImages => [...prevImages, ...newImages]);

      if (newImages.length < 10)
        setHasMore(false);
    }

    getImages();
  }, [page]);

  const loadMoreImages = () => {
    console.log("here");
    setPage(prev=>prev+1);
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={images.length}
        next={loadMoreImages}
        hasMore={hasMore}
        loader={<Spinner/>}
        className="flex flex-wrap"
      >
        {images.map((image: ImageProps) => (
          <Image key={image?.id} image={image} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Images;