import { Button, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [resourseNumber, setResourseNumberPerClick] = useState(0)
  const addNumberPerClick = () => setResourseNumberPerClick(resourseNumber + 1)

  return (
    <div>
      <Typography>
        {resourseNumber}
      </Typography>
      <Button onClick={addNumberPerClick}>Click here</Button>
    </div>
  );
}

export default App;
