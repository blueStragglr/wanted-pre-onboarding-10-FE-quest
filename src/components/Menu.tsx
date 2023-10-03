import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./Menu.module.css";

interface menuType {
  id: number;
  name: string;
  price: number;
  category: string;
  iceOnly: boolean;
}

export default function Menu() {
  const [menu, setMenu] = useState<menuType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://651a8049340309952f0d685d.mockapi.io/menu")
      
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = await response.json();
      setMenu(data);
    } catch(error) {
      console.error(error)
    }

    setIsLoading(false);
  }

  // 이미지 따로, 글 따로.
  return (
    <div className={classes.menuWrapper}>
      <h2>Menu</h2>
      <div className={classes.menuContainer}>
        {isLoading ? (<span>Loading...</span>) 
          : (
            <ul>
              {menu.map((el) => 
                <li key={el.id}>
                  <span>{el.name}</span>
                </li>
              )}
            </ul>
          )}
      </div>
      <div className={classes.bottomArea}>
        <Link to={"/"}>Home으로 돌아가기 &rarr;</Link>
      </div>
    </div>
  )
}
