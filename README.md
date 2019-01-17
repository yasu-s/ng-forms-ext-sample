# 概要

Angular で `AbstractControl` 内に初期値と初期値が変更されたかを確認するメソッドを追加したサンプルです。  
`AbstractControlDirective` も拡張することで、`NgModel` や `NgForm` でも使用できます。  
新規登録と編集が同じ画面でのバリデーションメッセージ表示時に使用する想定です。

# 実装について

* `AbstractControl` に拡張プロパティ `initValue` を追加。
* `AbstractControl` に拡張メソッド `isEdited` を追加。`value` と `initValue` が異なっていたら `true` を返す。
* `AbstractControlDirective` に拡張メソッド `isEdited` を追加。`AbstractControlDirective` から `AbstractControl.isEdited` を呼び出す。
* `AbstractControlDirective` が `NgForm` の場合は、Form内のコントロールの`isEdited` が一つでも `true` の場合、`true` を返す。
* テンプレートからの `initValue` の設定は `InitValueDirective` 経由で設定する。

# 実行環境

* Node.js 10.x
* Yarn 1.12.x

# 使用ライブラリ

* TypeScript 3.2.x
* Angular 7.2.x

# 動作確認  

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/ng-forms-ext-sample.git
```

## 2. パッケージインストール  

```
cd ng-forms-ext-sample
yarn
```

## 3. サンプルの起動  

```
yarn start
```

## 4. 実行結果  


# サンプルソース
