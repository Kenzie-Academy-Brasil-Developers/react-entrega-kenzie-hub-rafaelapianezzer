import { forwardRef } from "react";

export const Input = forwardRef(({ Label, error, ...rest }, ref) => {
    return (
        <div>
            <label>
                {Label}
                <input ref={ref} {...rest} />
                {error ? <p>{error.message}</p> : null}
            </label>
        </div>
    );
});
