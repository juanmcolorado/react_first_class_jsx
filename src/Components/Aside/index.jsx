import H3 from '../H3'
import P1 from '../P1'
import Button from '../Button'
import Li from '../Li'


function Aside () {
    return (
        <aside>
        
        <section>
          <H3 />
          <P1 />
        </section>

        <section>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </section>
        
        <section>
            <H3 />
          <a href="">View</a>
          <ul>
            <Li />
            <Li />
            <Li />
          </ul>
        </section>
      </aside>
    )
}

export default Aside