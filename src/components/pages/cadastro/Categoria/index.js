import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import PageDefault from '../../../PageDefault';
import Button from '../../../Button';
import FormField from '../../../FormField';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValue(name, value);
  }

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }
  return (
    <>
      <PageDefault>
        <Link className="ButtonLinkBack" to="/">
          <IoMdArrowBack size={16} />
          Ir para home
        </Link>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          <ul>
            {categorias.map((categoria, indice) => <li key={`${categorias}${indice}`}>{categoria.nome}</li>)}
          </ul>
          <Button>Cadastrar</Button>
        </form>
      </PageDefault>
    </>
  );
};

export default CadastroCategoria;
