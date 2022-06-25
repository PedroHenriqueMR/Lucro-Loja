const produtosLoja = [
    {id:1, nome: "Maçã", quantidade: 120, valorCompra: 0.89,ValorVenda: 4.50},
    {id:2, nome: "Banana", quantidade: 150, valorCompra: 0.75,ValorVenda: 3.47},
    {id:3, nome: "Melon", quantidade: 28, valorCompra: 1.20,ValorVenda: 4.57},
    {id:4, nome: "Morango", quantidade: 125, valorCompra: 3.50,ValorVenda: 9.18},
    {id:5, nome: "Ovo", quantidade: 300, valorCompra: 0.50,ValorVenda: 6.45},
    {id:6, nome: "Uva", quantidade: 150, valorCompra: 3.54,ValorVenda: 8.49},
    {id:7, nome: "Sabonete", quantidade: 350, valorCompra: 2.54,ValorVenda: 5.47},
    {id:8, nome: "Condicionador", quantidade: 50, valorCompra: 12.65,ValorVenda: 17.48},
    {id:9, nome: "Papel Higienico", quantidade: 600, valorCompra: 5.25,ValorVenda: 15.48},
    {id:10, nome: "Rodo 40cm", quantidade: 200, valorCompra: 15.45,ValorVenda: 34.48},
    {id:11, nome: "Vassoura", quantidade: 200, valorCompra: 20.87,ValorVenda: 45.48},
    {id:12, nome: "Biscoito", quantidade: 575, valorCompra: 0.65,ValorVenda: 6.47},
    {id:13, nome: "Tangerina", quantidade: 150, valorCompra: 7.58,ValorVenda: 17.48},
    {id:14, nome: "Laranja", quantidade: 150, valorCompra: 0.47,ValorVenda: 2.50},
    {id:15, nome: "Maracuja", quantidade: 87, valorCompra: 5.78,ValorVenda: 17.48},
    {id:16, nome: "Abacate", quantidade: 55, valorCompra: 8.66,ValorVenda: 17.89},
    {id:17, nome: "Abacaxi", quantidade: 45, valorCompra: 4.54,ValorVenda: 9.47},
    {id:18, nome: "Manteiga", quantidade: 40, valorCompra: 10.45,ValorVenda: 27.48},
    {id:19, nome: "Carne de Porco", quantidade: 300, valorCompra: 150.87,ValorVenda: 241.45},
    {id:20, nome: "Carne de Vaca ", quantidade: 350, valorCompra: 250.78,ValorVenda: 350.47},
    {id:21, nome: "Carne de Frango ", quantidade: 700, valorCompra: 75.01,ValorVenda: 97.45},
    {id:22, nome: "Detergente", quantidade: 300, valorCompra: 2.45,ValorVenda: 4.58},
    {id:23, nome: "Sabão", quantidade: 150, valorCompra: 7.45,ValorVenda: 15.87},
    {id:24, nome: "Refrigerante", quantidade: 41, valorCompra: 1.50,ValorVenda: 6.45},
    {id:25, nome: "Coco", quantidade: 37, valorCompra: 2.46,ValorVenda: 4.58},
    {id:26, nome: "Goiaba", quantidade: 254, valorCompra: 6.45,ValorVenda: 15.47},
    {id:27, nome: "Ração", quantidade: 250, valorCompra: 95.45,ValorVenda: 140.45},
    {id:28, nome: "Açucar", quantidade: 400, valorCompra: 7.45,ValorVenda: 16.48},
    {id:29, nome: "Álcool em Gel", quantidade: 350, valorCompra: 13.45,ValorVenda: 24.58},
    {id:30, nome: "Álcool 70%", quantidade: 410, valorCompra: 20.45,ValorVenda: 34.85},
    {id:31, nome: "Desifentante", quantidade: 25, valorCompra: 7.48,ValorVenda: 15.47},
    {id:32, nome: "Pano de Chão", quantidade: 450, valorCompra: 4.45,ValorVenda: 8.75},
    {id:33, nome: "Papel Toalha", quantidade: 650, valorCompra: 5.65,ValorVenda: 8.49},
    {id:34, nome: "Flanela", quantidade: 88, valorCompra: 2.45,ValorVenda: 4.57},
    {id:35, nome: "Água sanitaria", quantidade: 250, valorCompra: 15.45,ValorVenda: 17.99},
    {id:36, nome: "Detergente consentrado", quantidade: 50, valorCompra: 25.45,ValorVenda: 32.74},
    {id:37, nome: "Sabonete Liguido", quantidade: 120, valorCompra: 12.65,ValorVenda: 17.45},
    {id:38, nome: "Rodo 60cm", quantidade: 200, valorCompra: 17.46,ValorVenda: 25.45},
    {id:39, nome: "Vinho", quantidade: 150, valorCompra: 150.47,ValorVenda: 200.47},
    {id:40, nome: "Cerveja", quantidade: 800, valorCompra: 2.45,ValorVenda: 4.65},
    {id:41, nome: "Molho Roda", quantidade: 43, valorCompra: 1.50,ValorVenda: 3.45}
];

function procont (itemCarrinho){
    const text = itemCarrinho.id + " - " + itemCarrinho.nome + " UN - " + itemCarrinho.quantidade;
    console.log(text)
};

produtosLoja.forEach(procont);

function valorCp (total, itemCarrinho) {
    const valortotal = itemCarrinho.quantidade * itemCarrinho.valorCompra;
    return total + valortotal;
};

const valorGasto = produtosLoja.reduce(valorCp, 0);

console.log(`Valor total dos produtos - R$ ${valorGasto.toFixed(2)}`);

function valorVd (total, itemCarrinho) {
    const valorLucro = itemCarrinho.quantidade * itemCarrinho.ValorVenda;
    return total + valorLucro;
};

const valor = produtosLoja.reduce(valorVd, 0);

console.log(`Valor total da venda dos produtos - R$ ${valor.toFixed(2)}`);

const lucro = valor - valorGasto

console.log(`Valor total do lucro nas vendas - R$ ${lucro.toFixed(2)}`);