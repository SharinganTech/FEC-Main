import React, { useEffect } from 'react';

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
    <>
      <input className="shadow appearance-none w-full border rounded py-1 px-2 text-black" type="text" placeholder="Have a question? Search for answers..." value={searchInput} onChange={(e) => { e.preventDefault(); setSearchInput(e.target.value); }} />
      {/* <button type="button" onClick={handleSearchClick}>Search Questions</button> */}
    </>
  );
}

export default SearchQuestion;
