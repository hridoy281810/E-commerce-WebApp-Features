import Footer from "./components/footer"
import NavBar from "./components/navItem/navBar"
import ProductsPage from "./pages/products/products"

function App() {

  return (
    <div className="max-w-['1280px'] mx-auto">
   <NavBar />
    <div className="my-container mx-auto">
    <ProductsPage />
    </div>
 <Footer />
    </div>
  )
}

export default App
