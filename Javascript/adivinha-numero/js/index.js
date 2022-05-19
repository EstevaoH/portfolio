/**
*numeroAleatorio()
*função quer receber a requisição vinda do servido;
*comparo o StatusCode da requisição para validar a requisição;
*
*enviarFormulario()
*função para receber o numero digitado pelo usuario e validar o que ele digitou, mostrando as mensagem de dicas na tela,
*essa função que separa o numero digitado pelo usuario e transforma em um Array;
*
*resetaDisplay()
*função para resetar o Display quando o usario acerto o numero ou quando acontece algum erro da requisição;
*
*novaPartida()
*função para recomçar a partida;
*
*pegaHTMLNumeroDigital()
*função que gerar o HTML do display e exibir para o usuario;
*
*pegaNumeroDigital()
*função que faz um switch case para cada numero separado, para poder ser carregado no display;
**/

let numeroAPI;
let numeroCentena;
let numeroDezena;
let numeroUnidade;
let numeroErro;
let error;

function numeroAleatorio() {

    fetch("https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300")
        .then((response) => {
            if (response.status < 300) {
                return response.json();
            }
            throw response.status;
        })
        .then((data) => {
            if (data) {
                this.numeroAPI = data.value;
                // document.getElementById("resposta").innerHTML = data.value;
            } else {
                // document.getElementById("resposta").innerHTML = data.StatusCode;
            }
        })
        .catch((err) => {
            this.error = err;
            this.numeroErro = this.error.toString();
            numero_separado = this.numeroErro.split("");
            const display = document.getElementById("display");
            let cor = "vermelhor";
            let numero_do_display = "";

            numero_separado.forEach(numero => {
                numero_do_display += pegaNumeroDigital(numero, cor);
            })
            display.innerHTML = numero_do_display;
            icon_refresh = `
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2364 1.7625C9.14822 0.675 7.65478 0 5.99625 0C2.67917 0 0 2.685 0 6C0 9.315 2.67917 12 5.99625 12C8.7955 12 11.1295 10.0875 11.7974 7.5H10.2364C9.62101 9.2475 7.95497 10.5 5.99625 10.5C3.51219 10.5 1.49343 8.4825 1.49343 6C1.49343 3.5175 3.51219 1.5 5.99625 1.5C7.24203 1.5 8.35272 2.0175 9.16323 2.835L6.74672 5.25H12V0L10.2364 1.7625Z" fill="white"/>
            </svg>
        `;

            document.getElementById("display_mensagem_resultado").innerHTML = `<span class="display_texto_erro">ERRO</span>`;
            document.getElementById("nova_partida").innerHTML = `<button onclick="novaPartida()" class="display_button_recomecar" type="submit">${icon_refresh} NOVA PARTIDA</button>`;
        });
    return numeroAPI;
}

function enviarFormulario() {
    const formulario_display = document.getElementById("formulario");

    formulario_display.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputDeNumero = e.target.querySelector("input");

        const numeroDigitado = inputDeNumero.value;

        numeroSeparado = numeroDigitado.split("");

        const display = document.getElementById("display");

        const numeroCorreto = this.numeroAPI.toString();

        let cor = "preto";

        if (numeroDigitado === numeroCorreto) {
            cor = "verde";
        }

        let numero_do_display = "";

        numeroSeparado.forEach((numero) => {
            numero_do_display += pegaNumeroDigital(numero, cor);
        });

        display.innerHTML = numero_do_display;

        if (numeroDigitado === numeroCorreto) {
            document.getElementById(
                "display_mensagem_resultado"
            ).innerHTML = `<span id="display_texto_acertou" class="display_texto_acerto">Você acertou!!!</span>`;

            icon_refresh = `
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2364 1.7625C9.14822 0.675 7.65478 0 5.99625 0C2.67917 0 0 2.685 0 6C0 9.315 2.67917 12 5.99625 12C8.7955 12 11.1295 10.0875 11.7974 7.5H10.2364C9.62101 9.2475 7.95497 10.5 5.99625 10.5C3.51219 10.5 1.49343 8.4825 1.49343 6C1.49343 3.5175 3.51219 1.5 5.99625 1.5C7.24203 1.5 8.35272 2.0175 9.16323 2.835L6.74672 5.25H12V0L10.2364 1.7625Z" fill="white"/>
                  </svg>
              `;
            document.getElementById("nova_partida").innerHTML = `
              <button onclick="novaPartida()" class="display_button_recomecar" type="submit">${icon_refresh}  NOVA PARTIDA</button>
              `;

            document
                .getElementById("button_comparar")
                .setAttribute("disabled", "true");
        } else if (numeroDigitado > numeroCorreto) {
            document.getElementById("display_mensagem_resultado").innerHTML =
                '<span class="texto_dica">É menor</span>';
        } else {
            document.getElementById("display_mensagem_resultado").innerHTML =
                '<span class="texto_dica">É maior</span>';
        }

        inputDeNumero.value = "";
    });
}

