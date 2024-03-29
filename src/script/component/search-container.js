class SearchContainer extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
        this.search = () => {
            const query = this._shadowRoot.querySelector('#searchElement').value
            this._callback(query)
        }
    }

    connectedCallback() {
        this.render()
    }

    set searchCallback(callback) {
        this._callback = callback
        this._shadowRoot.querySelector('#searchButtonElement').addEventListener('click', this.search)
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                #search-bar {
                    max-width: 800px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    padding: 16px;
                    border-radius: 5px;
                    display: flex;
                    position: sticky;
                    top: 10px;
                    background-color: white;
                }
                
                #search-bar > input {
                    width: 75%;
                    padding: 16px;
                    border: 0;
                    border-bottom: 1px solid cornflowerblue;
                    font-weight: bold;
                }
                
                #search-bar > input:focus {
                    outline: 0;
                    border-bottom: 2px solid cornflowerblue;
                }
                
                #search-bar > input:focus::placeholder {
                    font-weight: bold;
                }
                
                #search-bar >  input::placeholder {
                    color: cornflowerblue;
                    font-weight: normal;
                }
                
                #search-bar > button {
                    width: 23%;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 16px;
                    background-color: cornflowerblue;
                    color: white;
                    border: 0;
                    text-transform: uppercase;
                }
                
                @media screen and (max-width: 550px){
                    #search-bar {
                        flex-direction: column;
                        position: static;
                    }
                
                    #search-bar > input {
                        width: 100%;
                        margin-bottom: 12px;
                    }
                
                    #search-bar > button {
                        width: 100%;
                    }
                }
            </style>
            <div id="search-bar">
                <input placeholder="Search football club" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `
    }
}

customElements.define('search-container', SearchContainer)