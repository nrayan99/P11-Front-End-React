import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import logementJson from "../../data/logements.json";
import style from "./Logement.module.scss";
import type { logement } from "../../types/logement";
import starEmptyIcon from "../../assets/icons/star-empty.svg";
import starFull from "../../assets/icons/star-full.svg";
import Tag from "../../components/Tag/Tag";
import Dropdown from "../../components/Dropdown/Dropdown";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(undefined as logement | undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function apiCall(): Promise<logement[]> {
      return logementJson;
    }
    async function getLogementById(id: string | undefined): Promise<void> {
      const logements = await apiCall();
      console.log(logements);
      setLogement(logements.find((logement) => logement.id === id));
    }
    getLogementById(id);
  }, [id]);

  function getRatingStars(rating: number): JSX.Element[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img src={starFull} alt="star" />);
      } else {
        stars.push(<img src={starEmptyIcon} alt="star" />);
      }
    }
    return stars;
  }

  if (logement === undefined) {
    return <div>Logement not found</div>;
  } else {
    return (
      <div className={style.Logement}>
        <Carousel pictures={logement.pictures} />
        <div className={style.descriptionContainer}>
          <div className={style.colContainer}>
            <h1 className={style.title}>{logement.title}</h1>
            <p className={style.location}>{logement.location}</p>
            <div className={style.tags}>
              {logement.tags.map((tag) => (
                <Tag tag_name={tag} />
              ))}
            </div>
          </div>
          <div className={style.colContainer}>
            <div className={style.hostDescription}>
              <h3>
                {logement.host.name.split(" ").map((x) => (
                  <>
                    {x} <br></br>
                  </>
                ))}
              </h3>
              <img src={logement.host.picture} alt="host" />
            </div>
            <div className={style.rating}>
              {getRatingStars(parseInt(logement.rating))}
            </div>
          </div>
        </div>
        <div className={style.accordionsContainer}>
          <div className={style.accordion}>
            <Dropdown title="Description" content={logement.description} />
            <Dropdown title="Équipements" content={logement.equipments} />
          </div>
        </div>
      </div>
    );
  }
}

export default Logement;
