let login 
let loginCerto = "thiago@email.com"
let senhaCerta = "batatinha123"
let senha

// Enquanto a senha que o usuario inserir for diferente da senha certa continuaremos pedindo para que ele insira a senha novamente.
//while (senha != senhaCerta) {
   // senha = prompt("Insira sua senha:")
//}

// Do = Faça e While = enquanto, O que da nome a estrutura dowhile, ou seja, faça enquanto. 
// Dowhile executa o codigo uma vez antes de fazer a comparação

do {
    login = prompt("Insira seu e-email: ")
} while (login != loginCerto);

do {
    senha = prompt("Insira seu senha: ")
} while (senha != senhaCerta);

// Peça a senha pelo menos uma vez , e caso  o usuario não coloque senga certa repita o pedido