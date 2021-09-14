import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


class Movies extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover variant="info">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>overview</th>
                            <th>vote_average</th>
                            <th>vote_count</th>
                            <th>poster_path</th>
                            <th>popularity</th>
                            <th>release_date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.moviesData.map(elem => {
                            return <tr>
                                <td>{elem.title}</td>
                                <td>{elem.overview}</td>
                                <td>{elem.vote_average}</td>
                                <td>{elem.vote_count}</td>
                                <td>{elem.poster_path}</td>
                                <td>{elem.popularity}</td>
                                <td>{elem.release_date}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Movies
