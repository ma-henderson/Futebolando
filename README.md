This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Design done by AntDesign React library.

[![Netlify Status](https://api.netlify.com/api/v1/badges/6b02993c-c5a2-45ea-a0d0-67096fa79340/deploy-status)](https://app.netlify.com/sites/cabo-polonio/deploys)


The following is a guide to the API's used to collect data.


# API's:
<style>
h2{text-transform: uppercase; margin-top: 30px}
h4:not(:first-child){
margin-top: 50px;}
h2:hover{
  text-decoration: underline;
}
</style>
## Contents:
### [Partidas](#partidas)
* https://api.cartolafc.globo.com/partidas

### [Times](#times)

* https://api.cartolafc.globo.com/times?q={name}
  * _name = Eintracht_

* https://api.cartolafc.globo.com/time/id/{time_id}
  * _time_id = 26522045_

### [Mercado](#mercado)

* https://api.cartolafc.globo.com/atletas/mercado

### [Status](#status)

* https://api.cartolafc.globo.com/mercado/status








___
## **Partidas** 
### Retorna os dados em JSON
#### Partidas `array []`:
```javascript
"partida_id": 243053,
"clube_casa_id": 262,
"clube_casa_posicao": 4,
"clube_visitante_id": 282,
"aproveitamento_mandante": ["", "", "", "", "e"],
"aproveitamento_visitante": ["", "", "", "", "e"],
"clube_visitante_posicao": 4,
"partida_data": "2020-08-09 16:00:00",
"local": "Maracanã",
"valida": true,
"placar_oficial_mandante": null,
"placar_oficial_visitante": null,
"url_confronto": "",
"url_transmissao": "",
"transmissao": { "label": "", "url": "" }
```
#### Clubes `object {}`:
```javascript
"262": {
  "id": 262,
  "nome": "Flamengo",
  "abreviacao": "FLA",
  "posicao": 1,
  "escudos": {
    "60x60": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-65.png",
    "45x45": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-45.png",
    "30x30": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-30.png"
  },
  "nome_fantasia": "Flamengo"
```

#### section_name `prop`:
```javascript
  "rodada": 1 
```
___
## **Times** 
### Retorna os dados em JSON

#### Atletas *do time indicado* em `array []`:
```javascript
{
  "nome": "Vladimir Orlando Cardoso de Araújo Filho",
  "slug": "",
  "apelido": "Vladimir",
  "foto": "https://s.glbimg.com/es/sde/f/2020/02/28/4d9d7f15b47033ac09c8e32e9b963227_FORMATO.png",
  "atleta_id": 69040,
  "rodada_id": 1,
  "clube_id": 277,
  "posicao_id": 1,
  "status_id": 7,
  "pontos_num": 1.2,
  "preco_num": 5.22,
  "variacao_num": -0.78,
  "media_num": 1.2,
  "jogos_num": 1,
  "scout": { "DD": 1, "GS": 1, "PI": 8 }
},

```
#### clubes em `Object {}`:
```javascript
"clubes": {
    "262": {
      "id": 262,
      "nome": "Flamengo",
      "abreviacao": "FLA",
      "posicao": 17,
      "escudos": {
        "60x60": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-65.png",
        "45x45": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-45.png",
        "30x30": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-30.png"
      },
      "nome_fantasia": "Flamengo"
```
#### Posicoes em `Object {}`:
```javascript
"posicoes": {
  "1": { "id": 1, "nome": "Goleiro", "abreviacao": "gol" },
  "2": { "id": 2, "nome": "Lateral", "abreviacao": "lat" },
  "3": { "id": 3, "nome": "Zagueiro", "abreviacao": "zag" },
  "4": { "id": 4, "nome": "Meia", "abreviacao": "mei" },
  "5": { "id": 5, "nome": "Atacante", "abreviacao": "ata" },
  "6": { "id": 6, "nome": "Técnico", "abreviacao": "tec" }
```

#### Status em `Object {}`:
```javascript
  "status": {
    "2": { "id": 2, "nome": "Dúvida" },
    "3": { "id": 3, "nome": "Suspenso" },
    "5": { "id": 5, "nome": "Contundido" },
    "6": { "id": 6, "nome": "Nulo" },
    "7": { "id": 7, "nome": "Provável" }
  },
```


#### Informacoes do time em `props`:
```javascript
"esquema_id": 4,
"rodada_atual": 1,
"patrimonio": 100.43,
"valor_time": 0,
"capitao_id": 75295,
"pontos": 41.280029296875,
"pontos_campeonato": 41.280029296875,
```


#### Time - Account info em `Object {}`:
```javascript
"time": {
    "assinante": false,
    "cadastro_completo": true,
    "simplificado": false,
    "clube_id": 284,
    "esquema_id": 4,
    "tipo_adorno": 1,
    "tipo_camisa": 2,
    "tipo_escudo": 1,
    "tipo_estampa_camisa": 5,
    "tipo_estampa_escudo": 4,
    "patrocinador1_id": 69,
    "patrocinador2_id": 66,
    "time_id": 26522045,
    "cor_borda_escudo": "0066ff",
    "cor_camisa": "063780",
    "cor_fundo_escudo": "063780",
    "foto_perfil": "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/placeholder/perfil.png",
    "globo_id": "95476eed-f1d7-4dcc-af39-79ee014e9a8b",
    "nome": "Henderson Moraes FC",
    "nome_cartola": "Mathias",
    "slug": "henderson-moraes-fc",
    "url_camisa_png": "https://s2.glbimg.com/u-BrMSp9pqeahZUBinUQj2YUR2E=/https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_172/camisa/8b/58/05/0095476eed-f1d7-4dcc-af39-79ee014e9a8b20200808155805",
    "url_camisa_svg": "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_172/camisa/8b/58/05/0095476eed-f1d7-4dcc-af39-79ee014e9a8b20200808155805",
    "url_escudo_png": "https://s2.glbimg.com/MiZizkQnh6izyl64nkpVQ3QUtOo=/https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_172/escudo/8b/58/06/0095476eed-f1d7-4dcc-af39-79ee014e9a8b20200808155806",
    "url_escudo_svg": "https://s3.glbimg.com/v1/AUTH_58d78b787ec34892b5aaa0c7a146155f/cartola_svg_172/escudo/8b/58/06/0095476eed-f1d7-4dcc-af39-79ee014e9a8b20200808155806",
    "facebook_id": null,
    "rodada_time_id": 1,
    "cor_primaria_estampa_camisa": "000000",
    "cor_primaria_estampa_escudo": "000000",
    "cor_secundaria_estampa_camisa": "ff7400",
    "cor_secundaria_estampa_escudo": "ff7400",
    "sorteio_pro_num": null,
    "temporada_inicial": 2020
  }
```
___
## **Mercado**
### Retorna os dados em JSON

#### Atletas (*todos*) `Array []`:
```javascript
{
  "nome": "Leonardo Cittadini",
  "slug": "leo-cittadini",
  "apelido": "Léo Cittadini",
  "foto": "https://s.glbimg.com/es/sde/f/2019/03/30/475167cdad7e826c64f4a0a999f8aef9_FORMATO.png",
  "atleta_id": 70986,
  "rodada_id": 1,
  "clube_id": 293,
  "posicao_id": 4,
  "status_id": 7,
  "pontos_num": 0,
  "preco_num": 8,
  "variacao_num": 0,
  "media_num": 0,
  "jogos_num": 0,
  "scout": null
},
```


#### Clubes em `Object {}`:
```javascript
"262": {
  "id": 262,
  "nome": "Flamengo",
  "abreviacao": "FLA",
  "posicao": 1,
  "escudos": {
    "60x60": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-65.png",
    "45x45": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-45.png",
    "30x30": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-30.png"
  },
  "nome_fantasia": "Flamengo"
},
```
#### Posicoes em `Object {}`:
```javascript
"posicoes": {
  "1": { "id": 1, "nome": "Goleiro", "abreviacao": "gol" },
  "2": { "id": 2, "nome": "Lateral", "abreviacao": "lat" },
  "3": { "id": 3, "nome": "Zagueiro", "abreviacao": "zag" },
  "4": { "id": 4, "nome": "Meia", "abreviacao": "mei" },
  "5": { "id": 5, "nome": "Atacante", "abreviacao": "ata" },
  "6": { "id": 6, "nome": "Técnico", "abreviacao": "tec" }
```

#### Status em `Object {}`:
```javascript
  "status": {
    "2": { "id": 2, "nome": "Dúvida" },
    "3": { "id": 3, "nome": "Suspenso" },
    "5": { "id": 5, "nome": "Contundido" },
    "6": { "id": 6, "nome": "Nulo" },
    "7": { "id": 7, "nome": "Provável" }
  },
```

___
## **Status**

#### Consiste apenas do seguinte:
```javascript
{
  "rodada_atual": 1,
  "status_mercado": 2,
  "esquema_default_id": 4,
  "cartoleta_inicial": 100,
  "max_ligas_free": 1,
  "max_ligas_pro": 7,
  "max_ligas_matamata_free": 5,
  "max_ligas_matamata_pro": 7,
  "max_ligas_patrocinadas_free": 2,
  "max_ligas_patrocinadas_pro_num": 2,
  "game_over": false,
  "temporada": 2020,
  "reativar": true,
  "exibe_sorteio_pro": false,
  "times_escalados": 4249056,
  "fechamento": {
    "dia": 8,
    "mes": 8,
    "ano": 2020,
    "hora": 18,
    "minuto": 0,
    "timestamp": 1596920400
  },
  "mercado_pos_rodada": false,
  "aviso": "",
  "aviso_url": "",
  "limites_competicao": {
    "total_confronto_pro": 7,
    "total_confronto_free": 3,
    "criacao_confronto_pro": 7,
    "criacao_confronto_free": 1
  }
}
```