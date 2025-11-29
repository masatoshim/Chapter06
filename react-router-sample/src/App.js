import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page1DetailsA from "./components/Page1DetailsA";
import Page1DetailsB from "./components/Page1DetailsB";
import Page4DetailsA from "./components/Page4DetailsA";
import UrlParameter from "./components/UrlParameter";
import UrlParameter2 from "./components/UrlParameter2";
import { QueryParameter } from "./components/QueryParameter";

export default function App() {
  return (
    <div className="App">
      <Link to="/">HOME</Link>
      <br />
      <Link to="page1">PAGE1</Link>
      <br />
      <Link to="page2">PAGE2</Link>
      <br />
      <Link to="page3">PAGE3</Link>
      <br />
      <Link to="page4">PAGE4</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        {/** ルーティングのネスト化 */}
        <Route path="/page1">
          <Route index={true} element={<Page1 />} />
          <Route path="/page1/detailsA" element={<Page1DetailsA />} />
          <Route path="/page1/detailsB" element={<Page1DetailsB />} />
        </Route>
        {/** URL パラメータを取得 */}
        <Route path="/page2">
          <Route index={true} element={<Page2 />} />
          <Route path=":id" element={<UrlParameter />} />
          <Route path="page2-1/:id2" element={<UrlParameter2 />} />
        </Route>
        {/** クエリパラメータの取得 */}
        <Route path="/page3">
          <Route index={true} element={<Page3 />} />
          <Route path="/page3/query" element={<QueryParameter />} />
        </Route>
        {/** state の取得 */}
        <Route path="/page4">
          <Route index={true} element={<Page4 />} />
          <Route path="/page4/detailsA" element={<Page4DetailsA />} />
        </Route>
      </Routes>
    </div>
  );
}
