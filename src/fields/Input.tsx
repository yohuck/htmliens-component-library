import React, { useContext, FocusEvent } from 'react';
import { FieldContext } from './FieldContext';
import { z } from 'zod';
import PropTypes from 'prop-types';

export type inputOptions =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color'
  | 'search'
  | 'range'
  | 'file'
  | undefined;
export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  config?: inputOptions;
}

const emailValidator = z.string().email();

const emailValidatorFn = (e: FocusEvent<HTMLInputElement>, config?: string) => {
  if (config === 'email') {
    const isValid = emailValidator.safeParse(e.target.value);
    if (!isValid.success) {
      const errorText = isValid.error.issues[0].message;
      if (e.target.labels?.[0].childNodes[1]) {
        e.target.labels?.[0].childNodes[1]?.remove();
      }
      e.target.classList.remove(
        'dark:border-yellow-500',
        'dark:text-yellow-500'
      );
      e.target.classList.add(
        'dark:border-red-500',
        'dark:text-red-500',
        'failure'
      );
      e.target.labels?.[0].firstChild?.after(` ${errorText}`);
      e.target.labels?.[0].classList.add('dark:text-red-500');
      e.target.labels?.[0].classList.add('failure');
    } else {
      e.target.classList.remove('dark:border-red-500', 'dark:text-red-500');
      e.target.classList.add(
        'dark:border-yellow-500',
        'dark:text-yellow-500',
        'success'
      );
      e.target.labels?.[0].classList.remove('dark:text-red-500');
      e.target.labels?.[0].classList.add('dark:text-yellow-500');
      e.target.labels?.[0].classList.remove('failure');
      e.target.labels?.[0].classList.add('success');
    }
  }
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ config, ...props }, ref) => {
    const id = useContext(FieldContext);
    return (
      <input
        className="p-2 rounded-md shadow  border-slate-900 border-4 dark:border-yellow-500 dark:text-yellow-500 dark:bg-slate-900"
        ref={ref}
        id={id}
        type={config}
        onBlur={(e) => {
          emailValidatorFn(e, config);
        }}
        {...props}
      />
    );
  }
);

Input.displayName = 'Field.Input';

Input.defaultProps = {
  config: 'email',
};

Input.propTypes = {
  config: PropTypes.oneOf([
    'email',
    'text',
    'password',
    'number',
    'tel',
    'url',
    'date',
    'time',
    'datetime-local',
    'month',
    'week',
    'color',
    'search',
    'range',
    'file',
  ]),
};
