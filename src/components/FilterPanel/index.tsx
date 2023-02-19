import { FilterPanelProps } from "../../@types";
import SliderProton from "../SliderProton";
import "./styles.css";

const FilterPanel = ({
  selectCategory,
  categoryList,
  selectedPrice,
  changePrice,
}: FilterPanelProps) => (
  <div>
    <div className="input-group">
      <p className="label-range">Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    <div>
      {categoryList?.map((item: string) => {
        return (
          <div
            className="label-category"
            onClick={() => {
              selectCategory("", item);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  </div>
);

export default FilterPanel;
