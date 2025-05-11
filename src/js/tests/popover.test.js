import { Popover } from "../../components/popover";

describe("tests popover's display", () => {
    let button;
    let popover;

    beforeEach(() => {
        document.body.innerHTML = `
                <button class="popover-trigger">Click to toggle popover</button>
                <div class="popover">
                    <div class="popover-arrow"></div>
                    <h3 class="popover-title">Popover Title</h3>
                    <p class="popover-content">And here's some amazing content. It's very engaging. Right?</p>
                </div>
        `;

        button = document.querySelector('.popover-trigger');
        popover = document.querySelector('.popover');
        new Popover(popover, button)
    });

    test("should be display block", () => {
        button.click();
        expect(popover.style.display).toBe('block');
    });
        test("should be display none", () => {
        button.click();
        button.click();
        expect(popover.style.display).toBe('none');
    });
});