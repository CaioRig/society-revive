import ActionImgCard from "./ActionImgCard"
import SurvivorImg from "../../img/SurvivorGif.gif"
import HouseImg from "../../img/HouseGif.gif"
import ToolsImg from "../../img/ToolsGif.gif"
import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"

const ActionImgRenderer = () => {
  const { ActionQty: { survivorsQty, housingQty, toolsQty } } = useContext(GlobalStateContext)
  const SurvivorActionName = `Survivors`
  const HouseActionName = `Houses`
  const ToolsActionName = `Tools`

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
      <ActionImgCard
        ActionQty={toolsQty}
        ActionIcon={ToolsImg}
        ActionName={ToolsActionName}
      />
    </>

  )
}

export default ActionImgRenderer;