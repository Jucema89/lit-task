import { LitElement, html } from 'lit';
import './components/task-column-app'; 
import { taskStyles } from './components/task-styles';


export class TaskApp extends LitElement {
  static styles = [
    taskStyles
  ];

  static properties = {
    columns: { type: Array }
  }

  constructor(){
    super()
    this.columns = [
      { 
        id: 1,
        name: 'Para Hacer',
        color: 'on-hold',
        cards: [
          { 
            id: 1, 
            title: 'Task 1',
            currentColumn: 1,
            data: {} 
          }, 
          { 
            id: 2, 
            title: 'Task 2',
            currentColumn: 1,
            data: {} 
          }
        ] 
      },
      { 
        id: 2,
        name: 'En Progreso', 
        cards: [],
        color: 'in-progress', 
      },
      { 
        id: 3,
        name: 'Revisar', 
        cards: [],
        color: 'needs-review', 
      },
      { 
        id: 4,
        name: 'Terminado', 
        cards: [],
        color: 'approved', 
      }
    ]
  }
  render() {
    return html`
    <main>
        <div class="drag-container">
          <ul class="drag-list">
            ${this.columns.map(column => html`
              <task-column-app 
                @remove-task-event=${this._handleRemoveCard}
                @create-task-event=${this._handleCreateCard}
                .id=${column.id}
                .name=${column.name}
                .cards=${column.cards}
                .color=${column.color}>
              </task-column-app>`)
            }
          </ul>
        </div>
      </main>
    `;
  }

  _handleCreateCard(event){
    console.log('created = ', event.detail);
    const { card, columnId } = event.detail;
    this.columns = this.columns.map(column => {
      if (column.id === columnId) {
        const newCard = {...card, checks: card.checks + 1}
        console.log('newCard', newCard);
        column.cards = [...column.cards, newCard];
      }
      return column;
    });
  }

  _handleRemoveCard(event) {
    console.log('Remove', event.detail);
    const { cardId, columnId } = event.detail;

    this.columns = this.columns.map(column => {
      if (column.id === columnId) {
        column.cards = column.cards.filter(card => card.id !== cardId);
      }
      return column;
    });
  }
}

window.customElements.define('task-app', TaskApp)
 