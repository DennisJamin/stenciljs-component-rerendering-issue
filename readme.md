# Stencil Component Issue

This is a project to demonstrate a issue with Stencil when moving a component around using innerHTML.

## Usecase

Our usecase requires us to pick up any child nodes that were passed into a component to later render their innerHTML after filtering. The child nodes may in turn contain Stencil components, which have already been rendered once we pick them up as child node. Once rendering the HTML again after filtering, the component (although already hydrated) is re-rendered and shows the rendered HTML twice. 

## How to reproduce

Store the hydrated HTML of a Stencil component and add it to a node using innerHTML, or manually paste the hydrated HTML of a Stencil component through your browser's DevTools.

Additionally, this project displays the behaviour:
- By clicking `clone component` the component is cloned and appended to a different container. This works as expected.
- By clicking `copy compontent` the component's HTML is copied and appended to a different container. This shows the unexpected behaviour.