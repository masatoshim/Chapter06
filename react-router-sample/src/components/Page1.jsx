import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <div>
      <h1>PAGE1</h1>
      <Link to="/page1/detailsA">Page1DetailsA</Link>
      <br />
      <Link to="/page1/detailsB">Page1DetailsB</Link>
    </div>
  );
}
