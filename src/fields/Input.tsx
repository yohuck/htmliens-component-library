import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { z } from 'zod';

// export type inputOptions = "text" | "email" | "password" | "number" | "tel" | "url" | "date" | "time" | "datetime-local" | "month" | "week" | "color" | "search" | "range" | "file";
// export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
//     type?: inputOptions;
// }

const emailValidator = z.string().email();

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const id = useContext(FieldContext);
  return (
    <input
      className="p-2 success-input rounded-md shadow  border-slate-900 border-4 dark:border-yellow-500 dark:text-yellow-500 dark:bg-slate-900"
      ref={ref}
      id={id}
      onBlur={(e) => {
        const isValid = emailValidator.safeParse(e.target.value);
        if (!isValid.success) {
            e.target.classList.remove('dark:border-yellow-500', 'dark:text-yellow-500');
            e.target.classList.add('dark:border-red-500', 'dark:text-red-500');
        } else {
            e.target.classList.remove('error-input');
            e.target.classList.add('dark:border-yellow-500 dark:text-yellow-500');
        }
        }}
      {...props}
    />
  );
});

Input.displayName = 'Field.Input';
