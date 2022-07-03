<template>
    <div class="wrapper">
        <Header />
        <div class="container">
            <h1>Challenge Rules</h1>
            <h2>Desafio de Front-End</h2>
            <p>Agradecemos muito o seu interesse em fazer parte do nosso time</p>
            <p>Para prosseguirmos, gostaríamos de desafiar você a realizar esse pequeno projeto para que possamos entender melhor como que você estrutura o seu código e quais as habilidades que possui hoje em dia.
detective O que iremos avaliar?</p>
            <p>Antes de entrarmos para a parte mais técnica, gostaríamos de dizer que aqui na Skore valorizamos muita a pró-atividade. Aqui temos a liberdade de sugerir mudanças técnicas e de produto nos projetos em que trabalhamos, e para deixar esse desafio o mais parecido com o nosso ambiente de trabalho, gostaríamos de ressaltar que você tem toda a liberdade de criação dentro dele.
rocket Nossas tecnologias</p>
            <p>Hoje em dia utilizamos em nossos projetos as seguintes tecnologias:</p>
            <ul>
                <li>Nuxt.js;</li>
                <li>Jest e Vue Test Utils;</li>
                <li>SCSS;</li>
                <li> GraphQL;</li>
                <li>GitHub Actions;</li>
            </ul>
            <p>Bora pro desafio?!</p>
            <p class="bold">Queremos desafiar você a desenvolver um projeto em Nuxt.js que atenda os seguintes requisitos:</p>
            <ul>
                <li>Devemos ter uma página que liste conteúdos;</li>
                <li>Devemos ter uma página que mostre os detalhes de um conteúdo buscando-o através do id dele;</li>
            </ul>
            <p>floppy_disk E de onde vem esses dados?</p>
            <p>Como já mostrado em Nossas tecnologias, trabalhamos bastante com API's GraphQL na Skore, portanto, disponibilizamos essa API aqui para o cumprimento desse desafio!</p>
            <p>Dica: O link acima te leva para um playground onde você pode consumir as duas queries que serão importantes para este desafio: contents e getContent.
wink Dicas que podemos lhe dar...</p>
            <p>Algumas observações que podem ser importantes para a realização do desafio.
books Um dos principais diferenciais da Skore é suportar diversos tipos de conteúdos.</p>
            <p>Encorajamos você a utilizar os campos embeddable e allow_download ao seu favor e abusar da sua criatividade para exibir os diversos tipos de conteúdo da maneira que achar melhor, desde o HTML nativo até o uso de bibliotecas.</p>
            <p class="bold">Obs: Alguns conteúdos realmente não serão "renderizáveis", para esses conteúdos, você poderá apenas disponibilizar uma forma de abri-los em uma nova aba ou criar a experiência que achar melhor.
💅🏿 Gostaríamos muito de ver como você estiliza aplicações.</p>
            <p>Nesse desafio desencorajamos o uso de frameworks de layout como Vuetify, Tailwind etc. Pedimos também que você faça o melhor layout que puder deixando-o responsivo e interativo.
woman_shrugging Sabemos que dúvidas sempre aparecem...</p>
            <p>Lidar com as incertezas é um valor muito importante dentro da Skore. Caso isso ocorra, pedimos que você tome as decisões necessárias e explique-as ao nos enviar o desafio.
test_tube Encorajamos você a testar sua aplicação!</p>
            <p>Testar aplicações fazem parte do dia a dia de qualquer pessoa desenvolvedora que trabalha aqui. Portanto, escreva alguns testes unitários e de integração para ela smile
tada Tudo pronto... E agora?!</p>
            <p>Após terminar o seu teste, pedimos que caso ainda não tenha feito, crie um repositório no GitHub e nos envie o link dele, caso não se sinta a vontade de deixá-lo público, nos envie por email.</p>
            <p>Feito isso, a responsa agora é nossa! Iremos analisar o seu código e entraremos em contato assim que possível.</p>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import '../assets/css/main.css' 
export default {

}
</script>

<style>
.bold{
    font-weight:bold ;
}

</style>