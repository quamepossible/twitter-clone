import { useEffect, useContext } from "react";
import { TweetsContext } from "../Context/TweetsProvider";

const useAuthorDetailsHook = (id) => {
  const { eachProfile } = useContext(TweetsContext);
  
  useEffect(() => {
    console.log('run');
    fetch(`${process.env.REACT_APP_ENDPOINT}/author-details/${id}`)
      .then((res) => res.json())
      .then((res) => {
        eachProfile(res)
      });
  }, [id, eachProfile]);
};

export default useAuthorDetailsHook;
