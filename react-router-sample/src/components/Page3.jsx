import { Link } from "react-router-dom";

export default function Page3() {
  return (
    <div>
      <h1>Page3</h1>
      <Link to="/page3/query?name=hello">QueryParameter</Link>
    </div>
  );
};
