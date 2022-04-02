import { useEffect, useState } from "react"

function Todo () {
    const [todos, setTodo] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(async (res) => {
            // todo api success
            return res.json()
        }).then((result) => {
            setTodo(result)
        })
        .catch(() => {
            // todo api error
        })
    }, []);

    console.log(todos)

    return(
        <div>
            <h1>list todo</h1>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name Todo</th>
                </thead>
                <tbody>
                    {todos.map((data) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Todo