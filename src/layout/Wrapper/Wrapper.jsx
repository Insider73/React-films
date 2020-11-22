import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Container from "../Container/Container";
import Header from "../../components/Header/Header"
import MainPage from "../../pages/MainPage/MainPage"
import ErrorPage from "../../pages/ErrorPage/ErrorPage"
import './Wrapper.scss'

const Wrapper = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <main className='wrapper-main'>
                <Container>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route>
                            <ErrorPage />
                        </Route>
                    </Switch>
                </Container>
            </main>
            {/*<Footer />*/}
        </div>
    )
}

export default Wrapper