import Header from "./components/Header"
import Main from "./components/Main"

export default function App() {
    
    const apiKey = import.meta.env.VITE_API_KEY;
    
    return (
        <>   
            <Header />
            <Main />
        </> 
    )       
}