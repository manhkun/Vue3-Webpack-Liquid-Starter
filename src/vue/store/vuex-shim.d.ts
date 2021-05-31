// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

// declare module 'vuex' {
//   // eslint-disable-next-line import/prefer-default-export
//   export function useStore(key?: string): Store<State>;
// }
