<template>
  <div>
    <Header />

    <div id="myDIV" class="header">
      <form @submit.prevent="UpdateTodo">
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

          <button type="submit">Update</button>
        </div>
      </form>
    </div>
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
        id: this.$route.params.id,
      },
    }
  },

  methods: {

    async UpdateTodo() {
        await this.$store.dispatch('Update',this.formData)
        await this.$store.dispatch('myTodos')
        this.$router.push("/Todos");
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
</style>
