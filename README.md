- [ ] in quante occasioni viene utilizzato get piloti
- [ ] per valorizzare  cosa



# Angular

dopo che avete scaricato lo zip 
dovete entrare nella cartella del progetto 

- package.json

Aprire il terminale:

npm install
ng serve


## Installazione programmi necessari

### node js
[node](https://nodejs.org/en/download/)

LTS - Long term support

### angular cli
[angular sito ufficiale](https://angular.io/cli)
angular cli 

```bash
npm install -g @angular/cli
```

creazione di un  nuovo progetto

```
ng new [nome applicazione]
ng new auto

cd auto
```

aprire vscode dentro la cartella del progetto


SPA single page application

Routing (instradamento) 


Componente ---> tag personalizzato

Componente ---> Calendario 

AppComponent
    - CalendarComponent
    - AutoComponent

AutoComponent
    - auto.component.html
    - auto.component.css
    - auto.component.ts
    - auto.component.spec.ts


### creazione di un componente

ng generate component Auto


controlare la proprietà style

https://angular.io/guide/attribute-binding#binding-to-the-style-attribute


AppComponent (musei)
    - PageOpereComponent (gam) (pm)
        - SezioneComponent (opere)
        - TabellaComponent (opere)
    - UserModule
        - PageUserListComponent
            - SezioneComponent (elenco utenti)    
            - TabellaComponent (user)
        - PageAddUserComponent
            - SezioneComponent (add user)


- AppComponent (parent)
    - GameComponent (child) 
        - PistaComponent
         - AutoComponent posizione
         - AutoComponent posizione
         - AutoComponent posizione


https://angular.io/guide/inputs-outputs


@Input() nome:string = "";

Differnza tra
```html
var attributo = 1+1;  // 2

<tag [attributo] = "1+1" > //  2
    <tag attributo = "{{1+1}}" > // 2
        <tag attributo = "1+1" > // "1+1"
            <p>1+1</p>
<tag>1+1</tag>
<tag>{{1+1}}</tag> // 2

var attributo = 'rosso-'+ 2
<tag [attributo] = "'rosso-'+2" > //  
<tag>
    {{'rosso-'+2}} ---> <tag>"rosso-2"</tag>
</tag>

```
