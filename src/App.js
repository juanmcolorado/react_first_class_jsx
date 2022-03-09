import Card from './Components/Card'
// import './App.css'


function App() {
  return <div className='App'>
    <main className='d-flex'>
        <aside className='w-25'>
          <Card background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)">
            <h2>Frontend Mentor</h2>
            <p>Feedback board</p>
          </Card>
          <Card>
            <span className="tag">tag 01</span>
            <span className="tag">tag 02</span>
            <span className="tag">tag 03</span>
            <span className="tag">tag 04</span>
            <span className="tag">tag 05</span>
            <span className="tag">tag 06</span>
          </Card >
          <Card>
              <h2>Roadmap</h2>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
          </Card>
        </aside>
        <section className='w-75'>
          <Card background='darkblue'>
            <h2>Heading</h2>
          </Card>
          <article></article>
        </section>
    </main>

  </div>
}

export default App;
