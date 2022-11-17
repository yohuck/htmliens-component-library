import React, {useContext} from "react";
import { FieldContext } from "./FieldContext";
import PropTypes from "prop-types";

export interface TextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
    isResizable?: boolean;
}

export const TextArea = React.forwardRef<
    HTMLTextAreaElement,
    TextAreaProps
>(({isResizable, ...props}, ref) => {
    const id = useContext(FieldContext);
    return <textarea className={` ${!isResizable && `resize-none` } p-2 success-input rounded-md shadow  border-slate-900 border-4 dark:border-yellow-500 dark:text-yellow-500 dark:bg-slate-900`} ref={ref} id={id} {...props} />;
});

TextArea.displayName = "Field.TextArea";

TextArea.defaultProps = {
    isResizable: true,
};

TextArea.propTypes = {
    isResizable: PropTypes.bool,
};