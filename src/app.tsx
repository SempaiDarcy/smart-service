import './app.css'
import {Navbar} from "./components/navbar/navbar.tsx";

function App() {
    return (
        <>
            <Navbar />
            <div style={{textAlign:'center'}}>
                <h1>Добро пожаловать на платформу!</h1>
            </div>
        </>
    );
}

export default App
