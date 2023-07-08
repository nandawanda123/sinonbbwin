import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { pluralize } from "../../utils/pipes";
import styles from "./filteritem.module.css";

const FilterItem = ({
  title,
  items,
  index,
  isNumbers,
  singular = "",
  plural = "",
}) => {
  const [value, setValue] = useState(items[0]);
  const inputRef = useRef(null);
  const labelRef = useRef(null);
  const selectItem = (value) => {
    setTimeout(() => {
      inputRef.current.checked = false;
      labelRef.current.classList.remove(styles.item_focus);
    }, 200);
    setValue(value);
  };

  const focusedLabel = (_) => {
    labelRef.current.classList.toggle(styles.item_focus);
  };

  return (
    <div className={styles.item_filter}>
      <span>{title}</span>
      <div>
        <label ref={labelRef} htmlFor={`filter_${index}`}>
          {isNumbers && singular === "" ? "Estrato " : ""}{" "}
          {isNumbers ? `${pluralize(value, singular, plural)}` : value}
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/Flecha_positivo.svg`}
            alt="arrow"
          />
        </label>
        <input
          type="checkbox"
          onChange={focusedLabel}
          id={`filter_${index}`}
          ref={inputRef}
        />
        <ul className={isNumbers ? styles.list_numbers : ""}>
          {items.map((item, i) => (
            <li
              key={i}
              className={item === value ? styles.active : ""}
              onClick={() => selectItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FilterItem.propTypes = {
  index: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  isNumbers: PropTypes.bool.isRequired,
  singular: PropTypes.string,
  plural: PropTypes.string,
};

export default FilterItem;
