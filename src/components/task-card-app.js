import { LitElement, html, css } from 'lit';
import { taskStyles } from './task-styles';
// import { customElement } from 'lit/decorators.js';

// @customElement('task-card')
export class TaskCard extends LitElement {
  static styles = [
    taskStyles,
  ];

  static properties = {
    title: { type: String },
    id: { type: Number },
    currentColumn: { type: Number },
    data: { type: Object },
    isDraging: { type: Boolean },
    checks: { type: Number }
  }

  constructor(){
    super()
    this.title = 'hello';
    this.id = 0;
    this.currentColumn = 0;
    this.data = {},
    this.isDraging = false;
    this.checks = 1;
  }

  render() {
    return html`
      <li draggable="true"
      class=${this.isDraging ? 'drag-item is-moving' : 'drag-item'}>
        <div class="header">
          ${this.title}
          ${this.renderChecks()}
        </div>
       
      </li>
    `;
  }

  renderChecks(){
    return html`
    <div class="checks">
      ${Array(this.checks).fill().map(() => html`<span>✔️</span>`)}
    </div>
      
    `;
  }
}

customElements.define('task-card', TaskCard)