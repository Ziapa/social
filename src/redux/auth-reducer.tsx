export type ActionType =
    | setDataAuthType

type setDataAuthType = {
    type: "SET_DATA_AUTH"
    data: InitialStateAuthType
}

type mapDispatchPropsType = {
    setDataAuth: (data: InitialStateAuthType) => void
}

type mapStatePropsType = {}

export type authReducerPropsType = mapDispatchPropsType & mapStatePropsType


export type InitialStateAuthType = {
    id: number | null
    email: string
    login: string
}

const initialState: InitialStateAuthType = {
    id: null,
    email: "",
    login: ""
}


export const authReducer = (state: InitialStateAuthType = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case "SET_DATA_AUTH" :
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

export const setDataAuth = (data: InitialStateAuthType): setDataAuthType => ({type: "SET_DATA_AUTH", data}) as const