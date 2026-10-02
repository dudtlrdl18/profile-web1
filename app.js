const express = require('express');
const app = express();
const PORT = 3000;

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', './views');

// 메인 프로필 페이지
app.get('/', (req, res) => {
  const myProfile = {
    name: '김관수',                  // 본인 이름으로 수정
    studentId: '202208063',          // 본인 학번으로 수정
    bio: '인하공전 웹개발실습 학생입니다.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'EJS']
  };
  res.render('index', { profile: myProfile });
});

app.listen(PORT, () => {
  console.log(`서버가 실행되었습니다: http://localhost:${PORT}`);
});