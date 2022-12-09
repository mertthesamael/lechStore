import axios from "axios";
import { useQuery } from "react-query";

export const useGetData = (endpoint) => {
    console.log(process.env.REACT_APP_API)
  const fetchData = (endpoint) => {
    return axios(
      `${process.env.REACT_APP_API+'/'+endpoint}`
    );
  };

  return useQuery(["All docs", endpoint], () => fetchData(endpoint), {
    select: (data) => data.data,
  });
};
