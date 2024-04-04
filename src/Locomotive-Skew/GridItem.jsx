import styles from "./style.module.css";
const GridItem = ({ url, description }) => {
  return (
    <div className={styles.grid_item}>
      <img src={url} alt="" className="grid-item-media" />
      <p>{description}</p>
    </div>
  );
};

export default GridItem;
