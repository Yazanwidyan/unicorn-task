import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/Hero";
import LoadingOverlay from "../../components/LoadingOverlay";
import NewsLetter from "../../components/NewsLetter";
import ProductCard from "../../components/ProductCard/ProductCard";
import { showLoading } from "../../redux/loading.reducer";
import { setAllProducts } from "../../redux/products.reducer";
import { getIsLoading } from "../../redux/selectors/loading.selector";
import {
  getByCategoryApi,
  getCategoriesApi,
} from "../../services/getCategories";
import { getProducsApi } from "../../services/getProducts";
import "./style.css";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [tabs, setTabs] = useState([]);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const getCategories = async () => {
    const data = await getCategoriesApi();

    if (data?.status === 200) setTabs(data.data);
  };

  const getData = async () => {
    dispatch(showLoading(true));
    const data = await getProducsApi(6);
    const data2 = await getProducsApi(99);

    if (data?.status === 200) {
      setProducts(data.data);
      dispatch(setAllProducts(data2.data));
    }
  };

  const getByCategory = async (category: string, index: number) => {
    setIndex(index);
    const data = await getByCategoryApi(category);
    if (data?.status === 200) setProducts(data.data);
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  if (isLoading) return <LoadingOverlay />;

  return (
    <>
      <Hero />
      <div className="container">
        <div className="home-container">
          <div className="home-section-title">Our Premium Collection</div>
          <div className="collection-tabs-wrapper">
            {tabs.map((item, i) => {
              return (
                <div
                  key={i}
                  onClick={() => getByCategory(item, i)}
                  className="collection-tabs-text"
                  style={{ color: index === i ? "#F86338" : "" }}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="home-product-row">
            {products.map(
              ({ id, title, image, category, description, price }) => {
                return (
                  <div className="home-product-col">
                    <div className="home-product-card">
                      <ProductCard
                        key={id}
                        image={image}
                        title={title}
                        category={category}
                        description={description}
                        price={price}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <button className="find-out-btn">find out more</button>
        </div>
      </div>
      <div className="story-brand-container">
        <img
          className="story-brand-left-section"
          src="assets/Image.png"
          alt=""
        />
        <div className="story-brand-right-section">
          <div className="story-brand-title">Story about Our Brand</div>
          <div className="story-brand-description">
            Develop a website by finding a product identity that has value and
            branding to become a characteristic of a company. We will also
            facilitate the business marketing of these products with our SEO
            experts so that they become a ready-to-use website and help sell a
            product from the company Develop a website by finding a product
            identity that has value and branding to become a characteristic of a
            company. We will also facilitate the business marketing of these
            products with our SEO experts so that they become a ready-to-use
            website and help sell a product from the company
          </div>
        </div>
      </div>
      <div className="achievement-container container">
        <div className="home-section-title">Our Achievement</div>
        <div className="achievement-section">
          <img src="assets/Shape_1.png" alt="" />
          <img src="assets/Shape_2.png" alt="" />
          <img src="assets/Shape_3.png" alt="" />
          <img src="assets/Shape_4.png" alt="" />
          <img src="assets/Shape_1.png" alt="" />
          <img src="assets/Shape_2.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="articles-container">
          <div className="articles-top-section">
            <div className="articles-top-left">
              Get Better Insights from Our Articles
            </div>
            <div className="articles-top-right">See more</div>
          </div>
          <div className="articles-bottom-section">
            <div className="articles-card">
              <img className="articles-image" src="assets/Image.png" alt="" />
              <div className="articles-title">Best Summer Outfit Style</div>
              <div className="articles-date">14 Feb</div>
              <div className="articles-subtitle">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley. Lorem
                Ipsum has been the industry's standard dummy text ever since the
                1500s.
              </div>
              <div className="articles-explore">Explore More</div>
            </div>
            <div className="articles-card">
              <img className="articles-image" src="assets/Image.png" alt="" />
              <div className="articles-title">Best Summer Outfit Style</div>
              <div className="articles-date">14 Feb</div>
              <div className="articles-subtitle">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley. Lorem
                Ipsum has been the industry's standard dummy text ever since the
                1500s.
              </div>
              <div className="articles-explore">Explore More</div>
            </div>
            <div className="articles-card">
              <img className="articles-image" src="assets/Image.png" alt="" />
              <div className="articles-title">Best Summer Outfit Style</div>
              <div className="articles-date">14 Feb</div>
              <div className="articles-subtitle">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley. Lorem
                Ipsum has been the industry's standard dummy text ever since the
                1500s.
              </div>
              <div className="articles-explore">Explore More</div>
            </div>
            <div className="articles-card">
              <img className="articles-image" src="assets/Image.png" alt="" />
              <div className="articles-title">Best Summer Outfit Style</div>
              <div className="articles-date">14 Feb</div>
              <div className="articles-subtitle">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley. Lorem
                Ipsum has been the industry's standard dummy text ever since the
                1500s.
              </div>
              <div className="articles-explore">Explore More</div>
            </div>
          </div>
        </div>
        <div className="container">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Home;
