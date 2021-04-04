import './club-item.js'

class ClubList extends HTMLElement {
    constructor() {
        super()
        this._style = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
                club-item {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
                club-item .fan-art-club {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
                .club-info {
                    padding: 24px;
                }
                .club-info > h2 {
                    font-weight: lighter;
                }
                .club-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>`
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }

    set clubs(clubs) {
        this._clubs = clubs
        this.render()
    }

    render() {
        this._shadowRoot.innerHTML = this._style
        this._clubs.forEach((club) => {
            const clubElement = document.createElement("club-item");
            clubElement.club = club
            this._shadowRoot.appendChild(clubElement);
        })
    }

    renderError(message) {
        this._shadowRoot.innerHTML = this._style
        this._shadowRoot.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
}

customElements.define('club-list', ClubList)