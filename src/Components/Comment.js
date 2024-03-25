const Comment = (props) => {
    const { body, footer } = props;
    return (
        <p className="my-1 p-1.5 rounded-sm bg-slate-100">
            <div className="text-sm tracking-normal opacity-100 text-gray-500">
                {body}
            </div>
            <div className="text-sm italic text-gray-700"> - {footer}</div>
        </p>
    );
};

export default Comment;
