/**
 * @fileoverview A specialized, minimalist node used for routing edges.
 * It extends BaseNode but has a smaller default size and no content area.
 */

class RoutingNode extends BaseNode {
    constructor(options = {}) {
        // Set defaults specific to a routing node
        const defaults = {
            width: 30,
            height: 30,
            title: '',
            type: 'RoutingNode',
            color: 'default'
        };

        super({ ...defaults, ...options });
        this.iconState = 0; // To track the current icon for cycling
    }

    /**
     * Overrides the default render method to create a simpler visual with an icon.
     * @param {HTMLElement} parentElement - The parent element to append the node to.
     * @returns {HTMLElement} The created DOM element for the node.
     */
    render(parentElement) {
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.className = 'node routing-node'; // Add a specific class
        this.element.dataset.color = this.color;
        this.element.style.setProperty('--icon-color', `var(--color-node-${this.color}-border)`);
        this.element.style.setProperty('--icon-color-bg', `var(--color-node-${this.color}-bg)`);
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        const icon = document.createElement('div');
        icon.className = 'node-icon icon-network';
        this.element.appendChild(icon);

        parentElement.appendChild(this.element);
        
        this.createHandles(); // It still needs connection handles

        return this.element;
    }
} 