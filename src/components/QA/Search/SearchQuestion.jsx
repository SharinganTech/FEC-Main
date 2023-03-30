import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchQuestion({ setSearchOn, searchInput, setSearchInput }) {
  // const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // console.log(searchInput);
    if (searchInput.length > 2) {
      setSearchOn(true);
    } else {
      setSearchOn(false);
    }
  }, [searchInput]);

  // renderFilterList(searchInput);

  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute px-3 text-gray-400" />
      <input className="shadow appearance-none w-full border rounded py-1 px-10 text-black" type="text" placeholder="Have a question? Search for answers..." value={searchInput} onChange={(e) => { e.preventDefault(); setSearchInput(e.target.value); }} />
    </div>
  );
}

export default SearchQuestion;
