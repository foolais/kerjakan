import React from "react";
import { UserGlobal } from "../context/GlobalContext";

const SelectOption = (props) => {
  const { satu, dua, tiga } = props;
  const { setFilter } = UserGlobal();

  return (
    <select
      onChange={(e) => setFilter(e.target.value)}
      className="text-black p-2 rounded-lg"
    >
      <option value=""></option>
      <option value={satu}>{satu}</option>
      <option value={dua}>{dua}</option>
      <option value={tiga}>{tiga}</option>
    </select>
  );
};

export default SelectOption;
