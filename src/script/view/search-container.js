class SearchContainer extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <div id="search-container" class="search-container">
                <input placeholder="Search football club" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `
    }
}

customElements.define('search-container', SearchContainer)