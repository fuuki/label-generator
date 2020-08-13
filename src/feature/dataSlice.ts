import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 参考: https://future-architect.github.io/articles/20200501/

// 型定義
export type LabelContent = string[];
export interface LabelData {
  contents: LabelContent[];
}

// 初期状態
const sampleLabelContent = [
  'Nippon: Fukuoka-ken',
  'Fukuoka-shi, Nishiku',
  '12 I 2020, Fuuki',
  `33°35'50"N 130°13'26"E`,
  '40m 福岡市 九州大学',
];

const initialState: LabelData = {
  contents: [...Array(100)].map((_) => sampleLabelContent)
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
