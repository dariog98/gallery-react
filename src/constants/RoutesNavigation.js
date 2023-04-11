/*
const base = '/gallery-react'

const RoutesNavigation = {
    Home: `${base}`,
    Search: `${base}/?search=:search`,
    Photos: `${base}/photos`,
    Photo: `${base}/photos/:id`,
    Users: `${base}/:users`
}
*/

const RoutesNavigation = {
    basename: '/gallery-react',
    Home: '/',
    Search: '/?search=:search',
    Photos: '/photos',
    Photo: '/photos/:id',
    Users: '/users'
}

export default RoutesNavigation