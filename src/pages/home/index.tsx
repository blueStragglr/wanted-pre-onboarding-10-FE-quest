import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  const handleButton1Click = () => {
    navigate("./page1");
  };

  const handleButton2Click = () => {
    navigate("./page2");
  };

  return (
    <div className=" p-5">
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" onClick={handleButton1Click}>
          Page1
        </Button>
        <Button variant="contained" onClick={handleButton2Click}>
          Page2
        </Button>
      </Stack>
    </div>
  );
}
