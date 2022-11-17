import React from 'react';
import { useUniqueID } from '../utils/useUniqueID';
import { FieldContext } from './FieldContext';
import { Label } from './Label';
import { Input } from './Input';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
}

export interface FieldProps extends React.ComponentPropsWithoutRef<'fieldset'> {
  children?: React.ReactNode;
}

export const Field: React.FC<FieldProps> & FieldComposition = ({
  children,
}) => {
  const id = useUniqueID();
  return (
    <FieldContext.Provider value={id}>
      <div className="flex flex-col">{children}</div>
    </FieldContext.Provider>
  );
};

Field.Label = Label;
Field.Input = Input;
