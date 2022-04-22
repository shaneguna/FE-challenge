import {ActionContext, ActionTree} from 'vuex'
import {RootState} from '@/store'
import {limit} from '@/services/cats-api'
import {getBreedByName} from "@/services/cats-api/getBreedByName"
import {State} from './state';
import {Mutations} from './mutations';
import {CatMutationTypes} from './mutation-types'
import {CatActionTypes} from './action-types'
import {getBreeds} from "@/services/cats-api/getBreeds";

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
    [CatActionTypes.API_GET_BY_BREED](
        {commit}: AugmentedActionContext,
        id: null,
    ): Promise<boolean>;

    [CatActionTypes.INCREMENT_PAGE](
        {commit}: AugmentedActionContext,
        page: number,
    ): Promise<boolean>;

    [CatActionTypes.STORE_SELECTED_BREED](
        {commit}: AugmentedActionContext,
        id: string,
    ): Promise<boolean>;
}
//API_GET_BREEDS
export const actions: ActionTree<State, RootState> & Actions = {
    async [CatActionTypes.API_GET_BREEDS]({dispatch, commit, getters}) {
        let response = await getBreeds()
        console.log(response)
        if (response === null) {
            commit(CatMutationTypes.SET_THROW_ERROR, true)
            return false
        }

        commit(CatMutationTypes.SET_BREEDS_LIST, response);

        return true
    },
    async [CatActionTypes.API_GET_BY_BREED]({dispatch, commit, getters}, id: string | null) {
        if (id === null) return false

        let page = getters.getCurrentPage
        let response = await getBreedByName(id, page)

        if (response === null) {
            commit(CatMutationTypes.SET_THROW_ERROR, true)
            return false
        }

        let newImageList: any = response.images
        let canLoadMore = newImageList.length === limit

        /**
         * cats api doesnt give a clear handling of when request is at end of list
         * so we handle it by basing on checking our page pointer
         */
        if (page > 1) {
            let previousImageList: any = getters.getBreedList.images
            let mergedImages = previousImageList.concat(
                newImageList.filter(
                    (newImage: { url: any; }) =>
                        previousImageList.every(
                            (prevImage: { url: any; }) =>
                                prevImage.url !== newImage.url
                        )
                )
            )

            // we handle understanding whether were at end of the list by checking if new request returned same configured limit
            canLoadMore = (newImageList - previousImageList) === limit
            response.images = mergedImages
        }

        commit(CatMutationTypes.SET_CAN_LOAD_MORE, canLoadMore)
        commit(CatMutationTypes.SET_BREED_LIST, response);

        return true
    },
    async [CatActionTypes.INCREMENT_PAGE]({commit, getters}) {
        commit(CatMutationTypes.SET_CURRENT_PAGE, getters.getCurrentPage + 1);
        return true
    },
    async [CatActionTypes.STORE_SELECTED_BREED]({commit}, id: string) {
        commit(CatMutationTypes.SET_BREED_ID, id);
        return true;
    },
};
