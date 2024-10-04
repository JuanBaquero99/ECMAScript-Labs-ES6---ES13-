const regex = /foo/g;

const str = 'foofoofoo';

for (const match of str.matchAll(regex)) {
  console.log(match);
}