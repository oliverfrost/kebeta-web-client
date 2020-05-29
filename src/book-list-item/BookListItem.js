import React from 'react';

function BookListItem(props) {
  const {title, author} = props;

  return <div>
      <h2>{title}</h2>
      <span>{author}</span>
  </div>;
}

export default BookListItem;
