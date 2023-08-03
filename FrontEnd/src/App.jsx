import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import { BrowserRouter,Routes, Route } from "react-router-dom"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route  element={<SignIn/>} path="/"/>
                    <Route element={<SignUp/>} path="/signup" />
                    <Route element={<Home/>} path="/home" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;