<template>
  <div class="hello">
    <button @click="addItem">Добавить запись</button>
    <button @click="update">Обновить</button>
    <table>
      <tr
        v-for="(item, idx) in data"
        :key="idx"
      >
        <td>
          <v-for-component
              :title="item.title"
              :id="item.id"
              :status="item.status"
              @delete-item="deleteItem"
          >{{ item.title }}</v-for-component>
        </td>
        <th>{{ idx }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
import {get, del, add, update} from "../helpers/storage";
import VForComponent from './VForComponent'
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: []
    }
  },
  mounted() {
    this.data = get()
  },
  components: {
    VForComponent
  },
  methods: {
    addItem() {
      this.data = [...add({
        title: 'Запись № ',
        status: Math.round(Math.random() * 2) + 1
      })]
    },
    update() {
      this.data = update()
    },
    deleteItem (id) {
      this.data = del(id)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
