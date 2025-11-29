import { useParams } from "react-router-dom";

export default function UrlParameter() {
  const { id } = useParams();

  return (
    <div>
      <h1>PAGE2-1</h1>
      <p>URL PARAMETER is {id}</p>
    </div>
  );
}
