import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./pagination";
import Sidebar from "./sidebar";
import ProductCard from './productCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("Rocking Chair");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const categories = ["Rocking Chair", "Side Chair", "Lounge Chair"];
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://assignment-twelve-server-h2dn6nmgs-hridoy281810s-projects.vercel.app/products"); 
        setProducts(response.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 
  const filteredProducts = products.filter(product => product.category === selectedCategory);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div>
      <div className="flex">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ms-[42px] mt-[80px]">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsPage;
