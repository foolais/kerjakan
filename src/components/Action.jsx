import React from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { UserGlobal } from "../context/GlobalContext";
import SelectOption from "./SelectOption";

const Action = () => {
  const {
    action,
    setAction,
    searchValue,
    setSearchValue,
    filterValue,
    setFilterValue,
    handleFilterSubmit,
    filterStatus,
    handleClear,
  } = UserGlobal();

  return (
    <div className="relative w-3/4 mx-auto">
      <div
        onClick={() => setAction(!action)}
        className="flex items-center justify-between border-2 border-primaryColor text-primaryColor font-semibold text-xl py-1 px-6 rounded-md cursor-pointer"
      >
        <p>Action</p>
        <FaAngleDown />
      </div>
      {action && (
        <div className="z-40 absolute mt-2 bg-primaryColor text-white w-full rounded-md p-4">
          {/* Search */}
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-black">
              <FaSearch />
            </div>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              className="block w-full pl-10 p-2.5 rounded-lg outline-none text-black"
              placeholder="Search..."
              value={!searchValue.length ? "" : searchValue}
              required
            />
          </div>
          {/* Filter */}
          <form onSubmit={handleFilterSubmit}>
            <div className="my-4 flex items-center gap-2">
              <p className="text-xl font-semibold">Filter by</p>
              <select
                className="text-black p-2 rounded-lg"
                onChange={(e) => setFilterValue(e.target.value)}
              >
                <option value=""></option>
                <option value="Kota" set>
                  Kota
                </option>
                <option value="Job">Job</option>
                <option value="Salary">Salary min</option>
              </select>
              {/* option */}
              {filterValue === "Kota" ? (
                <>
                  <SelectOption
                    satu="Jakarta"
                    dua="Bandung"
                    tiga="Yogyakarta"
                  />
                  <button className="bg-white p-2.5 px-4 rounded-lg text-primaryColor font-semibold hover:bg-secondaryColor">
                    Filter
                  </button>
                </>
              ) : filterValue === "Job" ? (
                <>
                  <SelectOption
                    satu="Front end"
                    dua="Back end"
                    tiga="Full stack"
                  />
                  <button className="bg-white p-2.5 px-4 rounded-lg text-primaryColor font-semibold hover:bg-secondaryColor">
                    Filter
                  </button>
                </>
              ) : filterValue === "Salary" ? (
                <>
                  <SelectOption satu="4000000" dua="5000000" tiga="6000000" />
                  <button className="bg-white p-2.5 px-4 rounded-lg text-primaryColor font-semibold hover:bg-secondaryColor">
                    Filter
                  </button>
                </>
              ) : null}
            </div>
          </form>
          {/* clear */}
          {filterStatus ? (
            <button
              onClick={handleClear}
              className="bg-white p-2.5 px-4 rounded-lg text-primaryColor font-semibold hover:bg-secondaryColor"
            >
              Clear
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Action;
