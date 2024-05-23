import createCone from 'van-cone';
import van from "vanjs-core"

const {a, div, li, p, ul, h5, h6, span, hr} = van.tags

const homePage = () => div(
  p("👋Hello"),
  ul(
    li("🗺️World"),
    li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
  ),
);

const userPage = (params: {userId: number}) => {
  
  //return div({class: "text-center"}, Card("Card title", "Card subtitle", "Card text"));
  return div({style: "width: 100%; max-width: 330px; margin: auto;"}, Card("Card title" + params.userId, "Card subtitle", "Card text"));
}

const routerElement = div({ id: 'layout' })
const { link, route } = createCone({ routerElement: routerElement })

route("home", "/", homePage);
route("user", "/user/:userId", userPage);

// main app layout
const App = () => {
  document.getElementsByTagName("html")[0].style.height = "100%";
  document.body.style.height = "100%";
  document.body.style.display = "flex";
  document.body.style.alignItems = "center";
  
  return div(
    {style: "width: 100%; max-width: 330px; margin: auto;"},
    link({ name: 'home' }, 'Home'),
    span(' | '),
    link({name: 'user', params: {userId: 123}}, 'User'),
    hr(),
    routerElement
  );
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
