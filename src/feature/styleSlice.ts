import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 参考: https://future-architect.github.io/articles/20200501/

// 型定義
export type Align = 'left' | 'center' | 'right';
export type FontStyle = 'normal' | 'italic';

export interface LabelRowStyle {
  fontSize: number,
  fontStyle: FontStyle,
  textAlign: Align,
}

export interface LabelStyle {
  frame: boolean;
  width: number;
  textAlign: Align;
  linesNum: number;
  fontSize: number;
  fontStyle: FontStyle;
  rowStyles: LabelRowStyle[];
}

// 初期状態
const initialState: LabelStyle = {
  frame: true,
  width: 22,
  textAlign: 'center',
  linesNum: 5,
  fontSize: 6,
  fontStyle: 'normal',
  rowStyles: [...Array(5)].map(_ => ({
    fontSize: 6,
    fontStyle: 'normal',
    textAlign: 'center',
  })),
}

const maxRowCount = 20;

// createSliceでreducerとactionを同時に定義
export const slice = createSlice({
  name: 'labelStyle',
  initialState,
  reducers: {
    // ラベル全体
    setFrame: (state, action: PayloadAction<boolean>) => ({
      ...state,
      frame: action.payload,
    }),
    setWidth: (state, action: PayloadAction<number>) => ({
      ...state,
      width: action.payload
    }),
    setLinesNum: (state, action: PayloadAction<number>) => {
      const updatedCount = action.payload < 1 ? 1
        : action.payload > maxRowCount ? maxRowCount : action.payload;
      const countDiff = updatedCount - state.linesNum;
      const updatedRowStyles = (): LabelRowStyle[] => {
        if (countDiff > 0) {
          const newRowStyle: LabelRowStyle = {
            fontSize: state.fontSize,
            fontStyle: state.fontStyle,
            textAlign: state.textAlign,
          }
          return state.rowStyles.concat([...Array(countDiff)].map(v => newRowStyle));
        }
        return state.rowStyles.slice(0, updatedCount);
      }
      return {
        ...state,
        linesNum: updatedCount,
        rowStyles: updatedRowStyles(),
      }
    },
    // 行の一括設定
    setAllRowFontSize: (state, action: PayloadAction<number>) => {
      const fontSize = action.payload;
      return {
        ...state,
        fontSize,
        rowStyles: state.rowStyles.map((v) => ({ ...v, fontSize }))
      }
    },
    setAllRowFontStyle: (state, action: PayloadAction<FontStyle>) => {
      const fontStyle = action.payload;
      return {
        ...state,
        fontStyle,
        rowStyles: state.rowStyles.map((v) => ({ ...v, fontStyle }))
      }
    },
    setAllRowAlign: (state, action: PayloadAction<Align>) => {
      const textAlign = action.payload;
      return {
        ...state,
        textAlign,
        rowStyles: state.rowStyles.map((v) => ({ ...v, textAlign }))
      }
    },
    // 各行の設定
    setRowFontSize: (state, action: PayloadAction<[number, number]>) => {
      const index = action.payload[0];
      const fontSize = action.payload[1];
      return ({
        ...state,
        rowStyles: state.rowStyles.map((v, i) => i === index ? { ...v, fontSize } : v)
      })
    },
    setRowFontStyle: (state, action: PayloadAction<[number, FontStyle]>) => {
      const index = action.payload[0];
      const fontStyle = action.payload[1];
      return ({
        ...state,
        rowStyles: state.rowStyles.map((v, i) => i === index ? { ...v, fontStyle } : v)
      })
    },
    setRowAlign: (state, action: PayloadAction<[number, Align]>) => {
      const index = action.payload[0];
      const textAlign = action.payload[1];
      return ({
        ...state,
        rowStyles: state.rowStyles.map((v, i) => i === index ? { ...v, textAlign } : v)
      })
    },
  },
});

export const { setFrame, setWidth, setAllRowAlign, setAllRowFontStyle, setLinesNum, setAllRowFontSize, setRowFontSize, setRowAlign, setRowFontStyle } = slice.actions;

export default slice.reducer;
