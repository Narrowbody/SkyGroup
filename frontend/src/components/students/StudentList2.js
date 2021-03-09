import React, { Component } from "react";

import { NavLink } from 'react-router-dom';
import { Button, Table, Section, Title } from 'react-bulma-components';


const StudentList = () => {

    return (
        <div>
            <Section>
                <Title>
                    <h3>Student List</h3>
                </Title>

                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Document</th>
                            <th>Phone</th>
                            <th>Registration</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Levent Erdem</td>
                            <td>narrowbody@gmail.com</td>
                            <td>12345678</td>
                            <td>5434353268</td>
                            <td></td>
                        </tr>
                            
                    </tbody>
                </Table>


            </Section>  
        </div>
    );
}

export default StudentList;

