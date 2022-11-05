import React, { useState } from "react";
//import ReactDOM from "react";

export default function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userD, setUserD] = useState({});
    var userName = {};

    const database = [{
        username: "u",
        rol: 1,
        password: "p"
    }, {
        username: "user2",
        rol: 2,
        password: "pass2"
    }];
    const errors = {
        err: "Informacion invalida",
    };

    const handleSubmit = (event) => {
        //prevent page reload
        event.preventDefault();
        var { uname, pass } = document.forms[0];


        //find user login info
        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.err });

            } else {
                setIsSubmitted(true);
                if (userData.rol === 1) {
                    setIsAdmin(true);
                }

                userName = { name: userData.username, rol: userData.rol, pass: userData.password };
                setUserD(userName);
                console.log(userD.value);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.err });
        }

    };
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
                <label>
                    <h2> Usuario</h2>
                    <input type="text" name="uname" required />

                </label>
                <label>
                    <h2>Password</h2>
                    <input type="password" id="password" name="pass" required />
                    {renderErrorMessage("uname")}
                    {renderErrorMessage("pass")}
                </label>
                <div>
                    <button type="submit">Login</button>
                </div>

            </form>

        </div>
    );
    const renderAdmin = (
        <div className="dash-Admin">
            <h2 className="dash">
                Dashboard
            </h2>
            <p>Bienvenido al panel de <strong>Administrador</strong>, Se ha logueado exitosamente</p>
        </div>
    );
    const renderUserVIP = (
        
        <div className="dash-Admin">
            <h2 className="dash">
                Dashboard
            </h2>
            <p>Bienvenido al contenido <strong>exclusivo</strong>, Se ha logueado exitosamente</p>
        </div>
    );
    const renderDashboard = (

        <div>
            {isAdmin ? renderAdmin : renderUserVIP}
        </div>
    );
    return (
        <div>
            {isSubmitted ? renderDashboard : renderForm}
        </div>
    )
}
