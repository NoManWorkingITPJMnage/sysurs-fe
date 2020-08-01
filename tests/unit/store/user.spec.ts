import { userModule, UserState } from '@/store/modules/user';
import assert from 'assert';

describe('Test User Module', () => {
  it('Set user profile', () => {
    const payload = {
      studentID: 17343000,
      realName: '真实姓名',
      userName: 'test1',
      gender: 'male',
      school: '数据科学与计算机学院',
      class: '2017级软件工程行政6班',
      phone: '18351234123',
      mail: 'tester@test.com',
    };
    const state = (userModule.state as () => UserState)();
    userModule.mutations!.setProfile(state, payload);
    assert(
      userModule.getters!.isSignedIn(state, null, null, null),
      'user\'s sign in state shold be set with user\'s profile',
    );
  });
});
