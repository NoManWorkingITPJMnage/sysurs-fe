<template>
  <div class="main-layout column-layout">
    <div class="title-layout">
      <h1 class="title">SYSURS</h1>
    </div>
    <div class="form-layout column-layout">
      <div class="input-group column-layout">
        <input type="text" placeholder="ID" v-model="studentID" />
        <input type="text" placeholder="Real Name" v-model="realName" />
        <input type="text" placeholder="Username" v-model="userName" />
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div class="action-group">
        <router-link to="/signin" style="text-decoration: none; color: #6060606;">
          <v-icon name="regular/arrow-alt-circle-left" scale="1.8"></v-icon>
        </router-link>
        <button class="primary" @click="signUp">NEXT</button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-layout {
  width: 100%;
  height: 100%;
  padding: 32px 24px;
  box-sizing: border-box;
  justify-content: center;

  .title-layout {
    padding-bottom: 50px;
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

    .input-group {
      margin-bottom: 36px;
    }
    .action-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Icon from 'vue-awesome/components/Icon.vue';
import httpClient from '../utils/httpClient';
import 'vue-awesome/icons/regular/arrow-alt-circle-left';

@Component({
  name: 'sign-up',
  components: {
    'v-icon': Icon,
  },
})
export default class SignUp extends Vue {
  studentID = '';

  realName = '';

  userName = '';

  password = '';

  async signUp() {
    try {
      /* eslint-disable @typescript-eslint/camelcase */
      await httpClient.post('/signup', {
        student_id: this.studentID,
        real_name: this.realName,
        user_name: this.userName,
        password: this.password,
      });
      /* eslint-enable @typescript-eslint/camelcase */
      this.$toast('注册成功，请重新登录', 2000);
      this.$router.push('/signin');
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        this.$toast(`注册失败，${message}`, 2000);
      } else {
        this.$toast('网络错误，请稍后再试', 2000);
      }
    }
  }
}
</script>
