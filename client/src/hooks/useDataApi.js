import { useEffect, useState } from "react";
import client from "../utils/client";

// TOOD Add different methods e.g. post
const useDataApi = (url) => {
  const [dataState, setDataState] = useState({
    data: [],
    isFetching: false,
  });
  const [endpointUrl] = useState(url);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      setDataState((prevState) => ({
        ...prevState,
        isFetching: true,
      }));
      await client
        .get(endpointUrl)
        .then((res) => {
          setDataState((prevState) => ({
            ...prevState,
            data: res.data,
            isFetching: false,
          }));
        })
        .catch((err) => {
          setDataState((prevState) => ({
            ...prevState,
            isFetching: false,
          }));
        });
    };

    fetchDataFromAPI();
  }, [endpointUrl]);

  return [dataState];
};

export default useDataApi;
