const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const userTemplate = path.resolve(
    './src/templates/user-page.js'
  )
  const pokemonTemplate = path.resolve(
    './src/templates/pokemon-page.js'
  )
  const pokemons = [
    {
      slug: 'bulbasaur',
      name: 'Bulbasaur'
    },
    {
      slug: 'ivysaur',
      name: 'Ivysaur'
    },
    {
      slug: 'charmander',
      name: 'Charmander'
    },
    {
      slug: 'squirtle',
      name: 'Squirtle'
    }
  ]

  createPage({
    path: '/user',
    component: userTemplate,
    context: {
      name: 'Khaled'
    }
  })

  pokemons.forEach(pokemon => {
    createPage({
      path: `/${pokemon.slug}`,
      component: pokemonTemplate,
      context: {
        name: pokemon.name
      }
    })
  })
}
