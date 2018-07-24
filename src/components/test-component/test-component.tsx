import { Component, Element, Prop } from "@stencil/core";

@Component({
    tag: "test-component"
})
export class TestComponent {
	@Element() private element: HTMLElement;

    protected render(): JSX.Element {
        return (
            <div>
                Test component
            </div>
        );
    }
}
