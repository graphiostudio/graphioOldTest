import { useContext } from "react";
import GalleryContext from "../../context/gallery/GalleryContext";
import TranslationContext from "../../context/translation/TranslationContext";

const Search = () => {
  const { categories, setCategories, categorize } = useContext(GalleryContext);
  const { t } = useContext(TranslationContext);

  const handleClick = (e) => {
    // let selected = e.target.innerText.toLowerCase();
    let selected = e.target.value;
    let newCategories = [...categories];
    newCategories.forEach((category) => {
      if (category.title === selected) {
        category.isActive = true;
      } else {
        category.isActive = false;
      }
    });
    categorize(e.target.value);
    setCategories(newCategories);
  };

  return (
    <div className="bg-gTeal-dark">
      <div className="container mx-auto  flex flex-wrap gap-2 py-5 justify-center">
        {categories.map(({ title, isActive }) => (
          <button
            onClick={handleClick}
            key={title}
            value={title}
            className={`${
              isActive ? "bg-gRed-light" : "bg-neutral-800"
            } text-neutral-100 rounded-full font-ginger font-bold uppercase px-5 md:px-6 py-3 md:py-4 text-xs md:text-sm transition-colors duration-300`}
          >
            {t(title)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
