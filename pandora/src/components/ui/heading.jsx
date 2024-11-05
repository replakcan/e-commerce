const Heading = ({ variant = "h1", color = "text-gray-800", className = "", children }) => {
    const Tag = variant;

    const headingStyles = {
        h1: `text-7xl font-bold ${color}`,
        h2: `text-5xl font-bold ${color}`,
        h3: `text-3xl font-bold ${color}`,
        h4: `text-xl font-bold ${color}`,
        h5: `text-lg font-semibold ${color}`,
        h6: `text-base font-semibold ${color}`,
        p: `text-base ${color === "text-gray-800" ? "text-gray-500" : color}`,
    };

    return <Tag className={`${headingStyles[variant]} ${className}`}>{children}</Tag>;
};

export default Heading;
