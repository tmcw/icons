import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BorderRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1ZM5.49997 7.00001C5.22383 7.00001 4.99997 7.22386 4.99997 7.50001C4.99997 7.77615 5.22383 8.00001 5.49997 8.00001C5.77611 8.00001 5.99997 7.77615 5.99997 7.50001C5.99997 7.22386 5.77611 7.00001 5.49997 7.00001ZM4.99997 13.5C4.99997 13.2239 5.22383 13 5.49997 13C5.77611 13 5.99997 13.2239 5.99997 13.5C5.99997 13.7761 5.77611 14 5.49997 14C5.22383 14 4.99997 13.7761 4.99997 13.5ZM3.49997 7.00001C3.22383 7.00001 2.99997 7.22386 2.99997 7.50001C2.99997 7.77615 3.22383 8.00001 3.49997 8.00001C3.77611 8.00001 3.99997 7.77615 3.99997 7.50001C3.99997 7.22386 3.77611 7.00001 3.49997 7.00001ZM2.99997 13.5C2.99997 13.2239 3.22383 13 3.49997 13C3.77611 13 3.99997 13.2239 3.99997 13.5C3.99997 13.7761 3.77611 14 3.49997 14C3.22383 14 2.99997 13.7761 2.99997 13.5ZM7.49997 7.00001C7.22383 7.00001 6.99997 7.22386 6.99997 7.50001C6.99997 7.77615 7.22383 8.00001 7.49997 8.00001C7.77611 8.00001 7.99997 7.77615 7.99997 7.50001C7.99997 7.22386 7.77611 7.00001 7.49997 7.00001ZM0.999969 7.50001C0.999969 7.22386 1.22383 7.00001 1.49997 7.00001C1.77611 7.00001 1.99997 7.22386 1.99997 7.50001C1.99997 7.77615 1.77611 8.00001 1.49997 8.00001C1.22383 8.00001 0.999969 7.77615 0.999969 7.50001ZM7.49997 13C7.22383 13 6.99997 13.2239 6.99997 13.5C6.99997 13.7761 7.22383 14 7.49997 14C7.77611 14 7.99997 13.7761 7.99997 13.5C7.99997 13.2239 7.77611 13 7.49997 13ZM0.999969 13.5C0.999969 13.2239 1.22383 13 1.49997 13C1.77611 13 1.99997 13.2239 1.99997 13.5C1.99997 13.7761 1.77611 14 1.49997 14C1.22383 14 0.999969 13.7761 0.999969 13.5ZM7.49997 5.00001C7.22383 5.00001 6.99997 5.22386 6.99997 5.50001C6.99997 5.77615 7.22383 6.00001 7.49997 6.00001C7.77611 6.00001 7.99997 5.77615 7.99997 5.50001C7.99997 5.22386 7.77611 5.00001 7.49997 5.00001ZM0.99997 5.50001C0.99997 5.22386 1.22383 5.00001 1.49997 5.00001C1.77611 5.00001 1.99997 5.22386 1.99997 5.50001C1.99997 5.77615 1.77611 6.00001 1.49997 6.00001C1.22383 6.00001 0.99997 5.77615 0.99997 5.50001ZM7.49997 3.00001C7.22383 3.00001 6.99997 3.22386 6.99997 3.50001C6.99997 3.77615 7.22383 4.00001 7.49997 4.00001C7.77611 4.00001 7.99997 3.77615 7.99997 3.50001C7.99997 3.22386 7.77611 3.00001 7.49997 3.00001ZM0.999969 3.50001C0.999969 3.22386 1.22383 3.00001 1.49997 3.00001C1.77611 3.00001 1.99997 3.22386 1.99997 3.50001C1.99997 3.77615 1.77611 4.00001 1.49997 4.00001C1.22383 4.00001 0.999969 3.77615 0.999969 3.50001ZM7.49997 9.00001C7.22383 9.00001 6.99997 9.22386 6.99997 9.50001C6.99997 9.77615 7.22383 10 7.49997 10C7.77611 10 7.99997 9.77615 7.99997 9.50001C7.99997 9.22386 7.77611 9.00001 7.49997 9.00001ZM0.999969 9.50001C0.999969 9.22386 1.22383 9.00001 1.49997 9.00001C1.77611 9.00001 1.99997 9.22386 1.99997 9.50001C1.99997 9.77615 1.77611 10 1.49997 10C1.22383 10 0.999969 9.77615 0.999969 9.50001ZM7.49997 11C7.22383 11 6.99997 11.2239 6.99997 11.5C6.99997 11.7761 7.22383 12 7.49997 12C7.77611 12 7.99997 11.7761 7.99997 11.5C7.99997 11.2239 7.77611 11 7.49997 11ZM0.99997 11.5C0.99997 11.2239 1.22383 11 1.49997 11C1.77611 11 1.99997 11.2239 1.99997 11.5C1.99997 11.7761 1.77611 12 1.49997 12C1.22383 12 0.99997 11.7761 0.99997 11.5ZM9.49997 7.00001C9.22383 7.00001 8.99997 7.22386 8.99997 7.50001C8.99997 7.77615 9.22383 8.00001 9.49997 8.00001C9.77611 8.00001 9.99997 7.77615 9.99997 7.50001C9.99997 7.22386 9.77611 7.00001 9.49997 7.00001ZM8.99997 13.5C8.99997 13.2239 9.22383 13 9.49997 13C9.77611 13 9.99997 13.2239 9.99997 13.5C9.99997 13.7761 9.77611 14 9.49997 14C9.22383 14 8.99997 13.7761 8.99997 13.5ZM11.5 7.00001C11.2238 7.00001 11 7.22386 11 7.50001C11 7.77615 11.2238 8.00001 11.5 8.00001C11.7761 8.00001 12 7.77615 12 7.50001C12 7.22386 11.7761 7.00001 11.5 7.00001ZM11 13.5C11 13.2239 11.2238 13 11.5 13C11.7761 13 12 13.2239 12 13.5C12 13.7761 11.7761 14 11.5 14C11.2238 14 11 13.7761 11 13.5ZM5.49997 1.00001C5.22383 1.00001 4.99997 1.22386 4.99997 1.50001C4.99997 1.77615 5.22383 2.00001 5.49997 2.00001C5.77611 2.00001 5.99997 1.77615 5.99997 1.50001C5.99997 1.22386 5.77611 1.00001 5.49997 1.00001ZM2.99997 1.50001C2.99997 1.22386 3.22383 1.00001 3.49997 1.00001C3.77611 1.00001 3.99997 1.22386 3.99997 1.50001C3.99997 1.77615 3.77611 2.00001 3.49997 2.00001C3.22383 2.00001 2.99997 1.77615 2.99997 1.50001ZM7.49997 1.00001C7.22383 1.00001 6.99997 1.22386 6.99997 1.50001C6.99997 1.77615 7.22383 2.00001 7.49997 2.00001C7.77611 2.00001 7.99997 1.77615 7.99997 1.50001C7.99997 1.22386 7.77611 1.00001 7.49997 1.00001ZM0.999969 1.50001C0.999969 1.22386 1.22383 1.00001 1.49997 1.00001C1.77611 1.00001 1.99997 1.22386 1.99997 1.50001C1.99997 1.77615 1.77611 2.00001 1.49997 2.00001C1.22383 2.00001 0.999969 1.77615 0.999969 1.50001ZM9.49997 1.00001C9.22383 1.00001 8.99997 1.22386 8.99997 1.50001C8.99997 1.77615 9.22383 2.00001 9.49997 2.00001C9.77611 2.00001 9.99997 1.77615 9.99997 1.50001C9.99997 1.22386 9.77611 1.00001 9.49997 1.00001ZM11 1.50001C11 1.22386 11.2238 1.00001 11.5 1.00001C11.7761 1.00001 12 1.22386 12 1.50001C12 1.77615 11.7761 2.00001 11.5 2.00001C11.2238 2.00001 11 1.77615 11 1.50001Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.75 14L1.75 1L0.250001 1L0.25 14L1.75 14ZM9.50003 7.99999C9.77617 7.99999 10 7.77614 10 7.49999C10 7.22385 9.77617 6.99999 9.50003 6.99999C9.22389 6.99999 9.00003 7.22385 9.00003 7.49999C9.00003 7.77614 9.22389 7.99999 9.50003 7.99999ZM10 1.49999C10 1.77614 9.77617 1.99999 9.50003 1.99999C9.22389 1.99999 9.00003 1.77614 9.00003 1.49999C9.00003 1.22385 9.22389 0.999993 9.50003 0.999993C9.77617 0.999993 10 1.22385 10 1.49999ZM11.5 7.99999C11.7762 7.99999 12 7.77614 12 7.49999C12 7.22385 11.7762 6.99999 11.5 6.99999C11.2239 6.99999 11 7.22385 11 7.49999C11 7.77613 11.2239 7.99999 11.5 7.99999ZM12 1.49999C12 1.77613 11.7762 1.99999 11.5 1.99999C11.2239 1.99999 11 1.77613 11 1.49999C11 1.22385 11.2239 0.999992 11.5 0.999992C11.7762 0.999992 12 1.22385 12 1.49999ZM7.50003 7.99999C7.77617 7.99999 8.00003 7.77614 8.00003 7.49999C8.00003 7.22385 7.77617 6.99999 7.50003 6.99999C7.22389 6.99999 7.00003 7.22385 7.00003 7.49999C7.00003 7.77614 7.22389 7.99999 7.50003 7.99999ZM14 7.49999C14 7.77613 13.7762 7.99999 13.5 7.99999C13.2239 7.99999 13 7.77613 13 7.49999C13 7.22385 13.2239 6.99999 13.5 6.99999C13.7762 6.99999 14 7.22385 14 7.49999ZM7.50003 1.99999C7.77617 1.99999 8.00003 1.77614 8.00003 1.49999C8.00003 1.22385 7.77617 0.999993 7.50003 0.999993C7.22389 0.999993 7.00003 1.22385 7.00003 1.49999C7.00003 1.77613 7.22389 1.99999 7.50003 1.99999ZM14 1.49999C14 1.77613 13.7762 1.99999 13.5 1.99999C13.2239 1.99999 13 1.77613 13 1.49999C13 1.22385 13.2239 0.999992 13.5 0.999993C13.7762 0.999993 14 1.22385 14 1.49999ZM7.50003 9.99999C7.77617 9.99999 8.00003 9.77614 8.00003 9.49999C8.00003 9.22385 7.77617 8.99999 7.50003 8.99999C7.22389 8.99999 7.00003 9.22385 7.00003 9.49999C7.00003 9.77613 7.22389 9.99999 7.50003 9.99999ZM14 9.49999C14 9.77613 13.7762 9.99999 13.5 9.99999C13.2239 9.99999 13 9.77613 13 9.49999C13 9.22385 13.2239 8.99999 13.5 8.99999C13.7762 8.99999 14 9.22385 14 9.49999ZM7.50003 12C7.77617 12 8.00003 11.7761 8.00003 11.5C8.00003 11.2239 7.77617 11 7.50003 11C7.22389 11 7.00003 11.2239 7.00003 11.5C7.00003 11.7761 7.22389 12 7.50003 12ZM14 11.5C14 11.7761 13.7762 12 13.5 12C13.2239 12 13 11.7761 13 11.5C13 11.2238 13.2239 11 13.5 11C13.7762 11 14 11.2238 14 11.5ZM7.50003 5.99999C7.77617 5.99999 8.00003 5.77613 8.00003 5.49999C8.00003 5.22385 7.77617 4.99999 7.50003 4.99999C7.22389 4.99999 7.00003 5.22385 7.00003 5.49999C7.00003 5.77613 7.22389 5.99999 7.50003 5.99999ZM14 5.49999C14 5.77613 13.7762 5.99999 13.5 5.99999C13.2239 5.99999 13 5.77613 13 5.49999C13 5.22385 13.2239 4.99999 13.5 4.99999C13.7762 4.99999 14 5.22385 14 5.49999ZM7.50003 3.99999C7.77617 3.99999 8.00003 3.77613 8.00003 3.49999C8.00003 3.22385 7.77617 2.99999 7.50003 2.99999C7.22389 2.99999 7.00003 3.22385 7.00003 3.49999C7.00003 3.77613 7.22389 3.99999 7.50003 3.99999ZM14 3.49999C14 3.77613 13.7762 3.99999 13.5 3.99999C13.2239 3.99999 13 3.77613 13 3.49999C13 3.22385 13.2239 2.99999 13.5 2.99999C13.7762 2.99999 14 3.22385 14 3.49999ZM5.50003 7.99999C5.77617 7.99999 6.00003 7.77614 6.00003 7.49999C6.00003 7.22385 5.77617 6.99999 5.50003 6.99999C5.22389 6.99999 5.00003 7.22385 5.00003 7.49999C5.00003 7.77614 5.22389 7.99999 5.50003 7.99999ZM6.00003 1.49999C6.00003 1.77614 5.77617 1.99999 5.50003 1.99999C5.22389 1.99999 5.00003 1.77614 5.00003 1.49999C5.00003 1.22385 5.22389 0.999994 5.50003 0.999994C5.77617 0.999994 6.00003 1.22385 6.00003 1.49999ZM3.50003 7.99999C3.77617 7.99999 4.00003 7.77614 4.00003 7.49999C4.00003 7.22385 3.77617 6.99999 3.50003 6.99999C3.22389 6.99999 3.00003 7.22385 3.00003 7.49999C3.00003 7.77614 3.22389 7.99999 3.50003 7.99999ZM4.00003 1.49999C4.00003 1.77614 3.77617 1.99999 3.50003 1.99999C3.22389 1.99999 3.00003 1.77614 3.00003 1.49999C3.00003 1.22385 3.22389 0.999994 3.50003 0.999994C3.77617 0.999994 4.00003 1.22385 4.00003 1.49999ZM9.50003 14C9.77617 14 10 13.7761 10 13.5C10 13.2238 9.77617 13 9.50003 13C9.22389 13 9.00003 13.2238 9.00003 13.5C9.00003 13.7761 9.22389 14 9.50003 14ZM12 13.5C12 13.7761 11.7762 14 11.5 14C11.2239 14 11 13.7761 11 13.5C11 13.2238 11.2239 13 11.5 13C11.7762 13 12 13.2238 12 13.5ZM7.50003 14C7.77617 14 8.00003 13.7761 8.00003 13.5C8.00003 13.2239 7.77617 13 7.50003 13C7.22389 13 7.00003 13.2238 7.00003 13.5C7.00003 13.7761 7.22389 14 7.50003 14ZM14 13.5C14 13.7761 13.7762 14 13.5 14C13.2239 14 13 13.7761 13 13.5C13 13.2238 13.2239 13 13.5 13C13.7762 13 14 13.2238 14 13.5ZM5.50003 14C5.77617 14 6.00003 13.7761 6.00003 13.5C6.00003 13.2239 5.77617 13 5.50003 13C5.22389 13 5.00003 13.2239 5.00003 13.5C5.00003 13.7761 5.22389 14 5.50003 14ZM4.00003 13.5C4.00003 13.7761 3.77617 14 3.50003 14C3.22389 14 3.00003 13.7761 3.00003 13.5C3.00003 13.2239 3.22389 13 3.50003 13C3.77617 13 4.00003 13.2239 4.00003 13.5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M1.75 14L1.75 1L0.250001 1L0.25 14L1.75 14ZM9.50003 7.99999C9.77617 7.99999 10 7.77614 10 7.49999C10 7.22385 9.77617 6.99999 9.50003 6.99999C9.22389 6.99999 9.00003 7.22385 9.00003 7.49999C9.00003 7.77614 9.22389 7.99999 9.50003 7.99999ZM10 1.49999C10 1.77614 9.77617 1.99999 9.50003 1.99999C9.22389 1.99999 9.00003 1.77614 9.00003 1.49999C9.00003 1.22385 9.22389 0.999993 9.50003 0.999993C9.77617 0.999993 10 1.22385 10 1.49999ZM11.5 7.99999C11.7762 7.99999 12 7.77614 12 7.49999C12 7.22385 11.7762 6.99999 11.5 6.99999C11.2239 6.99999 11 7.22385 11 7.49999C11 7.77613 11.2239 7.99999 11.5 7.99999ZM12 1.49999C12 1.77613 11.7762 1.99999 11.5 1.99999C11.2239 1.99999 11 1.77613 11 1.49999C11 1.22385 11.2239 0.999992 11.5 0.999992C11.7762 0.999992 12 1.22385 12 1.49999ZM7.50003 7.99999C7.77617 7.99999 8.00003 7.77614 8.00003 7.49999C8.00003 7.22385 7.77617 6.99999 7.50003 6.99999C7.22389 6.99999 7.00003 7.22385 7.00003 7.49999C7.00003 7.77614 7.22389 7.99999 7.50003 7.99999ZM14 7.49999C14 7.77613 13.7762 7.99999 13.5 7.99999C13.2239 7.99999 13 7.77613 13 7.49999C13 7.22385 13.2239 6.99999 13.5 6.99999C13.7762 6.99999 14 7.22385 14 7.49999ZM7.50003 1.99999C7.77617 1.99999 8.00003 1.77614 8.00003 1.49999C8.00003 1.22385 7.77617 0.999993 7.50003 0.999993C7.22389 0.999993 7.00003 1.22385 7.00003 1.49999C7.00003 1.77613 7.22389 1.99999 7.50003 1.99999ZM14 1.49999C14 1.77613 13.7762 1.99999 13.5 1.99999C13.2239 1.99999 13 1.77613 13 1.49999C13 1.22385 13.2239 0.999992 13.5 0.999993C13.7762 0.999993 14 1.22385 14 1.49999ZM7.50003 9.99999C7.77617 9.99999 8.00003 9.77614 8.00003 9.49999C8.00003 9.22385 7.77617 8.99999 7.50003 8.99999C7.22389 8.99999 7.00003 9.22385 7.00003 9.49999C7.00003 9.77613 7.22389 9.99999 7.50003 9.99999ZM14 9.49999C14 9.77613 13.7762 9.99999 13.5 9.99999C13.2239 9.99999 13 9.77613 13 9.49999C13 9.22385 13.2239 8.99999 13.5 8.99999C13.7762 8.99999 14 9.22385 14 9.49999ZM7.50003 12C7.77617 12 8.00003 11.7761 8.00003 11.5C8.00003 11.2239 7.77617 11 7.50003 11C7.22389 11 7.00003 11.2239 7.00003 11.5C7.00003 11.7761 7.22389 12 7.50003 12ZM14 11.5C14 11.7761 13.7762 12 13.5 12C13.2239 12 13 11.7761 13 11.5C13 11.2238 13.2239 11 13.5 11C13.7762 11 14 11.2238 14 11.5ZM7.50003 5.99999C7.77617 5.99999 8.00003 5.77613 8.00003 5.49999C8.00003 5.22385 7.77617 4.99999 7.50003 4.99999C7.22389 4.99999 7.00003 5.22385 7.00003 5.49999C7.00003 5.77613 7.22389 5.99999 7.50003 5.99999ZM14 5.49999C14 5.77613 13.7762 5.99999 13.5 5.99999C13.2239 5.99999 13 5.77613 13 5.49999C13 5.22385 13.2239 4.99999 13.5 4.99999C13.7762 4.99999 14 5.22385 14 5.49999ZM7.50003 3.99999C7.77617 3.99999 8.00003 3.77613 8.00003 3.49999C8.00003 3.22385 7.77617 2.99999 7.50003 2.99999C7.22389 2.99999 7.00003 3.22385 7.00003 3.49999C7.00003 3.77613 7.22389 3.99999 7.50003 3.99999ZM14 3.49999C14 3.77613 13.7762 3.99999 13.5 3.99999C13.2239 3.99999 13 3.77613 13 3.49999C13 3.22385 13.2239 2.99999 13.5 2.99999C13.7762 2.99999 14 3.22385 14 3.49999ZM5.50003 7.99999C5.77617 7.99999 6.00003 7.77614 6.00003 7.49999C6.00003 7.22385 5.77617 6.99999 5.50003 6.99999C5.22389 6.99999 5.00003 7.22385 5.00003 7.49999C5.00003 7.77614 5.22389 7.99999 5.50003 7.99999ZM6.00003 1.49999C6.00003 1.77614 5.77617 1.99999 5.50003 1.99999C5.22389 1.99999 5.00003 1.77614 5.00003 1.49999C5.00003 1.22385 5.22389 0.999994 5.50003 0.999994C5.77617 0.999994 6.00003 1.22385 6.00003 1.49999ZM3.50003 7.99999C3.77617 7.99999 4.00003 7.77614 4.00003 7.49999C4.00003 7.22385 3.77617 6.99999 3.50003 6.99999C3.22389 6.99999 3.00003 7.22385 3.00003 7.49999C3.00003 7.77614 3.22389 7.99999 3.50003 7.99999ZM4.00003 1.49999C4.00003 1.77614 3.77617 1.99999 3.50003 1.99999C3.22389 1.99999 3.00003 1.77614 3.00003 1.49999C3.00003 1.22385 3.22389 0.999994 3.50003 0.999994C3.77617 0.999994 4.00003 1.22385 4.00003 1.49999ZM9.50003 14C9.77617 14 10 13.7761 10 13.5C10 13.2238 9.77617 13 9.50003 13C9.22389 13 9.00003 13.2238 9.00003 13.5C9.00003 13.7761 9.22389 14 9.50003 14ZM12 13.5C12 13.7761 11.7762 14 11.5 14C11.2239 14 11 13.7761 11 13.5C11 13.2238 11.2239 13 11.5 13C11.7762 13 12 13.2238 12 13.5ZM7.50003 14C7.77617 14 8.00003 13.7761 8.00003 13.5C8.00003 13.2239 7.77617 13 7.50003 13C7.22389 13 7.00003 13.2238 7.00003 13.5C7.00003 13.7761 7.22389 14 7.50003 14ZM14 13.5C14 13.7761 13.7762 14 13.5 14C13.2239 14 13 13.7761 13 13.5C13 13.2238 13.2239 13 13.5 13C13.7762 13 14 13.2238 14 13.5ZM5.50003 14C5.77617 14 6.00003 13.7761 6.00003 13.5C6.00003 13.2239 5.77617 13 5.50003 13C5.22389 13 5.00003 13.2239 5.00003 13.5C5.00003 13.7761 5.22389 14 5.50003 14ZM4.00003 13.5C4.00003 13.7761 3.77617 14 3.50003 14C3.22389 14 3.00003 13.7761 3.00003 13.5C3.00003 13.2239 3.22389 13 3.50003 13C3.77617 13 4.00003 13.2239 4.00003 13.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderRightIcon;
