import React, { ChangeEvent } from 'react';
import './StyleSetting.css';
import { StyleSettingProps } from 'types/State';

const StyleSetting = (props: StyleSettingProps) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const getChecked = (v: any) => v.checked; // HTMLSelectElement doesn't has 'checked' property
    const value =
      target.type === 'checkbox' ? getChecked(target) : target.value;
    const name = target.name;
    props.onChangeFn({
      [name]: value,
    });
  };

  return (
    <form>
      <fieldset>
        <div>
          <input
            name="fontSize"
            type="number"
            min="1"
            value={props.state.fontSize}
            onChange={handleInputChange}
          />
          <label>フォントサイズ (font size, px):</label>
        </div>
        <div> 
          <input
            name="linesNum"
            type="number"
            min="1"
            value={props.state.linesNum}
            onChange={handleInputChange}
          />
          <label>ラベル行数 (num of lines):</label>
        </div>
        <div>
          <input
            name="width"
            type="number"
            min="1"
            value={props.state.width}
            onChange={handleInputChange}
          />
          <label>ラベル横幅 (width, mm):</label>
        </div>
        <div>
          <input
            name="frame"
            type="checkbox"
            checked={props.state.frame}
            onChange={handleInputChange}
          />
          <label>罫線をつける (ruled line):</label>
        </div>
        <div>
          <select
            name="align"
            value={props.state.align}
            onChange={handleInputChange}
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
