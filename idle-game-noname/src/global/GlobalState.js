import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const globalData = []

    return (
        <GlobalStateContext.Provider value={globalData}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;