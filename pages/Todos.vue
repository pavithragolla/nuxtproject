<template>
  <div>
    <Header />

    <div id="myDIV" class="header">
      <form @submit.prevent="createTodo">
        <div class="container">
          <label for="title"><b>Title</b></label>
          <input
            type="text"
            placeholder="Enter title"
            v-model="formData.title"
            required
          />

          <label for="description"><b>Description</b></label>
          <input
            type="text"
            placeholder="Enter description"
            v-model="formData.description"
            required
          />

          <button type="submit">Create</button>
        </div>
      </form>
    </div>

    <h2>MyTodos</h2>
    <tr>
      <th>Todo Id</th>
      <th>Todo Title</th>
      <th>Todo Description</th>
      <th>Todo Update</th>
      <th>Todo Delete</th>
    </tr>
    <tr  v-for="(task, i) in $store.state.mytodos" :key="i">
      <td>{{ task.id }}</td>
      <td>{{ task.title }}</td>
      <td>{{ task.description }}</td>
      <td><button><nuxt-link
                :to="{ name: 'UpdateTodo', params: { id: task.id } }"
                >Update</nuxt-link
              ></button></td>
      <td><button @click="deletetodo(task.id)">Delete</button></td>
      </tr>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header,
  },
  data() {
    return {
      formData: {
        title: '',
        description: '',
      },
    }
  },

  async mounted() {
    await this.$store.dispatch('myTodos')
  },
  methods: {
    async createTodo() {
      console.log(this.formData)
      await this.$store.dispatch('createTodo', this.formData)
    },
    async deletetodo(id) {
      await this.$store.dispatch('deleteTodo', id)
      await this.$store.dispatch('myTodos', id)


    },
    async Update(id) {
        await this.$store.dispatch('Update',id)
        await this.$store.dispatch('myTodos', id)
    }
  },
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
form {
  border: 3px solid #f1f1f1;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
table, th, td {
  border: 1px solid black;
}
</style>
