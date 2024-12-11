import "./index.css"

export function Button(props) {
    const {type="button", onClick="doNothing", disabled="false", variant="primary", size="md", children} = props;
    const className = `btn btn--${variant} btn--${size}`;

    const doNothing = () => {
        console.log("This button did nothing...");
    }

    let disabledHandler = disabled === 'true';

    let onClickHandler;

    switch (onClick) {
        case "doNothing":
            onClickHandler = doNothing;
            break;
    }

    return <button type={type} className={className} onClick={onClickHandler} disabled={disabledHandler}>{children}</button>;
}

export default Button;