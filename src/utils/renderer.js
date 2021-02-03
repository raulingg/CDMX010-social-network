export const render = (element, component) => {
    element.innerHtml = component.render()
    component.attachListeners()
}