import { Popover } from "../../components/popover";

describe("tests popover's display", () => {
  let container;
  let button;
  let popover;

  beforeEach(() => {
    container = document.createElement("div");
    const Newpopover = new Popover(container);
    Newpopover.addItemsHTML();
    popover = container.querySelector(".popover");
    button = container.querySelector(".popover-trigger");
  });

  test("should be display block", () => {
    button.click();
    expect(popover.style.display).toBe("block");
  });
  test("should be display none", () => {
    button.click();
    button.click();
    expect(popover.style.display).toBe("none");
  });
});
