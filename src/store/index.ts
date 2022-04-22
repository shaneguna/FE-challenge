import {createStore, createLogger} from 'vuex';

import {store as cats, CatStore, State as CatState} from '@/store/modules/cats';

export type RootState = {
    cats: CatState;
};

export type Store = CatStore<Pick<RootState, 'cats'>>;

// plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    modules: {
        cats,
    },
});

export function useStore(): Store {
    return store as Store;
}
