<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      val: '',
      books: []
    }
  },
  methods: {
    addItems(){
      let id = this.books.length + 1;
      let name = this.val ;
      this.books.push(
        { Id: id, Name: name, Done: false}
      );
    },
    removeItems(id){
      let key = id -1 ;
      this.books.pop(key);
    }
  }
}
</script>
<template>
  <div class="grid grid-cols-3 gap-2">
    <Card price="55" description="Descriptions 1"></Card>
    <Card description="Descriptions 1"></Card>
    <Card description="Descriptions 1"></Card>
  </div>
  <div class="p-2">
    <input v-model="val" type="text" class="p-2 border border-gray-400">
    <button @click="addItems" class="p-2 border border-gray-400">Add</button>
    {{ books }}
    <input type="checkbox">
  </div>
</template>
