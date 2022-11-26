import { useState } from "react";
import arrow from "../../assets/icons/arrow.svg";
import style from "./Carousel.module.scss";
type Props = {
  pictures: string[];
};

function Carousel({ pictures }: Props) {
  const [index, setIndex] = useState(0);

  return (
    <div className={style.Carousel}>
      <img className={style.pictures} src={pictures[index]} alt="imgcarousel" />
      {pictures.length > 1 ? (
        <>
          <img
            onClick={() => {
              index === pictures.length - 1 ? setIndex(0) : setIndex(index + 1);
            }}
            className={style.arrow_right}
            src={arrow}
            alt="arrow right"
          />
          <img
            onClick={() => {
              index === 0 ? setIndex(pictures.length - 1) : setIndex(index - 1);
            }}
            className={style.arrow_left}
            src={arrow}
            alt="arrow left"
          />
        </>
      ) : (
        ""
      )}
      <p>{`${index + 1}/${pictures.length}`}</p>
    </div>
  );
}

export default Carousel;
