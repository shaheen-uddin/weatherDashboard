import { useContext, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

export default function Search() {
  const { selectedLocation, setSelectedLocation } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState("");

  /*  const doSearch = (term) => {
    console.log("term: " + term);
    useDebounce((term) => {
      const fetchedLocation = getLocationByName(term);
      console.log(fetchedLocation);
      setSelectedLocation({ ...fetchedLocation });
    }, 500);
  }; */

  const doSearch = useDebounce((term) => {
    console.log("term: " + term);
    const fetchedLocation = getLocationByName(term);
    //console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  const handleSearch = (e) => {
    let value = e.target.value;
    // console.log(value);
    setSearchTerm(value);
    doSearch(value);
  };
  /*   const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchTerm);
    const fetchedLocation = getLocationByName(searchTerm);
    // console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }; */
  //  console.log(selectedLocation);
  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </div>
    </form>
  );
}
