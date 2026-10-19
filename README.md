# Calculadora de diferencias (GenDiff)

[![Hexlet Check](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/hexlet-check.yml)

[![Tests and lint](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/tests.yml/badge.svg)](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/tests.yml)

Herramienta de línea de comandos (CLI) para comparar archivos JSON y mostrar sus diferencias.

Proyecto de aprendizaje de Códica: https://app.codica.la/programs/fullstack-javascript

Demostración de referencia: https://asciinema.org/a/Pe6QypnLEmFWssNAjCOJN1iii

## Stack tecnológico

- JavaScript
- Node.js
- Vitest
- ESLint
- GNU Make
- GitHub Actions

## Requisitos previos

- Node.js y npm.
- GNU Make para utilizar los comandos `make`.

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/wdarioc7/fullstack-javascript-project-103.git
cd fullstack-javascript-project-103
npm ci
```

## Uso

Compara dos archivos JSON:

```bash
npm run gendiff -- file1.json file2.json
```

También puedes ejecutar directamente:

```bash
node gendiff.js file1.json file2.json
```

## Pruebas y calidad de código

Ejecuta las pruebas:

```bash
npm run test:run
```

Ejecuta ESLint:

```bash
npm run lint
```

Genera el informe de cobertura:

```bash
npm run test:coverage
```

Si GNU Make está instalado, puedes ejecutar los mismos controles mediante:

```bash
make test
make lint
make test-coverage
```

Los workflows de GitHub Actions automatizan las verificaciones en el repositorio.

## Pruebas automáticas de Códica

El archivo `.github/workflows/hexlet-check.yml` forma parte de la configuración del proyecto. No lo elimines ni lo renombres, y no cambies el nombre del repositorio.

## Acerca de Códica

[Códica](https://app.codica.la/) es una escuela de programación que ofrece programas de aprendizaje con práctica, acompañamiento y proyectos aplicados.
