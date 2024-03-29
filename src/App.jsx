import "../src/index.scss" 
import MyProvider from "./components/Provider/MyProvider";
import { RoutesMain } from "./routes/RoutesMain";

function App() {
  return (
    <MyProvider>
        <div className="App">
          <RoutesMain />
        </div>
    </MyProvider>
  
  )
}

export default App