import { useRouteError } from "react-router-dom";
// using this useRouteError Hook it will give us more info aboout the Error

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      OOps!
      <p> Something Went Wrong </p>
      <h3>{err.status} {err.statusText} </h3>
    </div>
  );
};
export default Error;