import React from "react";
import Spinner from "../app/Spinner";
import CharacterItem from "./CharacterItem";
import NoResult from "../app/NoResult";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.length === 0 ? (
        <NoResult />
      ) : (
        items.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))
      )}
    </section>
  );
};

export default CharacterGrid;
