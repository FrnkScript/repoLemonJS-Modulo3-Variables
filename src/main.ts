import "./style.css";

console.log("++ Hello Typescript! How are you?! ++");


interface GrupoMusical {
    nombreGrupo: string;
    anoFundacion: number;
    esActivo: boolean;
    generoMusical: string;
}

const grupoMusical1: GrupoMusical = {
    nombreGrupo: "The Beatles",
    anoFundacion: 1960,
    esActivo: true,
    generoMusical: "PopRock"
}
const grupoMusical2: GrupoMusical = {
    nombreGrupo: "Queen",
    anoFundacion: 1970,
    esActivo: false,
    generoMusical: "Rock"
}
const grupoMusical3: GrupoMusical = {
    nombreGrupo: "AC DC",
    anoFundacion: 1973,
    esActivo: true,
    generoMusical: "HardRock"
}
const grupoMusical4: GrupoMusical = {
    nombreGrupo: "The Rolling Stones",
    anoFundacion: 1962,
    esActivo: true,
    generoMusical: "Rock"
}

console.log(grupoMusical1);
console.log(grupoMusical2);
console.log(grupoMusical3);
console.log(grupoMusical4);

const styles = "font-weight: bold; font-size: 15px; background-color: green; color: black; padding: 10px;";

/* crear constante para uso del estilo.*/
console.log(
    `%c${grupoMusical1.nombreGrupo}`, styles
);

console.log(
    `%c${grupoMusical2.nombreGrupo}`, styles
);

console.log(
    `%c${grupoMusical3.nombreGrupo}`, styles
);

console.log(
    `%c${grupoMusical4.nombreGrupo}`, styles
);

/* Nota para sacar los estilos del nombre del grupo:
1.- escribimos comillas: `` 
2.- escribimos variable: ${nombreDeLaVariable}
3.- escribimos el punto y el nombre del objeto que quiero que se asigne el estilo.
4.- separo con una coma: ,
5.- entre comillas dobles escribo el estilo que deseo que tenga el objeto que he especificado antes($grupoMusical.nombreGrupo). 
*/

