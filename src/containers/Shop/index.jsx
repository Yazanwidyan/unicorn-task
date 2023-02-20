import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyView from "../../components/EmptyView";
import FilterPanel from "../../components/FilterPanel";
import Hero from "../../components/Hero";
import List from "../../components/List";
import LoadingOverlay from "../../components/LoadingOverlay";
import SearchBar from "../../components/SearchBar";
import { showLoading } from "../../redux/loading.reducer";
import { getIsLoading } from "../../redux/selectors/loading.selector";
import { getAllProducts } from "../../redux/selectors/products.selector";
import { getCategoriesApi } from "../../services/getCategories";
import "./styles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 1000]);
  const [categories, setCategories] = useState([]);
  const [list, setList] = useState([]);

  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const oldList = useSelector(getAllProducts);
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = oldList;

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, searchInput, selectedPrice]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch(showLoading(true));
    const data2 = await getCategoriesApi();
    if (data2?.status === 200) {
      setCategories(data2.data);
    }
  };

  if (isLoading) return <LoadingOverlay />;

  return (
    <>
      <Hero />
      <div className="shop_container container">
        <div className="shop_left_section">
          <SearchBar
            value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
          />
          <FilterPanel
            categoryList={categories}
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />
        </div>
        <div className="shop_right_section">
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </>
  );
};

export default Home;
