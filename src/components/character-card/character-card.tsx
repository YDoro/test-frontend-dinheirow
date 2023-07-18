"use client";
import { useState } from "react";
import styles from "./character-card.module.css";
interface CharInfo {
  name: string;
  image: string;
  description?: string;
}
const CharacterCard = (props: CharInfo) => {
  const [hover, setHover] = useState(false);
  //TODO - use clsx
  return (
    <div
      className={styles.Card}
      data-test-id="character-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className={
          hover
            ? "border-b-[4px] border-solid border-b-secondaryRed transform scale-105 transition-all duration-300"
            : "border-b-[4px] border-solid border-b-secondaryRed"
        }
        width="100%"
        height="210px"
        src={props.image}
        alt={props.name}
      />
      <div className="p-4 font-marvel text-2xl h-20">{props.name}</div>
      <div className="p-4 font-marvel text-secondaryGray">
        {props.description}
      </div>
    </div>
  );
};
export default CharacterCard;
