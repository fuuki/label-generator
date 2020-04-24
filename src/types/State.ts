export type Align = 'left' | 'center' | 'right';

export interface LabelProps {
  content: string[];
  style: LabelStyle;
}

export interface LabelStyle {
  frame: boolean;
  width: number;
  align: Align;
  linesNum: number;
  fontSize: number;
}

export interface SheetProps {
  contents: string[][];
  style: LabelStyle;
}

export interface StyleSettingProps {
  onChangeFn: Function;
  state: LabelStyle;
}

export interface SettingProps {
  updateStyle: Function;
  updateFile: Function;
  state: SheetProps;
}