import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("<Header/>", () => {
  test("should render with MARVEL on 'LOGO'", () => {
    render(<Header />);
    expect(screen.getByTitle("home").textContent).toEqual("MARVEL")
  });
});
