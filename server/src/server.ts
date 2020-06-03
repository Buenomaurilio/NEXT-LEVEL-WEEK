import express, { request, response } from 'express'
import routes from './routes'

const app = express()

app.use(express.json())

//Rota> Endereço completo da requisição
//Recurso: qual entidade estamos acessando do sistema

//Get: Buscar uma ou mais informações do back-end
//Post: Criar uma nova informação no back-end
//Put: Atulizar uma informação existente no back-end
//Delete: Remover uma informação do back-end

//POST http://localhost:3333/users =  Criar um usuário
//GET http://localhost:3333/users = Listar usuários

//Request param: Parâmetros que vem na própria rota que identificam um recurso
//Query Param: Parâmetros que vem na própria rota geralmente opicionais para filtros, paginação
//Request Body: Parâmetros para criação /atualização de informações
//Knex('users').where('name', 'Diego').select('*')

//00:36:48

app.use(routes)

app.listen(3333)






/*
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id)

    const user = users[id]
    return response.json(user)
})

app.post('/users', (request, response) => {
    const data = request.body

    console.log(data)

    const user = {
        name: data.name,
        email:data.email,
    }
    return response.json(user)
})

*/