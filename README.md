# Calculadora de diferencias (GenDiff)

[![Hexlet Check](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/hexlet-check.yml)

[![Tests and lint](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/tests.yml/badge.svg)](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/tests.yml)

Herramienta de línea de comandos (CLI) desarrollada en JavaScript para comparar archivos planos JSON y YAML e identificar claves agregadas, eliminadas o modificadas.

Proyecto de aprendizaje de Códica: https://app.codica.la/programs/fullstack-javascript

## Stack tecnológico

- JavaScript y Node.js
- Commander
- js-yaml
- Lodash
- Vitest
- ESLint
- GNU Make
- GitHub Actions

## Requisitos previos

- Node.js y npm.
- GNU Make, opcional, para utilizar los comandos `make`.

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

Compara dos archivos YAML. Se admiten las extensiones `.yml` y `.yaml`:

```bash
npm run gendiff -- file1.yml file2.yml
```

También puedes ejecutar directamente:

```bash
node gendiff.js file1.yml file2.yml
```

La herramienta muestra las claves agregadas (`+`), eliminadas (`-`), modificadas y sin cambios. Los archivos de esta etapa deben contener pares clave-valor planos.

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

## Demostración

Consulta la demostración de referencia en Asciinema:

https://asciinema.org/a/Pe6QypnLEmFWssNAjCOJN1iii

Asegúrate de que la grabación corresponda a la versión actual del proyecto y muestre al menos una comparación de archivos.

## Pruebas automáticas de Códica

El archivo `.github/workflows/hexlet-check.yml` forma parte de la configuración del proyecto. No lo elimines ni lo renombres, y no cambies el nombre del repositorio.

Los workflows de GitHub Actions ejecutan las verificaciones automatizadas del proyecto.

## Acerca de Códica

[Códica](https://app.codica.la/) es una escuela de programación que ofrece programas de aprendizaje con práctica, acompañamiento y proyectos aplicados.