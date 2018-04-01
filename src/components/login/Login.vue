<template>
  <div class="login">
    <b-form @submit.prevent="onFormSubmit">
      <b-form-group id="loginEmailInputGroup"
                    label="Email address:"
                    label-for="loginEmailInput"
                    description="We'll never share your email with anyone else.">
      <b-form-input id="loginEmailInput"
                    placeholder="Enter Email"
                    required
                    type="email"
                    v-model="form.email"
      />
      </b-form-group>

      <b-form-group id="loginPasswordInputGroup"
                    label="Password:"
                    label-for="loginPasswordInput">
        <b-form-input id="loginPasswordInput"
                      placeholder="Enter Password"
                      required
                      type="password"
                      v-model="form.password"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  props: ['onSubmit'],
  methods: {
    onFormSubmit: function (e) {
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
