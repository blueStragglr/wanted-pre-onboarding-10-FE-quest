import React, { useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import style from './MockDataList.module.scss';

const MockDataList = () => {
  const [mockData, setMockData] = React.useState();
  useEffect(() => {
    fetch('/api/v1/authmock')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setMockData(jsonRes));
  }, []);

  return (
    <ListGroup className={style.MockDataList}>
      {mockData &&
        mockData.map((item) => {
          return (
            <ListGroupItem key={item.id} className={style.MockDataList__item}>
              <div>
                {item.id}. {item.name}
              </div>
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
};

export default MockDataList;
