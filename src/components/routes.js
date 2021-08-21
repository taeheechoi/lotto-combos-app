import AboutPage from "../views/AboutPage"
import OccursPage from "../views/OccursPage"
import WinNumsPage from "../views/WinNumsPage"

const routes = [
    {
        path: '/top-occurrence',
        component: OccursPage,
        title: 'Top Occurrence',
    },{
        path: '/about',
        component: AboutPage,
        title: 'About',
    },
    {
        path: '/winning-numbers',
        component: WinNumsPage,
        title: 'Winning Numbers',
    },
]

export default routes