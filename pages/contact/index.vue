<template>
    <div class="container">
      <div class="title">
        <h1>CONTACT3</h1>
      </div>
      <validation-observer ref="observer" v-slot="{ invalid, validated }" tag="form" class="p-contact__form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">

      <div class="p-contact__item">
        <label for="username">お名前</label>
        <validation-provider v-slot="{ errors }" rules="required|max:100" name="お名前">
          <input type="text" id="username" name="username" v-model="username" autocomplete="name">
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item">
        <label for="useremail">メールアドレス</label>
        <validation-provider v-slot="{ errors }" rules="required|email|max:256" name="メールアドレス">
          <input type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email">
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item">
        <label for="message">お問い合わせ内容</label>
        <validation-provider v-slot="{ errors }" rules="required|max:1000" name="お問い合わせ内容">
          <textarea id="message" name="message" v-model="message"></textarea>
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item" v-show="false">
        <label for="message">スパムでない場合は空欄</label>
        <input type="text" name="bot-field" v-model="botField"/>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__submit">
        <button type="submit" :disabled="invalid || !validated">送信</button>
      </div>
      <!-- /.p-contact__submit -->
      </validation-observer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      company: "",
      message: "",
      botfield: "",
    }
  },
  methods: {
    async submit() {
      const params = new FormData()
      //以下、ダミーフォームの各フォーム要素のnameと合わせる
      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('useremail', this.email)
      params.append('message', this.message)
      params.append('bot-field', this.botfield)

      const response = await this.$axios.$post(window.location.origin, params)
      //実際はresponseを使って画面側にフィードバックさせるが、ここでは仮にconsoleに出力
      console.log(response)
    },
  },
}
</script>

<style>
.container {
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
