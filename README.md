# Breve descrição do propósito da aplicação
Fiz essa aplicação para mostrar uma simulação de turismo espacial com quatro abas para acessar a home, os planetas, os profissionais e as tecnologias. Tudo isso usando React, typescript, bootstrap, useState, pgadmin, sql, node.js, styled components, vite e uma API usando banco de dados que eu mesmo criei.

## Breve descrição das funcionalidades da aplicação entregue

# No arquivo front end (esse do repositorio)

No app.tsx retorna uma variavel global para todos os componentes e o arquivo main.tsx.

Na main.tsx retorna uma div que atualiza o background no momento que muda de aba usando useState de acordo com o tamanho da tela, dentro da div retorna a imagem da logo e as próprias abas de transição e caso a largura da tela for menor que 861px aparece um menu hamburguer com uma animação para dar um charme a mais.

No loading.tsx retorna um spinner de loading enquanto espera resposta da busca do servidor utilizando banco de dados. Com uma interface usando bootstrap.

Na function.tsx retorna uma funçao que será usada para requisitar os dados

No fadeIn.ts retorna animações.

No buttons.tsx e bar.tsx retornam os botoes e a barra que será usado no main.tsx.

Na pasta images tem as imagens que serão usadas na aplicação.

Nos destination.tsx, crew.tsx e technology.tsx retornam respectivamente os componentes planets.tsx, people.tsx e gadgets.tsx que são componentes referentes de cada aba

## Ferramentas utilizadas, e o por que estas foram escolhidas para a realização do desafio e decisões adotadas durante o planejamento e execução do desafio, justificando-as
home.js
Na function.ts retorna uma função que requisita a API que criei:

```
type Content = "destination" | "crew" | "tecnology"

    export async function fetchData<T>(content: Content,
        setData: React.Dispatch<React.SetStateAction<T>>,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setError: React.Dispatch<React.SetStateAction<Error | null>>) {

    try {
        const response = await fetch(`https://api-planets-ylxj.onrender.com/${content}`)
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados')
        }
        const data = await response.json()
        setData(data)
        console.log(data);

    } catch (error) {
        if (error instanceof Error) {
            setError(error);
        } else {
            setError(new Error('Erro desconhecido'));
        }
    } finally {
        setLoading(false)
    }
}
```
No type Content utilizei somente esses 3 tipos pois no server que fiz deploy (https://api-planets-ylxj.onrender.com/) pode ser usado crew, tecnology e destination para acessar o conteudo do respectivo tema:

![image](https://github.com/Vineeeee/space-web/assets/129313151/3f347293-4468-4352-81ca-30fd20829358)


{"count":1281,"next":"https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"}]}
A função getingPokemonsUrl retorna um mapeamento do codigo acima só que pegando somente a url que é a url de cada pokemon.

A função getPokemons vai pegar de parametro o resultado do getingPokemonsUrl para mapea-lo e que no final retorna todas as URLs:

async function getPokemons(params) {
        const promises = params.map(async (element) => {
          const uy = await fetch(element);
          const gr = await uy.json();
          return gr;
        });
        return Promise.all(promises);
}
Referente aos estados abaixo:

    const {theme,setTheme} = useContext(ThemeContext)
    const [poke,setPoke] = useState([{}])
    const [newPoke,setNewPoke] = useState([{}])
    const [load,setLoad] = useState(false)
    const [pokeStorage, setPokeStorage] = useState({})
O theme foi usado para usar o teme light e dark no togglerbutton O Poke foi usado para armazenar os pokemons retornados de getingPokemonsUrl e getPokemons O newPoke foi usado para armazenar os 10 novos pokemons após clicar em show more e dps armazena-lo no poke (utilizado na função addPokemon()):

async function addPokemon() {
            const pokemonss = await getingPokemonsUrl(10,10)
            const reponseJsonPokemons = await getPokemons(pokemonss)
            const mapPokemon = reponseJsonPokemons.map((c)=>[{id: c.id,nome:c.name, img:c.sprites.versions
                ["generation-v"]["black-white"].animated.front_default, type: c.types[0].type.name}])

            setNewPoke(mapPokemon)
            setPokeStorage((prevPoke) => prevPoke.concat(mapPokemon))
            setPoke((prevPoke) => prevPoke.concat(mapPokemon))
        }
O load foi usado para apenas dar load na pagina O pokeStorage foi usado para armazenar os pokemons e serem usados como parametros de como vão filtrar os tipos de pokemon (usado no filterPokemon()):

async function filterPokemon(selectedType){
            if (selectedType === "0") {
                fetchData()
              } else {
                const filteredPokemon = pokeStorage.filter(
                  (pokemon) => pokemon[0].type === selectedType
                );
                setPoke(filteredPokemon);
              }
        }
pokemon-page.js
começo o codigo com o getingPokemon() para retornar o pokemon com a id usando o useParams ao clicar no link em volta da Li da home.js:

async function getingPokemonsId(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const url = await response.json()
    return url
}
variables-styled-components
No variables-styled-components utilizei varios styles usando o styled components para estilizar nesse arquivo separado para não ocupar muita linha dos arquivos home.js e pokemon-page.js

Passo a passo dos comandos para que possamos rodar o seu projeto no nosso computador
Abrir o terminal, caso ele esteja assim: PS C:\Users\User\Desktop\pokemon-react>. Colocar cd pokemons e logo depois npm start
