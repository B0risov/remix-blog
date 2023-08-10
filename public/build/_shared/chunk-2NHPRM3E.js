import {
  Link,
  React,
  init_react
} from "/build/_shared/chunk-4Z7IFWK2.js";

// app/styles/blog.css
var blog_default = "/build/_assets/blog-ONIXKHR4.css";

// app/components/PostList.jsx
init_react();
function PostList({ posts }) {
  return /* @__PURE__ */ React.createElement("div", null, posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    className: "card",
    key: post.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/blog/posts/${post.id}`
  }, post.title))));
}

export {
  blog_default,
  PostList
};
//# sourceMappingURL=/build/_shared/chunk-2NHPRM3E.js.map
