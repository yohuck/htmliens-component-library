import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import PropTypes from 'prop-types';

export interface UploadProps extends React.ComponentPropsWithoutRef<'input'> {
  isResizable?: boolean;
}

export const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext);
    return (
      <input
        type="file"
        className={` ${
          !isResizable && `resize-none`
        } p-2 success-input rounded-md shadow  border-slate-900 border-4 dark:border-yellow-500 dark:text-yellow-500 dark:bg-slate-900`}
        ref={ref}
        id={id}
        {...props}
      />
    );
  }
);

Upload.displayName = 'Field.Upload';

Upload.defaultProps = {
  isResizable: true,
};

Upload.propTypes = {
  isResizable: PropTypes.bool,
};
