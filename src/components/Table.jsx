import { Container } from "react-bootstrap"
export const Table = () =>{
    return(
        <section className="table">
            
            <Container>
                <h3 className="titulo-table">Criptomodenas Importantes</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th>Trade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div>
                                    <img src="" alt="" />
                                    <span>Bitcoin</span>
                                </div>
                            </td>
                            <td>
                                <span>80,000.000</span>
                                <span>-1.94%</span>
                            </td>
                            <td>
                                <span>-1.94%</span>
                            </td>
                            <td>
                                <button className="button-table">Buy</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <div>
                                    <img src="" alt="" />
                                    <span>Bitcoin</span>
                                </div>
                            </td>
                            <td>
                                <span>80,000.000</span>
                                <span>-1.94%</span>
                            </td>
                            <td>
                                <span>-1.94%</span>
                            </td>
                            <td>
                                <button className="button-table">Buy</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </section>
    )
}