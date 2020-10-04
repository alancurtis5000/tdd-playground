import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightSVG = (props) => {
  let {
    className,
    height,
    width,
    fill,
    stroke,
    strokeWidth,
    onClick,
    size,
  } = props;
  if (size) {
    height = size;
    width = size;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      height={height}
      width={width}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      onClick={onClick}
    >
      <g id="Arrow">
        <path
          id="path_3_"
          d="M40.9 3.8L101.1 64l-60.2 60.2-14-14L73 64 26.9 17.9l14-14.1z"
        />
      </g>
    </svg>
  );
};

ArrowRightSVG.defaultProps = {
  fill1: '#1d2c5e',
  height: '30px',
  width: undefined,
  className: undefined,
  stroke: 'black',
  strokeWidth: '0',
  size: undefined,
  onClick: () => {},
};

ArrowRightSVG.prototype = {
  fill1: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default ArrowRightSVG;
