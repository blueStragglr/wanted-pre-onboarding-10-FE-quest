import { useState, useEffect } from "react";

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

  return (
    <div>
      <div>Menu </div>
      <div>{isLoading ? "loading..." : "test"}</div>
      <ul className={classes.menuContainer}>
        {menu.map((el) => 
          <li key={el.id} className={classes.menubox}>
            <div>
              <div>{}</div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
