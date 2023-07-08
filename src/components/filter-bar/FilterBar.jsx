import { useState } from "react";
import {
  numberRooms,
  propertyStatus,
  propertyTypes,
  sectors,
} from "../../utils/data";
import FilterItem from "../filter-item/FilterItem";
import FilterModal from "../filter-modal/FilterModal";
import styles from "./filterbar.module.css";

export const FilterBar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <section className={styles.list_filters}>
      <FilterItem
        title={"Tipo de Inmueble"}
        items={propertyTypes}
        index={1}
        isNumbers={false}
      />
      <FilterItem
        title={"Estado del Inmueble"}
        items={propertyStatus}
        index={2}
        isNumbers={false}
      />
      <FilterItem
        title={"Sector o ubicación"}
        items={sectors}
        index={3}
        isNumbers={false}
      />
      <FilterItem
        title={"Número de habitaciones"}
        items={numberRooms}
        index={4}
        singular={"habitación"}
        plural={"habitaciones"}
        isNumbers={true}
      />
      <div className={styles.btn_filters}>
        <button onClick={toggleShowModal}>
          <span>Filtro Avanzado</span>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/filtro_avanzado.svg`}
            alt="bars"
          />
        </button>
      </div>
      {showModal && <FilterModal close={toggleShowModal} />}
    </section>
  );
};
