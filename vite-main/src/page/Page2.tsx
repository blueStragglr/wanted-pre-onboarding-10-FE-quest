import React from 'react';

const Page2 = () => {

    fetch("/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));

    return (
        <div>
            page2
        </div>
    );
};

export default Page2;