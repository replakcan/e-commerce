const Heading = ({ variant = "h1", color = "text-gray-800", children }) => {
    const Tag = variant;

    const headingStyles = {
        h1: `text-4xl font-bold ${color}`,
        h2: `text-3xl font-bold ${color}`,
        h3: `text-2xl font-bold ${color}`,
        h4: `text-xl font-bold ${color}`,
        h5: `text-lg font-semibold ${color}`,
        h6: `text-base font-semibold ${color}`,
        p: `text-base ${color === "text-gray-800" ? "text-gray-500" : color}`, // default gray for <p>
    };

    return <Tag className={headingStyles[variant]}>{children}</Tag>;
};

export default Heading;