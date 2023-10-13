import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            {/* <div className="flex h-screen w-full items-center justify-center bg-blue-200">
                <div className="max-w-screen-md">
                    <h1 className="mt-4  text-center text-8xl font-bold">
                        Sorry...
                    </h1>
                    <div className="mt-10 flex justify-center">
                        <Link
                            to="/"
                            className="rounded-md bg-black p-2 text-center text-xl text-white "
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </div> */}
            <main className="flex h-screen w-full items-center justify-center bg-blue-200">
                <div className="flex max-w-screen-md flex-col">
                    <h1 className="h-40 text-center text-9xl font-bold">
                        Sorry...
                    </h1>
                    <div className="flex justify-center">
                        <Link
                            to="/"
                            className="inline-block rounded-md bg-black p-2 text-center text-xl text-white"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default NotFound;
