export const userReducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        load: true,
      };
    case "success":
      return {
        ...state,
        data:action.payload.students.map((d)=>{return{...d,tag:[]}}),
        load: false,
        err: "",

      };
    case "fail":
      return {
        ...state,
        data: [],
        err: action.payload,
        load: false,
      };
    case "search":
      return {
        ...state,
        filter: state.data.filter((country, x) => {
          return (country.firstName + " " + country.lastName)
            .toLowerCase()
            .includes(action.payload1.toLowerCase());
        }),
      };
    default:
      return state;
  }
};
