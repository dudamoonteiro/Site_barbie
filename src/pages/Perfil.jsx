import Menu from "./Menu";
function Perfil() {
    return (
        <div id="corpo-perfil">

            <Menu />
            <h1>PERFIL</h1>
            <h2>Se cadastre já, e receba exatamente ✨TUDO✨ sobre a Barbie</h2>
            <br />

            <form action="Cadastro">
                <label for="nome">Nome: </label>
                <input type="text"></input>
                <br />
                <br />
                <label for="nome">Email: </label>
                <input type="email"></input>
                <br />
                <br />
                <label for="nome">Telefone:</label>
                <input type="tel"></input>
                <br />
                <br />
                <label for="nome">Gostaria de receber tudo sobre a Barbie</label>
                <input type="radio"></input>
                <br />
                <br />
                <button type="submit">Enviar</button>
                <button type="reset">Limpar</button>

            </form>
            <br />
            <br />

            <img src="https://40.media.tumblr.com/cb2557084975462d7bdc4f180ed4485b/tumblr_ml45bkCXEp1qa9qzwo1_400.png" width="130px" />

        </div>
    )
}
export default Perfil

