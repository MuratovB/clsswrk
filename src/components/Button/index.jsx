import "./index.css"

export function Button(props) {
    const {variant="primary", size="md", children} = props;
    const className = `btn btn--${variant} btn--${size}`;

    return <button className = {className}>{children}</button>;
}

export default Button;