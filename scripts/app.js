const textArea = document.querySelector('.entrada');
const mensagem = document.querySelector('.historico_mensagens_div');

function habilitarBotaoCopiar (){
  btnCopiar = document.querySelector('.btn_copiar');
  btnCopiar.hidden = false;
}

function exibirMensagem(resultado){
    const textAreaResultado =
    `<textarea class="mensagem" cols="20" rows="10" readonly></textarea>`;
    mensagem.innerHTML = `${textAreaResultado}`;
    const resultadoFinal = document.querySelector('.mensagem');
    resultadoFinal.value = resultado;
    habilitarBotaoCopiar();
}

function copiarMensagem(){
  let mensagemCopiada = document.querySelector('.mensagem');
  mensagemCopiada.select();
  console.log('Mensagem Copiada')
  document.execCommand('copy');
}

function btnCriptografar(){
    const textoCriptografado = criptografar(textArea.value);
    exibirMensagem(textoCriptografado);
    textArea.value = '';
}

function btnDescriptografar(){
    const textoDescriptografado = descriptografar(textArea.value);
    exibirMensagem(textoDescriptografado);
    textArea.value = '';
}

function criptografar(stringCriptografada) {
  let chavesCriptografia = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringCriptografada = stringCriptografada.toLowerCase();

  for (let i = 0; i < chavesCriptografia.length; i++) {
    if (stringCriptografada.includes(chavesCriptografia[i][0])) {
      stringCriptografada = stringCriptografada.replaceAll(
        chavesCriptografia[i][0],
        chavesCriptografia[i][1]
      );
    }
  }

  return stringCriptografada;
}

function descriptografar(stringDescriptografada){
    let chavesCriptografia = [
        ['enter', 'e'],
        ['imes', 'i'],
        ['ai', 'a'],
        ['ober', 'o'],
        ['ufat', 'u'],
      ];
      stringDescriptografada = stringDescriptografada.toLowerCase();
    
      for (let i = 0; i < chavesCriptografia.length; i++) {
        if (stringDescriptografada.includes(chavesCriptografia[i][0])) {
          stringDescriptografada = stringDescriptografada.replaceAll(
            chavesCriptografia[i][0],
            chavesCriptografia[i][1]
          );
        }
      }
    
      return stringDescriptografada;
}