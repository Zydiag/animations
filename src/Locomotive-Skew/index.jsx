import { useEffect, useRef } from "react";
import { photos } from "../data/photos";

import GridItem from "./GridItem";
import LocomotiveScroll from "locomotive-scroll";
import imagesLoaded from "imagesloaded";

import "locomotive-scroll/dist/locomotive-scroll.css";
import styles from "./style.module.css";

const preloadImages = (selector) => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true }, // to detect when the background image has loaded
      resolve, // to run after images have loaded
    );
  });
};

const clamp = (value, min, max) =>
  value <= min ? min : value >= max ? max : value;

const LocomotiveSkew = () => {
  const ref = useRef(null);
  const leftColRef = useRef(null);
  const middleColRef = useRef(null);
  const rightColRef = useRef(null);

  const scroll = useRef({
    cache: 0,
    current: 0,
  });

  useEffect(() => {
    const scrollElement = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true,
    });

    scrollElement.on("scroll", (obj) => {
      scroll.current.current = obj.scroll.y;
      const distance = scroll.current.current - scroll.current.cache;
      scroll.current.cache = scroll.current.current;

      leftColRef.current.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
      // middleColRef.current.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
      rightColRef.current.style.transform = `skewY(${clamp(-distance, -10, 10)}deg)`;
    });

    Promise.all([preloadImages(".grid-item-media")]).then(() =>
      scrollElement.update(),
    );
    // preloadImages(".grid-item-media").then(() => scrollElement.update());
  }, []);

  const leftChunk = photos.slice(0, 5);
  const middleChunk = photos.slice(5, 10);
  const rightChunk = photos.slice(10, 15);

  return (
    <>
      <div className="main-container" id="main-container" ref={ref}>
        <div className={styles.grid_wrap}>
          <div className="left-col" ref={leftColRef}>
            {leftChunk.map(({ url, description }, index) => (
              <GridItem url={url} description={description} key={index} />
            ))}
          </div>
          <div className="middle-col" data-scroll data-scroll-speed="-20">
            <div ref={middleColRef}>
              {middleChunk.map(({ url, description }, index) => (
                <GridItem url={url} description={description} key={index} />
              ))}
            </div>
          </div>
          <div className="right-col" ref={rightColRef}>
            {rightChunk.map(({ url, description }, index) => (
              <GridItem url={url} description={description} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default LocomotiveSkew;
