# Navegacion y Experiencia de Usuario

Este documento describe la arquitectura de navegacion, el sistema hibrido de modos de lectura y los componentes de interaccion desarrollados para eliminar la fatiga por desplazamiento vertical en Atlas de Diseno.

---

## 1. El Problema de la Longitud de Desplazamiento

El contenido del Atlas de Diseno comprende cinco capitulos tecnicos extensos con numerosos subcomponentes (tablas de tokens, comparador interactivo, matriz de estados, calculadora de escala tipografica, galerias de tendencias y catalogos de recursos).

En una disposicion tradicional, todos los temas se apilaban verticalmente, generando una pagina de mas de 10.000 pixeles de altura. Esto causaba los siguientes problemas de experiencia de usuario:
- Fatiga de scroll: El usuario debia desplazarse extensamente para alcanzar secciones avanzadas como Tendencias o Recursos.
- Perdida de orientacion espacial: Dificultad para determinar en que capitulo se encontraba.
- Ausencia de transicion guiada: Finalizar una seccion no proporcionaba una continuacion natural hacia el siguiente tema.

---

## 2. Sistema Hibrido de Navegacion

Para resolver este problema sin comprometer la accesibilidad ni romper enlaces directos, se implemento un sistema hibrido con dos modos de lectura configurables por el usuario:

### Modo Por Capitulos (`viewMode = 'chapter'`) - Predeterminado
- Comportamiento: La interfaz muestra unicamente el capitulo seleccionado a la vez. Los cuatro capitulos restantes se ocultan en el flujo visual mediante CSS condicional (`display: none`).
- Reduccion de Scroll: Disminuye la longitud vertical de la pagina en aproximadamente un 80%, facilitando una lectura concentrada y estructurada.
- Transicion y Revelado: Al cambiar de capitulo, los elementos internos del nuevo capitulo activo se hacen visibles de forma inmediata y suave.
- Persistencia: La seleccion se conserva en `localStorage` bajo la clave `atlas_view_mode`.

### Modo Continuo (`viewMode = 'continuous'`)
- Comportamiento: Restaura la vista clasica en la que todos los capitulos se disponen secuencialmente en una sola pagina.
- Destinatarios: Usuarios que prefieren una exploracion visual rapida sin segmentacion por pestanas.

---

## 3. Componentes de Navegacion

### Barra de Navegacion de Capitulos (`src/components/ChapterNav.astro`)
Barra fija (sticky) anclada a 49px de la parte superior (inmediatamente debajo de la cabecera principal), con fondo translucido y desenfoque por cristal:
1. Pildoras de Capitulos (Pills):
   - 01 Fundamentos (`#fundamentos`)
   - 02 Informacion y UX (`#ux`)
   - 03 Frontend (`#frontend`)
   - 04 Tendencias (`#tendencias`)
   - 05 Recursos (`#recursos`)
   Cada pestana indica su estado activo mediante el acento de color azul cobalto y actualiza el atributo `aria-selected`.
2. Conmutador de Modo de Lectura:
   Dos botones de opcion accesibles (`role="radiogroup"`) que permiten cambiar entre `Por Capitulos` y `Continuo` en tiempo real.

### Paginacion al Pie de Cada Seccion (`src/components/ChapterPagination.astro`)
Ubicada al final de cada capitulo tematico, proporciona enlaces estructurados para avanzar o retroceder:
- Tarjeta izquierda: "Capitulo anterior" con el titulo de la seccion previa.
- Tarjeta derecha: "Siguiente capitulo" con el titulo de la proxima seccion.
Al hacer clic en modo capitulos, se activa la nueva seccion y se ajusta la posicion de desplazamiento al inicio de la misma sin saltos bruscos.

### Riel de Seguimiento Lateral (`src/components/SideTracker.astro`)
En pantallas de escritorio amplias, se despliega un riel lateral con indicadores puntuales por cada capitulo y un boton flotante de retorno al inicio ("Volver arriba"), el cual se muestra automaticamente cuando el scroll supera los 400 pixeles.

---

## 4. Resolucion Inteligente de Anclas y Busqueda

Cuando el usuario accede mediante un enlace con hash especifico (por ejemplo `#accesibilidad`, `#before-after-slider` o un resultado de busqueda):
1. El script de navegacion identifica a que capitulo padre pertenece dicho identificador.
2. Si el modo activo es `chapter`, el motor activa y hace visible el capitulo contenedor correspondiente.
3. Se realiza un desplazamiento suave directo hacia el elemento de destino, descontando la altura acumulada de las barras superiores (115px).
4. La URL del navegador se actualiza utilizando `history.replaceState` para no saturar el historial de navegacion.

---

## 5. Atajos de Teclado

| Atajo | Accion |
| :--- | :--- |
| `Alt` + `Flecha Derecha` | Avanzar al siguiente capitulo |
| `Alt` + `Flecha Izquierda` | Retroceder al capitulo anterior |
| `Ctrl` + `K` o `Cmd` + `K` | Abrir el modal de busqueda instantanea |
| `/` (fuera de campos de texto) | Abrir el modal de busqueda rapida |
| `Escape` | Cerrar el modal de busqueda |
