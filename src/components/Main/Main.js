import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import './Main.css';

class Main extends Component {
    demoLogin() {
        AuthApiService.postLogin({
            user_name: 'demo',
            password: 'Demo!2345'
        })
            .then(() => {
                this.props.history.push('/seach-recipe');
                window.location.reload(false);
            })
            .catch(error => console.log(error.message));
    }
    render() {
        return (
            <section className="main-background">
                <div className="Main">
                    <h2>NEVER WASTE FOOD AGAIN</h2>
                    <div className="explore">
                        <button
                            type="button"
                            onClick={() => this.demoLogin()}
                        >
                            Explore ReciPro
                    </button>
                    </div>
                    <h3>HOW IT WORKS</h3>
                    <p className="about">
                        ReciPro helps you keep track of your fridge
                        and pantry items as well as their expiration dates.
                        You can also make yourself a grocery list for next
                        time when you go shopping. Or better yet, have
                        something in your fridge/pantry but don't know what
                        to make? Search for recipes, and save the ones you like.
                    </p>

                </div>
            </section>
        );
    }
}

export default Main;