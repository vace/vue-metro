let uid = 0;
export default {
  props:{
    required:{
      type:Boolean,
      default:true
    }
  },
  data:function(){
    return {}
  },
  created(){
    this.uuid = Math.random().toString(36).substring(3,8) + (uid++)
  }
}
