import logo from './img/OracleA.png'
export default function Home(){
    return (<div>
        <h1>Bienvenido al Proyecto de Redes en los negocios 2</h1>
        <div className='home-content'>
        <p>En este proyecto se ponen en practica los conceptos vistos en clase de ciber-seguridad,
            Cloud computing mediante la plataforma de Oracle y autenticación además Integración continua y despliegue continuo.
        </p>
        <img className='home-image' src={logo} alt= "Logo de Oracle"/>
        </div>
        
    </div>)
}