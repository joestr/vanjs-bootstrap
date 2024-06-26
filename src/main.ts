import createCone from 'van-cone';
import van from "vanjs-core"

import { setCustomStyle, resetCustomStyle } from './utils';

const {div, li, p, ul, h5, h6, h2, span, input, label, button, form, img, nav} = van.tags
const isCustomStyleSet = van.state(false);

const homePage = () => {
  if (isCustomStyleSet.val === true) {
    resetCustomStyle(document);
    isCustomStyleSet.val = false;
  }

  return nav(
    {class: "navbar navbar-expand-lg bg-light"},
    div(
      {class: "container-fluid"},
      link({class: "navbar-brand", name: "home"}, "VanJS"),
      button({class: "navbar-toggler", type: "button", "data-bs-toggle": "collpase", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", ariaExpanded: true}, span({class: "navbar-toggler-icon"})),
      div(
        {class: "collapse navbar-collapse", id: "navbarNav"},
        ul(
          {class: "navbar-nav"},
          li({class: "nav-item"}, link({class: "nav-link active", ariaCurrent: "page", name: "home"}, "Home")),
          li({class: "nav-item"}, link({class: "nav-link", name: "login"}, "Login"))
        )
      )
    )
  );
}

const loginPage = () => {
  if (isCustomStyleSet.val === false) {
    setCustomStyle(document);
    isCustomStyleSet.val = true;
  }

  return div(
      img({src: "/logo.svg", width: 128, height: 128, class: "mb-4"}),
      h2({class: "mb-4"}, "Log in"),
      form(
        div(
          {class: "form-floating mb-4"},
          input({type: "email", name: "email", class: "form-control", id: "floatingInputEmail", placeholder: "email@example.com"}),
          label({htmlFor: "floatingInputEmail"}, "Email Adress")
        ),
        div(
          {class: "form-floating mb-4"},
          input({type: "password", name: "password", class: "form-control", id: "floatingPassword", placeholder: "Password"}),
          label({htmlFor: "floatingPassword"}, "Password")
        ),
        button({class:"btn btn-primary", type: "submit", formMethod: "GET"}, "Login")
      )
    );
}

const dashboardPage = () => {
  if (isCustomStyleSet.val === true) {
    resetCustomStyle(document);
    isCustomStyleSet.val = false;
  }
}

const userPage = (params: {userId: number}) => {
  if (isCustomStyleSet.val === true) {
    resetCustomStyle(document);
    isCustomStyleSet.val = false;
  }
  
  return Card("Card title" + params.userId, "Card subtitle", "Card text");
}

const routerElement = div({ id: 'layout' })
const { link, route } = createCone({ routerElement: routerElement })

route("home", "/", homePage)
route("login", "/login", loginPage);
route("dashboard", "/dashboard", dashboardPage);
route("user", "/user/:userId", userPage);

// main app layout
const App = () => {
  return routerElement;
}
document.body.replaceChildren(App());

/**
 * Generates a new card component.
 * @param title The card's title.
 * @param subtitle The card's subtitle.
 * @param text The card's text.
 * @returns A new `div`.
 */
const Card = (title: string, subtitle: string, text: string) => {
  return div({class: "card"},
    div({class: "card-body"},
      h5({class: "card-title"}, span(title)),
      h6({class: "card-subtitle text-muted"}, span(subtitle)),
      p({class: "card-text"}, span(text))
    )
  )
}
