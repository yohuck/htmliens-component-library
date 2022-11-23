import React from 'react';
import { useUniqueID } from '../utils/useUniqueID';
import { FieldContext } from './FieldContext';
import { Label } from './Label';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { Upload } from './Upload';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  TextArea: typeof TextArea;
  Upload: typeof Upload;
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
Field.TextArea = TextArea;
Field.Upload = Upload;
