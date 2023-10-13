import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PostDetails = () => {
    const params = useParams();

    const { data, error, loading } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
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

    return (
        <>
            <div className="mx-auto w-full max-w-screen-md">
                <h1 className="text-left text-2xl font-bold">
                    {data?.id} - {data?.title}
                </h1>
                <p className="mt-4 text-justify">{data.body}</p>
                <Link to="/blog">Volver</Link>
            </div>
        </>
    );
};

export default PostDetails;
