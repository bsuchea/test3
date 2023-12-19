
<template>
    <section v-show="undoneAssigments.length">
      <h2>Assigments Undone ({{ undoneAssigments.length }})</h2>
      <ul>
        <li v-for="ret in undoneAssigments" :key="ret.id"> 
          {{ ret.name }} 
          <input type="checkbox" v-model="ret.completed">
        </li>
      </ul>
    </section>
    <br>
    <section v-if="doneAssigments.length > 0">
      <h2>Assigments done ({{ doneAssigments.length }})</h2>
      <ul>
        <li v-for="ret in doneAssigments" :key="ret.id"> 
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
    },
    computed:{
      doneAssigments(){
        return this.assigments.filter(a => a.completed)
      },
      undoneAssigments(){
        return this.assigments.filter(a => !a.completed)
      }
    }
  }
  
  </script>
  