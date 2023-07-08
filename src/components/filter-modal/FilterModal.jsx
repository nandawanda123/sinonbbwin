import styles from "./filtermodal.module.css";
import PropTypes from "prop-types";
import {
  numberRooms,
  propertyStatus,
  propertyTypes,
  sectors,
} from "../../utils/data";
import FilterItem from "../filter-item/FilterItem";

const FilterModal = ({ close }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_body}>
        <button onClick={close}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/Flecha_positivo.svg`}
            alt="arrow"
          />
          <span>Volver</span>
        </button>
        <div className={styles.modal_wrapper}>
          <div className={styles.modal_filters}>
            <FilterItem
              title={"Tipo de Inmueble"}
              items={propertyTypes}
              index={5}
              isNumbers={false}
            />
            <FilterItem
              title={"Estado del Inmueble"}
              items={propertyStatus}
              index={6}
              isNumbers={false}
            />
            <FilterItem
              title={"Sector o ubicación"}
              items={sectors}
              index={7}
              isNumbers={false}
            />
            <FilterItem
              title={"Número de habitaciones"}
              items={numberRooms}
              index={8}
              singular={"habitación"}
              plural={"habitaciones"}
              isNumbers={true}
            />
            <FilterItem
              title={"Número de baños"}
              items={numberRooms}
              index={9}
              singular={"baño"}
              plural={"baños"}
              isNumbers={true}
            />
            <FilterItem
              title={"Estrato"}
              items={numberRooms}
              index={10}
              isNumbers={true}
            />
          </div>
          <div className={styles.modal_bars}>
            <div>
              <span>Área</span>
              <label htmlFor="areas">
                <span>60 m2 - 120 m2</span>
                <input
                  type="range"
                  min="1"
                  max="100"
                  readOnly={true}
                  value="100"
                  id="areas"
                ></input>
              </label>
            </div>
            <div>
              <span>Rango de precio</span>
              <label htmlFor="prices">
                <span>$500.000 - $1.200.000 millones</span>
                <input
                  type="range"
                  min="1"
                  max="100"
                  readOnly={true}
                  value="100"
                  id="prices"
                ></input>
              </label>
            </div>
          </div>
          <span>Amenidades</span>
          <div className={styles.modal_search}>
            <div className={styles.services}>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label htmlFor="service">Parqueaderos</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Gimnasio</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Salón de eventos</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Área de mascotas</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Balcón</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Piscinas</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Acabados</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Terraza para eventos</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Sistema de seguridad</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Área social</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Spa</label>
              </div>
              <div className={styles.check_service}>
                <input type="checkbox" name="service" />
                <label>Seguridad privada</label>
              </div>
            </div>
            <div
              className={`${styles.reset_filters} ${styles.reset_filters_web}`}
            >
              <button>
                <span>Buscar</span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/icons/flecha_dirección_negativo.svg`}
                  alt="arrow"
                />
              </button>
              <button>
                <span>Limpiar Filtro</span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/icons/limpiar_filtro.svg`}
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.reset_filters} ${styles.reset_filters_mobile}`}
        >
          <button>
            <span>Buscar</span>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/flecha_dirección_negativo.svg`}
              alt="arrow"
            />
          </button>
          <button>
            <span>Limpiar Filtro</span>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/limpiar_filtro.svg`}
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

FilterModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default FilterModal;
