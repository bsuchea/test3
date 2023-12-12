
<template>
  <section>
    <h2>Assigments Undone ({{ assigments.filter(a => !a.completed).length }})</h2>
    <ul>
      <li v-for="ret in assigments.filter(a => !a.completed)" :key="ret.id"> 
        {{ ret.name }} 
        <input type="checkbox" v-model="ret.completed">
      </li>
    </ul>
  </section>
  <br>
  <section>
    <h2>Assigments done ({{ assigments.filter(a => a.completed).length }})</h2>
    <ul>
      <li v-for="ret in assigments.filter(a => a.completed)" :key="ret.id"> 
        {{ ret.name }} 
        <input type="checkbox" v-model="ret.completed">
      </li>
    </ul>
  </section>
</template>
<script>
export default{
  data() {
    return {
      assigments: [
        {id: 1, name: 'Web application', completed: false},
        {id: 2, name: 'Desktop with c#', completed: false},
        {id: 3, name: 'Marketing project', completed: false},
        {id: 4, name: 'Vue Projects', completed: false},
      ]
    }
  }
}

</script>
