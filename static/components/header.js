class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/"><img id="spn" src="https://raw.githubusercontent.com/samuelroiz/FTB_cover/main/static/images/football.svg" width="50" height="50" alt="..."></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          
        </button>
    
        <div class="collapse navbar-collapse justify content between" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a style="color:white" class="nav-link" href="https://samuelroiz.github.io/FTB_worldcup/">Match Locations</a> 
            </li>
        
            <li class="nav-item">
                <a style="color:white" class="nav-link" href="https://samuelroiz.github.io/FTB_messi_ronaldo/">Messi Vs. Ronaldo</a>
                
            </li>
            <li class="nav-item">
                <a 
                style="color:white" class="nav-link" href="https://samuelroiz.github.io/FTB_transfers_link/">Transfers</a>
            </li>
            <li class="nav-item">
              <a style="color:white" class="nav-link" href="https://samuelroiz.github.io/FTB_league/">League</a>
              
          </li>
            <li class="nav-item dropdown">
                <a style="color:white" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  More
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a style="color:white" class="dropdown-item" href="https://samuelroiz.github.io/FTB_about_link/">About</a>
                  <a style="color:white" class="dropdown-item" href="https://samuelroiz.github.io/FTB_authors_link/">Authors</a>
                </div>
            </li>  
          </ul>
        </div>
      </nav> `;}   }

customElements.define('header-component', Header);