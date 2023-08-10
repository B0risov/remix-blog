import {
  PostList,
  blog_default
} from "/build/_shared/chunk-2NHPRM3E.js";
import {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, `body { background-color: ${backgroundColor}; }`), " ", /* @__PURE__ */ React.createElement(PostList, {
    posts: posts1
  }), " ", /* @__PURE__ */ React.createElement(PostList, {
    posts: posts2
  }), /* @__PURE__ */ React.createElement(PostList, {
    posts: posts3
  }));
}
export {
  Blog as default,
  links
};
//# sourceMappingURL=/build/routes/blog/index-CUMAAPKF.js.map
