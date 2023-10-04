import React, { useState, useEffect, useRef } from "react";

const MoviePage: React.FC = () => {
  const [data, setData] = useState<null>(null);
  const ignore = useRef(false);

  useEffect(() => {
    async function fetchData() {
      if (ignore.current) return;
      ignore.current = true;
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTkyOWMzMzUxOGViMjdkNDc2NmRmMTk3NGZjMGJhZSIsInN1YiI6IjYxZDJhMTRmZTE5NGIwMDA4Y2YxNzE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qHX6BJsUN0wtZV8_9zu7UOrXp_3ANGj8u5Ylkcd3Pmg",
          },
        },
      );
      const json = await response.json();
      setData(json);
    }
    fetchData();
    console.log("effect");
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default MoviePage;
