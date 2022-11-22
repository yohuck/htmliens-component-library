import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faCoffee, faPizzaSlice, faSatellite, faSatelliteDish, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

type Size = 'small' | 'medium' | 'large' | undefined;
type Variant = 'primary' | 'secondary' | 'danger' | 'outline' | undefined;

export interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  isFullWidth?: boolean;
}

const themeSwitch = (variant: Variant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-gradient-to-r from-cyan-500 to-blue-400 text-black text-outline hover:outline-cyan-400 focus:outline-cyan-400 active:outline-cyan-400 border-slate-900';
      break;
    case 'secondary':
      return 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 hover:outline-amber-400 focus:outline-amber-400 active:outline-amber-400 border-slate-900';
      break;
    case 'danger':
      return 'bg-gradient-to-r from-red-500 to-rose-500 text-slate-900 hover:outline-red-400 focus:outline-red-400 active:outline-red-400 border-slate-900';
      break;
    case 'outline':
      return 'dark:text-yellow-500 hover:outline-amber-400 focus:outline-amber-400 active:outline-amber-400 border-4 border-yellow-500';
      break;
    default:
      return '';
      break;
  }
};

const sizeSwitch = (size: Size): string => {
  switch (size) {
    case 'small':
      return 'text-sm rounded-md p-2 px-3';
      break;
    case 'medium':
      return 'text-2xl rounded-lg p-3 px-4';
      break;
    case 'large':
      return 'text-4xl rounded-lg p-4';
      break;
    default:
      return '';
      break;
  }
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({  variant, size, isFullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        {...props}
        className={` shadow border-2 hover:outline hover:outine-4  focus:outline focus:outline-3  active:outline active:outline-4 active:outline-offset-2  ${themeSwitch(
          variant
        )} ${sizeSwitch(size)} ${isFullWidth && 'w-full'}
        `}
      >
        <FontAwesomeIcon icon={faUserAstronaut} />
      </button>
    );
  }
);

IconButton.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
};
