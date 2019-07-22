import { h } from 'omis'
import style from './_index.css'

const AppIntro = (props, store)=>(
  <div>
    <p class='app-intro'>
      To get started, edit <code>src/components/*/*.*</code> and save to reload.
    </p>
    <p>
      <a href='https://github.com/Tencent/omi/tree/master/packages/omis' target='_blank'>Learn Omis</a>
    </p>
  </div>
)

AppIntro.css = style

export default AppIntro
