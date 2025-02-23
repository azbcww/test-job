import Link from "next/link";

// TODO: <Link>のhrefの中身を修正
// リンクは /[user-name]/add_book みたいな形でuser名を挟む必要がある

// TODO: アイコンを作成
// サイドバーの左下にユーザーアイコンを埋め込む。

export const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3"
      style={{ width: "250px", height: "100vh", backgroundColor: "#249474" }}
    >
      <h3 className="text-center mb-3 text-white">
        <Link href="/" className="text-white text-decoration-none">
          読書王
        </Link>
      </h3>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            href="/add_book"
            className="nav-link text-white d-flex align-items-center"
          >
            <span className="material-symbols-outlined fs-5 me-2">book</span>
            本を追加
          </Link>
        </li>
        <li>
          <Link
            href="/books"
            className="nav-link text-white d-flex align-items-center"
          >
            <span className="material-symbols-outlined fs-5 me-2">
              menu_book
            </span>
            本を見る
          </Link>
        </li>
        <li>
          <Link
            href="/reading-log"
            className="nav-link text-white d-flex align-items-center"
          >
            <span className="material-symbols-outlined fs-5 me-2">
              history_edu
            </span>
            読書ログを見る
          </Link>
        </li>
        <li>
          <Link
            href="/level"
            className="nav-link text-white d-flex align-items-center"
          >
            <span className="material-symbols-outlined fs-5 me-2">
              military_tech
            </span>
            レベルを見る
          </Link>
        </li>
      </ul>
    </div>
  );
};
