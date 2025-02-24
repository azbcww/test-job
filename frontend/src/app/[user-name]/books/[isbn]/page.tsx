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
  const { isbn } = useParams(); // /[user-name]/books/[isbn] から ISBN を取得
  const [bookData, setBookData] = useState<BookData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isbn) return; // ISBNが未取得なら処理しない

    const fetchBookDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${isbn}+isbn`
        );
        const data = await res.json();

        if (data.items) {
          const book = data.items[0].volumeInfo;

          // Google Books の画像URLを取得
          const googleCover = book.imageLinks?.thumbnail;

          // 画像URLをGoogle Books優先で取得
          const cover =
            googleCover || `https://ndlsearch.ndl.go.jp/thumbnail/${isbn}.jpg`;

          const pages = book.pageCount?.toString() || null;

          const fetchedBookData = {
            summary: {
              title: book.title,
              author: book.authors?.join(", ") || "不明",
              publisher: book.publisher || "不明",
              pubdate: book.publishedDate || "不明",
              pages,
            },
            cover,
          };
          setBookData(fetchedBookData);
        } else {
          setError("書籍が見つかりませんでした。");
          setBookData(null);
        }
      } catch (err) {
        console.log(err);
        setError("APIのリクエストに失敗しました。");
        setBookData(null);
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

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}

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

            <div className="text-center">
              <Image
                src={bookData.cover}
                alt={`Cover of ${bookData.summary.title}`}
                width={150}
                height={225}
                className="img-fluid"
                unoptimized={true} // Google Books のURLをそのまま使う場合は必要
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
