<template>
  <div class="register">
    <b-form @submit="onFormSubmit">
      <b-form-group id="registerEmailInputGroup"
                    label="Email address:"
                    label-for="loginEmailInput"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="registerEmailInput"
                      placeholder="Enter Email"
                      required
                      type="email"
                      v-model="form.email"
        />
      </b-form-group>

      <b-form-group id="registerUsernameInputGroup"
                    label="Username:"
                    label-for="registerUsernameInput">
        <b-form-input id="registerUsernameInput"
                      placeholder="Username"
                      required
                      type="text"
                      v-model="form.username"
        />
      </b-form-group>

      <b-form-group id="registerPasswordInputGroup"
                    label="Password:"
                    label-for="registerPasswordInput">
        <b-form-input id="registerPasswordInput"
                      placeholder="Enter Password"
                      required
                      type="password"
                      v-model="form.password"
        />
      </b-form-group>

      <b-form-group id="registerRepeatPasswordInputGroup"
                    label="Repeat Password:"
                    label-for="registerRepeatPasswordInput">
        <b-form-input id="registerRepeatPasswordInput"
                      placeholder="Repeat Password"
                      required
                      type="password"
                      v-model="form.repeatPassword"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        email: '',
        password: '',
        repeatPassword: '',
        username: ''
      }
    };
  },
  props: ['onSubmit'],
  methods: {
    onFormSubmit: function (e) {
      e.preventDefault();
      this.$props.onSubmit(this.$data.form);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
