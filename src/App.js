import "./styles/app.scss"
import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";

function App() {
    return (
        <div className="App">
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
        </div>
    );
}

export default App;
