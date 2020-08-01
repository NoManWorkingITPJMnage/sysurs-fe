const users = [
  {
    studentID: 17343000,
    realName: '真实姓名',
    userName: 'test1',
    password: 'test.123456',
    gender: 'male',
    school: '数据科学与计算机学院',
    class: '2017级软件工程行政6班',
    phone: '18351234123',
    mail: 'tester@test.com',
  }
];
let currentUser = null;

module.exports = {
  'POST /api/signin': (req, res) => {
    const { user_name, password } = req.body;
    const isCorrect = !!users.find(user => user.userName === user_name && user.password === password);
    if (isCorrect) {
      currentUser = user_name;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  },
  'GET /api/user': (_, res) => {
    let userProf = users.find(user => user.userName === currentUser);
    if (!!userProf) {
      delete(userProf.password);
      res.status(200).json(userProf);
    } else {
      res.status(401);
    }
  }
};