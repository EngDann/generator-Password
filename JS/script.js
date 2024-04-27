// Seleciona os elementos necessários do HTML
let slider_elemento = document.querySelector("#slider");
let btn_elemento = document.querySelector("#butao");
let tamanho_elemento = document.querySelector("#valor");
let senha = document.querySelector("#senha");
let container_sumir = document.querySelector("#container-senha");
let senha_copiada = document.querySelector(".senha_copiada");

// Conjunto de caracteres para a senha
let carac_senha =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%_";

// Variável para armazenar a senha atual
let nova_senha = "";

// Adiciona um ouvinte de evento para o botão de gerar senha
btn_elemento.addEventListener("click", () => {
    gerador_senha(); // Chama a função para gerar a senha
    container_sumir.classList.toggle("escondida"); // Exibe ou oculta a área de senha copiada
    senha_copiada.value = ""; // Limpa o campo de senha copiada
});

// Adiciona um ouvinte de evento para o contêiner que envolve a senha
container_sumir.addEventListener("click", () => {
    copia_senha(); // Chama a função para copiar a senha
    senha.textContent = "Senha Copiada!"; // Define o texto de confirmação de senha copiada
});

// Atualiza o valor exibido do tamanho da senha conforme o usuário move o controle deslizante
tamanho_elemento.textContent = slider_elemento.value;
slider_elemento.oninput = function () {
    tamanho_elemento.textContent = this.value;
};

// Função para gerar uma senha aleatória com base no tamanho especificado
function gerador_senha() {
    let pass = "";
    // Loop para criar a senha
    for (let i = 0, n = carac_senha.length; i < slider_elemento.value; ++i) {
        pass += carac_senha.charAt(Math.floor(Math.random() * n)); // Adiciona um caractere aleatório
    }
    senha.textContent = pass; // Exibe a senha gerada
    nova_senha = pass; // Armazena a senha gerada na variável
}

// Função para copiar a senha atual para a área de transferência do sistema
function copia_senha() {
    navigator.clipboard.writeText(nova_senha); // Utiliza a API Clipboard para copiar o texto
}
