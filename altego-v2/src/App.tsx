import Header from "./layout/header/Header"

function App() {

  return (
    <div className="grid-container">
      <div className="layout-header">
        <Header />
      </div>
      <div className="layout-menu">
        <button>Btn 1</button>
        <button>Btn 2</button>
        <button>Btn 3</button>
        <button>Btn 4</button>
        <button>Btn 5</button>
      </div>
      <div className="layout-sidebar-left">
        <div className="sticky">
          <div>
            left Ad 1
          </div>
          <div>
            left Ad 2
          </div>
        </div>
      </div>
      <div className="layout-main glass-dark">
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
        ...
      </div>
      <div className="layout-sidebar-right">
        <div className="sticky">
          <div>
            right Ad 1
          </div>
          <div>
            right Ad 2
          </div>
        </div>
      </div>
      <div className="layout-footer">footer</div>
    </div>
  )
}

export default App
