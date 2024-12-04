import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useAuth} from "./context/auth-context.tsx";
import {AuthLanding} from "./pages/auth-landing/auth-landing.tsx";
import {Login} from "./pages/login/login.tsx";
import {Register} from "./pages/register/register.tsx";
import {Home} from "./pages/home/home.tsx";
import {Catalog} from "./pages/catalog/catalog.tsx";
import {Profile} from "./pages/profile/profile.tsx";
import {Navbar} from "./components/navbar/navbar.tsx";


function App() {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<AuthLanding/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Router>
        );
    }

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
    );
}

export default App;
