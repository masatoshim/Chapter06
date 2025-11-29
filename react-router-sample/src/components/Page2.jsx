import { Link } from "react-router-dom";

export default function Page2() {
  return (
    <div>
      <h1>PAGE2</h1>
       パラメータを渡す
      <br />
      <Link to="/page2/50">URL Parameter page2に50を</Link>
      <br />
      <Link to="page2-1/100">URL Parameter page2/page2-1に100を</Link>
    </div>
  );
}
