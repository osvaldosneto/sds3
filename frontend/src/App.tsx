import Navbar from "components/Navbar"
import Footer from "components/footer"
import DataTable from "components/DataTable"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!!!</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
