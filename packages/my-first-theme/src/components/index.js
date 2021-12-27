import Link from "@frontity/components/link";
import { connect } from "frontity";
import React from "react";

const Root = connect(({ state }) => {
  return (
    <>
      <h1>Hello, Frontity from components!!1</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <ul>
          <li><Link link="/">Home</Link></li>
          <li><Link link="/page/2">More posts</Link></li>
          <li><Link link="/about-us">About Us</Link></li>
        </ul>
      </nav>
    </>
  );
});

export default Root
