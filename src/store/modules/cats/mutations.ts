import { MutationTree } from 'vuex'
import { State } from './state'
import { CatMutationTypes } from './mutation-types'

export type Mutations<S = State> = {
    [CatMutationTypes.SET_BREED_LIST](state: S, payload: any[]): void;
    [CatMutationTypes.SET_BREEDS_LIST](state: S, payload: any[]): void;
    [CatMutationTypes.SET_BREED_ID](state: S, payload: string): void;
    [CatMutationTypes.SET_CURRENT_PAGE](state: S, payload: number): void;
    [CatMutationTypes.SET_CAN_LOAD_MORE](state: S, payload: boolean): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [CatMutationTypes.SET_BREED_LIST](state: State, payload: any[]) {
        state.breedList = payload
    },
    [CatMutationTypes.SET_BREEDS_LIST](state: State, payload: any[]) {
        state.breedsList = payload
    },
    [CatMutationTypes.SET_BREED_ID](state: State, breed: string) {
        state.data = breed
    },
    [CatMutationTypes.SET_CURRENT_PAGE](state: State, payload: number) {
        state.currentPage = payload
    },
    [CatMutationTypes.SET_CAN_LOAD_MORE](state: State, payload: boolean) {
        state.canLoadMore = payload
    },
    [CatMutationTypes.SET_THROW_ERROR](state: State, payload: boolean) {
        state.hasApiError = payload
    },
};
