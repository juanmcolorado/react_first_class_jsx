import Article from "./Components/Article";

const KoderList = [
  {
    "koderName": "Mickey Colorado",
    "generation": "15g",
    "status":"En curso"
  },
  {
    "koderName": "Freedy",
    "generation": "12g",
    "status":"Egresado"
  },
  {
    "koderName": "Erik Gutierrez",
    "generation": "15g",
    "status":"En curso"
  },
  {
    "koderName": "Israel Salinas",
    "generation": "1g",
    "status":"Mentor"
  }
]



function App() {
  return <div className='App'>
    <main>
        <section>
           {KoderList.map(koder => {
             return (
               <Article 
                  koderName= {koder.koderName}
                  generation= {koder.generation}
                  status= {koder.status}
               />
             )
           })}
        </section>
    </main>

  </div>
}

export default App;
