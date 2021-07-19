//criamos um High Order Component (HOC) para isolar o uso do componente NavLink do React Router v4
/*
HOCs nada mais é do que um componente que retorna outro, isolando a utilização e reaproveitando a lógica do componente que foi encapsulado
*/

import React from 'react';
import { NavLink } from 'react-router-dom'; //igual a tag Link, mas essa tem funcionalidades de estilização (ActiveStyle)

const LinkWrapper = props =>{
    return (
        <NavLink activeStyle={{fontWeight: "bold"}} {...props}/>
    )
}

export default LinkWrapper;