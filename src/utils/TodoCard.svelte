<script>
  import { fade } from 'svelte/transition';
</script>

<div transition:fade class="todo-card">
  <slot />
</div>

<style>
  .todo-card {
    font-size: 20px;
    font-weight: 500;
  }
</style>
