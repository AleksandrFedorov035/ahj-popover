export class Popover {
  constructor(container) {
    this.container = container;
    this.popover;
    this.trigger;
  }

  renderItems() {
    return `
          <button class="popover-trigger">Click to toggle popover</button>
          <div class="popover">
                <div class="popover-arrow"></div>
                <h3 class="popover-title">Popover Title</h3>
                <p class="popover-content">And here's some amazing content. It's very engaging. Right?</p>
          </div>
    `;
  }

  addItemsHTML() {
    this.container.insertAdjacentHTML("beforeend", this.renderItems());
    this.popover = this.container.querySelector(".popover");
    this.trigger = this.container.querySelector(".popover-trigger");
    this.container
      .querySelector(".popover-trigger")
      .addEventListener("click", () => {
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
