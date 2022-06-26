import "./styles/app.scss"
import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import { Navigate, Route, Routes} from "react-router-dom";

function App() {
    return (
            <div className="App">
                <Routes>
                    <Route path='/:id' element={
                        <>
                            <Toolbar/>
                            <SettingBar/>
                            <Canvas/>
                        </>}>
                    </Route>
                    <Route path='*' element={<Navigate to={`f${(+new Date()).toString(16)}`} />}/>
                </Routes>
            </div>
    );
}

export default App;
