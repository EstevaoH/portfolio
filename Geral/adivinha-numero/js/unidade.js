export function exibirNumeroUnidades() {
    console.log('chamada da funcao')

    switch (this.numeroSeparado[2]) {
        case '1':
            console.log(this.numeroSeparado[2]);
            document.getElementById("numero-digital").innerHTML = (`
            <span class="segmento_um">
                <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_dois"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_tres">
                <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_quatro"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_cinco"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"
                        fill="#DDDDDD" />
                </svg>
            </span>

            <span class="segmento_seis"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_sete">
                <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"
                        fill="#DDDDDD" />
                </svg>
            </span> 
            `);
            break;
        case '2':
            document.getElementById("numero-digital").innerHTML = (`
            <span class="segmento_um">
                <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_dois"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_tres">
                <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_quatro"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_cinco"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"
                        fill="#262A34" />
                </svg>
            </span>

            <span class="segmento_seis"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_sete">
                <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"
                        fill="#262A34" />
                </svg>
            </span> 
            `);
            break;
        case '3':
            document.getElementById("numero-digital").innerHTML = (`
            <span class="segmento_um">
                <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_dois"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_tres">
                <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_quatro"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_cinco"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"
                        fill="#DDDDDD" />
                </svg>
            </span>

            <span class="segmento_seis"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_sete">
                <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"
                        fill="#262A34" />
                </svg>
            </span> 
            `);
            break;
        case '4':
            document.getElementById("numero-digital").innerHTML = (`
            <span class="segmento_um">
                <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_dois"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_tres">
                <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_quatro"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_cinco"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"
                        fill="#DDDDDD" />
                </svg>
            </span>

            <span class="segmento_seis"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_sete">
                <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"
                        fill="#262A34" />
                </svg>
            </span> 
            `);
        case '5':
            document.getElementById("numero-digital").innerHTML = (`
            <span class="segmento_um">
                <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_dois"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_tres">
                <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_quatro"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_cinco"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"
                        fill="#DDDDDD" />
                </svg>
            </span>

            <span class="segmento_seis"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_sete">
                <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"
                        fill="#262A34" />
                </svg>
            </span> 
            `);
        case '6':
            document.getElementById("numero-digital").innerHTML = (`
            <span class="segmento_um">
                <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_dois"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_tres">
                <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_quatro"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_cinco"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"
                        fill="#262A34" />
                </svg>
            </span>

            <span class="segmento_seis"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_sete">
                <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"
                        fill="#262A34" />
                </svg>
            </span> 
            `);
        case '7':
            document.getElementById("numero-digital").innerHTML = (`
            <span class="segmento_um">
                <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_dois"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_tres">
                <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_quatro"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_cinco"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"
                        fill="#DDDDDD" />
                </svg>
            </span>

            <span class="segmento_seis"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"
                        fill="#DDDDDD" />
                </svg>
            </span>
            <span class="segmento_sete">
                <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"
                        fill="#DDDDDD" />
                </svg>
            </span> 
            `);
        case '8':
            document.getElementById("numero-digital").innerHTML = (`
            <span class="segmento_um">
                <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_dois"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_tres">
                <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_quatro"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_cinco"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"
                        fill="#262A34" />
                </svg>
            </span>

            <span class="segmento_seis"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_sete">
                <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"
                        fill="#262A34" />
                </svg>
            </span> 
            `);
        case '9':
            document.getElementById("numero-digital").innerHTML = (`
            <span class="segmento_um">
                <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597611 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589093 0.00726318 1.57233L14.269 14.8295Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_dois"><svg width="17" height="69" viewBox="0 0 17 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_tres">
                <svg width="17" height="69" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_quatro"><svg width="69" height="15" viewBox="0 0 69 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_cinco"><svg width="17" height="69" viewBox="0 0 12 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.27099 47.9044C0.477317 46.9308 0 45.689 0 44.3344V5.97613C0 3.77735 1.25678 1.87679 3.08948 0.940319L11.7331 7.41831V38.1799L1.27099 47.9044Z"
                        fill="#DDDDDD" />
                </svg>
            </span>

            <span class="segmento_seis"><svg width="17" height="69" viewBox="0 0 16 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z"
                        fill="#262A34" />
                </svg>
            </span>
            <span class="segmento_sete">
                <svg width="69" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.5475 0.99368H8.60331L0.628693 6.87208L8.60331 12.7513H20.0201H27.1308H38.5475L46.5221 6.87208L38.5475 0.99368Z"
                        fill="#262A34" />
                </svg>
            </span> 
            `);
    }
}