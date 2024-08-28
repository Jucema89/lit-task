import { LitElement, html, css } from 'lit';
import './task-card-app';
import { taskStyles } from './task-styles';
import { dots } from './task-svg';

export class TaskColumnApp extends LitElement {
  static styles = [
    taskStyles,
  ];

  static properties = {
    id: { type: Number },
    color: { type: String},
    name: { type: String },
    cards: { type: Object || Array },
    currentCardMove: { type: Number }
  }

  constructor(){
    super()
    this.id = 0;
    this.name = '';
    this.cards = []
    this.currentCardMove = 0,
    this.color = ''
  }

  render() {
    return html`
        <li class="drag-column drag-column-${this.color}">
          <span class="drag-column-header">
            <h2>${this.name}</h2>
          </span>
          <div class="drag-options">
          </div>
          <ul class="drag-inner-list"  
            @drop="${this.dropCard}" 
            @dragover="${this.allowDrop}">
            ${this.cards.map(card => html`
              <task-card
                @dragstart="${this.dragStart}"
                @drag="${this.drag}"
                .id=${card.id}
                .title=${card.title}
                .currentColumn=${this.id}
                .data=${card.data}
                .isDraging=${this.currentCardMove === card.id}>
              </task-card>
            `)}
          </ul>
      </li>
    `;
  }

  drag(e){
    console.log('drag', e.target);
  }

  dragStart(e) {
    const card = {
      id: e.target.id,
      title: e.target.title,
      data: e.target.data
    };

    this.currentCardMove = card.id;

    const columnId = this.id;

    e.dataTransfer.setData('text/plain', JSON.stringify({ 
      card, columnId
    }));

    setTimeout(() => {
      this.dispatchEvent(new CustomEvent('remove-task-event', {
        detail: { cardId: card.id, columnId },
        bubbles: true,
        composed: true
      }));
    }, 200);
  }

  allowDrop(e) {
    e.preventDefault();
    console.log('allowDrop')
  }

  dropCard(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const { card } = JSON.parse(data);
    this.currentCardMove = 0;

    this.dispatchEvent(new CustomEvent('create-task-event', {
      detail: { card, columnId: this.id },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('task-column-app', TaskColumnApp)
 