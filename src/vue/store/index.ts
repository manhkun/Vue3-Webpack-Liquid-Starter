import {
  ActionContext,
  ActionTree,
  CommitOptions,
  createLogger,
  createStore,
  DispatchOptions,
  GetterTree,
  MutationTree,
  Store as VuexStore,
} from 'vuex';

// Declare state
export type State = { counter: number };

// Set state
const state: State = { counter: 0 };

// Mutations and action enums

export enum MutationTypes {
  INC_COUNTER = 'SET_COUNTER',
}

export enum ActionTypes {
  INC_COUNTER = 'SET_COUNTER',
}

// Mutation types
export type Mutations<S = State> = {
  [MutationTypes.INC_COUNTER](state: S, playload: number): void;
};

// define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INC_COUNTER](state: State, payload: number) {
    state.counter = payload;
  },
};

// Actions
type AugmentActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

// Actions interface
export interface Actions {
  [ActionTypes.INC_COUNTER](
    { commit }: AugmentActionContext,
    payload: number,
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INC_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.INC_COUNTER, payload);
  },
};

// Getters types
export type Getters = {
  doubleCounter(state: State): number;
};

// Getters
export const getters: GetterTree<State, State> & Getters = {
  doubleCounter: (state) => state.counter * 2,
};

// Setup store type
export type Store = Omit<VuexStore<State>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
};

export const store = createStore({
  state,
  mutations,
  actions,
  plugins: [createLogger()],
});

export function useStore() {
  return store as Store;
}
