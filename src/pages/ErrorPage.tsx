import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        {" "}
        <h2>Oops</h2>
        <p>
          {isRouteErrorResponse(error)
            ? "This Page does not exist."
            : "Sorry, Unexcepted Error occurred"}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
