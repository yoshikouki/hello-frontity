import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import { connect, css, Global, styled } from "frontity";
import React from "react";
import List from "./list";
import Page from "./page";
import Post from "./post";

const Root = connect(({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      <Global styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-family: system-ui, Verdana, Arial, sans-serif;
        }
      `}/>
      <Header>
        <HeaderContent>
          <h1>Hello, Frontity from components!!1</h1>
          <p>Current URL: {state.router.link}</p>
          <ul>
            <li><Link link="/">Home</Link></li>
            <li><Link link="/page/2">More posts</Link></li>
            <li><Link link="/about-us">About Us</Link></li>
          </ul>
        </HeaderContent>
      </Header>
      <hr/>
      <Main>
        <Switch>
          <List when={data.isArchive}>This is a list.</List>
          <Post when={data.isPost}>This is a post.</Post>
          <Page when={data.isPage}>This is a page.</Page>
        </Switch>
      </Main>
    </>
  );
});

export default Root

const Header = styled.header`
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: maroon;

  h1 {
    color: #4a4a4a;
  }
`

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`
