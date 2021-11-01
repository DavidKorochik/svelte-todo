<script lang="ts">
  import data from '../store/data';
  import { v4 as uuidv4 } from 'uuid';
  import type { TodoItems } from '../store/data';

  let text = '';

  const handleSubmit = (todoDesc: string) => {
    const newTodo: TodoItems = {
      id: uuidv4(),
      description: todoDesc,
      completed: false,
    };

    $data.todos = [newTodo, ...$data.todos];

    text = '';
  };

  const handleUpdate = (todo: TodoItems) => {
    $data.todos.map((t: TodoItems) =>
      t.id === todo.id ? (t.description = todo.description) : t.description
    );

    text = '';
  };
</script>

<div class="todo-title">
  <h1>Add New Todo</h1>
</div>
{#if $data.current === null}
  <form on:submit|preventDefault={() => handleSubmit(text)}>
    <input required placeholder="Add new todo" type="text" bind:value={text} />
    <button disabled={!text} type="submit">Add Todo</button>
  </form>
{:else}
  <form on:submit|preventDefault={() => handleUpdate($data.current)}>
    <input required type="text" bind:value={$data.current.description} />
    <button type="submit">Update Todo</button>
  </form>
{/if}

<style>
  .todo-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: teal;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
  }

  input {
    outline: none;
    background-color: inherit;
    border-bottom: 2px solid;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
  }

  button {
    margin-left: 10px;
    border-radius: 10px;
    background-color: inherit;
    cursor: pointer;
    transition: 0.5s;
    margin-top: 22px;
    font-size: 20px;
    font-weight: 700;
  }

  button:hover {
    background: teal;
  }
</style>
