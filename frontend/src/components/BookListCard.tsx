import { useBooks } from "@/hooks/useBooks";
import Image from "next/image";
import { Spinner } from "react-bootstrap";

export const BooksListCard = () => {
  // const { books, isLoading, isError } = useBooks();

  // if (isLoading) return <Spinner animation="border" />;
  // if (isError) return <p className="text-danger">エラーが発生しました。</p>;

  const books = [
    {
      id: 1,
      title: "ネットワークはなぜつながるのか",
      author: "戸根勤",
      image_url: "https://placehold.co/150x200", // 仮の画像
      categories: [{ id: 1, category: "ネットワーク" }],
      total_pages: 320,
    },
    {
      id: 2,
      title: "リーダブルコード",
      author: "Dustin Boswell",
      image_url: "https://placehold.co/150x200",
      categories: [{ id: 2, category: "プログラミング" }],
      total_pages: 256,
    },
    {
      id: 3,
      title: "ゼロから作る Deep Learning",
      author: "斎藤康毅",
      image_url: "https://placehold.co/150x200",
      categories: [{ id: 3, category: "AI・機械学習" }],
      total_pages: 384,
    },
    {
      id: 1,
      title: "ネットワークはなぜつながるのか",
      author: "戸根勤",
      image_url: "https://placehold.co/150x200", // 仮の画像
      categories: [{ id: 1, category: "ネットワーク" }],
      total_pages: 320,
    },
    {
      id: 2,
      title: "リーダブルコード",
      author: "Dustin Boswell",
      image_url: "https://placehold.co/150x200",
      categories: [{ id: 2, category: "プログラミング" }],
      total_pages: 256,
    },
    {
      id: 3,
      title: "ゼロから作る Deep Learning",
      author: "斎藤康毅",
      image_url: "https://placehold.co/150x200",
      categories: [{ id: 3, category: "AI・機械学習" }],
      total_pages: 384,
    },
  ];

  return (
    <div className="container mt-4">
      <h1>技術書一覧</h1>
      <div className="row">
        {books?.map((book) => (
          <div key={book.id} className="col-md-2 mb-4">
            <div className="card">
              {book.image_url && (
                <div className="position-relative" style={{ width: "100%", height: "200px" }}>
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    layout="fill"
                    objectFit="cover"
                    className="card-img-top"
                  />
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">著者: {book.author}</p>
                <p className="card-text">
                  カテゴリ: {book.categories.map((c) => c.category).join(", ")}
                </p>
                <p className="card-text">総ページ数: {book.total_pages}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
