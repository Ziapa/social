export type ActionType =
    | setDataAuthType

type setDataAuthType = {
    type: "SET_DATA_AUTH"
    data: dataType
}

type mapDispatchPropsType = {
    setDataAuth: (data: dataType) => void
}

type mapStatePropsType = {
    isLogin: boolean
}

export type authReducerPropsType = mapDispatchPropsType & mapStatePropsType


export type InitialStateAuthType = {
    data: dataType
    isLogin: boolean
}

type dataType = {
    id: number | null
    email: string
    login: string
}



const initialState: InitialStateAuthType = {
    data: {
        id: null,
        email: "",
        login: ""
    },
    isLogin: false
}


export const authReducer = (state: InitialStateAuthType = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {

        case "SET_DATA_AUTH" :
            return {
                ...state,
                ...action.data,
                isLogin: true
            }

        default:
            return state
    }
}

export const setDataAuth = (data: dataType): setDataAuthType => ({type: "SET_DATA_AUTH", data}) as const