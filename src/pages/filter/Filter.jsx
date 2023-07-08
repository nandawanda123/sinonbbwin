import { DashboardFilter } from "../../components/dashboard-filter/DashboardFilter";
import { FilterBar } from "../../components/filter-bar/FilterBar";
import styles from "./filter.module.css";

export const Filter = () => {
  return (
    <article className={styles.filters}>
      <FilterBar />
      <DashboardFilter />
    </article>
  );
};
