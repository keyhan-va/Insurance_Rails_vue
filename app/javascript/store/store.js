export default {
    state: {
        welcomeMessage: 'welcome to my vue app',
        userIsAuthorized: true,
        userRole: 'Admin',
    },
    getters: {
        welcome(state){
            return state.welcomeMessage;
        }
    },
    mutations: {},
    actions: {}
}