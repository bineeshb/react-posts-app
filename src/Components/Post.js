import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "./Tag";

const Post = (props) => {
    const { post } = props;
    return (
        post && (
            <div className="m-2 p-2 flex justify-between h-32 rounded-md bg-slate-50">
                <div>
                    <h3 className="text-base font-semibold text-gray-900 opacity-100">
                        {post?.title}
                    </h3>
                    <p className="my-2 mr-2 text-sm line-clamp-2 text-gray-500">
                        {post?.body}
                    </p>
                    <div className="mt-4">
                        {post?.tags?.map((tag, i) => {
                            return (
                                <Tag key={i} sentiment="success">
                                    {tag}
                                </Tag>
                            );
                        })}
                    </div>
                </div>
                <div className="flex justify-start align-bottom">
                    <FontAwesomeIcon
                        icon="fa-heart"
                        className=" text-pink-400"
                    />
                    <div className="mt-[-4px]  text-gray-500">
                        {post?.reactions}
                    </div>
                </div>
            </div>
        )
    );
};

export default Post;
