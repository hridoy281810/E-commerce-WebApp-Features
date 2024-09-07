const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="bg-white h-auto w-[263px] mt-[80px] border-r-[1px] border-[#E8E8E8]">
      <ul className="mt-10">
        {categories.map((category, index) => (
          <li 
            key={index}
            className={`text-[22px] py-3 px-6 rounded-lg mr-8 font-semibold text-lg mb-6 cursor-pointer ${
              selectedCategory === category
                ? "text-white bg-black"
                : "text-[#717171] bg-white"
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
