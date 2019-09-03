import VUE from 'vue'; //引入vue
import VUEX from 'vuex'; //引入vuex
//使用VUEX
VUE.use(VUEX);
// 创建Vuex.Store实例
const store=new VUEX.Store({
    state:{
        count:1
    },
    getters:{
        getSTateCount:function(state){
            return state.count+1;
        }
    },
    mutations:{
        add(state,n){
             state.count = state.count + n;
        },
        rec(state){
            state.count = state.count - 1;
        }
    },
    actions: {
        addFun(context,n) {
            context.commit("add",n)
        },
        recFun(context) {
        context.commit("rec")
        }
    }
})
export default store;//导出store
