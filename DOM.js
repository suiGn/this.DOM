//DOM.js
class ThisDom {
    constructor(element) {
      if (!(element instanceof Element)) {
        throw new Error('Invalid DOM element provided');
      }
  
      this.element = element;
      this.standardizedRepresentation = null;
    }
  
    /**
     * Extracts and structures the relevant details from the DOM element.
     */
    standardize() {
      const details = {
        tagName: this.element.tagName.toLowerCase(),
        attributes: {},
        children: [],
        textContent: this.element.textContent.trim()
      };
  
      // Iterate through all attributes and capture them
      for (let attr of this.element.attributes) {
        details.attributes[attr.name] = attr.value;
      }
  
      // Capture child elements
      for (let child of this.element.children) {
        const childDom = new ThisDom(child);
        childDom.standardize();
        details.children.push(childDom.getStandardizedRepresentation());
      }
  
      this.standardizedRepresentation = details;
    }
  
    /**
     * Returns the standardized representation of the DOM element.
     * @returns {object} The standardized representation of the DOM element.
     */
    getStandardizedRepresentation() {
      return this.standardizedRepresentation;
    }
  }
  
  module.exports = ThisDom;