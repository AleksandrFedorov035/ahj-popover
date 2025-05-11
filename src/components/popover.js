export class Popover {
  constructor(popover, trigger) {
    this.popover = popover;
    this.trigger = trigger;

    this.trigger.addEventListener("click", () => {
      this.popover.style.display =
        this.popover.style.display === "block" ? "none" : "block";
      this.centerPopover();
    });
  }

  centerPopover() {
    const triggerRect = this.trigger.getBoundingClientRect();
    const popoverWidth = this.popover.offsetWidth;
    const popoverHeight = this.popover.offsetHeight;

    this.popover.style.left = `${triggerRect.left + triggerRect.width / 2 - popoverWidth / 2}px`;
    this.popover.style.top = `${triggerRect.top - popoverHeight - 10}px`;
  }
}
