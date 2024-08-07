class List extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            *{
                box-sizing: border-box;
            }

            section{
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            .data-req{               
                align-items: center;
                display: flex;
                gap: 0.5rem;
            }  
            .show-table{
              color:#fff;
              display: flex;
              font-family: ubuntu;
              font-size: 2em;
              border-radius: 20px;
              background: #562897;
              cursor:pointer;
              align-items: center;
              gap: 0.5rem;
            }
            .data-list{
              color: #fff;
            }
            .data-list thead{
              background-color: #3d1dd1;
              color: #fff;
              padding:20px;
            }
            .data-list th{
              padding:20px;
            }
           
        </style>
        <section>
            <div class="data-req">
              <button class="show-table">Ver datos</button>
            </div>
            <table class="data-list">
              <thead>
                <tr></tr>
              </thead>
              <tbody></tbody>
            </table>
        </section>
        `

    const showButton = this.shadow.querySelector('.show-table')

    showButton.addEventListener('click', async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/accommodation`) // llamada fetch
      const data = await response.json()
      const tHead = this.shadow.querySelector('thead tr')
      const tBody = this.shadow.querySelector('tbody')

      Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th')
        th.textContent = key
        tHead.appendChild(th)
      })

      data.forEach(element => {
        const tr = document.createElement('tr')

        Object.values(element).forEach(value => {
          const td = document.createElement('td')
          td.textContent = value
          tr.appendChild(td)
        })

        tBody.appendChild(tr)
      })
    })
  }
}

customElements.define('list-component', List)
