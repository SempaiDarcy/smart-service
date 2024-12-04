import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={''} />
                <Route path="/catalog" element={''} />
                <Route path="/profile" element={''} />
            </Routes>
        </Router>
    );
}

export default App;
