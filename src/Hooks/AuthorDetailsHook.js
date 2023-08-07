import { useEffect, useState } from "react";

const useAuthorDetailsHook = (id) => {
  const [details, setDetails] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:3005/author-details/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setDetails(res);
      });
  }, [id]);
  return details;
};

export default useAuthorDetailsHook;
