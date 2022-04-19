import React, { useState,useContext, useMemo } from 'react';
import { MainContext } from './Cart/MainProvider';

const Search = () => {
	const {sortedBeats,setSortedBeats,searching,setSearching,searchValue,setSearchValue,} = useContext(MainContext)

	return (
		<div className="search">
			<div className="search__row">
				<div className="search__item">
					<svg tabIndex={2} className="search__icon" onClick={()=> setSearching(!searching)} ><use href="#search-icon"></use></svg>
				</div>
				<div className="search__input">
					<input onKeyDown={(e)=> { e.key === 'Enter' && setSearching(!searching)}} tabIndex={1} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder="Artist or genre..."></input>
				</div>
			</div>
		</div>
	);
}

export default Search;
