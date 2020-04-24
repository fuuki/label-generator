# 標本ラベル作成ツール

昆虫標本などのラベルを作成するツールです。
[こちら](https://fuuki.github.io/label-generator/)から利用できます。

![サンプルラベル](https://github.com/fuuki/label-generator/blob/master/instructions/sample_sheet.png?raw=true)

English ver. is [here](https://github.com/fuuki/label-generator/blob/master/README.md)

## 機能

- CSV 形式のファイルから取り込まれた情報をラベルとして出力します
- インストール不要で、ブラウザで動作します

## 使い方

1. [ここ](https://fuuki.github.io/label-generator/)にアクセスする
2. 「ファイルを選択」から CSV ファイルを指定する
3. サイズなどを調節する
4. 「印刷」ボタンを押す

## 準備・注意

### CSV ファイル

- サンプルファイルは[こちら](https://github.com/fuuki/label-generator/blob/master/instructions/sample_file.zip?raw=true)
- エクセルで作成する場合はファイル形式を「CSV UTF-8」としてください
  - 参考: https://did2memo.net/2016/11/14/excel-csv-utf8/

### Google Chrome のフォントサイズ設定

- Google Chrome で利用する場合、ブラウザの設定によりフォントサイズが一定の数値以下にならないことがあります
- 以下の URL から「最小フォントサイズ」を `0` に設定してください
  - chrome://settings/fonts
  - 参考: https://www.notabo.jp/977_chrome_minimum_font/
