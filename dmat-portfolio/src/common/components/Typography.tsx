import React, { HTMLAttributes, memo, ReactNode } from "react";
import { fontColor, fontType } from "../models/element";
/**
|--------------------------------------------------
| 共通部品 - 文字列
|
| ★使用例
| <Typography size={20} fontType="light" color="text-03">文字列</Typography>
|--------------------------------------------------
*/
interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  // フォントサイズ
  size?: number;
  // フォントタイプ
  fontType?: fontType;
  // 文字色
  color?: fontColor;
  // 表示内容
  children: ReactNode;
  // lineHeight
  lineHeight?: number;
}
function Typography({
  size = 16,
  fontType = "normal",
  color = "#2c3e50",
  lineHeight,
  children,
  ...props
}: TypographyProps) {
  const getFontWeight = (type: fontType) => {
    if (type === "bold") {
      return "bold";
    } else if (type === "semiBold") {
      return 600;
    } else if (type === "medium") {
      return 500;
    } else {
      return "normal";
    }
  };

  return (
    <span
      style={{
        fontSize: `${size}px`,
        lineHeight: `${lineHeight ?? size + 2}px`,
        fontWeight: getFontWeight(fontType),
        fontStyle: "normal",
        color: color,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
export default memo(Typography);