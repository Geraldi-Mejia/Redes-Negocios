export default function Login(){ return (
        <div className="login-wrapper">
           <form>
            <label>
                <h2> Username</h2>
                <input type="text" />
            </label>
            <label>
                <h2>Password</h2>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Login</button>
            </div>

           </form>

        </div>

    )
}
