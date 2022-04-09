// import { create } from "core-js/core/object";

export const state = () => ({
    token: null,
    alltodos: [],
    mytodos: []
})

const getters = {};

const actions = {
    async login({commit}, data) {
        await this.$axios.post('http://localhost:5214/api/users/Login',{
            email: data.email,
            password: data.password
        }).then(response => {
            console.log(response.data);
            commit('setToken',response.data)
            this.$router.push('/Todos');
        })
    },

    async getTodos({commit, state}) {
        await this.$axios.get('http://localhost:5214/api/todos/alltodos',{
            headers: {
                'Authorization': 'Bearer ' + state.token,
            }
        }).then(response => {
            console.log(response.data);
            commit('setAllTodos', response.data);
        })
    },

    async myTodos({commit, state}) {
        await this.$axios.get('http://localhost:5214/api/todos/getmytodos' ,{
        headers: {
            'Authorization': 'Bearer ' + state.token,
        }
      }).then(response => {
          console.log(response.data);
          commit('setMyTodos', response.data)
      })
    },
    async createTodo({commit}, data) {
        console.log(data)

        await this.$axios.post('http://localhost:5214/api/todos',{
            title:data.title,
            description: data.description},{
            headers: {
                Authorization: 'Bearer ' + this.state.token,
            }
            }).then(res => {
                console.log(res.data);
    })

    },
    async deleteTodo({commit}, id) {
        await this.$axios.delete('http://localhost:5214/api/todos/' + id,{
            headers: {
                Authorization: 'Bearer ' + this.state.token,
            }
    }).then(res => {
        console.log(res.data);
    })

    },
    async update({commit }, id) {

        await this.$axios.put('http://localhost:5214/api/todos/' + id,{ description : true
        },{
            headers: {
                'Authorization': 'Bearer ' + this.state.token,
            }
    }).then(res => {
        console.log(res.data);
        console.log(res);
        console.log("called");

    })

    }


};
 export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setMyTodos(state, tasks) {
        state.mytodos = tasks;
    },
    setAllTodos(state, tasks) {
        state.alltodos = tasks;
    },
}


export default{
    state,
    mutations,
    getters,
    actions,
 }