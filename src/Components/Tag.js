const Tag = (props) => {
    const { id, sentiment, size } = props;

    const classes = {
        // sentiments
        neutral: "bg-gray-200 text-gray-700",
        success: "bg-sky-200 text-sky-700",
        info: "bg-purple-200 text-purple-700",
        danger: "bg-red-200 text-red-700",

        // size
        small: "text-xs",
        medium: "text-base",
        large: "text-lg",
    };
    return (
        <div
            id={id ? id : ""}
            className={`ml-4 inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full 
            ${classes[sentiment ? sentiment : "neutral"]}
            ${classes[size ? size : "small"]}`}
        >
            {props.children}
        </div>
    );
};

export default Tag;
