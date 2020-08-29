import React, { ChangeEvent } from 'react';
import './StyleSetting.css';
import { useDispatch } from 'react-redux';
import { setAllRowFontSize, setLinesNum, setWidth, setFrame, setAllRowAlign, Align, setRowFontSize, setRowAlign, setRowFontStyle, FontStyle, setAllRowFontStyle } from 'feature/styleSlice';
import { useSelector } from 'app/store'

const StyleSetting = () => {
  const state = useSelector((state) => ({
    ...state.style,
  }));
  const dispatch = useDispatch()

  const parseNum = (e: ChangeEvent<HTMLInputElement>) => parseInt(e.target.value)

  const FormTableRows = (rowCount: number) => (
    [...Array(rowCount)].map((_, i) => (
      <tr key={i}>
        <td>
          {i + 1}
        </td>
        <td>
          <input
            name="rowFontSize"
            type="number"
            value={state.rowStyles[i].fontSize}
            onChange={e => dispatch(setRowFontSize([i, parseNum(e)]))}
          />
        </td>
        <td>
          <select
            name="rowFontStyle"
            value={state.rowStyles[i].fontStyle}
            onChange={e => dispatch(setRowFontStyle([i, e.target.value as FontStyle]))}
          >
            <option value="normal">通常 (normal)</option>
            <option value="italic">斜体 (italic)</option>
          </select>
        </td>
        <td>
          <select
            name="rowAlign"
            value={state.rowStyles[i].textAlign}
            onChange={e => dispatch(setRowAlign([i, e.target.value as Align]))}
          >
            <option value="left">左 (left)</option>
            <option value="center">中央 (center)</option>
            <option value="right">右 (right)</option>
          </select>
        </td>
      </tr>
    ))
  )

  return (
    <form>
      <fieldset>
        <legend>ラベル全体</legend>
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
      </fieldset>

      <fieldset>
        <legend>一括設定</legend>
        <div>
          <select
            name="align"
            value={state.textAlign}
            onChange={e => dispatch(setAllRowAlign(e.target.value as Align))}
          >
            <option value="left">左 (left)</option>
            <option value="center">中央 (center)</option>
            <option value="right">右 (right)</option>
          </select>
          <label>文字寄せ (text align):</label>
        </div>
        <div>
          <select
            name="fontSTyle"
            value={state.fontStyle}
            onChange={e => dispatch(setAllRowFontStyle(e.target.value as FontStyle))}
          >
            <option value="normal">通常 (normal)</option>
            <option value="italic">斜体 (italic)</option>
          </select>
          <label>フォントスタイル (font style):</label>
        </div>
        <div>
          <input
            name="fontSize"
            type="number"
            min="1"
            value={state.fontSize}
            onChange={e => dispatch(setAllRowFontSize(parseNum(e)))}
          />
          <label>フォントサイズ (font size, px):</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>行ごとの設定</legend>
        <table>
          <thead>
            <tr>
              <th>行</th>
              <th>フォントサイズ</th>
              <th>スタイル</th>
              <th>文字寄せ</th>
            </tr>
          </thead>
          <tbody>
            {FormTableRows(state.linesNum)}
          </tbody>
        </table>
      </fieldset>
    </form>
  );
};

export default StyleSetting;
