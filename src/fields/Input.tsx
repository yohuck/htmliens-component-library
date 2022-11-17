import React, {useContext} from "react";
import { FieldContext } from "./FieldContext";

export const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentPropsWithoutRef<"input">
>((props, ref) => {
    const id = useContext(FieldContext);
    return <input className="p-2" ref={ref} id={id} {...props} />;
});

Input.displayName = "Field.Input";