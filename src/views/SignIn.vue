<template>
  <div class="main-layout">
    <div class="title-layout">
      <h1 class="title">SYSURS</h1>
    </div>
    <div class="form-layout">
      <div class="input-group">
        <input type="text" placeholder="Username" v-model="username" />
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div class="action-group">
        <button class="primary" @click="signIn">SIGN IN</button>
        <router-link to="." class="sign-up">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.column-layout {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.main-layout {
  width: 100%;
  height: 100%;
  padding: 32px 24px;
  box-sizing: border-box;
  .column-layout;
  justify-content: center;

  .title-layout {
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      font-size: 56px;
      color: #606060;
      text-align: center;
      margin: 0;
      padding: 0;
      line-height: 1em;
      font-weight: lighter;
    }
  }
  .form-layout {
    .column-layout;

    .input-group {
      .column-layout;
      margin-bottom: 36px;
    }
    .action-group {
      .column-layout;
      & > * {
        margin-bottom: 24px;
      }
      .sign-up {
        align-self: center;
      }
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import httpClient from '../utils/httpClient';

@Component({
  name: 'sign-in',
})
export default class SignIn extends Vue {
  username = '';

  password = '';

  async signIn() {
    try {
      /* eslint-disable @typescript-eslint/camelcase */
      await httpClient.post('/signin', {
        user_name: this.username,
        password: this.password,
      });
      /* eslint-enable @typescript-eslint/camelcase */
      this.$router.push('/');
    } catch (_error) {
      this.$toast('登录失败，用户名或密码错误', 2000);
    }
  }
}
</script>
