import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 参考: https://future-architect.github.io/articles/20200501/

// 型定義
export type LabelContent = string[];
export interface LabelData {
  contents: LabelContent[];
}

// 初期状態
const sampleLabelContents = [
  ["ここに表示", "されているのは", "サンプルの", "データです"],
  ["ファイルを選択", "ボタンから", "CSVファイルを", "投入してください"],
  ["このツールの", "使い方は", "左上のリンクを", "ご参照ください"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Nishiku", "12 I 2020, Fuuki", "33°35'50\"N 130°13'26\"E", "40m 福岡市 九州大学伊都地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Nishiku", "12 I 2020, Fuuki", "33°35'50\"N 130°13'26\"E", "40m 福岡市 九州大学伊都地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Nishiku", "14 I 2020, Fuuki", "33°35'50\"N 130°13'26\"E", "40m 福岡市 九州大学伊都地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Nishiku", "14 I 2020, Fuuki", "33°35'50\"N 130°13'26\"E", "40m 福岡市 九州大学伊都地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Nishiku", "14 I 2020, Fuuki", "33°35'50\"N 130°13'26\"E", "40m 福岡市 九州大学伊都地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Minamiku", "21 I 2020, Fuuki", "33°33'37\"N 130°25'49\"E", "40m 福岡市 九州大学芸術工学部"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Minamiku", "21 I 2020, Fuuki", "33°33'37\"N 130°25'49\"E", "40m 福岡市 九州大学芸術工学部"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Minamiku", "21 I 2020, Fuuki", "33°33'37\"N 130°25'49\"E", "40m 福岡市 九州大学芸術工学部"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "6 II 2020, Fuuki", "33°37'22\"N 130°25'30\"E", "40m 福岡市 九州大学箱崎地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "6 II 2020, Fuuki", "33°37'22\"N 130°25'30\"E", "40m 福岡市 九州大学箱崎地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "7 II 2020, Fuuki", "33°37'22\"N 130°25'30\"E", "40m 福岡市 九州大学箱崎地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "8 II 2020, Fuuki", "33°37'22\"N 130°25'30\"E", "40m 福岡市 九州大学箱崎地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "28 II 2020, Fuuki", "33°36'36\"N 130°24'59\"E", "40m 福岡市 九州大学病院地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "28 II 2020, Fuuki", "33°36'36\"N 130°24'59\"E", "40m 福岡市 九州大学病院地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "28 II 2020, Fuuki", "33°36'36\"N 130°24'59\"E", "40m 福岡市 九州大学病院地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "28 II 2020, Fuuki", "33°36'36\"N 130°24'59\"E", "40m 福岡市 九州大学病院地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "29 II 2020, Fuuki", "33°36'36\"N 130°24'59\"E", "40m 福岡市 九州大学病院地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "29 II 2020, Fuuki", "33°36'36\"N 130°24'59\"E", "40m 福岡市 九州大学病院地区"],
  ["Nippon: Fukuoka-ken", "Fukuoka-shi, Higashiku", "30 II 2020, Fuuki", "33°36'36\"N 130°24'59\"E", "40m 福岡市 九州大学病院地区"],
]

const initialState: LabelData = {
  contents: sampleLabelContents,
}

// createSliceでreducerとactionを同時に定義
export const slice = createSlice({
  name: 'labelData',
  initialState,
  reducers: {
    setContents: (state, action: PayloadAction<LabelContent[]>) => ({
      ...state,
      contents: action.payload,
    }),
  },
});

export const { setContents } = slice.actions;

export default slice.reducer;
