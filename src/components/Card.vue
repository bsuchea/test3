<template>
    <div class="card p-5 rounded bg-indigo-400 text-gray-100">
      <h1 class="text-2xl border-gray-400 mb-2">{{ title }}</h1>
      <hr class="border-gray-400">
      <div class="card-body w-full flex justify-between mt-2">
        <p>
          {{ description }}
        </p>
        <p>$ {{ price }}</p>
      </div>
    </div>
</template>
<script>
export default{
  props: {
    title: {
      type: String,
      default: "Card Title",
    },
    description: String,
    price: {
      type: Number,
      default: 0,
    }
  }
}
</script>