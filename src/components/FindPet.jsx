import React from "react";
import pets from "../pets";
import SinglePet from "./SinglePet/SinglePet";

/* const SinglePet = ({ pet }) => {
  return (
    <div className="find-pet__single-pet bg-white shadow-md p-5 rounded relative">
      <img
        className="find-pet__single-pet__image rounded shadow-md"
        src={pet.src}
        alt={`Single pet photo - ${pet.name}`}
      />
    </div>
  );
}; */

const SingleSearchType = ({ value, selected, callback }) => {
  return (
    <div
      className={`find-pet__type bg-white w-full md:w-1/2 lg:w-1/3 h-56 p-4 relative mx-2 mb-10 ${
        selected === value && "is-selected"
      }`}
      onClick={() => callback(value)}
    >
      <img
        src={`./pngwing.com-${value}s.png`}
        alt={`Type select image for "${value}"`}
        className="find-pet__type__image absolute h-[110%] z-20"
      />
      <p className="find-pet__type__text text-3xl font-medium p-5">{value}</p>
    </div>
  );
};

const FindPet = () => {
  let [selected, setSelected] = React.useState("");
  let [page, setPage] = React.useState(0);
  let listRef = React.useRef();
  let elementsPerPage = 6;

  let selectedPets = React.useMemo(() => {
    return pets.filter((el) => el.type === selected.toLowerCase());
  }, [page, selected]);

  const getPaginationNav = () => {
    if (!selected) return <></>;

    let values = [];
    let currentPage = page + 1;
    let maxPages =
      selectedPets.length % elementsPerPage === 0
        ? selectedPets.length / elementsPerPage - 1
        : parseInt((selectedPets.length / elementsPerPage).toFixed(0));

    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 0 && i <= maxPages) {
        values.push(i);
      }
    }

    return values.map((el) => (
      <button
        className="find-pet__pagination__button py-2 px-4 bg-stone-200"
        aria-label={`Go to ${el} page of find pet results.`}
        onClick={() => setPage(el - 1)}
      >
        {el}
      </button>
    ));
  };

  const selectType = (type) => {
    setPage(0);
    setSelected(type);
  };

  return (
    <div className="find-pet__react py-10">
      <h2 className="text-center text-3xl mb-8">Looking for...</h2>
      <div className="find-pet__types flex flex-wrap justify-evenly">
        <SingleSearchType
          selected={selected}
          callback={(v) => {
            selectType(v);
          }}
          value="Dog"
        />
        <SingleSearchType
          selected={selected}
          callback={(v) => {
            selectType(v);
          }}
          value="Cat"
        />
      </div>
      <div className="find-pet__pagination flex">{getPaginationNav()}</div>
      <div
        ref={listRef}
        className="find-pet__results shadow-md overflow-hidden bg-stone-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {selectedPets
          .slice(page * elementsPerPage, (page + 1) * elementsPerPage)
          .map((el, index) => (
            <div className="bg-white rounded" key={index}>
              <SinglePet
                name={el.name}
                age={el.age}
                src={el.src}
                gender={el.gender}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FindPet;
