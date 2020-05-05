import axios from 'axios'
import router from '../../router'
export default {
   
    namespaced: true,

    state: {
        token: null,
        userIsAuthorized: false,
        userRole: '',
        
        
    },

    mutations: {
        SET_AUTH_USER(state,replacement){
            state.userIsAuthorized = replacement;
            
        },
        SET_USER_ROLE(state,replacement){
            state.userRole = replacement;
            
        },

    },
    

    actions: {
        
        async signIn ({commit}, payload) {

            axios.post('/sign_in',{sign_in:{email:payload.email,password:payload.password}})
              .then((Response)=>{
                localStorage.setItem('Role',Response.data.data.user.role)
                commit('SET_AUTH_USER',true);
                commit('SET_USER_ROLE',Response.data.data.user.role);
                router.push("/");
                // router.push('/');
                // window.location.replace("/")
                
              })
              .catch((error)=>{
                console.log(error);
              })
        }

        

        
    },
}



