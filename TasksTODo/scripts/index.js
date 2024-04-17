var entrada = document.getElementsByClassName('insert')[0];
var user = document.getElementsByClassName('usuario')[0];  
function entrar()
{
    document.location.replace('index.html');                   alert(`Seja bem vindo: ${user.value}`);                }

function addelemento()
{
    if (entrada.value == "")
    {
        alert('Espaço vaziu tente novamente!');
    } else
    {
        var novoElemento = document.createElement('div');
        novoElemento.className = 'elemento';
        novoElemento.innerHTML = `${entrada.value}` + '<button id="edit" onclick="editar(this)">edit</button> <button onclick="apagar(this)"class="del">del</button>';
        var container = document.getElementById('container');
        var primeiroElemento = container.firstChild;
        container.insertBefore(novoElemento, primeiroElemento);
        entrada.value = "";
        novoElemento.classList.add('novoElemento');
    }
}

function editar(elemento)
{
    var texto = prompt('Editar o texto: ', elemento.parentNode.nodevalue);
    if (texto !== null)
    {
        elemento.parentNode.innerHTML = `${texto}` + '<button id="edit" onclick="editar(this)">edit</button> <button onclick="apagar(this)"class="del">del</button>';
    }
}

function apagar(botao)
{
    var elemento = botao.parentNode;
    elemento.parentNode.removeChild(elemento);
}
