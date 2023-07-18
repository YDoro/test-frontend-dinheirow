import { render, screen } from "@testing-library/react";
import CharacterCard from "./character-card";

describe("<CharacterCard/>", () => {
  test("should render", () => {
    render(
      <CharacterCard
        image="https://cdn.marvel.com/content/1x/021slq_ons_crd_03.jpg"
        description="peter quill"
        name="star-lord"
      />
    );
    expect(screen.findAllByTestId("character-card")).toBeVisible;
  });
});
