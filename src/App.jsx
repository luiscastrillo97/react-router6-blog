import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import PostDetails from "./pages/PostDetails";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route element={<Inicio />} index></Route>
                    <Route element={<Contacto />} path="/contacto"></Route>
                    <Route element={<Blog />} path="/blog"></Route>
                    <Route element={<PostDetails />} path="/blog/:id"></Route>
                </Route>
                <Route element={<NotFound />} path="*"></Route>
            </Routes>
        </>
    );
};

export default App;
