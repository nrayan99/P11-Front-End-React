import style from "./Dropdown.module.scss";
import chevronUp from "../../assets/icons/chevron-up.svg";
import { useState } from "react";

type Props = {
  title: string;
  content: string | string[];
  children: React.ReactNode;
};

function Dropdown({ title, content, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const isAList = Array.isArray(content);

  return (
    <div className={style.Dropdown}>
      <div className={style.Dropdown__title}>
        <span>{title}</span>
        <img
          className={`${
            isOpen ? style.Dropdown__title__chevron__clicked : ""
          } ${style.Dropdown__title__chevron}`}
          src={chevronUp}
          alt="chevron"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div
          className={`${style.Dropdown__content}`}
        >
          {isAList ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}{" "}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
