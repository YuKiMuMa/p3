<template>
    <div>

      <div class="formbu">
        <button @click="handleSubmit" type="submit">Submit</button>
      </div>
        <ul>
            <li>{{ text }}</li>
        </ul>
    </div>

</template>
 
<script>
export default {
    data(){
        return{
            text : "test"
        }
    },
    methods:{
        handleSubmit(){
            return{
                test : "2"
            };
    }
}
}
</script>