# Calculadora de diferencias (GenDiff)

[![Hexlet Check](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/hexlet-check.yml)

[![Tests and lint](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/tests.yml/badge.svg)](https://github.com/wdarioc7/fullstack-javascript-project-103/actions/workflows/tests.yml)

GenDiff es una herramienta de línea de comandos (CLI) desarrollada en JavaScript para comparar archivos JSON y YAML. Identifica claves agregadas, eliminadas, modificadas y sin cambios, incluidas las que forman parte de estructuras anidadas.

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

### Comparar archivos JSON

```bash
npm run gendiff -- file1.json file2.json
```

### Comparar archivos YAML

Se admiten las extensiones `.yml` y `.yaml`.

```bash
npm run gendiff -- file1.yml file2.yml
```

### Comparar estructuras anidadas

```bash
npm run gendiff -- file1-nested.json file2-nested.json
```

También puedes comparar las fixtures YAML anidadas:

```bash
npm run gendiff -- file1-nested.yml file2-nested.yml
```

### Seleccionar el formato de salida

El formato predeterminado es `stylish`. También puedes especificarlo explícitamente:

```bash
npm run gendiff -- --format stylish file1-nested.json file2-nested.json
```

El formato `stylish` muestra las diferencias con los marcadores:

- `+`: clave agregada.
- `-`: clave eliminada.
- Sin marcador: clave sin cambios.
- Dos entradas con `-` y `+`: valor modificado.

## Pruebas y calidad de código

Ejecuta las pruebas automatizadas:

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

Si GNU Make está instalado, puedes ejecutar los controles mediante:

```bash
make test
make lint
make test-coverage
```

Las pruebas cubren comparaciones JSON y YAML, tanto planas como anidadas, además de casos de error del formatter y del parser.

## Demostración

Consulta la demostración de GenDiff en Asciinema:

https://asciinema.org/a/y5Za6gJCRKAquAWf

Segunda demostración punto 8

https://asciinema.org/a/HMHo6bOL5XCHN7qx

**Nota:** actualiza este enlace cuando dispongas de una grabación que muestre la versión actual del proyecto, incluida la comparación de estructuras anidadas y el formato `stylish`.

## Pruebas automáticas de Códica

El archivo `.github/workflows/hexlet-check.yml` forma parte de la configuración del proyecto. No lo elimines ni lo renombres, y no cambies el nombre del repositorio.

Los workflows de GitHub Actions ejecutan las verificaciones automatizadas del proyecto.

## Acerca de Códica

Códica es una escuela de programación que ofrece programas de aprendizaje con práctica, acompañamiento y proyectos aplicados.

https://app.codica.la/