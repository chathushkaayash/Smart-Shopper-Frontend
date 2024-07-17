import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1 className="text-3xl text-center m-10">Oops! Something went wrong</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "404 Not Found"
          : "An unknown error occurred"}
      </p>
    </>
  );
};

export default ErrorPage;
