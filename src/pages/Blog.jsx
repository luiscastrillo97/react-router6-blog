import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
// import { useEffect } from "react";

const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // useEffect(() => {
    //   console.log(searchParams.get("name"));
    // }, [searchParams]);

    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) {
        return (
            <div className="mx-auto mt-4 h-screen w-full max-w-screen-md text-center">
                <span className="text-3xl font-bold">Loading data...</span>
            </div>
        );
    }
    if (error) {
        return (
            <div className="mx-auto mt-4 h-screen w-full max-w-screen-md text-center">
                <span className="text-3xl font-bold">Loading data error.</span>
            </div>
        );
    }

    const handleOnChange = (event) => {
        let filter = event.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };
    return (
        <div className="w-full max-w-screen-md">
            <h1 className="text-3xl font-bold">Posts</h1>
            <input
                type="text"
                name="filter"
                onChange={handleOnChange}
                className="mt-2 h-10 w-full rounded-md p-2 text-xl text-gray-800 outline-none"
                value={searchParams.get("filter") || ""}
                placeholder="Type a word to filter..."
            />
            <ul className="my-4 space-y-1">
                {data
                    .filter((post) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = post.title.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((post) => (
                        <Link
                            to={`/blog/${post.id}`}
                            key={post.id}
                            className="block rounded-md border-2 border-black p-2 hover:bg-gray-300"
                        >
                            {post.id} - {post.title}
                        </Link>
                    ))}
            </ul>
        </div>
    );
};
export default Blog;
