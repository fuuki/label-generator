import React, { ChangeEvent } from 'react';
import './StyleSetting.css';
import { useDispatch } from 'react-redux';
import { setFontSize, setLinesNum, setWidth, setFrame, setAlign, Align } from 'feature/styleSlice';
import { useSelector } from 'app/store'

const StyleSetting = () => {
  const state = useSelector((state) => ({
    ...state.style,
  }));
  const dispatch = useDispatch()

  const parseNum = (e: ChangeEvent<HTMLInputElement>) => parseInt(e.target.value)

  return (
    <form>
      <fieldset>
        <div>
          <input
            name="fontSize"
            type="number"
            min="1"
            value={state.fontSize}
            onChange={e => dispatch(setFontSize(parseNum(e)))}
          />
          <label>フォントサイズ (font size, px):</label>
        </div>
        <div>
          <input
            name="linesNum"
            type="number"
            min="1"
            value={state.linesNum}
            onChange={e => dispatch(setLinesNum(parseNum(e)))}
          />
          <label>ラベル行数 (num of lines):</label>
        </div>
        <div>
          <input
            name="width"
            type="number"
            min="1"
            value={state.width}
            onChange={e => dispatch(setWidth(parseNum(e)))}
          />
          <label>ラベル横幅 (width, mm):</label>
        </div>
        <div>
          <input
            name="frame"
            type="checkbox"
            checked={state.frame}
            onChange={e => dispatch(setFrame(e.target.checked))}
          />
          <label>罫線をつける (ruled line):</label>
        </div>
        <div>
          <select
            name="align"
            value={state.align}
            onChange={e => dispatch(setAlign(e.target.value as Align))}
          >
            <option value="left">左 (left)</option>
            <option value="center">中央 (center)</option>
            <option value="right">右 (right)</option>
          </select>
          <label>文字寄せ (text align):</label>
        </div>
      </fieldset>
    </form>
  );
};

export default StyleSetting;
