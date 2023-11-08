/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const useFetchData = (url:string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(false);
  

  useEffect(() => {
    // console.log(url, "...............");
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res?.ok) {
          setLoading(true);
          setError(true);
          return
        }
        else{
            const getData = await res.json();
            setData(getData)
        }
      } catch (error:any) {
        const {name,message,stack} = error
        setError({name,message,stack});
      }
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
};

export default useFetchData;