import React from 'react';

// type Props = {
//   children?: React.ReactNode;
// };

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      {...props}
      className="shadow px-2 py-1 border hover:outline hover:outine-4 hover:outline-yellow-400 focus:outline focus:outline-4 focus:outline-yellow-400 active:outline active:outline-4 active:outline-offset-2 active:outline-orange-600 border-slate-900 rounded-md"
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';
