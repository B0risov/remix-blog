import {
  blog_default
} from "/build/_shared/chunk-AQ7WHFFJ.js";
import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-Z35JMVEY.js";

// browser-route-module:/Users/matvej/dev/remix-blog/app/routes/blog/index.jsx?browser
init_react();

// app/routes/blog/index.jsx
init_react();
function links() {
  return [{ rel: "stylesheet", href: blog_default }];
}
function Blog() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Our latest posts"), posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    className: "card",
    key: post.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/blog/posts/" + post.id
  }, post.title))));
}
export {
  Blog as default,
  links
};
//# sourceMappingURL=/build/routes/blog/index-XFQUK7IJ.js.map
