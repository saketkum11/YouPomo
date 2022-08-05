import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/dashboard"> Back to home</Link>
    </>
  );
};

export { NotFound };
