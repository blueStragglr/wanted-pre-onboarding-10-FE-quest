const colors = {
    red: 'text-red-600',
    black: 'text-black',
};

const textSizes = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
};

const Button = ({ color, size, children }) => {
    let textColor = colors[color];
    let textSize = textSizes[size];

    return <button className={`${textColor} ${textSize}`}>{children}</button>;
};
export default Button;
