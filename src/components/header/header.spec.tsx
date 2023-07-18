import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "./header";

describe("<Header/>", () => {
  test("should render with MARVEL on 'LOGO'", () => {
    render(<Header />);
    expect(screen.getByTitle("home").textContent).toEqual("MARVEL");
  });

  test("should render M on mouse Leave and MARVEL on mouse enter", async () => {
    render(<Header />);
    fireEvent.mouseLeave(screen.getByTestId("header"));
    await waitFor(() => {
      expect(screen.getByTitle("home").textContent).toEqual("M");
    });
    fireEvent.mouseEnter(screen.getByTestId("header"));
    await waitFor(() => {
      expect(screen.getByTitle("home").textContent).toEqual("MARVEL");
    });
  });
});
