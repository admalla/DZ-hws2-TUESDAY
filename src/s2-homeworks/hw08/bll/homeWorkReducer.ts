import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            state.sort((a: UserType, b: UserType) => {
                if(action.payload === 'up') return  a.name.localeCompare(b.name, 'ru')
                if(action.payload === 'down') return  b.name.localeCompare(a.name, "ru")
                return 0
            })
            return state
        }
        case 'check': {
            return [...state.filter(u => u.age >= action.payload)].reverse()
        }
        default:
            return state
    }
}
