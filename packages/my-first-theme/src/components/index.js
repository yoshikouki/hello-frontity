import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import { connect } from "frontity";
import React from "react";
import List from "./list";
import Page from "./page";
import Post from "./post";

const Root = connect(({ state }) => {
  const data = state.source.get(state.router.link)

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
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive}>This is a list.</List>
          <Post when={data.isPost}>This is a post.</Post>
          <Page when={data.isPage}>This is a page.</Page>
        </Switch>
      </main>
    </>
  );
});

export default Root
