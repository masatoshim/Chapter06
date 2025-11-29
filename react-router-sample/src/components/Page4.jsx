import { Link, useNavigate } from "react-router-dom";

export default function Page4() {
  const arr = [...Array(10).keys()];
  return (
    <div>
      <h1>Page4</h1>
      <Link to="/page4/detailsA" state={arr}>
        DetalilsA
      </Link>
      <Link to="/page4/detailsB" state={arr}>
        DetalilsB
      </Link>
    </div>
  );
};