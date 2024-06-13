import Home from "@/app/page";
import About from "@/app/about/page";

describe("home.cy.js", () => {
  it("renders", () => {
    cy.mount(<About />);
    cy.get("h1").contains("About");
    cy.get("p").contains("This is the about page");
  });
});
