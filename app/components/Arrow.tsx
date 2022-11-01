import React from 'react';

const Arrow: React.FC = () => {
  return (
    <svg
      width='45'
      height='45'
      viewBox='0 0 25 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24.35 10.5C24.35 16.4923 18.9923 21.85 13 21.85C7.00771 21.85 2.15 16.9923 2.15 11C2.15 5.00771 7.00771 0.15 13 0.15C19.0106 0.15 24.35 4.52488 24.35 10.5Z'
        stroke='black'
        stroke-width='0.3'
      />
      <path
        d='M25 12C25 18.0751 20.0751 23 14 23C7.92487 23 3 18.0751 3 12C3 5.92487 7.92487 1 14 1C20.0751 1 25 5.92487 25 12Z'
        fill='#F56915'
      />
      <path
        d='M0 11.5H19.5M19.5 11.5C18 11.1667 14.5 10 14.5 9M19.5 11.5C17.8333 11.6667 14.5 12.8 14.5 14'
        stroke='black'
        stroke-width='0.5'
      />
    </svg>
  );
};

export default Arrow;
