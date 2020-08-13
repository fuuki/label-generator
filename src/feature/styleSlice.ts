import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 参考: https://future-architect.github.io/articles/20200501/

// 型定義
export type Align = 'left' | 'center' | 'right';

export interface LabelStyle {
  frame: boolean;
  width: number;
  align: Align;
  linesNum: number;
  fontSize: number;
}

// 初期状態
const initialState: LabelStyle = {
  frame: true,
  width: 22,
  align: 'center',
  linesNum: 5,
  fontSize: 6,
}

// createSliceでreducerとactionを同時に定義
export const slice = createSlice({
  name: 'labelStyle',
  initialState,
  reducers: {
    setFrame: (state, action: PayloadAction<boolean>) => ({
      ...state,
      frame: action.payload,
    }),
    setWidth: (state, action: PayloadAction<number>) => ({
      ...state,
      width: action.payload
    }),
    setAlign: (state, action: PayloadAction<Align>) => ({
      ...state,
      align: action.payload,
    }),
    setLinesNum: (state, action: PayloadAction<number>) => ({
      ...state,
      linesNum: action.payload
    }),
    setFontSize: (state, action: PayloadAction<number>) => ({
      ...state,
      fontSize: action.payload
    }),
  },
});

export const { setFrame, setWidth, setAlign, setLinesNum, setFontSize } = slice.actions;

export default slice.reducer;
