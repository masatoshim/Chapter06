import { useSearchParams } from "react-router-dom";

export const QueryParameter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  return (
    <div>
      <h1>QueryParameter</h1>
      <p>Query parameter is {name}</p>
    </div>
  );
};
