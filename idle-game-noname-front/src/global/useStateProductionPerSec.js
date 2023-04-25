import { useState } from "react";

const useStateProductionPerSec = () => {
    // PRODUCTION PER SECOND -------------------------------------
    const [resourcePerSec, setResoursePerSec] = useState(0)
    const [buildingMaterialPerSec, setBuildingMaterialPerSec] = useState(0)
    const [craftingMaterialPerSec, setCraftingMaterialPerSec] = useState(0)

    const globalPerSecData = {
        resourcePerSec,
        buildingMaterialPerSec,
        craftingMaterialPerSec,
        setResoursePerSec,
        setBuildingMaterialPerSec,
        setCraftingMaterialPerSec
    }

    return globalPerSecData;
}

export default useStateProductionPerSec;