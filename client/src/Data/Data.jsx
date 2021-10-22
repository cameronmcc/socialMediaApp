export const Users = [
  {
    _id: {
      $oid: '616f84a17a8c601a5216cee1',
    },
    username: 'test1234',
    email: 'test1234@test1234.com',
    password: 'test1234',
    profilePicture: '',
    coverPicture: '',
    followers: ['6170403cbeaf6b22c14b0df0'],
    following: [],
    isAdmin: false,
    createdAt: {
      $date: '2021-10-20T02:53:21.914Z',
    },
    updatedAt: {
      $date: '2021-10-20T21:49:01.729Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '6170403cbeaf6b22c14b0df0',
    },
    username: 'test12345',
    email: 'test12345@test12345.com',
    password: 'test12345',
    profilePicture: '',
    coverPicture: '',
    followers: [],
    following: ['616f84a17a8c601a5216cee1'],
    isAdmin: false,
    createdAt: {
      $date: '2021-10-20T16:13:48.494Z',
    },
    updatedAt: {
      $date: '2021-10-20T21:49:01.795Z',
    },
    __v: 0,
  },
];
export const Posts = [
  {
    _id: { $oid: '61706da17492ab80b1797281' },
    userId: '6170403cbeaf6b22c14b0df0',
    desc: 'First post!',
    likes: [],
    createdAt: { $date: '2021-10-20T19:27:29.575Z' },
    updatedAt: { $date: '2021-10-20T19:27:29.575Z' },
    __v: 0,
  },
  {
    _id: { $oid: '6170713ffecb5bf3fae4a214' },
    userId: '6170403cbeaf6b22c14b0df0',
    desc: 'I updated this post!',
    likes: ['6170403cbeaf6b22c14b0df0'],
    createdAt: { $date: '2021-10-20T19:42:55.528Z' },
    updatedAt: { $date: '2021-10-20T20:15:54.457Z' },
    __v: 0,
  },
  {
    _id: { $oid: '61708a8e20c15f022a4eb60c' },
    userId: '616f84a17a8c601a5216cee1',
    desc: '1234 post1!',
    likes: [],
    createdAt: { $date: '2021-10-20T21:30:54.308Z' },
    updatedAt: { $date: '2021-10-20T21:30:54.308Z' },
    __v: 0,
  },
  {
    _id: { $oid: '61708a9520c15f022a4eb60e' },
    userId: '616f84a17a8c601a5216cee1',
    desc: '1234 post2!',
    likes: [],
    createdAt: { $date: '2021-10-20T21:31:01.144Z' },
    updatedAt: { $date: '2021-10-20T21:31:01.144Z' },
    __v: 0,
  },
  {
    _id: { $oid: '61708a9820c15f022a4eb610' },
    userId: '616f84a17a8c601a5216cee1',
    desc: '1234 post3!',
    likes: [],
    createdAt: { $date: '2021-10-20T21:31:04.863Z' },
    updatedAt: { $date: '2021-10-20T21:31:04.863Z' },
    __v: 0,
  },
];
