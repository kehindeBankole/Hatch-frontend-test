export const userReducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        load: true,
      };
    case "success":
      console.log(action.payload.students);
      return {
        ...state,
        data: action.payload.students,
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
    case "byreg":
      return {
        ...state,
        filter: state.data.filter((country) => {
          let fullName = country.firstName + " " + country.lastName;
          console.log(fullName);
          return fullName.toLowerCase() === action.payload2.toLowerCase();
        }),
      };
    case "dark":
      return {
        ...state,
        darkclick: !state.darkclick,
      };
    default:
      return state;
  }
};
