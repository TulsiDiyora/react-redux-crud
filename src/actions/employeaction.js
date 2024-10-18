export const employeaction = (data) => {
    return {
        type: "setData",
        payload: data
    }
}


export const deletedata = (id) => {
    return {
        type: "deleteData",
        payload: id
    }
}

export const editdata = (id, data) => {
    return {
      type: "editData",
      payload: { id, data } 
    }
  }
export const EmployeeEdit = (employee) => {
    return {
        type: 'setEmployee',
        payload: employee,
    };
};

export const selectDropdown = (cat) => {
  return {
      type: "setDropdown",
      payload:  cat.toLowerCase(),
  };
};
const setViewData = () => {
    return {
        type: "setViewData",
    };
}
const setloding = () => {
    return {
        type: "isloading",
    };
};

export const empAsync = (data) => {
    return  (dispatch) => {
        dispatch(setloding());

        setTimeout(() => {
            dispatch(employeaction(data));
        }, 2000);
    };
}

export const viewAsync = () => {
    return  (dispatch) => {
        dispatch(setloding());

        setTimeout(() => {
            dispatch(setViewData());
        }, 2000);
    };
}
