<template>
  <div
      style="
          border: 2px solid gray;
          padding: 20px;
          text-align: left;
          margin: 10px 50px;
          border-radius: 10px;
        "
      >
    {{ title }}
    <button @click="$emit('delete-item', id )">Удалить</button>
    <div
        style="margin-top: 15px;
        margin-left: 50px;
        border: 4px dotted red;
        padding: 5px;
    ">
      <div
          v-for="(item, idx) in data"
          :key="idx"
      >{{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VForComponent",
  props: {
    id: {
      type: Number
    },
    idx: {
      type: Number
    },
    title: {
      type: String
    },
    status: {
      type: Number
    }
  },
  data() {
    return {
      data: []
    }
  },
  mounted (){
    console.log(this.status)
    switch (this.status) {
      case 1:
        this.data.push('Вложение 1 для записи № ' + this.id)
        break
      case 2:
        this.data.push('Вложение 1 для записи № ' + this.id)
        this.data.push('Вложение 2 для записи № ' + this.id)
        break
      case 3:
        this.data.push('Вложение 1 для записи № ' + this.id)
        this.data.push('Вложение 2 для записи № ' + this.id)
        this.data.push('Вложение 3 для записи № ' + this.id)
        break
      case 4:
        this.data.push('Вложение 1 для записи № ' + this.id)
        this.data.push('Вложение 2 для записи № ' + this.id)
        this.data.push('Вложение 3 для записи № ' + this.id)
        this.data.push('Вложение 4 для записи № ' + this.id)
    }
  }
}
</script>

<style scoped>

</style>
