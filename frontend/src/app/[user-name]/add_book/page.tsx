"use client";

import { useState } from "react";
import Image from "next/image"; // next/imageのインポート

// Google Books APIのレスポンスの型を定義
interface BookData {
  summary: {
    title: string;
    author: string;
    publisher: string;
    pubdate: string;
    pages: string | null; // ページ数を追加（nullの場合もある）
  };
  cover: string;
  isbn: string;
}

export default function AddBook() {
  const [isbn, setIsbn] = useState<string>(""); // ISBN番号の状態
  const [bookData, setBookData] = useState<BookData | null>(null); // BookData型を指定
  const [loading, setLoading] = useState<boolean>(false); // ローディング状態
  const [error, setError] = useState<string | null>(null); // エラーメッセージ

  const handleIsbnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(event.target.value);
  };

  // ISBN番号のバリデーション
  const validateIsbn = (isbn: string): string | null => {
    // ハイフンを除去
    const sanitizedIsbn = isbn.replace(/-/g, "");

    // 数字のみか、13桁かを確認
    if (!/^\d{13}$/.test(sanitizedIsbn)) {
      return "ISBN番号が無効です";
    }
    console.log(sanitizedIsbn);

    return null; // バリデーションが通った場合
  };

  const handleSearchBook = async () => {
    // ISBN番号のバリデーション
    const isbnError = validateIsbn(isbn);
    if (isbnError) {
      console.log(isbnError);
      setError(isbnError);
      setBookData(null);
      return; // バリデーションエラーがあれば処理を終了
    }
    const sanitizedIsbn = isbn.replace(/-/g, "");

    setLoading(true);
    setError(null); // エラー状態をリセット

    try {
      // TODO: axiosとSWRを使って結果をキャッシュする
      // https://github.com/WNomunomu/engineer-guild-hackathon-2025-march/issues/33
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${sanitizedIsbn}+isbn`
      );
      const data = await res.json();
      console.log(data);

      if (data.items) {
        // Google Books APIのレスポンスから書籍情報を取得
        const book = data.items[0].volumeInfo;

        // カバー画像URL
        const cover = `https://ndlsearch.ndl.go.jp/thumbnail/${sanitizedIsbn}.jpg`;

        // ページ数を取得
        const pages = book.pageCount || null;

        // レスポンスがある場合はBookData型を適用
        const bookData = {
          summary: {
            title: book.title,
            author: book.authors?.join(", ") || "不明", // 著者が複数いる場合を考慮
            publisher: book.publisher || "不明",
            pubdate: book.publishedDate || "不明",
            pages, // ページ数を追加
          },
          cover, // Google Booksのカバー画像URLを設定
          isbn: sanitizedIsbn,
        };
        setBookData(bookData);

        // TODO: bookDataをrailsAPIに渡してDBに保存する
      } else {
        setError("書籍が見つかりませんでした。");
        setBookData(null); // データが見つからなかった場合
      }
    } catch (err) {
      console.log(err);
      setError("APIのリクエストに失敗しました。");
      setBookData(null); // エラーが発生した場合
    } finally {
      setLoading(false);
    }
  };

  // TODO: このボタンがクリックされたときの処理を作成する
  // https://github.com/WNomunomu/engineer-guild-hackathon-2025-march/issues/34
  const handleAddBook = () => {
    console.log("本を追加する処理");
    // bookDataをサーバーに送信する処理をここに追加
    // SBN番号, ページ数, カテゴリ, 進捗(何ページ読んだか デフォルトで0)をDBへ登録
  };

  return (
    <div className="container-fluid px-5 mt-5">
      <h1 className="mb-4">本を追加</h1>
      <div className="mb-3">
        <label htmlFor="isbn" className="form-label">
          ISBN番号:
        </label>
        <input
          type="text"
          id="isbn"
          className="form-control"
          value={isbn}
          onChange={handleIsbnChange}
          placeholder="ISBN番号を入力"
        />
      </div>
      <button
        className="btn btn-primary mb-3"
        onClick={handleSearchBook}
        disabled={loading}
      >
        {loading ? "検索中..." : "検索"}
      </button>

      {/* エラーメッセージの表示 */}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}

      {/* 書籍情報が取得できた場合 */}
      {bookData && (
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title">{bookData.summary.title}</h2>
            <p>
              <strong>著者:</strong> {bookData.summary.author}
            </p>
            <p>
              <strong>出版社:</strong> {bookData.summary.publisher}
            </p>
            <p>
              <strong>発行年:</strong> {bookData.summary.pubdate}
            </p>
            <p>
              <strong>ページ数:</strong> {bookData.summary.pages || "不明"}
            </p>

            {/* カバー画像をNext.jsのImageコンポーネントで表示 */}
            <div className="text-center">
              <Image
                src={bookData.cover} // 画像URL
                alt={`Cover of ${bookData.summary.title}`} // 代替テキスト
                width={150} // 幅
                height={225} // 高さ
                className="img-fluid" // 画像をレスポンシブ対応
              />
            </div>

            {/* この本を追加するボタン */}
            <button className="btn btn-success mt-3" onClick={handleAddBook}>
              この本を追加する
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
