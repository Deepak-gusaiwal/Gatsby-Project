import * as React from "react";
import { Link } from "gatsby";
import { Wrapper } from "../styles/GlobalStyledComponents";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </Wrapper>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
