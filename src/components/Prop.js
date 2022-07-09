import React from "react";
import { useState, useEffect } from "react";

const Prop = (props) => {
    return (
        <div>
            <div>
                <h1>{`Props (Пропсы)`}</h1>
            </div>
            <div>
                <h2>То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами. Функциональные компоненты свойства принимают в качестве аргумента.
                    Props представляют собой объект, содержащие свойства.
                    Обратиться к ним можно - props.имя-свойства.
                    Props - только для чтения.
                </h2>
            </div>
            <div>
                {` function Welcome(props) {
                return <h1>Привет, {props.name}</h1>;
            }`}
            </div>
            <div>
                <h2>Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно
                    с помощью this.props.имя-свойства.
                </h2>
            </div>
            <div>
                {` class Welcome extends React.Component {
                render() {
                    return <h1>Привет, {this.props.name}</h1>;
                }
            }`}
            </div>
            <div>
                <h2>Элементы могут описывать и наши собственные компоненты:</h2>
            </div>
            <div>
                {`  const element = <Welcome name="Алиса" />;`}
            </div>
            <div>
                <h2>
                    Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект
                    и передаёт их нашему компоненту. Этот объект называется «пропсы».

                    Например, этот компонент выведет «Привет, Алиса» на страницу:
                </h2>
            </div>
            <div>
                {` function Welcome (props) {
                return <h1> Привет, {props.name}</h1>;
            }

            const element = <Welcome name="Алиса" />;
            ReactDOM.render(
                element,
                document.getElementById('root')
            );`}
            </div>
            <div>
                <h2>
                Мы передаём React-элемент {`<Welcome name="Алиса">`} в ReactDOM.render().
React вызывает наш компонент Welcome с пропсами {`{name: 'Алиса'}`}.
Наш компонент Welcome возвращает элемент {`<h1>Привет, Алиса</h1>`} в качестве результата.
React DOM делает минимальные изменения в DOM, чтобы получилось {`<h1>Привет, Алиса</h1>`}.

Компонент никогда не должен что-то записывать в свои пропсы— вне зависимости от того, функциональный он или классовый.
                </h2>
            </div>
        </div>
    )
}

export default Prop;