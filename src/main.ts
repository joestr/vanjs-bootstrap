import van from "vanjs-core"

const {a, div, li, p, ul, h5, h6, span} = van.tags
const counter = van.state(1)

// Reusable components can be just pure vanilla JavaScript functions.
// Here we capitalize the first letter to follow React conventions.
const Hello = () => div(
  p("👋Hello"),
  ul(
    li("🗺️World"),
    li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
  ),
)

const SinglePageApplication = () => {
  document.getElementsByTagName("html")[0].style.height = "100%";
  document.body.style.height = "100%";
  document.body.style.display = "flex";
  document.body.style.alignItems = "center";
  //return div({class: "text-center"}, Card("Card title", "Card subtitle", "Card text"));
  return div({style: "width: 100%; max-width: 330px; margin: auto;"}, Card("Card title", "Card subtitle", "Card text"));
}


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

van.add(document.body, SinglePageApplication())
// Alternatively, you can write:
// document.body.appendChild(Hello())
