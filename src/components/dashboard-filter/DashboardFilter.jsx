import { Map } from "mapbox-gl";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FilterModal from "../filter-modal/FilterModal";
import { ListCard } from "../list-card/ListCard";
import { Marker } from "../marker/Marker";
import styles from "./dashboardfilter.module.css";

export const DashboardFilter = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const mapDiv = useRef(null);

  useLayoutEffect(() => {
    if (true) {
      new Map({
        container: mapDiv.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: [-72.50782, 7.89391],
        zoom: 8,
      });
      setShowInfo(true);
      setShowMap(true);
    }
  }, []);

  const toggleMap = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMap(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px",
      }
    );

    observer.observe(mapDiv.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMoveScroll = () => {
    if (!showMap) {
      mapDiv.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      document
        .getElementById("info")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setShowMap(!showMap);
  };

  return (
    <section className={styles.dashboard}>
      {showInfo && (
        <div className={styles.info}>
          <div className={styles.badget} onClick={handleMoveScroll}></div>
          <ListCard />
        </div>
      )}
      <div ref={mapDiv} className={styles.map}>
        <button onClick={toggleMap}>
          <img
            className={showInfo ? styles.toLeft : styles.toRight}
            src={`${process.env.PUBLIC_URL}/assets/icons/Flecha_positivo.svg`}
            alt="arrow"
          />
          <span>Mostrar {showInfo ? "mapa" : "listado"}</span>
        </button>
        <Marker />
      </div>
      <div className={styles.nav_mobile}>
        <button onClick={handleMoveScroll}>
          <img
            className={showMap ? styles.toUp : styles.toBottom}
            src={`${process.env.PUBLIC_URL}/assets/icons/Flecha_positivo.svg`}
            alt="arrow"
          />
          <span>Mostrar {showMap ? "listado" : "mapa"}</span>
        </button>
        <button onClick={() => setShowModal(!showModal)}>
          <span>Filtro Avanzado</span>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/filtro_avanzado.svg`}
            alt="bars"
          />
        </button>
      </div>
      {showModal && <FilterModal close={() => setShowModal(false)} />}
    </section>
  );
};
