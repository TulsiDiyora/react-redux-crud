
const initialState = {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
    employee: null,
    dropdownn: [],
    // filteredEmployees: [],
    isloading: false,
}

const employedata = (state = initialState, action) => {
   switch(action.type){
    case "setData":
        console.log("setData", action.payload);
        // state = {...state, employee: action.payload}
        
        let rec = action.payload

        rec.id = Math.floor(Math.random() * 10000)
        
        let data = [...state.employees, rec]

        // console.log("data", data);

        localStorage.setItem("employees", JSON.stringify(data))

        return {
            ...state,
            employees: data,
            isloading: false 

        };
        case "setViewData":
            return {
                ...state, 
                employees: JSON.parse(localStorage.getItem("employees")) || [], 
                isloading: false
            }
        
    case "deleteData":
        console.log("deleteData", action.payload);
        let dataa = state.employees.filter((d) =>
          
            d.id !== action.payload

        )
        localStorage.setItem("employees", JSON.stringify(dataa))
        return {
            ...state,
            employees: dataa
        }

        case "editData":
            const updatedData = state.employees.map((d) => 
              d.id === action.payload.id ? { ...d, ...action.payload.data } : d
            );
            localStorage.setItem("employees", JSON.stringify(updatedData));
            return {
              ...state,
              employees: updatedData,
              employee: null 
            };
        
         case "setEmployee":
             return {
                 ...state,
                 employee: action.payload 
          };

          case "setDropdown":
            const catt = action.payload.toLowerCase(); 
            let dropdownn = state.employees;
            let filterData = [...state.employees];
        
            if (catt) {
              dropdownn = filterData.filter((employee) => 
                    employee.role.toLowerCase() === catt
                );
            }
        
            return {
                ...state,
                dropdownn, 
            };
            case "isloading":
                return {
                    ...state,
                    isloading: true
            }
           
     default:
        return state   
   }

}

export default employedata





