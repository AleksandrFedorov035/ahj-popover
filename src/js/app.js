import { Popover } from "../components/popover";

const trigger = document.querySelector(".popover-trigger");
const popover = document.querySelector(".popover");

document.addEventListener("DOMContentLoaded", () => {
  new Popover(popover, trigger);
});
