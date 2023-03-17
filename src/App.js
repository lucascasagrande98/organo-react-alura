import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {
	const rotas = [
		{
			nome: "Topo",
			corPrimaria: "#57C278",
			corSecundaria: "#D9F7E9",
		},
		{
			nome: "Selva",
			corPrimaria: "#82CFFA",
			corSecundaria: "#E8F8FF",
		},
		{
			nome: "Meio",
			corPrimaria: "#A6D157",
			corSecundaria: "#F0F8E2",
		},
		{
			nome: "Atirador",
			corPrimaria: "#E06B69",
			corSecundaria: "#F0E7E8",
		},
		{
			nome: "Suporte",
			corPrimaria: "#D86EBF",
			corSecundaria: "#FAE9F5",
		},
	];

	const [colaboradores, setColaboradores] = useState([]);

	const aoNovoColaboradorAdicionado = (colaborador) => {
		setColaboradores([...colaboradores, colaborador]);
	};

	return (
		<div className="App">
			<Banner />

			<Formulario rotas={rotas.map((rota) => rota.nome)} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)} />
			{rotas.map((rota) => (
				<Time key={rota.nome} nome={rota.nome} corPrimaria={rota.corPrimaria} corSecundaria={rota.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.rota === rota.nome)} />
			))}

      <Rodape />
		</div>
	);
}

export default App;
