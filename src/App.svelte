<script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import TodoList from './components/TodoList.svelte';
  import TodoForm from './components/TodoForm.svelte';
  import About from './components/About.svelte';
  import Home from './components/Home.svelte';
  import data from './store/data';
</script>

<Navbar />

{#if $data.menu === 1}
  <Home />
{:else if $data.menu === 2}
  <About />
{:else}
  <TodoForm />
  <TodoList />
{/if}
