import React, {useContext} from "react";
import { FieldContext } from "./FieldContext";

export const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithoutRef<"input">
>((props, ref) => {
    const id = useContext(FieldContext);
    return <input className="p-2 success-input rounded-md shadow  border-slate-900 border-4 dark:border-yellow-500 dark:text-yellow-500 dark:bg-slate-900" ref={ref} id={id} {...props} />;
});

Input.displayName = "Field.Input";