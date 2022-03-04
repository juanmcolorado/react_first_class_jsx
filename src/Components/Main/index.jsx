import H3 from '../H3'
import P1 from '../P1'
import Button from '../Button'
import Li from '../Li'

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
          <article>
            <card> ^ 112 </card>
            <H3 />
            <P1 />
            <Button />
            <Button />
              <span>2</span>
          </article>
        </section>
      </main>
    )
}

export default Main