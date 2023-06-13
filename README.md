# Coding Guideline

## Installation Requirements

- Node.js >= v16.x
- yarn >= v1.x

## Project setup
### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### HTML
- Không thiết lập giới hạn trong cách xắp xếp - xử lý HTML.
- Chọn Tag, thuộc tính chính xác và phù hợp với bối cảnh rồi markup (đánh dấu).

### Vue
- Không giới hạn số lượng các component.
- Chỉ hoàn thành "App.vue" cũng được, và phân chia bằng độ chính xác thích hợp là OK.

### CSS
- Vì Autoprefixrer có hiệu lực cho nên không cần phải viết tiếp đầu ngữ(prefix) Ventor.
- Không chỉ định quy tắc đặt tên Selector. Bạn có thể giới thiệu phương pháp thiết kế như là BEM, SMACSS hoặc ECSS.

### JavaScript
- Vì Babel có hiệu lực cho nên có thể mô tả bằng tiêu chuẩn từ ES2015 trở đi.
- Không giới hạn cách viết. Nếu thấy không xuất hiện lỗi ở Console của Browser thì viết như thế nào cũng được.
- Sau khi thực hiện UI component, nếu như sử dụng Framework hoặc Library đang được công khai mà nhanh hơn thì bản thân tự phán đoán rồi thêm vào cũng không sao.

### Image
Phương pháp chèn hình ảnh thì có ví dụ ở `src/App.vue`
hello.png là hình ảnh mẫu (sample), cho nên bạn có thể xóa đi cũng được.

# README

## Installation Requirements

- Node.js >= v16.x
- yarn >= v1.x

## Coding Guideline

この項では各言語のガイドラインについて説明していきます。

### HTML

- HTML の組み方に制約は設けていません。
- 文脈に合った正しいタグ、属性を選択しマークアップを行ってください。

### Vue

- コンポーネントの数に制限はありません。
- `App.vue` だけで完結しても良いですし、最適な粒度で分割してもらっても構いません。

### CSS

- 各ブラウザのデフォルト CSS をリセットするのに[Doctor Reset CSS](http://html5doctor.com/html-5-reset-stylesheet/)を `src/js/index.js` で読み込んでいます。
    - 作業上必要ないようであれば外してもらってもよいですし、公開されている別のリセット CSS を使ってもらっても構いません。
- Autoprefixer が有効なため、ベンダー接頭辞を書く必要はありません。
- セレクタの命名規則の指定はありません。BEM、SMACSS や ECSS のような設計手法を導入してもよいです。

## JavaScript

- Babel が有効なため、ES2015 以降の仕様で記述可能です。
- 書き方に制限はありません。ブラウザのコンソールにエラーが出ないようであれば、どのように書いても問題ありません。
- UI コンポーネントを実装する上で、公開されているフレームワークやライブラリを活用したほうが早い場合、各自の判断で追加してもらって構いません。

### Image

- 画像の挿入方法は `src/App.vue` に例があります。
    - hello.png はサンプル画像ですので、消してしまって構いません。
