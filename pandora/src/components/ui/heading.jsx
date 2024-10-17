const Heading = ({ variant = "h1", children }) => {
    const Tag = variant;

    const headingStyles = {
        h1: "text-4xl font-bold text-gray-800",
        h2: "text-3xl font-bold text-gray-800",
        h3: "text-2xl font-bold text-gray-800",
        h4: "text-xl font-bold text-gray-800",
        h5: "text-lg font-semibold text-gray-800",
        h6: "text-base font-semibold text-gray-800",
        p: "text-base text-gray-500", // p varyantı için stil
    };

    return <Tag className={headingStyles[variant]}>{children}</Tag>;
};

export default Heading;