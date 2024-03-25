import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Comment from "../Components/Comment";
import Tag from "../Components/Tag";

const PostPage = () => {
    const [post, setPost] = useState();
    const [comments, setComments] = useState();
    const { postId } = useParams();

    useEffect(() => {
        getPost();
        getComment();
    }, []);

    const getPost = async () => {
        const postFetch = await fetch(`https://dummyjson.com/posts/${postId}`);
        const json = await postFetch.json();
        setPost(json);
    };

    const getComment = async () => {
        const commentsFetch = await fetch(
            `https://dummyjson.com/posts/${postId}/comments`
        );
        const json = await commentsFetch.json();
        setComments(json.comments);
    };

    return (
        <div className="mx-16 my-12">
            <div className="text-gray-800 hover:underline hover:cursor-pointer text-blue-600">
                <Link to={"/"}>
                    <FontAwesomeIcon icon="fa-less-than" className="mx-1" />
                    All Posts
                </Link>
            </div>
            {post && (
                <div className="my-4 flex">
                    <section className="w-2/3 block mr-16">
                        <div className="flex justify-between">
                            <h1 className="text-3xl text-gray-900 opacity-95">
                                {post.title}
                            </h1>
                            <div className="text-xl flex justify-start align-bottom">
                                <FontAwesomeIcon
                                    icon="fa-heart"
                                    className=" text-pink-400"
                                />
                                <div className="mt-[-5px]  text-gray-500">
                                    {post?.reactions}
                                </div>
                            </div>
                        </div>
                        <h3 className="text-sm italic text-gray-600">
                            by User
                        </h3>
                        <p className="my-4 text-gray-700">{post.body}</p>
                        {comments && (
                            <div className="my-6">
                                <h3 className="text-lg text-gray-700">
                                    Comments({comments.length})
                                </h3>
                                <div className="my-2">
                                    {comments.map((comment) => {
                                        return (
                                            <Comment
                                                body={comment.body}
                                                footer={comment.user.username}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </section>
                    <aside className="p-2 bg-slate-50 w-56 h-[80vh]">
                        {post.tags.map((tag) => {
                            return (
                                <Tag size="medium" sentiment="success">
                                    {tag}
                                </Tag>
                            );
                        })}
                    </aside>
                </div>
            )}
        </div>
    );
};

export default PostPage;
