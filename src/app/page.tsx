/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';

export default function Home() {

    const API = "http://localhost:3001/produtos";

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [produtos, setProdutos] = useState([]);

    function listar() {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setProdutos(data); // Atualiza a lista de produtos
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }

    function salvar(e: React.FormEvent) {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const novoProduto = {
            nome: nome,
            preco: parseFloat(preco) // Converte preço para número
        };

        fetch(API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Produto salvo com sucesso:', data);
            listar(); // Atualiza a lista após salvar
        })
        .catch(error => console.error('Erro ao salvar produto:', error));
    }

    return (
        <div className="flex gap-5 flex-col pt-5">
            <div className="flex justify-center gap-3">
                <button onClick={listar} className="bg-green-500 rounded-md px-6 py-3">GET</button>
            </div>

            <div className="text-center">
                <h3 className="mb-4">Adicionar Produto</h3>

                <form onSubmit={salvar} className="flex flex-col gap-3 mx-auto max-w-[450px] bg-zinc-400 p-6 rounded-md shadow-lg">
                    <input 
                        type="text" 
                        placeholder="Nome do produto"
                        value={nome} 
                        onChange={e => setNome(e.target.value)} 
                        className="p-2 rounded-md"
                    />
                    <input 
                        type="number" 
                        placeholder="Preço do produto"
                        value={preco} 
                        onChange={e => setPreco(e.target.value)} 
                        className="p-2 rounded-md"
                    />
                    <button type="submit" className="bg-yellow-400 rounded-md px-6 py-3">POST</button>
                </form>

                <h3 className="mt-8 mb-4">Lista de Produtos</h3>

                <div className="mx-auto max-w-[450px] bg-zinc-400 rounded-md shadow-lg p-6">
                    <div className="json">
                        {produtos.length > 0 ? (
                            produtos.map((produto: any, index: number) => (
                                <p key={index}>{produto.nome} - {produto.preco}</p>
                            ))
                        ) : (
                            <p>Nenhum produto listado</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
