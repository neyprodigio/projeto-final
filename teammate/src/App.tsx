import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import RoutesMain from "./routes";

function App() {

    return (
        <>
        <RoutesMain />
        <ToastContainer />
        </>

    );
}

export default App;
