<template>
  <div class="container">
    <div class="con">
    <div class="title">
      <h1>CONTACT</h1>
    </div>
    <div class="c_form">
    <template v-if="!finished">
      <validation-observer ref="observer" v-slot="{ invalid, validated }" tag="form" class="p-contact__form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">
      <!--<form name="contact" method="POST" data-netlify="true" @submit.prevent> -->
        <div class="formset">
          <label>
            *Name
          </label>
            <!--<input v-model="form.name" type="text" name="name" /> --->
            <validation-provider v-slot="{ errors }" rules="required|max:100" name="Name">
              <input type="text" id="username" name="username" v-model="form.name" autocomplete="name">
              <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
            </validation-provider>
        </div>

        <div class="formset">
          <label>
            *Email Address
          </label>
            <!--<input v-model="form.name" type="text" name="name" /> --->
            <validation-provider v-slot="{ errors }" rules="required|email|max:256" name="Email Address">
              <input type="email" id="useremail" name="useremail" v-model="form.email" autocomplete="email">
              <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
            </validation-provider>
        </div>

        <div class="formset">
          <label>*Message</label>
          <validation-provider v-slot="{ errors }" rules="required|max:1000" name="Message">
            <textarea id="form-content" name="content" v-model="message" style="height:200px;"></textarea>
            <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
          </validation-provider>
        </div>

        <div class="p-contact__submit">
          <button @click="handleSubmit" type="submit" :disabled="invalid || !validated">Submit</button>
        </div>
      </validation-observer>
    </template>
    <template v-else>
      <p v-text="'Thank you for submitting'" />
      <p><nuxt-link to="/" v-text="'TOPへ'" /></p>
    </template>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        content: ''
      },
      finished: false
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
            ...this.form
          }),
          axiosConfig
        )
        .then(() => {
          this.finished = true
        })
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
  width: 80%;
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
}
button:hover{
  color: rgb(255, 255, 255);
  background-color: black;
}
</style>