import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { ValidatorFn } from '../utils/validators';
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
  | 'color'
  | 'search'
  | 'range'
  | 'file'
  | undefined;
export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  config?: inputOptions;
}

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
          ValidatorFn(e, config);
        }}
        {...props}
      />
    );
  }
);

Input.displayName = 'Field.Input';

Input.defaultProps = {
  config: 'text',
};

Input.propTypes = {
  config: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'tel',
    'url',
    'date',
    'time',
    'color',
    'search',
    'range',
    'file',
  ]),
};
