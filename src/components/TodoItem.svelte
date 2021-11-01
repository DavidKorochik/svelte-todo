<script lang="ts">
  import data from '../store/data';
  import TodoCard from '../utils/TodoCard.svelte';
  import type { TodoItems } from '../store/data';

  export let id: string, description: string, completed: boolean;

  const handleDelete = (todoId: string) => {
    $data.todos = $data.todos.filter((todo) => todo.id !== todoId);
  };

  const handleUpdate = (todo: TodoItems) => {
    $data.current = todo;
  };
</script>

<TodoCard>
  <input type="checkbox" bind:checked={completed} />
  <span class:checked={completed}>{description}</span>
  <span class="delete" on:click={() => handleDelete(id)}>❌</span>
  <span
    class="update"
    on:click={() => handleUpdate({ id, description, completed })}>Update</span
  >
</TodoCard>

<style>
  .update {
    cursor: pointer;
  }

  .checked {
    text-decoration: line-through;
  }

  .delete {
    margin-left: 10px;
    cursor: pointer;
  }
</style>
