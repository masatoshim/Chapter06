import { useLocation } from "react-router-dom";

export default function Page4DetailsA() {
  const { state } = useLocation();
  return (
    <div>
      <h1>Page4DetailsA</h1>
      {state != null ? (
        <ul>
          {state.map((i) => {
            return <li key="arr">{i}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
