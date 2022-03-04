import H3 from '../H3'
import Button from '../Button'
import Li from '../Li'
import Article from '../Article'

function Main () {
    return (
        <main>
        <section>
          <card>
            <img src="" alt="" />
            <H3 />
            <label>
              Sort By:  
            </label>
            <ul>
                <Li />
            </ul>
            <Button />
          </card>
        </section>

        <section>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </section>
      </main>
    )
}

export default Main