import Card from './Components/Card'
import './App.css'

function App() {
  return <div className='App'>
    <main>
        <aside>
          <Card background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)">
            <h2 className='bg-main-color'>Frontend Mentor</h2>
            <p>Feedback board</p>
          </Card>
          <Card>
          <span>tag1</span>
            <span className='tag'>tag2</span>
            <span className='tag'>tag3</span>
            <span className='tag'>tag4</span>
            <span className='tag'>tag5</span>
            <span className='tag'>tag6</span>
          </Card >
          <Card>
              <h2>Roadmap</h2>
              <ul>
                <li>list 1</li>
                <li>list 2</li>
                <li>list 3</li>
              </ul>
          </Card>
        </aside>
        <section>
          <Card>
            <h2>Heading</h2>
          </Card>
          <div className="heading"></div>
          <article></article>
        </section>
    </main>

  </div>
}

export default App;
