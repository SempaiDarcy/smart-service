import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthLanding } from "./pages/auth-landing/auth-landing.tsx";
import { Home } from "./pages/home/home.tsx";
import { Catalog } from "./pages/catalog/catalog.tsx";
import { Profile } from "./pages/profile/profile.tsx";
import { Navbar } from "./components/navbar/navbar.tsx";
import { CompanyPage } from "./pages/page-company/company-page.tsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:id" element={<CompanyPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/auth" element={<AuthLanding/>}/>
                {/*<Route path="/auth" element={<LoginRegister />} />*/}
            </Routes>
        </Router>
    );
}

export default App;




// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {useAuth} from "./context/auth-context.tsx";
// import {AuthLanding} from "./pages/auth-landing/auth-landing.tsx";
// import {Home} from "./pages/home/home.tsx";
// import {Catalog} from "./pages/catalog/catalog.tsx";
// import {Profile} from "./pages/profile/profile.tsx";
// import {Navbar} from "./components/navbar/navbar.tsx";
// import {CompanyPage} from "./pages/page-company/company-page.tsx";
// import {RegisterNavbar} from "./components/navbar/register-navbar.tsx";
//
//
// function App() {
//     const {isAuthenticated} = useAuth();
//
//     if (!isAuthenticated) {
//         return (
//             <Router>
//                 <RegisterNavbar/>
//                 <Routes>
//                     <Route path="/" element={<AuthLanding/>}/>
//                 </Routes>
//             </Router>
//         );
//     }
//
//     return (
//         <Router>
//             <Navbar/>
//             <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/catalog" element={<Catalog/>}/>
//                 <Route path="/profile" element={<Profile/>}/>
//                 <Route path="/catalog/:id" element={<CompanyPage/>}/>
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;
