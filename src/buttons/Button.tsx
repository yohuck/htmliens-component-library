import React from 'react';
import PropTypes from 'prop-types';

type Size = 'small' | 'medium' | 'large' | undefined;
type Variant = 'primary' | 'secondary' | 'danger' | undefined;

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
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
    default:
      return '';
      break;
  }
};

const sizeSwitch = (size: Size): string => {
  switch (size) {
    case 'small':
      return 'text-sm rounded-md px-2';
      break;
    case 'medium':
      return 'text-lg rounded-lg px-4 ';
      break;
    case 'large':
      return 'text-2xl rounded-lg px-6 py-1';
      break;
    default:
      return '';
      break;
  }
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        {...props}
        className={`shadow border-2 hover:outline hover:outine-4  focus:outline focus:outline-3  active:outline active:outline-4 active:outline-offset-2  ${themeSwitch(
          variant
        )} ${sizeSwitch(size)} ${isFullWidth && 'w-full'}
        `}
      >
        {children}
      </button>
    );
  }
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};

Button.displayName = 'Button';

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
};
