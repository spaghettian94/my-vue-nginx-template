#!/bin/sh

# シェルファイルと同じ場所に移動
echo `dirname $0`
cd `dirname $0`

# Node.js バージョン表示
echo "node versions `node -v`"

# npmインストール初期化
yarn install

# Vueアプリビルド・監視
yarn build --watch
