import { configureStore } from '@reduxjs/toolkit';
import styleSlice from '../feature/styleSlice';
import dataSlice from '../feature/dataSlice'
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    style: styleSlice,
    data: dataSlice,
  }
});

// 複数のreducerをまとめた場合に、最終的なStateの型を取り出す
export type RootState = ReturnType<typeof store.getState>;

// 型情報付きのuseSelectorをここで宣言
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector