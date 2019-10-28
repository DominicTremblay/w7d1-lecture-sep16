const tweets = [
  {
    user: {
      name: 'Descartes',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1461113959088,
  },
  {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirIsaac',
    },
    content: {
      text:
        'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: 'Jacob',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirJacob',
    },
    content: {
      text:
        'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
];

// const first = tweets[0];
// const second = tweets[0];
// const third = tweets[0];

// Array destructuring

// const [first, second, third] = tweets;

// Array destructuring using the rest operator
const [first, ...otherTweets] = tweets;
// console.log(first);
// console.log(otherTweets);

// Destructuring an Object

// const user = first.user;
// const content = first.content;
// const created_at = first.created_at;

const {
  // Destructuring a nested structure of Objects
  user: { name, avatars, handle },
  content: { text },
  created_at,
} = first;

// console.log(user, content, created_at);

// const name = user.name;
// const avatars = user.avatars;
// const handle = user.handle;

// console.log(name, avatars, handle, text);

// Spread operator

// Creating a copy of the tweet 'first'
// const newTweet = {
//   ...first,
// };

// Creating a copy of the tweet 'first'
// Updating the value of created_at
// const newTweet = {
//   ...first,
//   created_at: 1461113959089,
// };

// Creating a copy of the tweet 'first'
// Adding a new property category
const newTweet = {
  ...first,
  category: 'quotes',
};

// Is that a copy?
// It's copying the reference, thus change to one will change the other
// const tweet = first;

// tweet.user.name = 'Bob';

// console.log(first);

// Instead we are using spread to maka a copy

// const tweet = { ...first };
// tweet.user.name = 'Bob';

// Does it solve the problem?
// No because the spread is doing a shallow copy
// tweet.user.name = 'Bob';
// console.log(first);

// This is making a true copy
const tweet = {
  ...first,
  user: {
    ...first.user,
  },
  content: { ...first.content },
};
tweet.user.name = 'Bob';
// console.log(first);

// Property shorthand

const user = {
  name,
  avatars,
  created_at,
};

console.log(user);
