const desafio =["Resolver problemas lógicos",
     "Aprender Novas Funções",
     "Encontrar Padrões",
     "Criar Novas soluções",
     "Analisar erros"
    ];

    function inicarDesafio(){
        const name = document.getElementById("name").value;

        if (name === ""){
            alert("Digite Seu Nome Antes De Começar")
            return;
        }
     const numeros = Math.floor(Math.randon() * desafios.length);
    const desafio = desafios[numeros];

    document.getElementById("resposta").innerHTML=`
    <h2> Olá ${name}</h2>`
    `<h2> Seu Desafio é: ${desafio}</h2>`
    }
