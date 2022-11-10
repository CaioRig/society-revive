import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useGetSeconds from "./hooks/useGetSeconds";

function App() {
  const [resourseNumber, setResourseNumber] = useState(0)
  const [resoursePerSecond, setResoursePerSecond] = useState(0)
  const [clickUpdates, setClickUpdates] = useState(1)
  const second = useGetSeconds()

  const addNumberPerClick = () => setResourseNumber(resourseNumber + clickUpdates)

  const addNumberPerSecond = () => setResourseNumber(resourseNumber + resoursePerSecond)

  const upgradeGatherer = () => setClickUpdates(clickUpdates + 1)
  const upgradeGatherPerSecond = () => setResoursePerSecond(resoursePerSecond + 1)

  useEffect(() => {
    addNumberPerSecond()
  }, [second])

  return (
    <div>
      <Typography color={"#ffffff"}>
        Resourses: {resourseNumber}
      </Typography>
      <Button onClick={addNumberPerClick}>Gather resourses</Button>
      <br />
      <Button onClick={upgradeGatherer}>Upgrade gatherer</Button>
      <br />
      <Button onClick={upgradeGatherPerSecond}>Upgrade gather per second</Button>
    </div>
  );
}

export default App;
