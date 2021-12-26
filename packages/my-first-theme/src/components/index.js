import { connect } from "frontity";

const Root = connect(({ state }) => {
  return (
    <>
      <h1>Hello, Frontity from components!!1</h1>
      <p>Current URL: {state.router.link}</p>
    </>
  );
});

export default Root
