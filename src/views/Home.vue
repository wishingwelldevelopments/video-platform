<template>
  <div>
    <h1>foobar</h1>
    <p>{{ state.data }}</p>
  </div>
</template>

<script>
  import { onMounted, reactive } from 'vue'

  export default {
    name: 'Home',
    setup () {
      const state = reactive({
        data:null,
      })

      function getData () {
        fetch('/api/todos/get?key=d3b07384d113edec49eaa6238ad5ff00')
        .then(resp => resp.json())
        .then(resp => {
          state.data = resp.todos
        })
      }

      onMounted(() => {
        getData()
      })

      return {
        state
      }
    }
  }
</script>