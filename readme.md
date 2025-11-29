# React Router のサンプル作成

## プロジェクト作成

- プロジェクト作成  
  `npx create-react-app react-router-sample`
- react-router-dom をプロジェクトにインストール  
  `npm install react-router-dom`

## App.js でルーティング

- 【 Link to 】  
  HTML の a タグ。`to=""`で飛ばすパスを設定するコンポーネント。
- 【 Routes 】  
  Link で設定したパスごとに表示するルーティングの出しわけを行うためのコンポーネント。
- 【 Route 】  
  ルーティングで表示したいコンポーネントとそのパスを設定するコンポーネント。

ロジックとしては、

1. `Link` タグでパスを飛ばす
2. `Routes` が選別
3. `Route` で設定したパスに該当するコンポーネントが表示される

## ルーティングのネスト化

コンポーネント内にさらにコンポーネントがある状態をネストという。
このネスト化されたページを表示するには以下の設定が必要。

- 子コンポーネントのページのパスを飛ばす用の Link を設定

  ```
  // Page1.jsx
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
  ```

- ネスト化しているコンポーネントを Route コンポーネントで囲う

  ```
  // App.js
  <Route path="/page1">
  ...
  </Route>
  ```

- Page1 コンポーネントを表示する Route コンポーネントの index 属性を true に

  1. インデックスルート
     - 親ルートの デフォルト表示ページ を指定するためのルート。
     - 例えば `/` にアクセスしたときに、子ルートの中で「どれを最初に表示するか」を決める。
  1. 書き方
     - `index={true}`  
       → このルートが「インデックスルート」であることを示す。  
       → `path` は不要（`path="/"` のように書かない）。

  ```
  // App.js
  <Route path="/page1">
      <Route index={true} element={<Page1 />} />
  </Route>
  ```

- 子ページのコンポーネントを設定

  ```
  // App.js
  <Route path="/page1">
      <Route index={true} element={<Page1 />} />
      <Route path="/page1/detailsA" element={<Page1DetailsA />} />
      <Route path="/page1/detailsB" element={<Page1DetailsB />} />
  </Route>
  ```

## URL パラメータを取得

- useParams という関数を利用することで、パラメータを取得

  ```
  // UrlParameter.jsx
    const { id } = useParams();
  ```

- 親コンポーネントでリンク設定

  ```
  // Page2.jsx
    <Link to="/page2/100">URL Parameter</Link>
  ```

- App.js でルーテング設定

  ```
  // App.js
    <Route path="/page2">
      <Route index={true} element={<Page2 />} />
      <Route path=":id" element={<UrlParameter />} />
    </Route>
  ```

**:値**と**path**に設定することで、パラメータとして値が設定されるようになる。
今回は`id`として設定したため、`UrlParameter`コンポーネントで取得する値も`id`ということになる。

## クエリパラメータの取得

- useSearchParams を利用して、クエリパラメータ取得用コンポーネントの作成

  1. インポート
     ```
     import { useSearchParams } from "react-router-dom";
     ```
  1. 戻り値
     - `searchParams`
       - `URLSearchParams` オブジェクト
       - `searchParams.get("key")` で値を取得
       - `searchParams.has("key")` で存在確認
       - `searchParams.entries()` で全パラメータを列挙
     - `setSearchParams`
       - クエリパラメータを更新する関数
       - 更新すると URL が書き換わり、ナビゲーションが発生する
       - 受け取れる型は以下の通り：
         - 文字列: `setSearchParams("?tab=1")`
         - オブジェクト: `setSearchParams({ tab: "1" })`
         - 配列: `setSearchParams([["tab", "1"]])`
         - `URLSearchParams` インスタンス
         - 関数コールバック（`React.useState` と同じパターン）

  ```
  // QueryParameter.jsx
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
  ```

- 親コンポーネントから呼び出し

  - `?name=hello`で`name`に値を設定。

  ```
  // Page3.jsx
    <Link to="/page3/query?name=hello">QueryParameter</Link>
  ```

- ルーティング設定

  ```
  // App.js
    <Route index={true} element={<Page3 />} />
    <Route path="/page3/query" element={<QueryParameter />} />
  ```

# state の取得

- useLocation()を利用して、state を受け取るコンポーネントを作成

  1. インポート
     ```
     import { useLocation } from "react-router-dom";
     ```
  1. 戻り値
     - `Location` オブジェクト（React Router が提供）
     - URL の構造を表すプロパティを持つ
  1. Location オブジェクトの主なプロパティ

     | プロパティ | 内容                              | 例                  |
     | ---------- | --------------------------------- | ------------------- |
     | pathname   | URL のパス部分                    | `/about`            |
     | search     | クエリ文字列（`?`含む）           | `?name=John&age=30` |
     | hash       | ハッシュフラグメント              | `#team`             |
     | state      | 遷移時に渡された任意のデータ      | `{ from: "home" }`  |
     | key        | ReactRouter が生成するユニーク ID | `"default"`         |
