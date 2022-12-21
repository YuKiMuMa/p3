<template>
  <section class="contact-container">
    <template v-if="!finished">
      <validation-observer ref="observer" v-slot="{ invalid, validated }" tag="form" class="p-contact__form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">
      <!--<form name="contact" method="POST" data-netlify="true" @submit.prevent> -->
        <p>
          <label>
            お名前:
            <!--<input v-model="form.name" type="text" name="name" /> --->
            <validation-provider v-slot="{ errors }" rules="required|max:100" name="お名前">
              <input type="text" id="username" name="username" v-model="form.name" autocomplete="name">
              <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
            </validation-provider>
          </label>
        </p>
        <p>
          <label>
            メールアドレス:
            <input v-model="form.email" type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            お問い合わせ内容:
            <textarea id="form-content" v-model="form.content" name="content" />
          </label>
        </p>
        <div class="p-contact__submit">
          <button @click="handleSubmit" type="submit" :disabled="invalid || !validated">送信</button>
        </div>
      </validation-observer>
    </template>
    <template v-else>
      <p v-text="'お問い合わせ頂きありがとうございました。'" />
      <p><nuxt-link to="/" v-text="'TOPへ'" /></p>
    </template>
  </section>
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
.contact-container {
  padding: 64px;
  text-align: center;
}
</style>