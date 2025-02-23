frontend, rails-api と同ディレクトリで下記実行すれば対応するOpenAPIが起動

初回時は　redocly のインストールが必要

**クライアント to 外部api**
```
npx @redocly/cli preview-docs front-ex
```

**クライアント to バックエンド**
```
npx @redocly/cli preview-docs back-in
```

**バックエンド to 外部api**
```
npx @redocly/cli preview-docs back-ex
```