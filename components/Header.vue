<template>
  <div>
    <header>
      <h1>Todo App</h1>
      <ul class="links">
        <li><nuxt-link to="/" exact active-class="active">Home</nuxt-link></li>
        <li><nuxt-link no-prefetch to="/todos" active-class="active">Todos</nuxt-link></li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
  header  {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #A44A3F;
    margin-bottom: 20px;
    padding: 0 20px;
    color: #f5fffa;
  }

  h1 {
    padding: 20px 0;
    flex-grow: 1;
  }

  ul {
    display: flex;

  }

  li {
    list-style: none;
    margin-right: 20px;
    cursor: pointer;
  }
  a {
    color: inherit;
  }

  a:hover {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    transition: all .1s;
  }

  .active {
    border-bottom: 1px solid white;
  }

</style>
