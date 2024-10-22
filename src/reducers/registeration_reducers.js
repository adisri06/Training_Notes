
const initialState ={
    records: [],
    error:''
}
const RegisterationReducer = (state = initialState, action) =>{
    switch (action.type) {
      case "ADD_RECORD":
        return {
          ...state,
          records: [...state.records, action.payload],
          error: "",
        };
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload,
        };
        case 'UPDATE_RECORD':
          return {
            ...state,
            records: state.records.map((record) =>
              record.id === action.payload.id ? action.payload : record
            ),
          };
      case "RESET_ERROR":
        return {
          ...state,
          // return{...state,count:state.count+parseInt(action.step)}
          error: ''
        };
      default:
        return state;
    }
}
export default RegisterationReducer;