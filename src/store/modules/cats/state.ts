export type State = {
    breedList: any[];
    breedsList: any[];
    canLoadMore: boolean
    currentPage: number,
    data: string | null;
    hasApiError: boolean;
}

export const state: State = {
    breedList: [],
    breedsList: [],
    canLoadMore: true,
    currentPage: 1,
    data: null,
    hasApiError: false,
};
