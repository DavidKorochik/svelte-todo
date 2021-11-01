<script lang="ts">
  import data from '../store/data';

  $: completed = $data.todos.filter((todo) => todo.completed === true).length;
  $: remaining = $data.todos.length;
</script>

<ul>
  <div class="title">
    <li on:click={() => ($data.menu = 1)}>Todo-App</li>
  </div>

  <li class="link" on:click={() => ($data.menu = 2)}>About</li>

  <li class="link" on:click={() => ($data.menu = 3)}>Todos</li>
  <li class="status">
    {completed} out of {remaining} completed
  </li>
</ul>

<style>
  .title {
    margin-right: 40%;
  }

  ul {
    color: royalblue;
    font-weight: 700;
    font-size: 20px;
    justify-content: end;
    display: flex;
  }

  li {
    list-style: none;
    cursor: pointer;
    margin-right: 70px;
    transition: 0.5s;
  }

  .link {
    margin-left: 10px;
  }

  li:hover {
    color: blue;
  }

  .status {
    margin-left: 10px;
  }
</style>
