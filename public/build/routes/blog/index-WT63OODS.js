import {
  blog_default
} from "/build/_shared/chunk-AQ7WHFFJ.js";
import {
  Link,
  React,
  __toModule,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-4Z7IFWK2.js";

// browser-route-module:/Users/matvej/remix-blog/app/routes/blog/index.jsx?browser
init_react();

// app/routes/blog/index.jsx
init_react();
var import_react = __toModule(require_react());
function links() {
  return [{ rel: "stylesheet", href: blog_default }];
}
function Blog() {
  const { posts1, posts2, posts3, backgroundColor } = useLoaderData();
  (0, import_react.useEffect)(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);
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
  Blog as default,
  links
};
//# sourceMappingURL=/build/routes/blog/index-WT63OODS.js.map
