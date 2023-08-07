import {
  Link,
  React,
  init_react
} from "/build/_shared/chunk-Z35JMVEY.js";

// browser-route-module:/Users/matvej/dev/remix-blog/app/routes/blog/index.jsx?browser
init_react();

// app/routes/blog/index.jsx
init_react();
function Blog() {
  const { posts1, posts2, posts3 } = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Posts 1"), posts1.map((post) => /* @__PURE__ */ React.createElement("div", {
    className: "card",
    key: post.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/blog/posts/${post.id}`
  }, post.title)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Posts 2"), posts2.map((post) => /* @__PURE__ */ React.createElement("div", {
    className: "card",
    key: post.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/blog/posts/${post.id}`
  }, post.title)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Posts 3"), posts3.map((post) => /* @__PURE__ */ React.createElement("div", {
    className: "card",
    key: post.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/blog/posts/${post.id}`
  }, post.title)))));
}
export {
  Blog as default
};
//# sourceMappingURL=/build/routes/blog/index-C3APGRU2.js.map
