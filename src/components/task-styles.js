import { css } from "lit";

export const taskStyles = css`

:host {
    --ease-out: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    --on-hold: #fa976a;
    --in-progress: #2a92bf;
    --needs-review: #eebf13;
    --approved: #00b961;
}


ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    color: white;
    font-weight: 300;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    max-width: 90vw;
    max-height: 600px;
    font-family: 'Poppins', sans-serif;
    /* width: 90%;
    height: 90%; */
}

.drag-container {
    font-family: 'Poppins', sans-serif;
    /* max-width: 1000px;
    margin: 20px auto; */
    /* display: flex;
    max-width: 1000px;
    padding: 4em; */
}

.drag-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(400px, 1fr));
    grid-gap: 20px;
    margin: 20px;
}

@media (max-width: 690px) {
    .drag-list {
        display: block;
    }
}

.drag-column {
    flex: 1;
    margin: 0 10px;
    position: relative;
    background: rgba(0, 0, 0, 0.2);
    overflow: hidden;
    min-width: 400px;
}

@media (max-width: 690px) {
    .drag-column {
        margin-bottom: 30px;
    }
}

.drag-column h2 {
    font-size: 0.8rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
}

.drag-column-on-hold .drag-column-header,
.drag-column-on-hold .is-moved,
.drag-column-on-hold .drag-options {
    background: var(--on-hold);
}

.drag-column-in-progress .drag-column-header,
.drag-column-in-progress .is-moved,
.drag-column-in-progress .drag-options {
    background: var(--in-progress);
}

.drag-column-needs-review .drag-column-header,
.drag-column-needs-review .is-moved,
.drag-column-needs-review .drag-options {
    background: var(--needs-review);
}

.drag-column-approved .drag-column-header,
.drag-column-approved .is-moved,
.drag-column-approved .drag-options {
    background: var(--approved);
}

.drag-column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 0 0 5px 5px
}

.drag-inner-list {
    min-height: 50px;
}

.drag-item {
    margin: 10px;
    height: 100px;
    background: rgba(0, 0, 0, 0.4);
    transition: var(--ease-out);
    border-radius: 5px;
    padding: 10px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        .checks {
            
        }
    }
}

.drag-item.is-moving {
    transform: scale(1.5);
    background: rgba(0, 0, 0, 0.8);
    //background-color: #000;
}

.drag-header-more {
    cursor: pointer;
}

.drag-options {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    transform: translateX(100%);
    opacity: 0;
    transition: var(--ease-out);
}

.drag-options.active {
    transform: translateX(0);
    opacity: 1;
}

.drag-options-label {
    display: block;
    margin: 0 0 5px 0;
}

.drag-options-label input {
    opacity: 0.6;
}

.drag-options-label span {
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 400;
    margin-left: 5px;
}



/* Demo info */
/* 
.section {
    padding: 20px;
    text-align: center;
}

.section a {
    color: white;
    text-decoration: none;
    font-weight: 300;
}

.section h4 {
    font-weight: 400;
}

.section h4 a {
    font-weight: 600;
} */

`