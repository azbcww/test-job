# 📚 積読対策 × ゲーミフィケーション × 技術書 📖

## **このアプリについて**
「技術書を買ったけど、なかなか読めない…」  
そんな積読問題を解決するための **読書管理アプリ** です！  
本を読むたびに経験値（EXP）を獲得し、スキルアップを可視化！📊✨

---

## **主な機能 🚀**
✅ **読書ログの記録**  
- その日に読んだ技術書とページ数を記録  

✅ **経験値（EXP）システム**  
- 技術分野ごとに EXP を獲得し、成長を実感  
- 例: 「ネットワークはなぜつながるのか」を読んだら `ネットワーク` の EXP が増加
- 経験値は 1 EXP/Page
- こんなグラフ出せたらいいね

  ![image](https://github.com/user-attachments/assets/b1bf2bf0-34bf-4156-860e-4500aef0e907)

✅ **ゲーミフィケーション要素**  
- **GitHub Contribution 風の読書ログ** 📅  
- **経験値に応じてキャラクターが成長！** 🏆  

✅ **本棚機能**  
- 読んだ本を一覧で管理  
- 表紙画像と ISBN に対応 📖  

✅ **データの可視化**  
- 進捗をグラフで確認できる 📊

---

## **技術スタック 🛠️**
- **フロントエンド:** Next.js (TypeScript)
- **バックエンド:** Rails API (JWT 認証)
- **データベース:** PostgreSQL
- **インフラ:** Docker / Kubernetes / ArgoCD
- **クラウドストレージ:** Active Storage (S3 予定)

---

## **API 設計 📡**
[テーブル設計 README](https://github.com/WNomunomu/engineer-guild-hackathon-2025-march/blob/main/rails-api/db/README.md)
| メソッド | エンドポイント        | 説明 |
|---------|-----------------|------|
| `POST`  | `/signup`       | ユーザー登録 |
| `POST`  | `/login`        | ログイン（JWT 認証） |
| `GET`   | `/books`        | 本の一覧取得 |
| `POST`  | `/users/books`   | ユーザーが本を登録 |
| `GET`   | `/users/books`   | ユーザーの登録した本の一覧取得 |
| `POST`  | `/users/reading_logs`  | 読書ログの登録 |
| `GET`   | `/users/reading_logs`  | ユーザーの読書履歴取得 |
| `GET`   | `/users/exp_logs`   | 経験値ログ取得 |
| `GET`   | `/users/progress`   | ユーザーの成長データ取得 |
---

## **こんな人におすすめ！ 🎯**
✅ 技術書を読むモチベーションを上げたい！  
✅ どの分野の知識が増えたのか可視化したい！  
✅ ゲーム感覚で学習を続けたい！  

📢 **さぁ、技術書を積まずに読もう！**
