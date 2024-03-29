import React, { useState } from 'react';
import useInfiniteScroll from "./useInfiniteScroll";
import "./styles/List.css";

const List = () => {
  const [listItems, setListItems] = useState(Array.from(Array(10).keys(), n => n + 1));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => ([...prevState, ...Array.from(Array(10).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 700);
  }

  return (
    <>
      <ul className="list-group mb-2">
        {listItems.map(listItem => <li className="list-group-item">List Item {listItem}</li>)}
      </ul>
      {isFetching && 'Loading...'}
    </>
  );
};

export default List;