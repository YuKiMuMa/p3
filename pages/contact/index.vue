<template>
  <div class="container">
    <div class="con">
    <div class="title">
      <h1>CONTACT</h1>
    </div>
    <div class="c_form">
      <validation-observer ref="observer" v-slot="{ invalid, validated }" tag="form" class="p-contact__form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent :class="sendingClass">
      <!--<form name="contact" method="POST" data-netlify="true" @submit.prevent> -->
        <div class="formset">
        <label for="username">*Name</label>
        <validation-provider v-slot="{ errors }" rules="required|max:100" name="Name">
          <input type="text" id="username" name="username" v-model="username" autocomplete="name">
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="formset">
        <label for="useremail">*Email Address</label>
        <validation-provider v-slot="{ errors }" rules="required|email|max:256" name="Email Address">
          <input type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email">
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="formset">
        <label for="message">*Message</label>
        <validation-provider v-slot="{ errors }" rules="required|max:1000" name="Message">
          <textarea id="message" name="message" v-model="message"></textarea>
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="formset" v-show="false">
        <label for="message">aiaio</label>
        <input type="text" name="bot-field" v-model="botField"/>
      </div>
      <!-- /.p-contact__item -->
      <p class="completeMessage" :key="completeMessage.id">{{completeMessage}}</p>
      <div class="formbu">
        <button @click="handleSubmit" type="submit" :disabled="invalid || !validated">Submit</button>
      </div>
      </validation-observer>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  head(){
    return{
      title:'YuKiMuMa Contact Page',
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: 'YuKiMuMa' },
      { hid: 'og:url', property: 'og:url', content: 'https://yukimuma.net/' },
      { hid: 'og:title', property: 'og:title', content: 'YuKiMuMa' },
      { hid: 'og:image', property: 'og:image', content: 'https://yukimuma.net/image/yukimuma.jpg' }
    ],
    }
  },
    data() {
      return {
        username        : '',
        useremail       : '',
        message         : '',
        botField        : '',
        isSubmit        : false,
        isSending       : false,
        isError         : false,
        completeMessage : '',
      }
    },
    computed: {
      sendingClass(){
        return {
          'is-sending'  : this.isSending,
          'is-error'    : this.isError,
          'is-complete' : this.isSubmit
        };
      }
    },
    methods: {
      handleSubmit() {
        const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        if(this.isSending){
          return;
        }
        this.isSending = true;
        this.completeMessage = 'busy…';
        const params = new URLSearchParams();
        params.append('form-name', 'contact');
        params.append('name', this.username);
        params.append('email', this.useremail);
        params.append('content', this.message);
        if(this.botField){
          params.append('bot-field', this.botField);
        }
        axios
        .post('/', params,axiosConfig)
        .then(() => {
          this.completeMessage = 'Thank you for submitting!';
          this.resetForm();
          this.isSubmit  = true;
        })
        .catch(err => {
          this.completeMessage = 'Submission faild';
          this.isError   = true;
        })
        .finally(() => {
          this.isSending = false;
        });
      },

      resetForm() {
        this.username        = '';
        this.katakana        = '';
        this.useremail       = '';
        this.message         = '';
        this.isError         = false;
        this.$refs.observer.reset();
      }
    }
  }
</script>
<style>
.container {
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-flow:column;
}
.con{
  margin: auto;
  width: 50%;
  display: flex;
  flex-flow:column;
}
.title{
  margin: 0 auto;
}
.c_form{
  margin: 0 auto;
  width: 80%;
}
.p-contact__submit{
  margin: 20px auto;
}
.formset{
  display: flex;
  flex-direction: column;
}
form{
  display:flex;
  flex-direction: column;
}
label{
  margin: 10px 0px;
}
.contact{
  display: flex;
  flex-direction: column;
}
input{
  height: 42px;
  line-height: 42px;
  width: 100%;
}
textarea{
  width: 100%;
  height: 300px;
}
label{
  font-weight: bold;
  font-size: 14px;
}
.p-contact__error{
  color: rgb(222, 37, 37);
}
button{
  background-color: rgb(255, 255, 255);
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 260px;
  padding: 10px 40px;
  transition: 0.3s ease-in-out;
  font-weight: 500;
  border: 1px solid;
  font-weight: bold;
  font-size: 14px;
}
button:hover:disabled{
  color: rgb(98, 98, 98,0.3);
  background-color: rgb(0, 0, 0,0.1);

}
button:hover{
  color: rgb(255, 255, 255);
  background-color: black;
}
.formbu{
  margin: 10px auto;
}
</style>