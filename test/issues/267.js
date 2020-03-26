module.exports = {
  extension: 'js',
  command: 'Blade.beautifyFile',
  beautifySetting: {
  },
  input: `{
    foo: async function() {
      //null
    },
    bar: async function() {
      //null
    },
    baz: async function() {
      //null
    },
    qux: async function() {
      //null
    },
  }`,
  expected: `{
    foo: async function() {
        //null
    },
    bar: async function() {
        //null
    },
    baz: async function() {
        //null
    },
    qux: async function() {
        //null
    },
}`
};
