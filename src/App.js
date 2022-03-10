import Card from './Components/Cards'
import './App.css'

function App() {
const cards = [
  {
    title:"Sedan",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique explicabo, sed id culpa voluptate.",
    button:"Learn more",
    color:"bg-first"
  },
  {
    title:"Sedan",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique explicabo, sed id culpa voluptate.",
    button:"Learn more",
    color:"bg-first"
  },
  {
    title:"Sedan",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique explicabo, sed id culpa voluptate.",
    button:"Learn more",
    color:"bg-first"
  },

]

  return <div className='App'>
    <main>
      <section className="d-flex">
        <Card/>
        <Card/>
        <Card/>
      </section>
    </main>

  </div>
}

export default App;