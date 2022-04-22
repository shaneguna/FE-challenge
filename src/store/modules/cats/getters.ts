import { GetterTree } from 'vuex'
import { RootState } from '@/store'
import { State } from './state'

export type Getters = {
    getSelectedBreed(state: State): string | null
    getBreedList(state: State): any[]
    getBreedsList(state: State): any[]
    getCurrentPage(state: State): number
    getCanLoadMore(state: State): boolean
    isApiErrorEncountered(state: State): boolean
}

export const getters: GetterTree<State, RootState> & Getters = {
    getSelectedBreed: (state) => state.data,
    getBreedList: (state) => state.breedList,
    getBreedsList: (state) => state.breedsList,
    getCurrentPage: (state) => state.currentPage,
    getCanLoadMore: (state) => state.canLoadMore,
    isApiErrorEncountered: (state) => state.hasApiError,
};
