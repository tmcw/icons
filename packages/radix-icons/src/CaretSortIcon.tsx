import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretSortIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CaretSortIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretSortIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.932 5.432a.45.45 0 00.636.636L7.5 4.136l1.932 1.932a.45.45 0 10.636-.636l-2.25-2.25a.45.45 0 00-.636 0l-2.25 2.25zm5.136 4.136a.45.45 0 00-.636-.636L7.5 10.864 5.568 8.932a.45.45 0 10-.636.636l2.25 2.25a.45.45 0 00.636 0l2.25-2.25z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretSortIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretSortIcon;