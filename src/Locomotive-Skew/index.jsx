import { photos } from "../data/photos";
import GridItem from "./GridItem";
import styles from "./style.module.css";

const LocomotiveSkew = () => {
  const leftChunk = photos.slice(0, 5);
  const middleChunk = photos.slice(5, 10);
  const rightChunk = photos.slice(10, 15);

  return (
    <div className="main-container" id="main-container">
      <div className={styles.grid_wrap}>
        <div className="left-col">
          {leftChunk.map(({ url, description }, index) => (
            <GridItem url={url} description={description} key={index} />
          ))}
        </div>
        <div className="middle-col">
          {middleChunk.map(({ url, description }, index) => (
            <GridItem url={url} description={description} key={index} />
          ))}
        </div>
        <div className="right-col">
          {rightChunk.map(({ url, description }, index) => (
            <GridItem url={url} description={description} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LocomotiveSkew;
