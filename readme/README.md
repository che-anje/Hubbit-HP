# 注意点

- 

***

# Gulp について

- nodeバージョン v12.6.0 で開発してます
- pug、sass、typescript+webpack(+vue)使用
- 以下コマンドでbrowser-sync、watch起動(監視対象：.pug .scss .ts)

```
$ gulp
```

***

# pugについて

- bodyタグにcssクラスやidをつけるときは下記のような感じでできます。

```
extends ./_component/_layout

block linkfiles
  
  - var bodyId='hoge0';
  - var bodyClass=['hoge1','hoge2'];
block body
```

- 変数、設定、共有パーツなどはpug/_componentフォルダ内にあります

***

# CSSについて

- normalize.css使用
- 変数、設定、共有パーツなどはscss/_componentフォルダ内にあります
***

# typescript について

- 外部モジュールなどwebpackのエントリーポイントに含まないファイルは、ファイル名先頭にアンダーバーをつけてください(例 _hoge.ts)




