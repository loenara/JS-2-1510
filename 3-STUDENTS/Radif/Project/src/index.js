import bootstrap from 'bootstrap'
// из-за bootstrap летят стили, по этому пока не подгружаю:
// import 'bootstrap/dist/css/bootstrap.min.css'

import './layout/css/style.css'
// import App from './components/index.js' если index.js, то не нужно его явно указывать
import App from './components'

App();
