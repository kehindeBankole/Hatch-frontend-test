import React from "react";
import { SuperContext } from "./context";
import { userReducer } from "./reducer";
import { useReducer } from "react";
import Axios from "axios";

function SuperHeroState(props) {
  const initialState = {
    load: true,
    err: "",
    data: [],
    filter: [],
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  const fetch = () => {
    Axios.get(`https://api.hatchways.io/assessment/students`)
      .then((res) => dispatch({ type: "success", payload: res.data }))
      .catch((err) => {
        dispatch({ type: "fail", payload: "network error" });
      });
  };
  const search = (cont, region) => {
    dispatch({ type: "search", payload1: cont, payload2: region });
  };
  return (
    <SuperContext.Provider
      value={{
        load: state.load,
        data: state.data,
        err: state.err,
        fetch,
        filter: state.filter,
        search,
      }}
    >
      {props.children}
    </SuperContext.Provider>
  );
}

export default SuperHeroState;
