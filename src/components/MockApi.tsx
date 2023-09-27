import { useEffect, useState } from "react";
import { Card, Checkbox } from "antd";
import { Container } from "@chakra-ui/react";

interface IDataType {
  id: number;
  title: string;
  done: boolean;
}

export const MockApi = () => {
  const [data, setData] = useState<IDataType[]>([]);
  useEffect(() => {
    fetch("/todos").then((res) => {
      res.json().then((r) => setData(r));
    });
  }, []);

  const [checked, setChecked] = useState<{ id: string; done: boolean }>({
    id: "",
    done: false,
  });

  return (
    <Container
      display={"flex"}
      justifyContent={"space-around"}
      padding={"40px 50px"}
      margin={"auto"}
    >
      {data.map((d) => {
        console.log(d);
        return (
          <Card key={d.id} style={{ width: "30%" }}>
            <Container display={"flex"}>
              <Checkbox
                style={{
                  marginRight: "10px",
                }}
                value={d.done}
                id={d.id.toString()}
                name={`checked${d.id}`}
                onChange={(e) => {
                  const newData = data.map((d) => {
                    if (d.id.toString() === e.target.id) {
                      return { ...d, done: !d.done };
                    } else {
                      return d;
                    }
                  });
                  setData(newData);
                }}
              />
              <p
                style={{
                  textDecoration: d.done ? "line-through" : "none",
                }}
              >
                {d.title}
              </p>
            </Container>
          </Card>
        );
      })}
    </Container>
  );
};
