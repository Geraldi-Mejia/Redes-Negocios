import React, { useState } from "react";
import md5 from "md5";
//import ReactDOM from "react";

export default function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const errors = {
        err: "Informacion invalida",
    };

    const login = (datos, uname,pass2) => {

        //find user login info
        const userData = datos.items.find((user) => user.username === uname);
        if (userData) {
            if (userData.pass !== md5(pass2)) {
                
                setErrorMessages({ name: "pass", message: errors.err });

            } else {
                setIsSubmitted(true);
                if (userData.rol === 1) {
                    setIsAdmin(true);
                }

            }
        } else {
            setErrorMessages({ name: "uname", message: errors.err });
        }
    }

    const handleSubmit = (event) => {
        //prevent page reload
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        fetch("https://g9136285fa968f4-redesproy.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/getusers")
            .then(response => response.json()).then((jsonData) => login(jsonData, uname.value,pass.value));
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
            <p>Bienvenido al contenido <strong>VIP</strong>, Se ha logueado exitosamente</p>
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
