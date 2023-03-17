import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
	const [nome, setNome] = useState("");
	const [funcao, setFuncao] = useState("");
	const [imagem, setImagem] = useState("");
	const [rota, setRota] = useState("");

	const aoSalvar = (evento) => {
		evento.preventDefault();
		props.aoColaboradorCadastrado({ nome, funcao, imagem, rota });
		setNome("");
		setFuncao("");
		setImagem("");
		setRota("");
	};

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar o card do campeão</h2>
				<CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do campeão" valor={nome} aoAlterado={(valor) => setNome(valor)} />
				<CampoTexto obrigatorio={true} label="Função" placeholder="Digite a função do campeão" valor={funcao} aoAlterado={(valor) => setFuncao(valor)} />
				<CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={(valor) => setImagem(valor)} />
				<ListaSuspensa obrigatorio={true} label="Rota" itens={props.rotas} valor={rota} aoAlterado={(valor) => setRota(valor)} />
				<Botao>Criar Card</Botao>
			</form>
		</section>
	);
};

export default Formulario;
