<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ActionTypes, MutationTypes, useStore } from '../../store';

export default defineComponent({
  setup() {
    const store = useStore();
    const count = ref(store.state);
    const inc = () => {
      store.commit(MutationTypes.INC_COUNTER, 1);
    };

    const actionInc = () => {
      store.dispatch(ActionTypes.INC_COUNTER, 2);
    };

    return {
      count,
      inc,
      actionInc,
    };
  },
});
</script>
