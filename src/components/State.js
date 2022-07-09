import React from "react";
import { useState, useEffect } from "react";
import "./State.css"

const State1 = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>
                <h1>Состояние</h1>
            </div>
            <div>
                <span>
                    State (состояние) в React – это объект простого JS, позволяющий отслеживать
                    данные компонента. Состояние компонента может меняться. Смена состояния компонента зависит от функциональности
                    приложения. Изменения могут основываться на ответе от пользователя, новых сообщениях с сервера, ответа сети и т.д.
                    Состояние компонента должно быть приватным для компонента и контролироваться им.
                    Изменения состояния компонента необходимо делать внутри компонента – инициализация и обновление состояния компонента.
                </span>
            </div>
            <div>
                <h2>
                {`Class App extends React.Component{
                    constructor(props){
                        super(props)
                        this.state = {username : "John Gold"}
                    }
                    render(){
                        return(
                            <div>{this.state.username}</div>
                        )
                    }
                }`}
                </h2>
            </div>
            <div>
                <p>Единственный допустимый способ обновления состояния компонента – через setState().</p>
                <p>Так нельзя менять состояние: this.state.username='Mark'</p>
                <p>1й способ изменить state:</p>
            </div>
            <div>
                <h2>
                {`this.setState({userName: "Artem"})`}
                </h2>
            </div>
            <div>
                <p>2й способо изменить state:</p>
            </div>
            <div>
                <h2>
                    {`this.setState(()=>({username : "Artem"}))`}
                </h2>
            </div>
            <div>
                <p>В функциональных компонентах state создается с помощью хука useState()</p>
                <p>Чтобы воспользоваться им, необходимо импортировать useState из 'react':</p>
            </div>
            <div>
                <h2>
                    {`import {useState} from 'react'`}
                </h2>
            </div>
            <div>
                <p>
                Хук useState() принимается в качестве параметра первоначальное значение для переменной,
                 а возвращает массив, содержащий переменную и функцию, которая изменяет эту переменную.
                </p>
            </div>
            <div>
                <p>Примером работы со state является счётчик, который изменяется при нажатии на кнопку:</p>
            </div>
            <div className="count">
                    <button className="countBtn" onClick={()=>setCount(count+1)}>Кнопка +</button>
                    <p>Счетчик:{count}</p>
                    <button className="countBtn" onClick={()=>setCount(count-1)}>Кнопка -</button>
            </div>

        </div>

    )
}

export default State1;