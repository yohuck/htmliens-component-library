import React from 'react';

const themeSwitch = (variant: Variant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-300 text-neutral-900';
      break;
    case 'secondary':
      return 'bg-yellow-500';
      break;
    case 'danger':
      return 'bg-red-600 text-slate-800';
      break;
    default:
      return '';
      break;
  }
};

const sizeSwitch = (size: Size): string => {
  switch (size) {
    case 'small':
      return 'text-sm';
      break;
    case 'medium':
      return 'text-lg';
      break;
    case 'large':
      return 'text-2xl';
      break;
    default:
      return '';
      break;
  }
};

type Size = 'small' | 'medium' | 'large' | undefined;
type Variant = 'primary' | 'secondary' | 'danger' | undefined;

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  variant?: Variant;
  size: Size;
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        {...props}
        className={`shadow px-2 py-1 border hover:outline hover:outine-4 hover:outline-yellow-400 focus:outline focus:outline-4 focus:outline-yellow-400 active:outline active:outline-4 active:outline-offset-2 active:outline-orange-600 border-slate-900 rounded-md ${themeSwitch(
          variant
        )} ${sizeSwitch(size)} ${isFullWidth && 'w-full'}`}
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
