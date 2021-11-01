<script lang="ts">
  import data from '../store/data';
  import TodoItem from './TodoItem.svelte';

  $: completedTodos = $data.todos.filter((t) => t.completed);
  $: notCompletedTodos = $data.todos.filter((t) => !t.completed);
</script>

<div>
  <h3>Pending Todos</h3>
  {#each notCompletedTodos as todo (todo.id)}
    <TodoItem {...todo} />
    <br />
  {/each}

  <h3>Completed Todos</h3>
  {#each completedTodos as todo (todo.id)}
    <TodoItem {...todo} />
    <br />
  {/each}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3%;
  }

  h3 {
    margin-bottom: 40px;
    font-weight: 800;
  }
</style>
