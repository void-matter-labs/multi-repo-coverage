import { expect, test, describe } from 'vitest'
import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import meta, { LoggedIn } from "./Page.stories";

import "@testing-library/jest-dom/vitest"

const ComposedLoggedIn = composeStory(LoggedIn, meta);

describe("page", () => {
  test("LoggedIn", async () => {
    const { getByText } = render(<ComposedLoggedIn />);
    expect(getByText("Pages in Storybook")).toBeInTheDocument();
  });
});