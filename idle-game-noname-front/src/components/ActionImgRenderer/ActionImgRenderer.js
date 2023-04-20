import ActionImgCard from "./ActionImgCard"
import SurvivorImg from "../../img/SurvivorGif.gif"
import HouseImg from "../../img/HouseGif.gif"
import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"

const ActionImgRenderer = () => {
  const { ActionQty: { survivorsQty, housingQty } } = useContext(GlobalStateContext)
  const SurvivorActionName = `Survivors`
  const HouseActionName = `Houses`

  return (
    <>
      <ActionImgCard
        ActionQty={survivorsQty}
        ActionIcon={SurvivorImg}
        ActionName={SurvivorActionName}
      />
      <ActionImgCard
        ActionQty={housingQty}
        ActionIcon={HouseImg}
        ActionName={HouseActionName}
      />
    </>

  )
}

export default ActionImgRenderer;