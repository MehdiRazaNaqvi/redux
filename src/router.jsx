import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "../src/pages/home"





const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App