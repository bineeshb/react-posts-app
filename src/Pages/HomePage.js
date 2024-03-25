import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import Post from "../Components/Post";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [posts, setPosts] = useState();
    const [page, setPage] = useState(1);
    const [totalPost, setTotalPost] = useState();
    const pageSize = 5;

    const getPosts = async () => {
        const data = await fetch(
            `https://dummyjson.com/posts?limit=${pageSize}&skip=${
                page * pageSize - pageSize
            }`
        );
        const json = await data.json();
        if (json && json.posts && json.posts.length > 0) {
            setPosts(json.posts);
            setTotalPost(json.total);
        }
    };

    useEffect(() => {
        getPosts();
    }, [page]);

    return (
        posts && (
            <div className="mx-auto my-8 w-2/4">
                <h1 className="text-xl text-gray-900 opacity-90">Posts</h1>
                <div className="text-right text-sm text-gray-500 italic">
                    {page * pageSize - pageSize + 1} - {page * pageSize} of{" "}
                    {totalPost}
                </div>
                <div className="my-6">
                    {posts.map((post) => {
                        return (
                            <Link key={post.id} to={`/post/${post.id}`}>
                                <Post post={post}></Post>
                            </Link>
                        );
                    })}
                </div>
                <Pagination
                    itemsCount={totalPost}
                    pageSize={pageSize}
                    page={setPage}
                />
            </div>
        )
    );
};

export default HomePage;
