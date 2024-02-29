import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const setup = (jsx: JSX.Element) => ({
  user: userEvent.setup(),
  ...render(jsx),
});
