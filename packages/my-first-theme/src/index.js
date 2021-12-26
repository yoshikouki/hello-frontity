const Root = () => {
  return (
    <>
      <h1>Hello, Frontity!!1</h1>
    </>
  );
};

export default {
  name: "my-first-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
