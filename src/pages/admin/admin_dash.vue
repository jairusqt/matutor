<template>
  <div class="text-bg-dark">
    <div class="container">
      <table>

      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore"; 
  export default{
    data(){
      return {
        currentUser: '',
      }
    },
    setup(){
      // const user = ref(null);
      // const db = getFirestore();
      // const usersList = ref([]);
      // onMounted(async () => {
        // const itemsCollection = collection(db, 'all_users/admin');
        // try {
        //   const querySnapshot = await getDoc(itemsCollection);
        //   usersList.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // } catch (error) {
        //   console.error('Error fetching data from Firestore:', error.message);
        // }
        // user.value = auth.currentUser;
        // console.log(user.value)
      // })
      // return user;
    },
    methods:{
      
    },
    async created(){
      const user = ref(null);
      user.value = auth.currentUser;
      this.currentUser = user.value;  

      const querySnapshot = await getDocs(collection(db, "all_users/learner/users"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(`${doc.id} => ${doc.userName}`);
      });

    }
  };
</script>

<style scoped>
  @import "bootstrap/dist/css/bootstrap.css";
</style>