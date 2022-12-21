<template>
    <div class="container">
      <div class="title">
        <h1>CONTACT</h1>
      </div>

      <div class="p-contact__item">
        <label for="username">お名前</label>
        <validation-provider v-slot="{ errors }" rules="required|max:100" name="お名前">
          <input type="text" id="username" name="username" v-model="username" autocomplete="name">
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item">
        <label for="katakana">フリガナ</label>
        <validation-provider v-slot="{ errors }" rules="required|katakana" name="フリガナ">
          <input type="text" id="katakana" name="katakana" v-model="katakana">
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
    </div>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from 'vee-validate/dist/rules';

// mountedでも可
extend('required', required)
export default {
  components: {
    ValidationProvider,
  },
  data() {
      return {
        username        : '',
        katakana        : '',
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
      onSubmit() {
        if(this.isSending){
          return;
        }
        this.isSending = true;
        this.completeMessage = '送信処理中…';
        const params = new URLSearchParams();
        params.append('form-name', 'contact');
        params.append('username', this.username);
        params.append('katakana', this.katakana);
        params.append('useremail', this.useremail);
        params.append('message', this.message);
        if(this.botField){
          params.append('bot-field', this.botField);
        }
        this.$axios
        .$post('/', params)
        .then(() => {
          this.completeMessage = 'お問い合わせを送信しました！';
          this.resetForm();
          this.isSubmit  = true;
        })
        .catch(err => {
          this.completeMessage = 'お問い合わせの送信が失敗しました';
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
