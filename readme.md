<!-- !/usr/bin/env markdown
-*- coding: utf-8 -*-
region header
Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

License
-------

This library written by Torben Sickert stands under a creative commons naming
4.0 international license.
See https://creativecommons.org/licenses/by/4.0/deed.de
endregion -->

<!--|deDE:Projektstatus-->
<!--|frFR:Statut du projet-->
Project Status
--------------

[![npm](https://img.shields.io/npm/v/web-input-material?color=%23d55e5d&label=npm%20package%20version&logoColor=%23d55e5d&style=for-the-badge)](https://www.npmjs.com/package/web-input-material)
[![npm downloads](https://img.shields.io/npm/dy/web-input-material.svg?style=for-the-badge)](https://www.npmjs.com/package/web-input-material)

[![build](https://img.shields.io/github/actions/workflow/status/thaibault/web-input-material/build.yaml?style=for-the-badge)](https://github.com/thaibault/web-input-material/actions/workflows/build.yaml)
[![build push package](https://img.shields.io/github/actions/workflow/status/thaibault/web-input-material/build-package-and-push.yaml?label=build%20push%20package&style=for-the-badge)](https://github.com/thaibault/web-input-material/actions/workflows/build-package-and-push.yaml)

[![check types](https://img.shields.io/github/actions/workflow/status/thaibault/web-input-material/check-types.yaml?label=check%20types&style=for-the-badge)](https://github.com/thaibault/web-input-material/actions/workflows/check-types.yaml)
[![lint](https://img.shields.io/github/actions/workflow/status/thaibault/web-input-material/lint.yaml?label=lint&style=for-the-badge)](https://github.com/thaibault/web-input-material/actions/workflows/lint.yaml)
[![test](https://img.shields.io/github/actions/workflow/status/thaibault/web-input-material/test-coverage-report.yaml?label=test&style=for-the-badge)](https://github.com/thaibault/web-input-material/actions/workflows/test-coverage-report.yaml)

[![code coverage](https://img.shields.io/coverallsCoverage/github/thaibault/web-input-material?label=code%20coverage&style=for-the-badge)](https://coveralls.io/github/thaibault/web-input-material)

[![deploy web documentation](https://img.shields.io/github/actions/workflow/status/thaibault/web-input-material/deploy-web-documentation.yaml?label=deploy%20web%20documentation&style=for-the-badge)](https://github.com/thaibault/web-input-material/actions/workflows/deploy-web-documentation.yaml)
[![web documentation](https://img.shields.io/website-up-down-green-red/https/tsickert.com/web-input-material.svg?label=web-documentation&style=for-the-badge)](https://tsickert.com/web-input-material)

<!--|deDE:Einsatzmöglichkeiten-->
<!--|frFR:Cas d'utilisation-->
Use case
--------

The form inputs of
[react-input-material](https://tsickert.com/react-input-material) as web
components. Use them in plain HTML or with any framework, no React knowledge
needed: text, numbers, dates, selections, code and rich text, checkboxes,
files, time intervals, lists of inputs, sliders and tabs in Material Design,
including validation.
<!--deDE:
    Die Formulareingaben von
    [react-input-material](https://tsickert.com/react-input-material) als Web
    Components. Verwenden Sie sie in reinem HTML oder mit jedem Framework,
    ganz ohne React-Kenntnisse: Text, Zahlen, Datumsangaben, Auswahlen, Code
    und Rich Text, Checkboxen, Dateien, Zeitintervalle, Listen von Eingaben,
    Schieberegler und Tabs im Material Design, inklusive Validierung.
-->
<!--frFR:
    Les champs de formulaire de
    [react-input-material](https://tsickert.com/react-input-material) sous
    forme de web components. Utilisez-les en HTML pur ou avec n'importe quel
    framework, sans connaître React: texte, nombres, dates, sélections, code
    et texte enrichi, cases à cocher, fichiers, intervalles de temps, listes
    de champs, curseurs et onglets en Material Design, validation comprise.
-->

Components included:
<!--deDE:Enthaltene Komponenten:-->
<!--frFR:Composants inclus:-->

- "text-input": Text, numbers, dates, selections, code and rich text.<!--deDE:"text-input": Text, Zahlen, Datumsangaben, Auswahlen, Code und Rich Text.--><!--frFR:"text-input": Texte, nombres, dates, sélections, code et texte enrichi.-->
- "checkbox-input", "file-input", "interval-input" and "slider-input".<!--deDE:"checkbox-input", "file-input", "interval-input" und "slider-input".--><!--frFR:"checkbox-input", "file-input", "interval-input" et "slider-input".-->
- "generic-inputs": Dynamic lists of any of the inputs above.<!--deDE:"generic-inputs": Dynamische Listen beliebiger der obigen Eingaben.--><!--frFR:"generic-inputs": Listes dynamiques de n'importe lequel des champs ci-dessus.-->
- "tab-bar" with "tab-item", "circular-spinner" and "generic-animate".<!--deDE:"tab-bar" mit "tab-item", "circular-spinner" und "generic-animate".--><!--frFR:"tab-bar" avec "tab-item", "circular-spinner" et "generic-animate".-->

<div class="wd-table-of-contents">
    <h2 id="content">Content<!--deDE:Inhalt--><!--frFR:Contenu--></h2>
    <!--wd-table-of-contents-->
</div>

<!--|deDE:Schnellstart-->
<!--|frFR:Démarrage rapide-->
Quick start
-----------

Load the styles and the bundle, which contains all dependencies including
React, and register the components:
<!--deDE:
    Laden Sie die Styles und das Bundle, das alle Abhängigkeiten
    einschließlich React enthält, und registrieren Sie die Komponenten:
-->
<!--frFR:
    Chargez les styles et le bundle, qui contient toutes les dépendances y
    compris React, puis enregistrez les composants:
-->

```HTML
<link
    href="https://unpkg.com/material-icons@1/iconfont/material-icons.css"
    rel="stylesheet"
/>
<link
    href="https://unpkg.com/react-input-material@latest/dist/index.css"
    rel="stylesheet"
/>
<script type="module">
    import {
        register
    } from 'https://unpkg.com/web-input-material@latest/dist/bundle/index.js'

    register()
</script>

<text-input
    declaration="Amount"
    maximum="200000"
    minimum="10"
    name="amount"
    required
    type="number"
></text-input>
<checkbox-input description="I agree" name="accepted" required>
</checkbox-input>
```

"dist/bundle/minimal/index.js" is a much smaller variant without code and
rich text editor, tooltips and animated icons.
<!--deDE:
    "dist/bundle/minimal/index.js" ist eine deutlich kleinere Variante ohne
    Code- und Rich-Text-Editor, Tooltips und animierte Icons.
-->
<!--frFR:
    "dist/bundle/minimal/index.js" est une variante nettement plus légère,
    sans éditeur de code ni de texte enrichi, sans infobulles ni icônes
    animées.
-->

<!--|deDE:Mit einem Paketmanager-->
<!--|frFR:Avec un gestionnaire de paquets-->
### With a package manager

```bash
npm install web-input-material
```

All libraries web-input-material builds on are optional peer dependencies,
since the bundle variants below already contain them. The default entry point
expects them to be installed, including react-input-material's own
dependencies, see
[react-input-material](https://tsickert.com/react-input-material):
<!--deDE:
    Alle Bibliotheken, auf denen web-input-material aufbaut, sind optionale
    Peer-Abhängigkeiten, da die unten beschriebenen Bundle-Varianten sie
    bereits enthalten. Der Standardeinstiegspunkt setzt voraus, dass sie
    installiert sind, einschließlich der Abhängigkeiten von
    react-input-material, siehe
    [react-input-material](https://tsickert.com/react-input-material):
-->
<!--frFR:
    Toutes les bibliothèques sur lesquelles repose web-input-material sont
    des dépendances « peer » optionnelles, car les variantes bundle décrites
    ci-dessous les contiennent déjà. Le point d'entrée par défaut suppose
    qu'elles sont installées, y compris les dépendances de
    react-input-material, voir
    [react-input-material](https://tsickert.com/react-input-material):
-->

```bash
npm install \
    @rmwc/slider @rmwc/tabs clientnode core-js prop-types react react-dom \
    react-input-material react-transition-group web-component-wrapper
```

Register all components or only the ones you need:
<!--deDE:Registrieren Sie alle Komponenten oder nur die benötigten:-->
<!--frFR:
    Enregistrez tous les composants ou seulement ceux dont vous avez besoin:
-->

```JavaScript
import {register, TextInput} from 'web-input-material'

// All components:
register()
// Or only one:
TextInput.register()
```

To avoid installing anything else, import "web-input-material/bundle" or
the smaller "web-input-material/bundle/minimal" instead, they contain all
dependencies including React. Single components are available the same way,
e.g. "web-input-material/bundle/components/IntervalInput".
<!--deDE:
    Um nichts weiter installieren zu müssen, importieren Sie stattdessen
    "web-input-material/bundle" oder das kleinere
    "web-input-material/bundle/minimal", sie enthalten alle Abhängigkeiten
    einschließlich React. Einzelne Komponenten gibt es genauso, z. B.
    "web-input-material/bundle/components/IntervalInput".
-->
<!--frFR:
    Pour ne rien installer d'autre, importez plutôt
    "web-input-material/bundle" ou la variante plus légère
    "web-input-material/bundle/minimal", elles contiennent toutes les
    dépendances y compris React. Les composants individuels sont disponibles
    de la même manière, par exemple
    "web-input-material/bundle/components/IntervalInput".
-->

<!--|deDE:Verwendung-->
<!--|frFR:Utilisation-->
Usage
-----

<!--|deDE:Attribute-->
<!--|frFR:Attributs-->
### Attributes

Each component accepts the properties of its React counterpart as attributes
in kebab case, e.g. "initialValue" becomes "initial-value". Text properties
take the attribute value as it is. All other attribute values are evaluated
as JavaScript expressions, so strings inside them need quotes. Boolean
properties are set by the presence of the attribute:
<!--deDE:
    Jede Komponente akzeptiert die Eigenschaften ihres React-Gegenstücks als
    Attribute in Kebab-Schreibweise, z. B. wird "initialValue" zu
    "initial-value". Texteigenschaften übernehmen den Attributwert
    unverändert. Alle anderen Attributwerte werden als JavaScript-Ausdrücke
    ausgewertet, Zeichenketten darin benötigen also Anführungszeichen.
    Boolesche Eigenschaften werden durch das Vorhandensein des Attributs
    gesetzt:
-->
<!--frFR:
    Chaque composant accepte les propriétés de son équivalent React sous
    forme d'attributs en kebab case, par exemple "initialValue" devient
    "initial-value". Les propriétés textuelles reprennent la valeur de
    l'attribut telle quelle. Toutes les autres valeurs d'attribut sont
    évaluées comme des expressions JavaScript, les chaînes qu'elles
    contiennent nécessitent donc des guillemets. Les propriétés booléennes
    sont activées par la seule présence de l'attribut:
-->

```HTML
<text-input
    declaration="Choice"
    initial-value="'B'"
    name="choice"
    required
    selection="['A', 'B', 'C']"
></text-input>

<text-input
    editor="richtext"
    name="message"
    rows="6"
    theme-configuration="{primary: '#d55e5d'}"
></text-input>
```

All options are described in
[react-input-material](https://tsickert.com/react-input-material).
<!--deDE:
    Alle Optionen sind bei
    [react-input-material](https://tsickert.com/react-input-material)
    beschrieben.
-->
<!--frFR:
    Toutes les options sont décrites dans
    [react-input-material](https://tsickert.com/react-input-material).
-->

<!--|deDE:Werte und Ereignisse-->
<!--|frFR:Valeurs et événements-->
### Values and events

Read and write the current state via DOM properties like "value",
"invalid" or "dirty". Validation states are also reflected as attributes, so
you can style them with CSS, e.g. "text-input[invalid]". Changes are
announced via a "change" event:
<!--deDE:
    Lesen und schreiben Sie den aktuellen Zustand über DOM-Eigenschaften wie
    "value", "invalid" oder "dirty". Validierungszustände werden zusätzlich
    als Attribute gespiegelt, sodass Sie sie per CSS gestalten können, z. B.
    "text-input[invalid]". Änderungen werden über ein "change"-Ereignis
    gemeldet:
-->
<!--frFR:
    Lisez et modifiez l'état courant via des propriétés DOM comme "value",
    "invalid" ou "dirty". Les états de validation sont également reflétés
    sous forme d'attributs, ce qui permet de les styliser en CSS, par exemple
    "text-input[invalid]". Les modifications sont signalées par un événement
    "change":
-->

```JavaScript
const input = document.querySelector('text-input[name="amount"]')

input.addEventListener('change', (event) => {
    if (event.target === input)
        console.log('New value', input.value, 'invalid', input.invalid)
})

input.value = 100
```

<!--|deDE:Entwicklung-->
<!--|frFR:Développement-->
Development
-----------

```bash
yarn install
yarn start
yarn test
```

"yarn start" serves a playground with examples of all components.
<!--deDE:
    "yarn start" stellt eine Spielwiese mit Beispielen aller Komponenten
    bereit.
-->
<!--frFR:
    "yarn start" sert un terrain de jeu avec des exemples de tous les
    composants.
-->
