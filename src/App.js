import Layout from "./components/Layout";
import Result from "./pages/Result";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        <Result />
      </Layout>
    </div>
  );
}

export default App;
