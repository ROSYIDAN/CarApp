import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return <h2>{error.message || error.data}</h2>;
};
export default SinglePageError;
