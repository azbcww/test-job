"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface BookData {
  summary: {
    title: string;
    author: string;
    publisher: string;
    pubdate: string;
    pages: string | null;
  };
  cover: string;
}

export default function BookDetail() {
  const { isbn } = useParams(); // /[user-name]/books/[isbn] から isbnを取得
  const [bookData, setBookData] = useState<BookData | null>(null); // 書籍情報の状態
  const [loading, setLoading] = useState<boolean>(false); // ローディング状態
  const [error, setError] = useState<string | null>(null); // エラーメッセージ

  // TODO: DBに問い合わせをして、ISBNが存在しない場合は404ないし「登録されていない本です」などのエラーを出す

  useEffect(() => {
    if (!isbn) return; // ISBNがまだ取得できていない場合はリクエストしない

    const fetchBookDetails = async () => {
      setLoading(true);
      setError(null); // エラー状態をリセット

      try {
        // TODO: axiosとSWRを使って結果をキャッシュする
        // https://github.com/WNomunomu/engineer-guild-hackathon-2025-march/issues/33
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${isbn}+isbn`
        );
        const data = await res.json();

        if (data.items) {
          const book = data.items[0].volumeInfo;
          const cover = `https://ndlsearch.ndl.go.jp/thumbnail/${isbn}.jpg`;
          const pages = book.pageCount || null; // ページ数

          // 書籍情報を設定
          const fetchedBookData = {
            summary: {
              title: book.title,
              author: book.authors?.join(", ") || "不明", // 著者が複数いる場合を考慮
              publisher: book.publisher || "不明",
              pubdate: book.publishedDate || "不明",
              pages, // ページ数を追加
            },
            cover, // カバー画像URLを設定
          };
          setBookData(fetchedBookData);
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

    fetchBookDetails();
  }, [isbn]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">本の詳細</h1>

      {loading && <div className="text-center">読み込み中...</div>}

      {/* エラーメッセージの表示 */}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}

      {/* 書籍情報が取得できた場合 */}
      {bookData && (
        <div className="card">
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
          </div>
        </div>
      )}
    </div>
  );
}
