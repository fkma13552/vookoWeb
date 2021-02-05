import React from "react";
import UserInSearch from "../userInSearch";
import {Container, Row} from 'reactstrap';
import {v4 as uuidv4} from "uuid";
import './PeopleList.css';


function PeopleList({data}) {

    // const chunk = (arr, n) => arr.reduce(
    //     (([result, ncurrent], elem) => {
    //         if (!ncurrent) result.push([]);
    //         result[result.length - 1].push(elem);
    //         return [result, (ncurrent + 1) % n];
    //     }),
    //     [[], 0],
    // )[0];

    // return(
    //     <Container>
    //         {chunk(data, 3).map(chunk => <Row key={uuidv4()} className='search-row'>{chunk.map((user) => <UserInSearch key={user.id} name={user.name} photoUrl={user.photoUrl}/>)}</Row>)}
    //     </Container>
    // )

    return (
        <Container>
            <Row className='search-row'>
                {data.map((user) => <UserInSearch key={user.id} name={user.name} photoUrl={user.photoUrl}/>)}
            </Row>
        </Container>

        )
}
export default PeopleList;