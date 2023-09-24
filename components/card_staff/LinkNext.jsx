import React from "react";

export const LinkNext = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m2 12h20m-9-9 9 9-9 9" fill="none" stroke="#ffff" stroke-width="2"/></svg>
  );
};

