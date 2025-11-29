import { useParams } from "react-router-dom";

export default function UrlParameter2() {
  const { id2 } = useParams();

  return (
    <div>
      <h1>PAGE2-2</h1>
      <p>URL PARAMETER is {id2}</p>
    </div>
  );
}