function resetaDisplay() {
    document.getElementById("display_mensagem_resultado").innerHTML = "";
    document.getElementById("display").innerHTML = pegaNumeroDigital(
        "0",
        "preto"
    );
    document.getElementById("nova_partida").innerHTML = "";
    document.getElementById("button_comparar").removeAttribute("disabled");
}

function novaPartida() {
    resetaDisplay();
    numeroAleatorio();
}

function pegaHTMLNumeroDigital(segmentos) {
    return `
      <div class="numero_digital">
      <span class="segmento segmento_um segmento_${segmentos.um}">
                  <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"/>
                  </svg>
              </span>
              <span class="segmento segmento_dois segmento_${segmentos.dois}"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"/>
                  </svg>
              </span>
              <span class="segmento segmento_tres segmento_${segmentos.tres}">
                  <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"/>
                  </svg>
              </span>
              <span class="segmento segmento_quatro segmento_${segmentos.quatro}"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"/>
                  </svg>
              </span>
              <span class="segmento segmento_cinco segmento_${segmentos.cinco}"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"/>
                  </svg>
              </span>
  
              <span class="segmento segmento_seis segmento_${segmentos.seis}"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"/>
                  </svg>
              </span>
              <span class="segmento segmento_sete segmento_${segmentos.sete}">
                  <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"/>
                  </svg>
              </span>
             </div>
    `;
}

function pegaNumeroDigital(numero, cor) {
    let numero_do_display = "";

    switch (numero) {
        case "1":
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: "cinza",
                    dois: cor,
                    tres: cor,
                    quatro: "cinza",
                    cinco: "cinza",
                    seis: "cinza",
                    sete: "cinza",
                }
            );
            break;
        case "2":
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: cor,
                    dois: cor,
                    tres: "cinza",
                    quatro: cor,
                    cinco: cor,
                    seis: "cinza",
                    sete: cor,
                }
            );
            break;
        case "3":
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: cor,
                    dois: cor,
                    tres: cor,
                    quatro: cor,
                    cinco: "cinza",
                    seis: "cinza",
                    sete: cor,
                }
            );
            break;
        case "4":
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: "cinza",
                    dois: cor,
                    tres: cor,
                    quatro: "cinza",
                    cinco: "cinza",
                    seis: cor,
                    sete: cor
                }
            );
            break;
        case "5":
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: cor,
                    dois: "cinza",
                    tres: cor,
                    quatro: cor,
                    cinco: "cinza",
                    seis: cor,
                    sete: cor,
                }
            );
            break;
        case "6":
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: cor,
                    dois: "cinza",
                    tres: cor,
                    quatro: cor,
                    cinco: cor,
                    seis: cor,
                    sete: cor,
                }
            );
            break;
        case "7":
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: cor,
                    dois: cor,
                    tres: cor,
                    quatro: "cinza",
                    cinco: "cinza",
                    seis: "cinza",
                    sete: "cinza",
                }
            );
            break;
        case "8":
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: cor,
                    dois: cor,
                    tres: cor,
                    quatro: cor,
                    cinco: cor,
                    seis: cor,
                    sete: cor,
                }
            );
            break;
        case "9":
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: cor,
                    dois: cor,
                    tres: cor,
                    quatro: cor,
                    cinco: "cinza",
                    seis: cor,
                    sete: cor,
                }
            );
            break;

        default:
            numero_do_display = pegaHTMLNumeroDigital(
                {
                    um: cor,
                    dois: cor,
                    tres: cor,
                    quatro: cor,
                    cinco: cor,
                    seis: cor,
                    sete: "cinza",
                }
            );
            break;
    }

    return numero_do_display;
}
resetaDisplay();
numeroAleatorio();
enviarFormulario();