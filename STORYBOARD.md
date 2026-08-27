# Kivgraph — Product Video Storyboard

## 1. Objetivo

Crear un vídeo promocional corto para **Kivgraph** que comunique visualmente, sin necesidad de una explicación larga, el principal valor del producto:

> **Kivgraph permite a los coding agents entender relaciones semánticas reales entre símbolos y repositorios para determinar qué depende de qué y qué puede romperse antes de realizar un cambio.**

El vídeo no debe sentirse como una demo tradicional de software ni como un vídeo corporativo.

Debe sentirse como una pieza de lanzamiento de un developer tool moderno:

- precisa;
- técnica;
- minimalista;
- oscura;
- elegante;
- rápida;
- visualmente memorable;
- sin estética genérica de “AI product”;
- sin exceso de glow;
- sin partículas decorativas gratuitas;
- sin gráficos 3D usados únicamente porque “quedan bonitos”.

Three.js debe utilizarse para visualizar el concepto que hace especial a Kivgraph:

**relaciones reales entre código que inicialmente parecía separado.**

---

# 2. Duración y formato

## Master

```text
Resolution: 1920 × 1080
FPS: 60
Duration: 36.17 s
Frames: 2170
Aspect ratio: 16:9
```

También debe ser posible generar posteriormente:

```text
1920 × 1080   landing / YouTube / GitHub
1080 × 1080   X / LinkedIn
1080 × 1750   LinkedIn / social
1080 × 1920   vertical
```

La composición principal debe diseñarse de manera que el contenido crítico permanezca aproximadamente dentro del centro del frame para facilitar posteriores crops.

---

# 3. Principio narrativo

El vídeo cuenta una sola historia:

```text
Código
  ↓
Cambio aparentemente pequeño
  ↓
Pregunta
  ↓
Kivgraph comprende el símbolo
  ↓
Descubre relaciones reales
  ↓
Cruza repositorios
  ↓
Calcula impacto
  ↓
Demuestra por qué un nombre ≠ un símbolo
  ↓
Resultado medible
  ↓
Kivgraph
```

Delante de esa historia, y sin formar parte de ella, van dos segundos de
resultado: el cold open. No la cuenta ni la resume — plantea la pregunta que la
historia responde.

```text
[ 35,961 vs 267,980, 28/29 en los dos ]   ->  ¿cómo?
  ↓
Código -> ... -> Kivgraph                  ->  así
```

La historia de arriba no cambia. Ver COLD OPEN en §16 y `docs/scenes/cold-open.md`.

No intentar explicar:

- las 11 tools;
- toda la arquitectura;
- todos los lenguajes;
- todas las integraciones;
- cómo funciona internamente el parser;
- instalación completa;
- configuración MCP.

El vídeo debe vender **el concepto**.

---

# 4. Mensaje central

Pregunta narrativa principal:

# What breaks if I change this?

Respuesta implícita:

> Kivgraph knows.

Mensaje de marca secundario:

# A name is not a symbol.

Mensaje final:

# Exact code intelligence for coding agents.

---

# 5. Dirección visual de marca

## Personalidad

Kivgraph debe sentirse como una herramienta diseñada por desarrolladores para desarrolladores.

No utilizar estética:

- futurista genérica;
- cyberpunk;
- hologramas;
- Matrix;
- “AI brain”;
- circuitos;
- robots;
- estrellas;
- partículas flotando constantemente;
- gradientes arcoíris;
- glassmorphism excesivo.

La sensación debe estar más cerca de:

```text
terminal
+
editor
+
infraestructura
+
visualización científica
+
producto developer premium
```

---

# 6. Paleta

No introducir una nueva paleta para el vídeo.

Utilizar los **tokens de color existentes de Kivgraph**.

Definirlos en un único archivo:

```ts
export const brand = {
  background: "...",
  surface: "...",
  surfaceElevated: "...",

  textPrimary: "...",
  textSecondary: "...",
  textMuted: "...",

  accent: "...",
  accentSoft: "...",

  border: "...",
  success: "...",
};
```

La regla visual debe ser:

```text
85–90% tonos neutros
10–15% color de marca
```

El color de marca debe indicar:

- selección;
- relación;
- propagación;
- símbolo activo;
- Kivgraph trabajando.

Nunca utilizarlo indiscriminadamente.

---

# 7. Tipografía

Usar la misma familia tipográfica de la web de Kivgraph siempre que sea posible.

Separar:

```text
UI / marketing
→ sans serif de marca

Código / terminal / IDs / métricas técnicas
→ monospace
```

Jerarquías:

```text
Hero         72–92 px
Heading      52–64 px
Large metric 80–120 px
Body         26–34 px
UI           20–26 px
Code         20–28 px
Labels       16–20 px
```

Evitar texto pequeño.

El vídeo debe seguir siendo entendible cuando se reproduce dentro de un post social.

## Frase sobre el cuadro

**Regla:** cuando una frase dirigida al espectador entra en pantalla, el resto
del cuadro se oscurece para dejársela.

```text
sube un velo del color de fondo
→ entra el texto sobre el velo
→ sale el texto
→ baja el velo
```

Un velo, no un corte: se sube y se baja con la misma curva que todo lo demás, y
el texto entra unos frames *después* de que el velo esté arriba. Se nombra
después de mostrar, nunca antes.

El velo **no llega a negro**. Entre `0.7` y `0.9` según lo que tenga que seguir
siendo legible detrás: si la frase habla de algo que está en el cuadro, ese algo
se sigue viendo, más apagado. Un velo opaco convierte la escena en un cartón de
título y la frase deja de hablar de nada.

Aplica a las frases dirigidas al espectador — las que van en sans:

```text
Cross-repository.
Exact symbols. Not name matches.
A name is not a symbol.
Exact code intelligence for coding agents.
```

No aplica al texto pegado al grafo — etiquetas de símbolo, nombres de
repositorio, rutas de fichero — ni a los valores de una card de métricas. Esos
existen precisamente para leerse *contra* lo que hay detrás: oscurecer el grafo
debajo de `7 affected symbols` le quitaría a la cifra su prueba.

**Hoy la regla no gobierna nada implementado.** De las cuatro frases, tres están
cortadas: `Cross-repository.` se fue con la escena que la sostenía (§16 SCENE
05), `Exact symbols. Not name matches.` bajo la card de la 06 y `A name is not a
symbol.` en el centro de la 07. Ninguna de las tres se leía como un resultado ni
se explicaba sola, y con ellas se fueron los velos: las escenas de grafo no
contienen ninguna frase dirigida al espectador y no oscurecen el cuadro en
ningún frame.

La regla se queda escrita, no derogada, porque las escenas 08–11 todavía no están
construidas y sí tienen algo que decirle al espectador: `Exact code intelligence
for coding agents.` sigue en la lista y entra bajo esta regla el día que se
implemente. Lo que la experiencia añade es el umbral: una frase que nombra lo que
el cuadro ya está demostrando no necesita un velo, necesita cortarse.

---

# 8. Motion language

Las animaciones de Kivgraph deben sentirse:

```text
precisas
rápidas
controladas
mecánicas pero fluidas
```

No:

```text
elásticas
juguetonas
cartoon
overshoot exagerado
```

## Curvas

Preferencia:

```ts
Easing.bezier(0.22, 1, 0.36, 1);
```

o springs muy amortiguados:

```ts
spring({
  frame,
  fps,
  config: {
    damping: 28,
    stiffness: 180,
    mass: 0.8,
  },
});
```

Utilizar springs para:

- pequeñas cards;
- entrada de nodos;
- UI.

Utilizar interpolación explícita para:

- cámaras;
- líneas;
- zoom;
- timeline;
- opacidad;
- grafos.

---

# 9. Filosofía de Three.js

Three.js no debe ser una capa decorativa.

Debe aparecer únicamente cuando el usuario necesita comprender algo que sería difícil representar con UI 2D:

> **la topología del código.**

La transformación visual más importante del vídeo es:

```text
source code
      ↓
semantic symbol
      ↓
graph
      ↓
cross-repository dependency structure
```

El grafo representa **la estructura que Kivgraph ve**.

---

# 10. Diseño del grafo

## Nodos

Evitar las típicas esferas de knowledge graph.

Utilizar nodos que parezcan entidades técnicas.

Ejemplo:

```text
rounded rectangular chips
pequeños bloques
formas compactas
```

Cada nodo puede contener:

```text
symbol name
optional type icon
```

Ejemplo:

```text
┌─────────────────┐
│ withRetry()     │
└─────────────────┘
```

En la distancia se puede simplificar a una forma geométrica sólida.

---

## Orientación de las placas

Las placas están **rectas en el mundo**. No llevan ninguna rotación propia: toda
la obliquidad la pone la cámara.

Se probaron tres rotaciones globales y las tres fallan, aunque las dos primeras
se argumentaron desde geometría que era cierta cuando se escribió. Mientras las
etiquetas eran texto DOM pegado a la pantalla, una placa girada se leía como
superficie y el texto no se enteraba. En cuanto el texto pasó a vivir dentro de
la escena y a girar con su placa, la rotación global se convirtió en lo más
ruidoso del cuadro:

- pitch y yaw juntos ruedan el eje horizontal de la placa `rx · ry` — 2,7° a los
  ángulos que había — y con el texto encima eso rota la línea base: las etiquetas
  lejanas salían en **falsa cursiva**;
- sólo yaw rueda igual bajo una cámara elevada, `atan(sin(elev) · tan(yaw))`, que
  son 8,3° en la pose de llegada. Renderizado, el cuadro entero se leía como
  **horizonte torcido**;
- sólo pitch falla simétricamente contra el azimut de la cámara.

El fallo no era el eje, era que la rotación fuese **global**: todas las placas
llevaban la misma, así que todas las etiquetas rotaban el mismo ángulo, y una
rotación uniforme en todo el cuadro se lee como un error de cámara, no como
profundidad de los objetos.

Rectas tampoco es plano. Cada placa está en un sitio distinto de una cascada de
16 unidades, así que una cámara fuera de eje ve cada una con su propio ángulo:
las cercanas muestran un canto, las lejanas escorzan, y **la cantidad varía por
placa**. Esa variación es la señal de profundidad. Una inclinación global le
sumaba una constante y llamaba tridimensionalidad a la constante.
---

## Tipos de nodo

Visualmente distinguibles, pero sutiles:

```text
function
class/type
method
package/module
repository
```

No utilizar cinco colores distintos.

Preferible:

- misma familia cromática;
- pequeños cambios de forma;
- iconografía mínima;
- escala.

---

# 11. Repositorios

El grafo no se lee como una cadena de izquierda a derecha ni como un diagrama
plano. Se lee **en profundidad**: cada hop desde el símbolo cambiado da un paso
hacia el fondo, así que la distancia al cambio es la distancia a la cámara.

```text
hop 0   withRetry()                          el cambio
hop 1   lo que lo llama directamente         internal/retry
hop 2   el paquete público que hace puente   paymentService
hop 3   lo que ya vive en otro repositorio   checkout-service
```

Un repositorio **no es una caja**. No hay región, ni plano, ni contenedor, ni
pared, ni base bajo los nodos. Se construyó una base tenue y se borró: bien
expuesta se leía como un rectángulo con cuatro esquinas, es decir, como un
contenedor en el que el impacto entra. `checkout-service` no es una caja en la
que se entra; es un sitio en el que el impacto ya está cuando lo ves.

Los dos repositorios se leen aparte por tres cosas, y por ninguna más:

- la profundidad;
- la distancia;
- una etiqueta flotante por repositorio, en el aire que su propio grupo deja
  libre.

```text
  hop 0            hop 1              hop 2                  hop 3

  ● withRetry() ─┬─ ● Policy.Do() ───── ● Client.Charge() ─┬─ ● ReconciliationJob.Run()
                 │                                         └─ ● CheckoutService.PlaceOrder()
                 └─ ● Once() ────────── ● Client.Refund() ─── ● RefundHandler.Handle()

  cerca de la cámara ──────────────────────────────────────────────▶ al fondo
  payments-api                                            checkout-service
```

El diagrama es plano porque el texto lo es; el plano no. Cada columna está un
paso más lejos del espectador que la anterior, y esa es la única jerarquía que
el grafo necesita.

Los tres edges que van del hop 2 al hop 3 son los únicos que cruzan el límite de
repositorio: los **crossings**. Ese límite no está dibujado. Se ve porque tres
relaciones lo atraviesan a la vez, hacia el fondo y separándose, y porque al
otro lado hay una etiqueta que ya no es la de antes.

Cuando una relación sale del repositorio en el que empezó, debe ser
inmediatamente evidente.

Ese es uno de los momentos más importantes del vídeo.

---

# 12. Edges

Edges:

- finos;
- limpios;
- curvos;
- con profundidad;
- sin glow exagerado.

Un edge tiene cuerpo: es un tubo con grosor real, no una línea de un píxel, y se
comba ligeramente hacia la cámara y hacia un lado, de modo que dos hermanos
nunca se leen como un solo trazo. Una relación es un objeto del mundo, igual que
un nodo.

Todo edge va de un hop al siguiente: nace en el nodo que ya está en pantalla y
crece hacia el que llega, alejándose de la cámara. No hay edges entre dos nodos
del mismo hop, ni edges que vuelvan hacia el cambio.

Los tres edges que cruzan del hop 2 al hop 3 son los **crossings**. Son los
únicos edges cross-repo del vídeo, y son el tramo más presente del grafo: un
crossing asentado pesa más que cualquier edge local.

Mientras se resuelve:

```text
color de marca, contenido
ligeramente más grueso
```

Asentado:

```text
sin color
más fino
más apagado
```

El accent se gasta en establecer la relación, no en tenerla. Un edge que
conserva el color de marca para siempre deja de decir *esto está pasando ahora*.

La propagación puede realizarse con un punto de energía muy sutil recorriendo el edge.

No utilizar electricidad, rayos ni partículas.

---

# 13. Cámara Three.js

La cámara debe sentirse cinematográfica pero técnicamente controlada.

Es un **rig**: un ojo y un punto al que mira. No es una posición con una
dirección fija. Esa diferencia es la que permite que el grafo se lea en tres
dimensiones: una cámara clavada en `-Z` ve todas las placas de frente, la
profundidad sólo se puede deducir del tamaño, y el plano se lee como un diagrama
por muy bien colocados que estén los nodos. Fuera del eje, las mismas
coordenadas producen convergencia, escorzo y un parallax distinto por hop.

No utilizar:

- grandes órbitas;
- giros completos;
- roll;
- cámara flotante continua.

Sí utilizar:

- entrada hacia el símbolo;
- desplazamiento que acompaña al impacto;
- elevación por encima de la cadena;
- pequeños cambios de perspectiva;
- focus sobre un hop;
- reveal mediante profundidad.

La elevación no es un adorno. Las placas están de pie: una cámara a su altura
las ve de frente y el plano se aplana, mientras que desde arriba cada placa
escorza, su canto recoge la luz principal y su extrusión aparece.

Un grupo nuevo no se revela subiendo una opacidad: se revela cuando la cámara le
ha hecho sitio, y la opacidad entra detrás. Ninguna etiqueta se corta nunca: un
label a medio salir del frame se lee como un fallo, no como un descubrimiento.

Máximo aproximado, **medido como obliquidad total respecto a `-Z`**:

```text
15–20°
```

Fue 15–31° mientras existió la escena CROSS-REPOSITORY, cuyo giro compraba
ángulo hasta aterrizar fuera del bracket. Cortada esa escena (SCENE 05), el
techo vuelve a ser el que era antes de ella, y la pose en la que termina el
reveal — la que hereda todo lo que sigue — se queda en 15,1° fuera de `-Z`.
Después de 1078 el rig se mueve dos veces, y ninguna de las dos compra ángulo: la
07 lo endereza a frontal dentro de su aplanado, y la 08 lo devuelve en veinte
frames a la pose del match cut, que es la del primer frame del reveal.

Lo que **no** cambia son las dos restricciones duras que encierran cualquier
movimiento de cámara sobre este layout:

- ninguna etiqueta se corta nunca (§13). El objeto que manda no es un nodo, es la
  etiqueta de clúster `checkout-service` arriba a la derecha;
- ninguna etiqueta baja del bracket `Labels 16-20 px` (§7). `RefundHandler.
  Handle()` mide exactamente 16,0 px en reposo, así que el layout está afinado
  contra ese suelo y un movimiento de cámara no tiene nada que gastar.

Se compra ángulo, no distancia: el giro cortado era una órbita de radio constante
porque el layout no admite otra cosa. Cuando tuvo que cumplir las dos
restricciones a la vez, una rejilla sobre azimut, elevación y desplazamiento del
target no encontró **ninguna** pose que lo consiguiera en todos los frames del
movimiento. Se resolvió dejando los 16 px completos en la pose de llegada —donde
viven el blast radius y la comparación semántica, y donde el still clave 1198
tiene que leerse reducido a ancho de README— y bajando a 15 px en los frames *de
paso*, que se veían una fracción de segundo. Ese compromiso se va con la escena:
los 15 px los producía su giro, y el único movimiento que queda sobre el grafo
después de 1078 —el retorno de veinte frames de la 08— no llega a tocar la
rejilla: cuando arranca ya no queda en el cuadro más que el ancla, así que no hay
etiqueta de clúster que contener ni suelo de 16 px que respetar. Quien vuelva a
proponer un movimiento sobre el grafo completo se encuentra otra vez con la
rejilla.

`up` es el vertical del mundo en todos los frames: el horizonte nunca gira, y no
hay roll en ninguna escena.

---

# 14. Iluminación 3D

Preferir iluminación extremadamente suave:

```tsx
<ambientLight intensity={...} />

<directionalLight
  position={[...]}
  intensity={...}
/>
```

Opcionalmente:

```text
rim light muy sutil
```

Nada de:

- spotlight dramático;
- bloom masivo;
- reflejos metalizados;
- iluminación gaming.

Los objetos deben sentirse más como **UI materializada en 3D** que como objetos físicos.

---

# 15. Depth of field

Utilizar con muchísimo cuidado.

Únicamente durante:

- entrada al grafo;
- reveal cross-repo.

Nunca desenfocar información importante.

DOF máximo muy sutil.

---

## Estado: implementado, medido y retirado

Se construyó en la escena CROSS-REPOSITORY — hoy cortada, §16 SCENE 05 — con
`@react-three/postprocessing` y se quitó por dos razones, en este orden.

**Rompe el pipeline de color.** El composer montado sin efectos es un no-op —
idéntico píxel a píxel, `PSNR = inf`. Con un solo efecto, los grises del grafo se
desplazan brutalmente: la placa iluminada del ancla pasa de `33 35 37` a
`112 128 149`, la lejana de `20 21 24` a `72 81 95`, y el cuadro completo mide
26,4 dB. No es desenfoque: un `bokehScale` de 2 no triplica la luminancia de una
placa. El pase final del composer se queda con el tone mapping y la codificación
de salida, y trata un render ya en sRGB como si fuera lineal. Es el mismo tipo de
fallo que el de ACES, que renderizaba una placa `#171a1f` como `#080a0d`, y es
justo lo que `NoToneMapping` + `SRGBColorSpace` están puestos para evitar. La card
DOM del cuadro mantiene su valor de token en todo momento — prueba de que el
desplazamiento es del composer y no del render.

Arreglable en principio, dándole al composer un render lineal y dejando que él
haga la conversión a sRGB. Eso significa reconstruir el pipeline de color que el
proyecto ya arregló midiendo, y volver a verificar cada gris de token y cada
costura en los 2170 frames del master.

**Y las restricciones no le dejan nada que desenfocar.** «Nunca desenfocar
información importante» significa aquí: ni el símbolo cambiado, ni las crossings,
ni sus extremos. Las crossings van de hop 2 a hop 3, así que `Client.Charge()`,
`Client.Refund()` y los tres nodos de `checkout-service` quedan fuera también. Eso
es todo el grafo menos `Policy.Do()` y `Once()`, que la escena cortada bajaba a
`0.22` y que hoy nadie apaga: son hop 1, y la propagación del blast radius es lo
primero que los enciende.

El coste es reconstruir el color; el beneficio, ablandar dos nodos que ya no están
apagados y que el beat siguiente enciende primero. Este es el argumento que hay
que responder antes de volver a proponerlo.

---

# 16. Storyboard completo

**Numeración.** Las secciones de aquí abajo conservan la numeración original del
storyboard, que a partir de cierto punto va dos por delante de la de
`docs/scenes/`:

```text
SCENE 01  ->  01-symbol.md          SCENE 07  ->  05-semantic-resolution.md
SCENE 02  ->  02-agent.md           SCENE 08  ->  06-agent-answer.md
SCENE 03  ->  03-graph-reveal.md    SCENE 09  ->  07-benchmark.md
SCENE 04  ->  03-graph-reveal.md    SCENE 10  ->  08-brand.md
SCENE 05  ->  (cortada)             SCENE 11  ->  09-outro.md
SCENE 06  ->  04-blast-radius.md
```

Las SCENE 03 y 04 son un solo componente, y la 05 se conserva como registro de
una escena cortada; de ahí el desfase. La tabla de `docs/scenes/README.md` es la
correspondencia autoritativa.

El **cold open** y la escena de **intent** llegaron después de que este archivo
se escribiera y tienen sección propia abajo, fuera de la numeración original. El
cold open no lleva número porque no forma parte de la historia; la de intent es
la SCENE 00 del documento `docs/scenes/00-intent.md`.

---

## COLD OPEN — THE NUMBERS

### Frames

```text
0000–0120
0.0–2.0 s
```

---

### Qué es

El gancho, y la única parte de la película que no forma parte de la historia.

La narrativa que viene después es correcta y tarda en pagar: abre con un
problema, presenta una herramienta, encuentra un símbolo, hace una pregunta,
construye un grafo, cruza un repositorio, resuelve un nombre y responde — y sólo
entonces, veintisiete segundos dentro, enseña la evidencia de que todo eso servía
para algo. Ese orden es el correcto para quien ya está mirando. Es el equivocado
para quien está decidiendo si mirar.

Así que lo más fuerte que el proyecto ha medido va primero, reducido a dos cifras
y a la única línea que las hace significar algo.

### Composición

```text
35,961
kivgraph · tokens

267,980
grep + read

Same exact-answer count.
```

Centrado, apilado, un solo eje — deliberadamente **no** la tabla con la que
termina la SCENE 09. Misma marca, gramática distinta. Las dos cifras en mono,
como todo valor medido de la película; la línea de paridad en sans, porque es una
frase dirigida al espectador y no un dato leído de una medición.

**El `28 / 29` no aparece aquí y no debe volver.** Una fracción sola al principio
de un vídeo se lee como *falla una vez*, no como *empatan*. En la SCENE 09 es
segura porque al lado tiene la columna con el mismo `28 / 29` y debajo otras tres
filas de corrección, así que el denominador se ve como el del benchmark y no como
la tasa de fallo de Kivgraph. Aquí no hay nada al lado que permita esa lectura, y
dos segundos no dan para ir a buscarla. El teaser afirma el empate; la tabla da
la cifra.

Sin logo, sin wordmark, sin nombre de producto más grande que la etiqueta de
32 px bajo la primera cifra. Sin accent en ninguna parte: marcar el sujeto con
color afirmaría una diferencia que la línea de empate niega explícitamente.

### Ritmo

```text
0000          35,961 y su etiqueta, ya a plena intensidad. Sin fundido de entrada.
0016–0034     267,980 y grep + read, como comparación.
0040–0058     Same exact-answer count.
0058–0102     Asentado. STILL CLAVE.
0102–0119     Se retira todo; 35,961 el último.
0119–0128     Diez frames vacíos, medidos byte-idénticos.
```

Nada de count-up, nada de odómetro, nada de muelles, nada de zoom, nada de giro.
Un frame de una animación contando muestra una cifra que no es la del benchmark
publicado, y eso es un fallo de integridad, no de gusto.

### Por qué el benchmark aparece dos veces

**No es la misma diapositiva dos veces y una edición futura no debe borrar una
como duplicado.**

```text
cold open    la promesa    dos cifras y el empate
SCENE 09     la prueba     cuatro medidas, dos brazos, nota de procedencia
```

El teaser afirma un resultado. La SCENE 09 es donde el resultado deja de ser una
afirmación: añade las dos medidas de corrección que la apertura no enseña, dice
sobre qué corpus se sostiene y dice que el benchmark está publicado. La forma
buscada es `promise → demonstration → proof`.

Sin el teaser la película abre con mecánica y sin nada en juego. Sin la tabla, lo
que el teaser afirma no se sustancia nunca.

### Transición

Disolución al campo oscuro, no corte. Las cifras se retiran y la primera línea de
la escena de intent aparece en el mismo campo que acaban de dejar. El primer
**corte** de la película sigue siendo el match cut de `0420`.

Detalle completo en `docs/scenes/cold-open.md`.

---

## SCENE 00 — INTENT (find_by_intent)

### Frames

```text
0120–0420
2.0–7.0 s
```

---

### Qué hace

Impide que la película dé por supuesta su propia respuesta. Todo lo que viene
después abre con `withRetry` ya señalado, lo que afirma en voz baja que el agente
sabía cómo se llamaba el símbolo. Normalmente no lo sabe.

### La metáfora visual: una pila corta de candidatos heterogéneos

```text
FUNC     withRetry()
CONST    maxAttempts
METHOD   Policy.Do()
```

Esa segunda columna es todo el argumento de la escena. `find_by_intent`
recupera **contexto de código relevante, no sólo nombres de función**: un helper
de reintento, el presupuesto contra el que cuenta y el método que pasa por él son
tres cosas de tipos distintos, y las tres sirven para empezar a leer. Tres
nombres de función no podían decirlo, porque tres funciones son un solo tipo de
cosa.

Es deliberadamente **lo contrario de una UI de búsqueda**. Sin caja, sin campo,
sin cards, sin panel de resultados, sin columnas, sin score. Una lista editorial
vertical de tipografía en el mismo campo oscuro que el resto de la película.

### Reglas semánticas que no se pueden romper

```text
candidate   != relación probada
match       != confianza
```

`match` vale `lexical` o `lexical+calls` y dice **por qué apareció una fila**,
nunca cuánto creérsela. No existe score y no puede mostrarse ninguno: ni
porcentajes, ni barras, ni estrellas, ni ticks verdes, ni filas marcadas como
incorrectas. Las candidatas que no se abren se atenúan al 30 %; nunca se marcan
mal.

**Nunca una fila de comentario.** El índice guarda nombres, nombres cualificados,
kinds y rutas — no prosa —, así que una fila `COMMENT` sería un comportamiento
inventado de la herramienta.

### Ritmo

```text
0126–0172   el problema, dos líneas
0178–0216   la pregunta, con el ❯
0224–0248   kivgraph / find_by_intent
0250–0294   las tres filas, uno cada doce frames
0294–0346   la pila entera quieta
0346–0370   las otras dos retroceden al 30 %; la elegida pierde sus metadatos
0378–0416   se va todo menos el nombre, que escala hasta el símbolo fuente
```

Sin rebotes, sin muelles, sin zoom dramático, sin contadores.

### Transición

Match cut a `01-symbol.md` en `0420`. El nombre sólo **escala**: la pila está
maquetada hacia fuera desde el ancla `620, 662`, así que la fila elegida está
sobre su destino desde el primer frame en que existe.

Detalle completo en `docs/scenes/00-intent.md`.

---

## SCENE 01 — THE SYMBOL

### Frames

```text
0420–0540
7.0–9.0 s
```

### Dirección visual

No hay ventana de editor.

No hay card flotante.

No hay composición centrada tipo hero de landing.

La cámara está **dentro del código**.

El código es la composición: ocupa el frame, se recorta en los bordes y se lee
como pieza gráfica, no como captura de IDE.

Referencia de sensación:

```text
cinematografía editorial de producto developer
```

No:

```text
screenshot de VS Code
card de Vercel
hero de SaaS
```

Nada de chrome de editor:

```text
title bar
traffic lights
tabs
minimap
status bar
file browser
```

---

### Composición

Dos planos de código real con parallax muy contenido:

```text
plano medio        payments-api/internal/retry/retry.go
plano de fondo     payments-api/paymentService/client.go   (llamador, desenfocado)
```

El símbolo:

```text
withRetry
```

queda clavado en un ancla de pantalla fija, aproximadamente en el tercio
inferior izquierdo. La cámara se aleja alrededor de ese punto: el símbolo no se
mueve, el mundo se abre a su alrededor.

El aire libre queda arriba a la derecha, en diagonal con el símbolo.

Profundidad por falloff radial de luminancia y parallax, nunca por escalón de
superficie ni por borde de panel.

---

### Jerarquía

```text
withRetry                     100%
firma de la función            55%
implementación                 38%
package / imports / contexto   22%
plano de fondo                 18%
```

La implementación no necesita ser legible. La jerarquía manda.

---

### Frames 0420–0448

El primer frame ya tiene información visual. No se abre en negro.

Se empieza muy cerca de `withRetry`, rodeado de fragmentos de código.

El espectador necesita un instante para entender qué está viendo.

Cámara:

```text
dolly out, un solo movimiento
scale: 2.35 → 1.12 (se completa en 0500)
```

Sin titular. Sin caption todavía. El código está por debajo de su luminancia
final: se lee que hay código, no *qué* código.

---

### Frames 0448–0500

**Toda la escena ocurre aquí, en una sola transición.**

En la misma ventana y con la misma curva:

```text
el código sube a su luminancia legible
withRetry pasa del blanco de texto al accent de marca
bajo él se resuelve una línea de 1px, exactamente del ancho del símbolo
aparece el caption de ruta arriba a la derecha
la cámara termina su dolly out
```

No son cinco entradas escalonadas: es un solo acontecimiento que aterriza en el
frame 0500. Antes se repartían en cuatro tiempos y la apertura se sentía como
una secuencia de anuncios en lugar de una llegada.

```text
withRetry
─────────
```

La línea **no** se alarga, no sale de la palabra, no apunta a ningún sitio y no
termina en ningún nodo. Se separa 2px del plano del código para que se lea como
una capa por encima y no como un subrayado tipográfico.

La marca dice *este símbolo está seleccionado*. Una línea que abandona la
palabra dice otra cosa, y esa otra cosa es la escena 03.

No aparece el grafo. No aparecen callers. No aparece ningún nombre de
repositorio.

Esto es foreshadowing por selección, no por dirección.

---

### Frames 0500–0540

La escena está quieta. Byte-idéntica de 0500 a 0539: no hay deriva, ni
respiración, ni parallax residual.

La escena **no lleva texto explicativo de ningún tipo**. No hay titular, ni
pregunta, ni anotación, ni etiqueta, ni pill, ni card, ni callout.

El único texto de la escena es el caption de ruta de la esquina superior
derecha.

Jerarquía:

```text
1. withRetry
2. la firma de la función
3. el resto del código
```

La pregunta completa se verbaliza más tarde, en SCENE 02, como prompt del
agente. La escena 01 crea curiosidad; no enuncia nada.

El aire del margen izquierdo y de la esquina superior derecha se deja vacío a
propósito. El vacío es la composición, no un hueco pendiente de rellenar.

**La escena no se cierra sobre el símbolo.** No hay push-in final. Una versión
anterior volvía a entrar 1.12 → 1.19 en los últimos 30 frames para que el final
se sintiera sin resolver, pero la escena 02 arranca abriendo: la cámara hacía un
gesto y lo deshacía medio segundo después. Se leía como un temblor, no como una
intención.

Lo que deja la apertura sin resolver es que se ha señalado un símbolo y no se ha
dicho nada sobre él. La escena 02 recoge el mundo desde este reposo y se lo
lleva hacia fuera.

---

### Continuidad

La escena 01 establece la gramática espacial de todo el vídeo:

```text
código → símbolo → entidad semántica → relaciones → grafo 3D
```

La escena 02 continúa la misma cámara y el mismo mundo visual, sin corte. El
símbolo sigue siendo el ancla narrativa y no salta de posición en pantalla.

La cámara **nunca cambia de sentido** entre las dos escenas: la 01 sale y para,
la 02 recoge el movimiento desde el reposo y sigue saliendo. La frontera es un
tiempo, no una inversión.

La escena 01 tampoco baja la luz: se queda en su luminancia asentada y es la
escena 02 la que apaga el código a medida que llega el prompt. Cada rampa de la
apertura va en una sola dirección.

---

# SCENE 02 — ASK THE AGENT

### Frames

```text
0540–0750
9.0–12.5 s
```

---

### Dirección visual

No hay corte, y no hay ventana de terminal.

La escena 02 sigue dentro del mismo mundo de código de la escena 01. Lo que
ocurre no es un cambio de plató: la cámara se abre, el código pierde luz y,
dentro del mismo frame, aparece la capa mínima capaz de sostener un prompt.

```text
una regla de 1px
+
un glifo ❯
+
una línea monoespaciada
+
una línea de invocación de tool
```

Nada más. Sin panel, sin escalón de superficie, sin caja, sin title bar, sin
traffic lights, sin bubble de chat, sin “assistant panel”.

No copiar visualmente Claude Code. La capa de prompt se construye con
componentes de marca Kivgraph.

---

### Frames 0540–0610

La cámara no invierte el sentido: lo continúa. La escena 01 sale y se queda
quieta; la 02 recoge el mundo desde el reposo y sigue abriendo. El beat es la
pausa, no un cambio de dirección.

```text
zoom: 1.12 → 0.66
```

Se abre lo justo para que el paquete alrededor del archivo entre en cuadro y
para despejar la mitad inferior del frame. Los dos hermanos de paquete
(`backoff.go`, `policy.go`) se resuelven desde el falloff y se quedan como
textura en los bordes: nunca son el tema, sólo impiden que el archivo parezca el
mundo entero.

El código baja de luminancia hasta quedar como textura; `withRetry` conserva su
accent y sigue visible arriba durante toda la escena.

La marca semántica que la escena 01 dejó alargada se recoge bajo la apertura y
queda sólo en el subrayado del símbolo. No llega a tocar nada.

El caption `payments-api/internal/retry/retry.go` heredado de la escena 01 se
retira bajo la llegada del prompt: el frame deja de etiquetar dónde estamos y
pasa a sostener lo que se pregunta.

La regla del prompt se dibuja de izquierda a derecha y aparece el glifo:

```text
❯
```

---

### Frames 0585–0665

Typing:

```text
What breaks if I change withRetry()?
```

El typing debe parecer humano.

Utilizar grupos:

```text
What
What breaks
What breaks if
What breaks if I change
What breaks if I change withRetry()
```

con pequeños delays.

Es la primera vez en todo el vídeo que se enuncia la pregunta, y la enuncia una
persona a su agente. Nunca aparece como titular.

---

### Frame 0675

Enter.

Pequeño feedback visual: el caret se retira y el glifo `❯` gana peso.

---

### Frames 0690–0720

Aparece, debajo:

```text
Kivgraph
get_blast_radius
```

En formato técnico discreto: un cuadrado pequeño de accent — la misma forma que
el logo de Kivgraph y que los nodos del grafo posterior — y el nombre del tool.

```text
■ kivgraph / get_blast_radius
```

Sin spinner, sin barra de progreso, sin “thinking…”. Es una llamada a una
herramienta, no un estado de espera.

---

### Frames 0720–0750

El texto `withRetry()` se selecciona dentro del prompt y crece ligeramente, sin
desplazar los caracteres anteriores.

Al mismo tiempo, `withRetry` en el código de arriba recibe exactamente la misma
selección. Es el mismo símbolo en dos sitios, y esa rima es la única conexión
que se dibuja entre el código y el prompt: no hay línea, ni flecha, ni conector.

La cámara empieza a acercarse.

Debe comenzar la transición hacia Three.js.

---

# SCENE 03 — FROM CODE TO GRAPH

### Frames

```text
0750–0820
12.5–13.67 s
```

Primera escena con grafo 3D — pero no un cambio de plató. El mundo de código no
se apaga en el corte: sigue renderizándose debajo, congelado en su último frame,
y sólo después empieza a retirarse hasta quedar en textura.

---

### Frame 0750

El texto:

```text
withRetry()
```

permanece exactamente en la misma posición visual que ocupaba en el prompt.

La capa de prompt se retira. El mundo de código **no**: se queda debajo,
congelado, sosteniendo el corte.

---

### Frames 0750–0780

La palabra deja de comportarse como texto HTML.

Se convierte visualmente en un nodo 3D.

La transición debe ser casi imperceptible.

Debajo, el código sigue quieto en el frame en el que lo dejó la escena 02. A
partir de aquí empieza a alejarse y a perder luz, con su ancla viajando hacia el
centro del frame junto a la cámara 3D, hasta quedar en textura.

El token `withRetry` del código no se borra: se degrada. Pierde el accent y el
campo de selección y vuelve a ser código normal, para que la línea de Go siga
entera.

---

### Nodo central

```text
withRetry()
```

Color:

```text
brand accent
```

El único elemento totalmente iluminado.

Es el origen del mundo: hop 0. Todo lo demás se lee por su distancia a este
punto, y esa distancia es profundidad.

La jerarquía tipográfica que se ve en pantalla la produce sobre todo la
perspectiva: cuanto más lejos del cambio, más pequeña la etiqueta. Sobre eso hay
un único escalón autorizado, mínimo, para que la etiqueta más lejana siga siendo
legible — una etiqueta que no se puede leer no es una afirmación más discreta,
es una afirmación que falta. La jerarquía real vive en la luminancia: un símbolo
exterior está más apagado, no sólo más pequeño.

---

### Frames 0780–0810

La cámara se mueve por primera vez. Hasta aquí ha estado quieta: el corte se
sostiene con el ojo exactamente donde estaba, porque cualquier movimiento durante
la sustitución la delataría. Todo lo tridimensional de la escena empieza después
del corte, no en el corte.

El ojo sale entonces del eje y entra hacia el símbolo. Al dejar el eje, las
placas dejan de verse de frente: aparecen sus cantos, su escorzo y un parallax
distinto por hop. El movimiento no se invierte en ningún momento de la escena.

Antes que cualquier nodo nuevo aparece la **relación**: primero se establece que
hay una dependencia y después aparece quién la tiene.

Ese orden no es decorativo. Kivgraph mide primero una distancia; lo que hay a esa
distancia llega después. El edge precede siempre al nodo al que llega.

---

### Frame 0815

Sale de `withRetry()` el primer edge, hacia el fondo y hacia fuera, buscando un
nodo que todavía no está.

---

### Edge animation

```text
0% ───────── 100%
```

Debe dibujarse desde el nodo que ya está en pantalla hacia el hop siguiente,
alejándose de la cámara. Nunca al revés.

---

### Frames 0820–0850

Primer nodo del hop 1: aparece al final del edge que ya lo estaba señalando.

Label:

```text
Policy.Do()
```

---

### Frames 0720–0870

Segundo edge, hacia el mismo hop: el hop 1 tiene dos nodos y se completa antes de
que el grafo mire más lejos. Los dos hermanos se separan en vertical lo justo
para no tocarse, y sus curvas se comban a lados opuestos para que no se lean como
un solo trazo.

---

### Frames 0820–0860

Tercer edge. Este ya no se queda en el primer hop: sale hasta el hop 2, un paso
más lejos de la cámara.

La cámara acompaña al impacto: no persigue al grafo por la pantalla, avanza en la
misma dirección en la que crece la estructura. El símbolo no tiene que quedarse
en el centro exacto del frame; lo que no puede ocurrir es que algo importante se
salga de él.

Ahora el espectador comprende que el grafo no se lee como una cadena, se lee en
profundidad:

```text
delante         withRetry()
un paso atrás   lo que lo llama
dos pasos       lo que llama a eso
```

---

# SCENE 04 — THE GRAPH EXPANDS

### Frames

```text
0820–1110
13.67–18.5 s
```

---

### Frame 0820

La cámara no se detiene en el límite de escena: viene de la escena 03 en un único
movimiento continuo que no se invierte. Aquí todavía está acompañando al impacto;
la apertura llega después, cuando el ojo se eleva por encima de la cadena y la
deja entera en cuadro.

La escena termina con toda la cadena en el frame y `withRetry()` en su extremo
más cercano, y ese es el encuadre que hereda la escena siguiente.

---

### Frames 0910–0970

Aparecen progresivamente más relaciones.

No todas a la vez, y ninguna antes que el nodo del que sale.

Secuencia:

```text
hop 1   direct caller
↓
hop 2   caller of caller
↓
hop 3   consumer
```

Cada hop se abre con su edge y se puebla después.

---

### Propagación

Debe sentirse causal:

```text
withRetry
   │
   ├──── Policy.Do
   │        │
   │        └──── Client.Charge
   │                 │
   │                 ├──── CheckoutService.PlaceOrder
   │                 └──── ReconciliationJob.Run
   │
   └──── Once
            │
            └──── Client.Refund
                     │
                     └──── RefundHandler.Handle
```

Cada hop debe esperar visiblemente a su padre: ningún nodo se enciende antes que
el nodo desde el que llega su edge. Esa regla no cambia, y es la razón por la que
este árbol importa — es lo único que hace que la propagación se lea como causa y
no como decorado.

El árbol es la topología, no el dibujo. En pantalla cada nivel del árbol es un
paso más hacia el fondo: bajar un hop es alejarse de la cámara. El grafo también
avanza hacia un lado, pero lo que ordena la lectura es la profundidad.

---

### Frames 0950–1050

Surge la etiqueta del repositorio cercano:

```text
payments-api
```

Flota en el aire que su propio grupo deja libre, debajo de él. Nombra una zona;
no etiqueta ninguna caja, porque no hay caja. Y llega cuando esa estructura
cercana ya está completa: primero se ve el código, después se dice de dónde es.

---

### Frames 0980–1080

La cámara se eleva por encima de la cadena y abre.

Y aquí está el momento de la escena: **el segundo repositorio no es un cluster
que asoma por la derecha ni una caja en la que se entra; es un tercer escalón de
profundidad que ya estaba ahí**, detrás de todo lo anterior, y se ve porque la
cámara le ha hecho sitio.

El impacto no cabe en el repositorio donde empezó, y eso es exactamente lo que
hay que entender.

Ningún nodo remoto aparece antes de caber: cada uno espera el frame en el que la
cámara ya lo ha metido dentro del encuadre con margen.

Label:

```text
checkout-service
```

Flota sobre el grupo lejano, en el aire que ese grupo deja libre, y es legible
antes de que terminen los crossings: si no, el grupo remoto aterriza como
geometría en lugar de como un segundo codebase.

---

### Frame 1070

No cruza un edge largo: cruzan tres a la vez. Son los crossings, los tres únicos
edges que salen de `payments-api`, y los tres van hacia el fondo, separándose.

El impacto no se escapa hacia un lado del frame: se escapa hacia el fondo, en
tres direcciones a la vez.

Estos tres edges deben ser visualmente más importantes que los anteriores.

---

### Frames 1020–1070

Los crossings atraviesan:

```text
   Client.Charge()  ●──┬── ●  ReconciliationJob.Run()
                       └── ●  CheckoutService.PlaceOrder()

   Client.Refund()  ●───── ●  RefundHandler.Handle()

   payments-api                   checkout-service
   hop 2            ────────▶     hop 3, un paso más al fondo
```

Tres direcciones, tres nodos, un único límite de repositorio.

---

### Frame 1020

Los tres nodos remotos se activan.

Hold muy breve.

Este es uno de los frames principales del vídeo.

---

### Mensaje implícito

No mostrar todavía texto explicando cross-repo.

Dejar que el espectador lo vea primero.

---

# SCENE 05 — CROSS-REPOSITORY (cortada)

Esta escena existió. Ocupaba 90 frames — 0990–1000 del master anterior — y hacía
dos cosas: giraba la cámara alrededor de la cascada (el ojo se desplazaba 4,2
unidades de mundo, la dirección de vista rotaba 15,5° en yaw y la obliquidad
total pasaba de 15,1° a 22,1° respecto a `-Z`) y, a la vez, restaba, dejando en
cuadro sólo el símbolo, las crossings y los consumidores remotos, con
`Policy.Do()` y `Once()` bajados a `0.22`.

Se cortó por dos razones, y las dos merecen quedar escritas.

**El giro no comunicaba.** El espectador ya había leído la estructura en la 03 y
la 04; moverse alrededor de ella no le añadía nada que pudiera nombrar. Noventa
frames de cámara en movimiento sobre un grafo que ya está entendido son noventa
frames que el vídeo gasta sin decir nada nuevo.

**Y la resta apagaba justo lo que venía después.** `Policy.Do()` y `Once()` son
hop 1: son los dos primeros nodos que enciende la propagación de la 06. Esta
escena los bajaba a `0.22` y el frame siguiente volvía a encenderlos.

Consecuencias sobre el resto de la película:

- todo lo posterior a 0990 se adelanta 90 frames y el master pasa de 1810 a 1720
  frames (22 s);
- la 06 ya no hereda un grafo aislado ni una pose movida: hereda el estado
  asentado completo con el que termina la 04, en el encuadre con el que la 04
  termina — ojo en `(7.0, 3.2, 10.0)` mirando a `(8.0, 0.0, -2.4)`, 15,1° fuera
  de `-Z` — y ese encuadre se mantiene hasta el aplanado de la 07: después de
  0958 nadie explora el grafo, sólo se endereza el rig y, en la 08, se devuelve a
  la pose del match cut;
- la regla de la que venía esta escena sigue en pie y ahora se cumple sola:

```text
No mostrar todavía texto explicando cross-repo.
Dejar que el espectador lo vea primero.
```

Antes de cortarse la escena ya se había cortado su palabra: el cuadro entero se
oscurecía a `0.86` y se leía `Cross-repository.` sobre el velo, centrado, entre
1018 y 1068. Aterrizaba como un subtítulo quemado sobre un plano y no como parte
de la película.

Medido tras el corte, tras el recorte de la 06, tras crecer la 07, tras el pase de
ritmo sobre las escenas 06–08, tras montarse la 09, tras reconstruirse la 09 y tras
fijarse sus cifras: las costuras 0750 y 1250 son idénticas píxel a píxel, la 1110
mide 62,93 dB — sólo antialiasing — y los 2170 frames del master no tienen ni un
frame negro. El barrido marca dos parejas y nada más: 1449/1450, los dos lados del
match cut de la 08, y 1629/1630, el hard cut de la 09. Las dos son escalones, no
picos, y ninguna pretende ser invisible: la primera mide 41,35 dB sobre la región
del símbolo, que es la que el corte sostiene, y 28,69 dB de cuadro completo; la
segunda mide 24,25 dB, que es lo que tiene que medir un hard cut.

La 1629/1630 ha cambiado dos veces: medía 22,30 dB antes de fijarse las cifras y
24,21 dB después, y ahora 24,25 dB con el relevo de la firma. Ninguna de las dos
es mejora ni empeoramiento: la PSNR de un corte es una propiedad de sus dos
frames, y el lado derecho de este corte es justo la tabla, así que cambiar `6.2k`
por `35,961` mueve el número por definición. Que el segundo movimiento sea
insignificante es justo lo que se buscaba — cruzar una línea tenue no ablanda el
corte, y la región que cruza mide `inf`. Las dos cifras de la 1449/1450 no se
comparan entre sí:
una es de región y la otra de cuadro completo.

El número 05 se queda ocupado por este registro y las escenas siguientes
conservan su numeración de storyboard.

---

# SCENE 06 — BLAST RADIUS

### Frames

```text
1110–1250
18.5–20.83 s
```

---

### Frame 1110

El nodo `withRetry()` pulsa una única vez.

No loop.

---

### Frames 1118–1192

El cambio se propaga.

Secuencia temporal:

```text
withRetry
   ↓
direct callers
   ↓
transitive callers
   ↓
remote consumers
```

Los nodos afectados reciben el accent de Kivgraph.

Un hop por ventana, y cada ventana da tiempo a que su paso se vea llegar. Frames
locales, sobre los 140 de la escena:

```text
hop 1   008–030
hop 2   032–056
hop 3   058–082
```

Cada ventana pasa de 18 a 22–24 frames y la separación entre ellas sigue siendo
de dos. Lo que se ensancha no es el gesto sino la lectura: el frente entero
cabía en 60 frames — un segundo justo — y ahora ocupa 74, 1,23 s. Los tres hops
son lo único en la película que afirma que la distancia en hops es la distancia
al cambio, y para afirmarlo tienen que leerse como tres pasos.

---

### Card 2D superpuesta

Aparece a la derecha:

```text
CHANGE IMPACT

7 affected symbols
3 dependency paths
2 repositories
```

Los números deben proceder de un dataset real de demo.

No inventar métricas finales si posteriormente se utiliza otro graph.

Siete, no seis. `withRetry` no está exportada: sólo `package retry` puede
llamarla, así que sus dos llamadores directos viven en `internal/retry` —
`Policy.Do` y `Once`. La regla `internal/` de Go impide además que
`checkout-service` importe `payments-api/internal/...`, de modo que el impacto
necesita un puente público dentro de payments-api, `payments-api/paymentService`,
antes de poder cruzar. Siete es el número más pequeño que satisface las tres
restricciones: seis nunca fue alcanzable, y nadie debe volver a "simplificar" la
cadena hasta ahí.

---

### Animation

Card:

```text
opacity 0 → 1
x +24 → 0
```

Sin rebotes.

Entra en 1176–1198 — local 066–088 —: arranca sobre el último hop y se asienta
seis frames después de que ese hop aterrice, así que la cifra llega detrás de su
prueba y nunca delante.

---

### Frames 1198–1250

La card se asienta en 1198 y cuatro frames después el cuadro deja de cambiar del
todo: es estático de 1202 a 1250 — 49 frames — y la costura 1249 → 1250 es
idéntica píxel a píxel, así que la card cruza entera el corte y se apaga con el
aplanado de la 07.

Esos frames son el motivo de la escena, y se miden. **Dwell** es el tiempo que
algo legible se queda en pantalla *después* de haber terminado de llegar. La card
se queda quieta los 51 frames que le restan a la escena y sigue legible mientras
el aplanado la apaga: **1,47 s** de dwell para sus tres líneas, frente a los
**0,42 s** de la versión de 100 frames.

---

### No hay claim line

Aquí había una frase. Debajo de la card se leía `Exact symbols. Not name
matches.`, y el cuadro se oscurecía con un velo para dejársela.

Se cortó: no se leía como un resultado y no se explicaba sola. Con ella se fue
el velo, que existía únicamente para oscurecer el cuadro bajo esa frase, y con
el velo se fue el `0.72` que la escena 07 heredaba de él — el único que le
quedaba.

La card se queda sola. Sus tres valores se leen contra el grafo sin oscurecer,
que es exactamente lo que §7 pide para los valores de una card de métricas: el
grafo debajo de `7 affected symbols` es la prueba de la cifra.

Con la frase y el velo se fue lo único que seguía moviéndose en la cola de la
escena. Medido sobre el render de entonces: el cuadro dejaba de cambiar en el
frame local 78 y los 41 frames restantes eran idénticos píxel a píxel, un tercio
de la escena convertido en imagen congelada. Por eso la escena se recortó de 120
a 100 frames.

Ese recorte estaba bien medido y mal argumentado: contaba frames congelados, no
tiempo de lectura. Con 100 frames la card se asentaba con 25 frames por delante
— 0,42 s para tres líneas de cifras —, y una imagen quieta delante de alguien que
todavía está leyendo no es tiempo perdido: es la escena. La escena pasa a 140
frames, 1110–1250, 2,33 s, y el reposo queda en 49 frames estáticos con 1,47 s de
dwell sobre la card. La costura 1249 → 1250 es idéntica píxel a píxel; el corte
hacia la 07 sigue siendo invisible.

---

# SCENE 07 — NAME ≠ SYMBOL

### Frames

```text
1250–1450
20.83–24.17 s
```

---

### Transición

El grafo se aplana.

La cámara vuelve frontal.

Split screen.

---

## Lado izquierdo

Label:

```text
Name matching
```

Aparecen los símbolos que comparten el nombre, cada uno con el lenguaje y la
ruta donde está declarado:

```text
TypeScript
libraries/library-shared/src/utils/retry.ts
withRetry()

Go
services/api-db-go/internal/infrastructure/postgres/retry.go
withRetry()
```

Todos quedan resaltados al buscar únicamente por nombre. El resaltado es el azul
de selección del editor, **no** el accent de marca: en este vídeo el accent
significa *semánticamente verdadero*, y pintar falsos positivos con él diría lo
contrario de lo que la escena argumenta.

Pequeño:

```text
2 matches
```

**Dos y no siete.** La versión anterior de esta escena mostraba siete contextos
(`payments`, `http`, `jobs`, `utils`, `client`, `worker`, `tests`) inventados
para la ocasión. Estos dos son reales, del benchmark publicado
(`kivgraph/benchmarks/graph-tools-comparison/results.json`), y dos es lo que el
corpus contiene. Un vídeo que vende exactitud no puede ilustrarla con un fixture
fabricado: siete call sites falsos serían una imagen más fuerte de una
afirmación más débil. Si alguna vez se quiere una demostración de siete, la ruta
honesta es un fixture real y compilable documentado como demo, no un decorado.

---

## Lado derecho

Label:

```text
Semantic resolution
```

El símbolo original aparece conectado únicamente con sus relaciones reales.

Sólo:

```text
1 symbol
2 real relationships
```

**Dos y no tres.** `3 real relationships` no existía en ningún sitio: el dataset
da a `withRetry` exactamente dos aristas que lo alcanzan, `Policy.Do()` y
`Once()`. Ambos números salen contados de `src/data/graphDemo.ts`, no escritos a
mano. Dos consecuencias buenas: desaparece la colisión con los `3 dependency
paths` de la escena 06, y la asimetría vuelve a ser la que la escena de verdad
afirma — dos cosas que sólo comparten el nombre, ninguna de las cuales es el
símbolo, contra el único que sí lo es.

La columna derecha muestra un subconjunto del grafo, y eso no es una renuncia
sino el argumento: su vacío es el mensaje. Tampoco cabría de otro modo — el
grafo entero mide dieciséis unidades de mundo y en la mitad del cuadro cada
etiqueta caería a unos 11 px.

---

### Frames 1250–1348

Aquí ocurre lo que la escena construye: el aplanado, la vuelta a frontal y las
dos columnas. Frames locales, sobre 200:

```text
aplanado           000–048
divisor            014–052
label izquierdo    034–054
fila 1             042–062
fila 2             054–074
label derecho      064–084
contador izquierdo 070–090
contador derecho   078–098
```

Cada ventana mide 20 frames y van separadas 12; antes medían 18 y se separaban
10. La comparación termina de construirse en el frame local 98, y el orden dentro
de cada columna no cambia: primero el label, luego lo que el label encuentra y
sólo al final la cifra que lo cuenta.

---

### Frames 1348–1408

De 1348 en adelante no se va nada del cuadro durante sesenta frames — un segundo
entero. Es el tiempo de lectura de las dos columnas, y es la razón por la que
esta escena creció primero de 150 a 180 frames y ahora de 180 a 200.

Los 20 frames nuevos no se van a este reposo: van 13 a la construcción — las
ventanas de 18 a 20 frames y su separación de 10 a 12, así que la comparación
cierra en el local 98 y no en el 85 — y 7 al asentamiento antes del corte. El
segundo de lectura se queda exactamente donde estaba, en sus 60 frames.

Lo que sí cambia es que el reposo ya no lleva nada dentro. Antes corría por
debajo la rampa de opacidad de la columna izquierda y el hold byte-idéntico
quedaba reducido a los últimos treinta y cinco frames; medido ahora, el cuadro es
estático de 1344 a 1408 — 65 frames, cinco más que los sesenta nominales, porque
la cola de la última ventana ya no mueve píxeles. El segundo de lectura es un
still completo y los contadores de las dos columnas tienen **1,00 s** de dwell.

Cuando la rampa cierra, el izquierdo queda apagado, el derecho permanece claro, y
esa asimetría es todo lo que la escena tiene que sostener.

---

### No hay frase en el centro

Aquí había una frase. `A name is not a symbol.` entraba centrada y grande sobre
un velo, con el grafo ya aplanado detrás.

Se cortó por lo mismo que la claim line de la 06: nombraba lo que las dos
columnas ya estaban demostrando, y una frase que repite el cuadro se lee como un
subtítulo quemado sobre un plano.

Con ella se fue su velo. La escena pasó un tiempo heredando el `0.72` de la 06 y
gastándolo a lo largo del aplanado; cortada también esa claim line, no queda
nada que heredar y la escena no lleva velo en ningún frame. El argumento lo
sostienen las dos columnas: la izquierda pierde opacidad, la derecha permanece
clara, y esa asimetría es la frase.

---

### Frames 1408–1436

Todo sale en una sola ventana, y sale más tarde. Los contadores de la columna
derecha, los nodos y los tubos, y el chrome de la comparación se van juntos en
veintiocho frames: el local 158–186, que arranca sesenta frames después de que la
comparación termine de construirse.

Antes salían en tres ventanas distintas: los contadores en el local 112–130, los
nodos y los tubos en el 112–140, el chrome en el 118–142. El cuadro se vaciaba en
tres oleadas, y eso no se lee como una escena que termina sino como piezas que
alguien va apagando una detrás de otra. Una sola ventana, para las tres cosas.

---

### Frames 1436–1450

Hold. La ventana cierra catorce frames antes del corte y el cuadro es idéntico
píxel a píxel de 1436 a 1449, así que la forma que el match cut de la 08 necesita
llega al corte en reposo. Eran siete frames; son catorce, que es la mitad de los
20 que gana la escena: el frame sobre el que se corta es el único que no admite
prisa.

---

# SCENE 08 — RETURN TO AGENT

### Frames

```text
1450–1630
24.17–27.17 s
```

---

### Frame 1450

El grafo se contrae hacia el nodo seleccionado.

Match cut hacia la capa de prompt de la escena 02, reconstruida alrededor del
mismo token `withRetry()`.

El retorno del rig ocupa los frames locales 000–024 y el cruce de capas los
024–030: a partir de 1120 la escena es prompt y respuesta, y ya no hay canvas que
sostener.

---

### Respuesta

Aparece:

```text
Changing withRetry() affects:

7 symbols
across 2 repositories.

checkout-service consumes the symbol through
payments-api/paymentService.
```

No debe escribirse toda la respuesta letra a letra.

Entrar por bloques.

Tres bloques, frames locales:

```text
Changing withRetry() affects:         030–046
7 symbols / across 2 repositories.    046–062
checkout-service consumes the symbol
through payments-api/paymentService.  064–080
```

---

### Frames 1530–1544

Pequeño label:

```text
Answered with Kivgraph
```

Entra en el local 080–094. De 1424 a 1510 no se mueve nada — medido, 87 frames
estáticos desde 1543 — y de ahí se corta a la 09.

---

### Por qué 180 frames y no 90

La queja era que las últimas escenas iban demasiado rápidas, y aquí se pudo medir
en lugar de discutir. La tercera línea de la respuesta —
`checkout-service consumes the symbol through payments-api/paymentService.` — son
73 caracteres, y en la versión de 90 frames acababa de entrar con 34 frames por
delante: **0,57 s**, o **129 caracteres por segundo**. El texto técnico en
pantalla se lee entre **25 y 40 caracteres por segundo**. El problema no era que
la escena fuese rápida: era que esa frase era ilegible, y es la frase que nombra
el paquete por el que el impacto viaja — lo único que la respuesta añade sobre
las cifras que el espectador ya ha visto.

Con 180 frames, el dwell de cada cosa medido hasta el final de la escena:

```text
Changing withRetry() affects:      2,23 s
7 symbols / 2 repositories         1,97 s
la frase del path                  1,67 s   →  44 caracteres/segundo
Answered with Kivgraph             1,43 s
```

La regla que queda escrita: **una frase se queda en pantalla, después de haber
terminado de entrar, el tiempo que hace falta para leerla a 40 caracteres por
segundo como mínimo.** Si no cabe, la frase es demasiado larga o la escena
demasiado corta; lo que no se puede hacer es dejarla pasar.

---

# SCENE 09 — BENCHMARK

### Frames

```text
1630–1880
27.17–31.33 s
```

---

### Nota de resolución — 2026-08-26

La escena se reconstruyó **por segunda vez el mismo día**, por dirección de arte
directa: una **tabla comparativa** con dos brazos como cabeceras de columna y
cuatro medidas como filas. La estructura, el movimiento, la geometría y el ritmo
viven en `docs/scenes/07-benchmark.md`.

Las cifras están **resueltas** y este documento ya las escribe. El juego elegido es
el de **29 preguntas** del registro legible por máquina del benchmark upstream
(`kivgraph/benchmarks/graph-tools-comparison/results-all.json`, bloque `aggregate`,
commit `954b9eb`), sobre los 37 repositorios del corpus. Se eligió porque es el
único juego que un fichero de resultados sostiene entero, y entero es el requisito
de una escena cuyo argumento es la exactitud.

El juego de 7 preguntas queda abandonado. Ningún fichero de resultados registra a
kivgraph en `7 / 7`: los pases en disco leen `4 / 7` y `6 / 7`. El `7 / 7` venía de
la prosa de cierre de `remeasure.md`, que lo atribuye a `results-0.3.6.json`; los
tres pases de ese documento escribieron al mismo nombre de fichero, cada uno
sobrescribió al anterior, y la ejecución que lo sostenía ya no existe. Una cifra
que no se puede volver a leer no se proyecta.

Los bloques de beats, el copy y la tabla de dwell que siguen describen **la escena
que hay hoy**. El timeline sigue fijado: 250 frames, 1630–1880, el still en 1708,
la tabla asentada desde 1806 y byte-idéntica durante 67 frames desde 1802, y el fade en
1868–1880.

---

### Frame 1630

Hard cut limpio.

Background.

Sin grafo.

Sin terminal.

Sin chrome de producto.

Sólo tipografía.

---

### El relevo de la firma

El corte es duro, pero no cae en el vacío. La línea de atribución de la escena
anterior — `Answered with Kivgraph` — sigue en pantalla en el frame 1630, en su
posición exacta, y se retira mientras entran las cabeceras de columna.

La palabra `Kivgraph` pasa de ser la firma de la respuesta a ser la cabecera de
la medición: 17 px abajo a la izquierda, 18 px arriba a la derecha. Es la
bisagra del argumento dicha sin una frase — «Kivgraph respondió esto» se
convierte en «y esto es lo que costó».

No es un fundido. El panel, el prompt y los tres bloques de respuesta
desaparecen de golpe, y el cuadro completo sigue midiendo como un corte duro.
Lo único que cruza es la firma, y sólo lo suficiente para ser reemplazada. Las
seis condiciones del frame 1630 se mantienen intactas: la atribución **es**
tipografía.

Existe por una razón medida, no estética: la escena anterior pasa sus últimos 87
frames congelada — ahí es donde se lee la respuesta, así que no se puede
recortar — y esta escena abría con el 34% de su tinta final. Un corte duro de un
cuadro congelado a un cuadro casi vacío se lee como que la película se ha
parado, no como un cambio de registro.

---

### Es una tabla

Implementada como **tabla**, por dirección de arte directa: la medida a la
izquierda y una columna por brazo a la derecha, cada cifra alineada a la derecha
contra el borde de su columna. No es un valor con su etiqueta debajo.

Las cabeceras nombran los dos brazos y las filas nombran las medidas:

```text
                kivgraph    grep + read
tokens          35,961      267,980
exact answers   28 / 29     28 / 29
precision       1.000       1.000
recall          0.996       0.989
```

`37 repositories` y `published benchmark` dejan de ser fila y etiqueta y pasan a
ser una sola nota de procedencia debajo de la tabla:

```text
37 repositories · published benchmark
```

El recuento de preguntas no está en la nota a propósito: ya está en pantalla, en el
denominador de `28 / 29`. Y la nota es la línea más apretada de la escena, la que
fija el suelo de caracteres por segundo, así que no se le añade nada que ya se lea
dos filas más arriba.

`precision` se escribe con tres decimales para igualar la profundidad de `recall`
en la misma columna. Con dos, `recall` leería `1.00` frente a `0.99`: le regalaría
a kivgraph un pleno que no se ha ganado y doblaría el hueco aparente entre los dos
brazos. Los tokens van exactos y con separador de millares — `35,961`, nunca
`36k` —, porque redondear es cambiar el valor.

Una sola regla fina, del ancho de la tabla, debajo de las cabeceras. Sin bordes:
una tabla con bordes es la captura de una hoja de cálculo.

La nota de procedencia se separa de la tabla bastante más que las filas entre sí.
A la separación de una fila se leía como una quinta fila que había perdido su
cifra.

La fila de coste es la que lleva el argumento: `267,980` contra `35,961`, **7,45×**
por la misma respuesta. Domina por su sitio en la tabla y por su desproporción, y
**nunca por color**: nada está coloreado para sostener la tesis, así que la
comparación tiene que sobrevivir en escala de grises.

La geometría exacta — columnas, coordenadas, escala tipográfica, ritmo vertical y
centrado óptico — vive en `docs/scenes/07-benchmark.md` § Visual composition, no
aquí.

---

### Frames 1632–1692

Entran las cabeceras. Los dos brazos se nombran antes de que haya una sola cifra
que atribuirles:

```text
kivgraph    grep + read
```

---

### Frames 1560–1620

Entra la regla, del ancho de la tabla. Separa las cabeceras del cuerpo y es lo
único que dibuja la tabla.

---

### Frames 1644–1708

Primera fila, la de coste:

```text
tokens          35,961      267,980
```

Entra pisando la regla a propósito: es la fila que lleva el argumento y no espera
turno detrás de las otras tres. Queda completa en 1708, justo antes del still
clave.

---

### Frames 1712–1732

Segunda fila:

```text
exact answers   28 / 29     28 / 29
```

Las dos iguales, y eso es lo que hace que la primera signifique algo: la misma
respuesta, a 7,45× el coste. Sin esta fila, `35,961` sólo diría que kivgraph leyó
menos.

---

### Frames 1736–1756

Tercera fila:

```text
precision       1.000       1.000
```

---

### Frames 1760–1780

Cuarta fila:

```text
recall          0.996       0.989
```

Las cuatro filas entran igual: un fundido con un asentamiento corto hacia arriba.

---

### Frames 1786–1806

Aterriza la nota de procedencia, debajo de todo y la última:

```text
37 repositories · published benchmark
```

Una nota de procedencia se lee después de lo que avala.

---

### Frames 1806–1868

Reposo. La tabla asentada es byte-idéntica durante **67 frames**, y es donde se
leen las ocho cifras.

El bloque queda centrado en el cuadro, y las cifras alinean por la derecha contra
el borde de su columna.

---

### Frames 1868–1880

Fade out. La tabla entera se va junta.

---

### Por qué 210 frames y no 120

La misma medición que el pase de ritmo de 2026-08-25: **dwell**, el tiempo que
algo legible se queda en pantalla después de haber terminado de llegar. Con los
120 frames dibujados, la última afirmación se asentaba con 10 frames por delante:
**0,17 s**. Con 170 la escena ya respiraba; la reconstrucción en tabla pidió 40
más, porque pasó de cuatro filas a cabeceras, cuatro filas y nota de procedencia.

Con 210, medido en caracteres por segundo contra el presupuesto de 25–40 al que se
lee texto técnico en pantalla:

```text
cabeceras                                6,5
tokens                                   7,1
exact answers                           11,9
precision                               10,2
recall                                  10,9
37 repositories · published benchmark    35,8
```

La nota de procedencia es la fila más apretada de la escena y la que fija el suelo:
37 caracteres, y aun así entra dentro del presupuesto. El resto va holgado, que es
lo que tiene que pasar cuando hay ocho cifras que se leen comparándolas de dos en
dos.

---

### Nota visual

Nada de gráficos de barras enormes.

Nada de confetti.

Nada de:

```text
90% BETTER!!!
```

Los números deben hablar solos.

Y nada de contadores que suben. Un frame intermedio de un contador muestra un
número que no es el benchmark publicado — eso es un fallo de integridad, no de
gusto — y contar es justo el gesto de «mira qué impresionante» que prohíbe la
sección 30. Los valores se guardan como cadenas y no como números: `35,961` no es
`35961` formateado, ni `1.000` es `1` con relleno, porque formatear un número
dejaría que una edición futura cambiara la precisión, y cambiar la precisión es
cambiar el valor. Con `recall` a dos decimales la tabla diría `1.00` frente a
`0.99`, que es un pleno que kivgraph no se ha ganado.

---

# SCENE 10 — BRAND REVEAL

### Frames

```text
1880–2050
31.33–34.17 s
```

---

### Frame 1880

Todo desaparece.

Negro.

---

### Frame 1890

Aparece un único nodo.

---

### Frames 1890–1930

Pequeñas líneas empiezan a llegar desde fuera del frame hacia ese nodo.

```text
↘
 → ● ←
↗
```

---

### Frames 1620–1950

Las relaciones convergen formando una composición inspirada en el lenguaje visual de Kivgraph.

No hacer literalmente un grafo como logo si no corresponde con el logotipo actual.

La animación simplemente sirve como transición.

---

### Frame 1950

Aparece:

# kivgraph

Minúscula, no `Kivgraph`. El lockup real es el wordmark mono en minúscula --
`landing/src/components/landing/TopBar.astro` y `Footer.astro` lo componen así --
y la película ya lleva las dos formas con una regla: la prosa toma la mayúscula
(`Answered with Kivgraph`, la firma de la 08) y un identificador toma la
minúscula (la cabecera `kivgraph` de la tabla de la 09). El match cut de
1629/1630 pasa la palabra de un registro al otro, así que el reveal en minúscula
rima con esa cabecera en vez de estrenar un tercer registro en el último plano.

Corregido el 2026-08-26 al implementar la escena; este documento decía
`Kivgraph`.

---

### Frame 1560

Debajo:

# Exact code intelligence for coding agents.

---

# SCENE 11 — CTA

### Frames

```text
2050–2170
34.17–36.17 s
```

---

### Frames 2050–2080

Aparecen integrations:

```text
Claude Code · Codex · OpenCode · Oh My Pi
```

Opcionalmente otras compatibles si hay espacio. `Oh My Pi` es una de ellas y
entró el 2026-08-26 por dirección de arte directa: la línea mide 511 px, el 27 %
del cuadro, y sobra sitio. El quinto cliente que el producto soporta, `Claude
Desktop`, se queda fuera — es el único target de user scope y sin skill local, o
sea el más estrecho de los cinco.

Los rótulos son los del producto, no los del flag: `Oh My Pi`, no `oh-my-pi`.

---

### Frame 2000

CTA:

```text
github.com/luqueee/kivgraph
```

o dominio oficial:

```text
kivgraph.dev
```

---

### Frame 1620

Instalación, si se decide mostrarla:

```bash
curl -fsSL ... | sh
```

Sólo si la línea permanece suficientemente corta.

Si resulta visualmente ruidosa:

no mostrarla.

Priorizar:

```text
kivgraph.dev
```

---

### Frames 2110–2170

Hold completo.

No seguir animando.

Debe haber aproximadamente un segundo final donde el usuario pueda:

- leer;
- recordar el nombre;
- localizar la URL.

---

# 17. Música

La pieza debe funcionar perfectamente **sin audio**.

Esto es importante para:

- Reddit;
- X;
- GitHub;
- autoplay;
- landing.

Si se añade música:

```text
electronic
minimal
technical
low tempo
restrained
```

No:

- epic trailer;
- corporate inspirational;
- dubstep;
- cyberpunk.

---

# 18. Sound design

Opcional pero recomendable.

Utilizar sonidos mínimos:

### Typing

Muy bajo.

### Tool invocation

```text
click digital muy corto
```

### Edge resolve

Pequeño:

```text
tick
```

### Cross-repository connection

Un sonido ligeramente más profundo.

### Blast radius

Pequeña secuencia:

```text
tick
tick
tick
```

### Logo

Impacto muy suave.

El sonido nunca debe ser necesario para comprender el vídeo.

---

# 19. Dataset del grafo

No generar nodos aleatorios durante render.

Crear dataset estático:

```ts
export const graphDemo = {
  repositories: [...],
  nodes: [...],
  edges: [...],
};
```

La forma del dataset de demo está fijada:

```text
8 nodes          1 selected + 7 affected
7 edges          3 cruzan el límite de repositorio
2 repositories
```

Los edges se almacenan en la dirección real de llamada, `caller → callee`. La
animación de blast radius recorre el sentido opuesto — símbolo cambiado →
llamadores afectados — y esa inversión pertenece a la escena, nunca al dataset.

Cada node:

```ts
type GraphNode = {
  id: string;
  label: string;
  repository: string;
  kind: "function" | "method" | "type" | "module";
  position: [number, number, number];
};
```

Cada edge:

```ts
type GraphEdge = {
  from: string;
  to: string;
  kind: "calls" | "imports" | "depends";
};
```

Todas las posiciones deben ser deterministas.

No utilizar physics simulation durante el render.

---

# 20. Layout del grafo

La regla de layout está fijada: **la distancia en hops es profundidad**. Cada hop
desde el símbolo cambiado da un paso hacia un lado y un paso hacia el fondo, de
modo que la distancia al cambio es la distancia a la cámara. La forma no se
dibuja alrededor de nada: la produce la perspectiva.

Se construyeron dos layouts antes de este. Uno de izquierda a derecha se leía
como un flowchart. Otro de anillos concéntricos se leía como un radar: los
anillos eran el objeto más ruidoso del frame, había que deformarlos para que
cupieran en 16:9, y la primera pregunta del espectador era qué medían los
círculos en lugar de qué decía el grafo. Los dos codificaban el número de hops en
una **forma dibujada**; aquí está codificado en la posición, y no hay nada que
dibujar.

El eje vertical sólo separa hermanos, y lo justo: un abanico más ancho reparte el
grafo por el frame y lo vuelve a aplanar en diagrama.

Ninguna coordenada se dibuja a mano: se busca. Se barre el layout contra las
métricas reales de las etiquetas, proyectadas en cada frame del recorrido de
cámara, y se rechaza cualquier candidato en el que dos etiquetas se toquen, una
etiqueta se salga del frame, un edge cruce una etiqueta que no conecta, o el
segundo repositorio se vea antes de que la cámara le haya hecho sitio.

Si se quiere utilizar un algoritmo de layout:

ejecutarlo previamente.

Guardar el resultado.

```text
layout algorithm
       ↓
precompute
       ↓
static coordinates
       ↓
Remotion
```

No:

```text
Remotion
   ↓
force simulation every render
```

Cada frame debe ser reproducible.

---

# 21. Regla crítica de animación Three.js

No utilizar:

```tsx
useFrame(() => {
  object.position.x += ...
});
```

Todas las posiciones deben derivarse del frame:

```tsx
const frame = useCurrentFrame();

const x = interpolate(frame, [0, 60], [startX, endX]);
```

El estado visual debe ser:

```text
state = f(frame)
```

Nunca:

```text
state = previousState + delta
```

---

# 22. Graph animation state

Crear un estado calculado por frame:

```ts
type GraphVisualState = {
  camera: {
    position: [number, number, number];
    target: [number, number, number];
  };

  nodes: Record<
    string,
    {
      opacity: number;
      scale: number;
      active: number;
    }
  >;

  edges: Record<
    string,
    {
      opacity: number;
      progress: number;
      active: number;
    }
  >;
};
```

Después:

```ts
getGraphState(frame);
```

devuelve todo el estado visual.

Esto permite depuración precisa.

---

# 23. Componentes Three.js

```text
three/
├── projection.ts
├── graphFrame.ts
├── graphState.ts
├── CameraRig.tsx
├── GraphNode.tsx
└── GraphEdge.tsx
```

No hay `RepositoryCluster.tsx`, ni ningún otro componente que dibuje un
repositorio: no hay geometría de repositorio que dibujar. Tampoco hay
`RepositoryLabel.tsx` — las etiquetas de repositorio son texto, colocado por la
misma proyección que la geometría, igual que las de los nodos. La luz vive dentro
de la escena, no en un `GraphLighting.tsx`: son dos luces y ninguna sombra.

El reparto es: `projection.ts` proyecta el mundo a pantalla y es lo que mantiene
de acuerdo al texto y a la geometría; `graphFrame.ts` fija el contrato espacial
(dónde se ancla el grafo, cuánto mide su tipografía, cómo se presenta cada hop);
`graphState.ts` es el estado por frame y el recorrido de cámara; `CameraRig.tsx`
es un ojo y un punto al que mira; `GraphNode.tsx` es una placa extruida y
`GraphEdge.tsx` un tubo.

---

# 24. Componentes UI

```text
components/
├── CodePlane.tsx
├── CodeWorld.tsx
├── AgentPrompt.tsx
├── MetricCard.tsx
├── BenchmarkMetric.tsx
├── BrandLogo.tsx
└── RepositoryBadge.tsx
```

No hay `Terminal.tsx`. Las escenas 02 y 08 no dibujan una ventana de terminal:
`AgentPrompt.tsx` es la capa mínima — regla, glifo, línea, invocación — y es
quien fija la geometría del token `withRetry()` que consumen las escenas 03 y
08. La invocación de tool vive dentro de ese mismo componente en lugar de en un
`ToolInvocation.tsx` propio: es una línea, no una pieza reutilizable.

`CodeWorld.tsx` es la única fuente de verdad espacial de las escenas 01–02.

`BenchmarkMetric.tsx` es una fila de comparación y no un valor con su etiqueta
debajo: la etiqueta a la izquierda y una cifra por columna, cada una alineada a la
derecha contra el borde de su columna. Es dueño de la escala tipográfica y de la
geometría de columnas — exporta `tableGrid` —, así que
quien lo usa nunca le pasa un tamaño de fuente. La escena 09 no hereda
`MetricCard`: no tiene grafo detrás contra el que afirmar nada, así que su
superficie es la tabla comparativa sobre el background y una sola regla.

---

# 25. Escenas Remotion

```text
scenes/
├── ColdOpenScene.tsx
├── IntentScene.tsx
├── SymbolScene.tsx
├── AgentScene.tsx
├── GraphRevealScene.tsx
├── BlastRadiusScene.tsx
├── SemanticScene.tsx
├── AgentAnswerScene.tsx
├── BenchmarkScene.tsx
├── BrandScene.tsx
└── OutroScene.tsx
```

`ColdOpenScene` no lleva número: no forma parte de la historia, va delante de
ella. Ver `docs/scenes/cold-open.md`.

---

# 26. Timeline

Copiado de `src/Composition.tsx`, que es el único sitio donde viven los límites
globales. Si los dos no coinciden, manda el archivo.

```tsx
<>
  <Sequence name="Cold Open" durationInFrames={120}>
    <ColdOpenScene />
  </Sequence>

  <Sequence name="00 Intent" from={120} durationInFrames={300}>
    <IntentScene />
  </Sequence>

  <Sequence name="01 Symbol" from={420} durationInFrames={120}>
    <SymbolScene />
  </Sequence>

  <Sequence name="02 Agent" from={540} durationInFrames={210}>
    <AgentScene />
  </Sequence>

  <Sequence name="03 Graph Reveal" from={750} durationInFrames={360}>
    <GraphRevealScene />
  </Sequence>

  <Sequence name="04 Blast Radius" from={1110} durationInFrames={140}>
    <BlastRadiusScene />
  </Sequence>

  <Sequence name="05 Semantic Resolution" from={1250} durationInFrames={200}>
    <SemanticScene />
  </Sequence>

  <Sequence name="06 Agent Answer" from={1450} durationInFrames={180}>
    <AgentAnswerScene />
  </Sequence>

  <Sequence name="07 Benchmark" from={1630} durationInFrames={250}>
    <BenchmarkScene />
  </Sequence>

  <Sequence name="08 Brand" from={1880} durationInFrames={170}>
    <BrandScene />
  </Sequence>

  <Sequence name="09 Outro" from={2050} durationInFrames={120}>
    <OutroScene />
  </Sequence>
</>
```

`masterFrames = 2170`. Los `premountFor` / `postmountFor` se omiten aquí: son un
arreglo del preview, no una decisión narrativa, y están explicados en el propio
archivo.

---

# 27. Transiciones

Evitar transiciones genéricas.

Nada de:

```text
wipe
spin
page curl
zoom blur constante
```

Las transiciones deben proceder del propio contenido.

Ejemplos:

### Code → Graph

```text
symbol text
↓
same symbol as graph node
```

### Graph → Semantic comparison

```text
camera rotates to front
↓
graph flattens
↓
split view
```

### Graph → Agent

```text
graph contracts into selected symbol
↓
match cut into prompt text
```

### Metrics → Logo

```text
fade
↓
silence
↓
brand reveal
```

---

# 28. Frames críticos a revisar manualmente

Durante desarrollo revisar específicamente:

```text
0000
0034
0058
0102
0119

0120
0128
0174
0236
0274
0320
0402
0419

0420
0448
0475
0500
0520
0539

0540
0570
0600
0630
0675
0690
0720
0749

0750
0780
0810
0870

0900
0960
1070
1100

1110
1150
1198
1249

1250
1298
1344
1408
1436
1449

1450
1512
1544
1629

1630
1708
1806
1868
1879

1880
1930
1960

2050
2110
2169
```

Los frames:

```text
0058
0500
1109
1198
1344
1544
1708
1960
```

deben funcionar incluso como capturas estáticas. La lista queda reconciliada con
`docs/scenes/README.md` → **Key frames**, que es donde cada uno está definido
como una *definición* y no como un número: `1100` era la propuesta antigua para
la 03 y el frame que se entrega es `1109`, su último frame; `1544` faltaba.

---

# 29. Key visual frames

## Frame ~0058

```text
35,961
kivgraph · tokens

267,980
grep + read

Same exact-answer count.
```

El cold open completo: las dos cifras, sus dos etiquetas y la línea de paridad,
todo asentado. Es el primer frame en el que la línea de paridad ha terminado de
entrar, así que un retime lo recalcula desde su ventana y no lo copia.

Sirve para el mismo sitio que la tabla del final, pero antes: es la promesa, no
la prueba. Sin metodología, sin precision, sin recall y sin corpus — eso está en
`## Frame ~1708`, y que las dos imágenes no digan lo mismo es lo que impide que
la película parezca repetirse.

El **poster frame** no es este sino `0000`, que lleva sólo `35,961` y su
etiqueta. Está descentrado a propósito: centrar el bloque de un solo dato
descentraría la composición asentada, que es la imagen que la escena sostiene
44 frames. Un still que lo necesite centrado se recorta.

Usable para landing, README y social.

---

## Frame ~0500

```text
Code field +
withRetry accented +
semantic mark under it
```

Sin una sola palabra sobre el código, aparte del caption de ruta.

Usable como thumbnail.

---

## Frame ~1109

```text
The cascade complete, seen from above it.
Three crossings running into checkout-service.
```

Usable para social.

---

## Frame ~1198

```text
Blast radius +
impact card.
```

Local 88 de la escena 06: el frame en el que la card acaba de entrar y se
asienta. De ahí el cuadro no vuelve a cambiar, así que el still se sostiene 49
frames.

La card va sola. No hay claim line debajo ni velo detrás: sus tres valores se
leen contra el grafo sin oscurecer.

Usable en README.

---

## Frame ~1344

```text
Name matching vs Semantic resolution
```

Local 94 de la escena 07: primer frame de su reposo. El cuadro es estático de
1344 a 1408, el segundo entero que las dos columnas necesitan para leerse.

Sin frase en el centro. El still es la asimetría de las dos columnas, y es lo
único que tiene que sostener.

Usable para marketing técnico.

---

## Frame ~1708

```text
                kivgraph    grep + read
tokens          35,961      267,980
```

Local 78 de la escena 09. La definición del frame es estructural y no un número:
es el primer frame en el que la **fila de coste está completa y legible con sus dos
brazos ya nombrados encima**. Eso es lo que le permite explicarse sola como imagen
suelta, que es justo lo que la versión anterior de la escena no conseguía —
mostraba dos cifras desnudas sin decir de quién era cada una. La fila entra en una
sola ventana y se asienta antes de 1708, así que no hay que adelantar nada dentro
de su rampa para que el frame se lea. Si la escena vuelve a retimarse, el número se
recalcula desde esa definición y no se arrastra.

El compromiso es vertical y sobrevive a la reconstrucción: en 1708 lo que hay en
pantalla queda **por encima del centro del cuadro**, porque el bloque está
maquetado para cabeceras, cuatro filas y su nota de procedencia, y todo lo que va
debajo de la fila de coste está todavía vacío. Es deliberado y no se arregla con
layout: recolocarlo descentraría la tabla asentada, que es la imagen que la
película sostiene durante 67 frames estáticos. Un still que lo necesite centrado
ópticamente se recorta, no se vuelve a maquetar.

Usable para benchmark launch.

---

# 30. Lo que el vídeo NO debe hacer

No utilizar frases como:

```text
Revolutionize your codebase.
Supercharge your AI.
The future of development.
10x your productivity.
AI-powered intelligence.
```

Kivgraph debe comunicar autoridad técnica mediante evidencia.

---

No hacer:

```text
20 nodos moviéndose todo el rato
40 partículas
cámara orbitando
bloom
motion blur extremo
neón
```

---

No hacer:

```text
logo
features
features
features
CTA
```

Debe haber historia.

---

# 31. Sensación final

El espectador debería terminar el vídeo pensando:

> “Ah. Esto permite al agente saber qué relación real existe entre símbolos, incluso entre repositorios.”

y después:

> “Quiero probarlo.”

No:

> “Qué grafo 3D más bonito.”

---

# 32. Frases permitidas

Prioridad alta:

```text
What breaks if I change withRetry()?
```

```text
Cross-repository.
```

```text
Exact symbols. Not name matches.
```

```text
Same answer. Less context.
```

```text
Same exact-answer count.
```

```text
Where do we retry failed requests?
```

```text
You know what the code does.
Not where it lives.
```

```text
Tells your agent where to read
```

```text
A name is not a symbol.
```

```text
Exact code intelligence for coding agents.
```

---

# 33. Frases opcionales

Para variantes futuras:

```text
Know the impact before the change.
```

```text
See what depends on what.
```

```text
Your repositories aren't isolated.
```

```text
Code relationships your agent can trust.
```

```text
Give coding agents structural context.
```

---

# 34. Resultado esperado

La primera versión debe entregar:

```text
36.17 s master
1920×1080
60 FPS
H.264
```

Más:

```text
poster frame
social thumbnail
silent autoplay compatible
```

Debe poder reproducirse correctamente:

```text
with audio
without audio
loop disabled
small embedded player
full-screen
```

---

# 35. Prioridad de implementación

## P0

- timeline;
- typography;
- code editor;
- terminal;
- graph dataset;
- Three.js scene;
- camera;
- cross-repo reveal;
- blast radius;
- semantic comparison;
- benchmark;
- outro.

## P1

- polished graph materials;
- sound design;
- subtle DOF;
- improved transition between HTML and Three.js;
- repository labels.

## P2

- particles;
- advanced postprocessing;
- extra decorative animations.

P2 debe omitirse si pone en riesgo claridad o rendimiento.

---

# 36. Regla final

Cada animación debe responder al menos a una de estas preguntas:

```text
¿explica el producto?
¿dirige la atención?
¿refuerza la marca?
¿mejora la transición narrativa?
```

Si la respuesta a las cuatro es:

```text
no
```

eliminar la animación.

Kivgraph no necesita parecer espectacular mediante ruido.

Debe parecer **preciso, inevitable y técnicamente sólido**.

---

## Modification history

```text
2026-08-23
- Blast radius corregido a 7 affected symbols. La topología anterior
  (`retryPayment`, `paymentWorker`, 6 symbols) no compilaba: `withRetry` es
  unexported y `checkout-service` no puede importar `payments-api/internal/...`.
  Se actualizan a la topología aprobada el árbol de propagación, el primer nodo
  del graph reveal, la respuesta del agente y el plano de fondo de código
  (`paymentService/client.go`). Frames sin cambios.

2026-08-23
- Layout del grafo reescrito a shells concéntricos: el radio es la distancia en
  hops, el disco interior es payments-api y el anillo exterior es
  checkout-service completo, con tres crossings saliendo en tres direcciones.
  Cada anillo se dibuja antes que sus nodos; la cámara hace un solo push-in y
  luego abre en continuo, con deriva lateral de recentrado sobre `withRetry()`;
  el mundo de código se queda debajo como textura. Frames sin cambios.

2026-08-24
- Layout del grafo reescrito de anillos concéntricos a **cascada en profundidad**:
  cada hop desde el símbolo cambiado da un paso hacia un lado y otro hacia el
  fondo, así que la distancia al cambio es la distancia a la cámara. Desaparecen
  los anillos, el disco interior, el anillo exterior, los spokes y el radio, y
  con ellos cualquier caja, región o base de repositorio: los dos repositorios se
  leen aparte por profundidad, distancia y una etiqueta flotante cada uno. La
  cámara pasa a ser un rig — un ojo y un punto al que mira — que entra, acompaña
  al impacto y se eleva por encima de la cadena, terminando 15° fuera de `-Z`. El
  edge precede al nodo al que llega, y un nodo remoto sólo aparece cuando la
  cámara ya le ha hecho sitio. Afecta a las secciones 11, 12, 13, 20, 23 y 29 y a
  los beats de las escenas 03–05. Narrativa, frames, copy y benchmarks sin
  cambios.

2026-08-25
- Escena CROSS-REPOSITORY (SCENE 05, 90 frames) cortada. El giro de cámara no
  comunicaba: el espectador ya había leído la estructura y moverse alrededor de
  ella no añadía nada que pudiera nombrar. Su otro beat bajaba `Policy.Do()` y
  `Once()` a `0.22` — son hop 1, justo los dos nodos que la propagación de la
  escena siguiente enciende primero, así que el corte apagaba lo que el frame
  siguiente volvía a encender. Todo lo posterior a 0630 se adelanta 90 frames y
  el master pasa de 1410 a 1320 frames (22 s). La 06 hereda el encuadre asentado
  con el que termina la 04 y no hay movimiento de cámara después de 0598.
  Medido tras el corte: costuras 0330 y 0750 idénticas píxel a píxel, 0630 a
  62,93 dB (sólo antialiasing), 900 frames montados sin frame negro ni anomalía
  de un solo frame. Afecta a las secciones 2, 13, 15, 25, 26, 28, 29 y 34 y a
  los rangos de las escenas 06–11.

2026-08-25
- Cortadas las dos frases dirigidas al espectador de las escenas de grafo:
  `Exact symbols. Not name matches.` (06) y `A name is not a symbol.` (07).
  Ninguna de las dos se leía como un resultado ni se explicaba sola. Con ellas
  se van los dos velos: el de la 06 existía sólo para oscurecer el cuadro bajo
  su claim line, y el único que le quedaba a la 07 era el `0.72` que heredaba de
  él. Las escenas de grafo quedan sin ninguna frase dirigida al espectador y la
  card de impacto queda sola sobre un grafo sin oscurecer. La regla §7 sigue en
  pie, pero de momento no gobierna nada implementado. Afecta a las secciones 7,
  28 y 29 y a los beats de las escenas 06 y 07.

2026-08-25
- Blast radius recortada de 120 a 100 frames (0630–0730). Cortadas su claim line
  y su velo, en la cola de la escena no quedaba nada moviéndose: medido sobre el
  render, el cuadro deja de cambiar en el frame local 78 y los 41 frames
  siguientes eran idénticos píxel a píxel — un tercio de la escena era una imagen
  congelada. Se quitan 20 frames y el hold queda en 21, 0709–0729, bastante para
  leer las tres líneas de la card y para que el corte caiga sobre una imagen
  quieta. Todo lo posterior a 0730 se adelanta 20 frames y el master pasa de 1320
  a 1300 frames (21,7 s). Medido tras el recorte: la costura nueva 0729 → 0730 es
  idéntica píxel a píxel, la 0630 sigue en 62,93 dB (sólo antialiasing) y los 880
  frames montados no tienen frame negro ni una sola anomalía de un frame. El
  still clave 0710 no se mueve — es el frame local 80 — y los posteriores pasan a
  0840, 1010 y 1170. Afecta a las secciones 2, 15, 26, 28, 29 y 34 y a los rangos
  de las escenas 06–11.

2026-08-25
- SCENE 08 — RETURN TO AGENT implementada (`AgentAnswerScene` y
  `src/three/answerState.ts`). Sus frames, sus beats y su copy no cambian: la
  implementación cumple el timeline de este documento tal cual. `mountedFrames`
  pasa de 880 a 970 frames (16,17 s), así que de los 1300 del master quedan 330
  en negro (5,5 s).
- La escena mantiene canvas sus primeros 26 frames: devuelve al token
  `withRetry()` del prompt el único nodo que le queda al grafo, rehaciendo hacia
  atrás los dos parámetros del propio reveal — `cutDistance` y el `grow` del
  ancla — en veinte frames, así que es exacta en los dos extremos por
  construcción y no por ajuste. Con eso se corrige el hecho de que no hubiera
  movimiento de cámara después de 0598. La regla no cambia — un movimiento tiene
  que responder a una pregunta que el espectador se esté haciendo — y este
  responde a la de toda la película: volver al sitio donde la vio empezar. No es
  exploración: son veinte frames de retorno del rig a la pose del match cut.
- Medido tras montarse: las costuras 0330 y 0730 siguen idénticas píxel a píxel,
  la 0630 sigue en 62,93 dB (sólo antialiasing) y los 970 frames montados no
  tienen ni un frame negro. La costura nueva 0879 → 0880 es un match cut y no una
  costura invisible: 27,9 dB de cuadro completo, porque se van la columna
  izquierda y el divisor del split view y entra la capa de prompt, y 42,2 dB
  sobre la región del símbolo, que está en el mismo sitio y al mismo tamaño. El
  barrido de la película marca un solo frame, el 0880, y ese es el corte: un
  escalón, no un pico.
- El cuadro de la escena deja de cambiar en 0939 y es idéntico byte a byte hasta
  0969, un frame antes de lo que pide su frame 0940.
- Afecta a las secciones 13, 15 y 16. La §29 sigue sin entrada para el 0940.

2026-08-25
- SCENE 07 — NAME ≠ SYMBOL crece de 150 a 180 frames (0730–0910). Dos quejas con
  una sola causa: las cosas se iban del cuadro en tres ventanas distintas — los
  contadores de la columna derecha en el local 112–130, los nodos y los tubos en
  el 112–140, el chrome de la comparación en el 118–142 — así que el cuadro se
  vaciaba en tres oleadas y se leía como piezas que alguien va apagando una
  detrás de otra; y la salida entera empezaba 27 frames después de terminar de
  construirse la comparación, que no da para leer dos columnas. Las dos se
  arreglan con una sola ventana, y más tarde: todo sale ahora en el local
  145–173, veintiocho frames, y cierra siete frames antes del corte. La
  comparación termina en el local 85 y de ahí no se va nada del cuadro durante 60
  frames — un segundo entero —; ese tiempo de lectura es lo único que hace crecer
  la escena. Dentro de ese reposo sólo corre la rampa de opacidad de la columna
  izquierda, local 84–112, que es la que retrasa el hold byte-idéntico hasta
  0841.
- Todo lo posterior a 0910 se retrasa 30 frames y el master pasa de 1300 a 1330
  frames (22,2 s). Los frames locales no cambian en ninguna escena salvo la 07.
  `mountedFrames` pasa a 1000 frames (16,67 s), así que de los 1330 del master
  quedan 330 en negro (5,5 s).
- Medido: los 1000 frames montados no tienen ni un frame negro y el barrido marca
  un único frame, el 0909, que es el corte. El hold de lectura son 35 frames
  byte-idénticos, 0841–0875, dentro del segundo de reposo. La salida corre
  0875–0903 y de 0903 a 0909 el cuadro es idéntico píxel a píxel. La costura
  nueva 0909 → 0910 mide 41,4 dB sobre la región del símbolo: la forma se
  mantiene a través del corte mientras entra el contexto. La costura 0729 → 0730
  sigue idéntica píxel a píxel. La 08 está quieta desde 0969 hasta 0999.
- Los stills clave 0080, 0620, 0710 y 0840 no se mueven; los posteriores pasan a
  1040 y 1200.
- Las etiquetas de segundos de los bloques `### Frames` estaban desfasadas hasta
  210 frames, heredadas del master de 1410, y quedaban por debajo del rango de
  frames que acompañan. Se recalculan a 60 FPS en todas las escenas: la 11
  termina en 22,17 s, que es lo que dan 1330 frames.
- Afecta a las secciones 2, 15, 26, 28, 29 y 34 y a los rangos de las escenas
  07–11.

2026-08-25
- Pase de ritmo sobre las tres últimas escenas implementadas, medido en **dwell**:
  cuánto tiempo se queda en pantalla algo legible *después* de haber terminado de
  llegar. Con las duraciones anteriores la card de impacto de la 06 se asentaba
  con 25 frames por delante — 0,42 s para las tres líneas contadas que la escena
  entera existe para entregar — y la frase de la respuesta de la 08 — 73
  caracteres, la que nombra el paquete por el que el impacto viaja — con 34
  frames: 0,57 s, 129 caracteres por segundo, contra los 25–40 a los que se lee
  texto técnico en pantalla. La película aceleraba justo dentro de su propio
  remate. Las duraciones pasan a derivarse del tiempo de lectura y no del feel.
- SCENE 06 — BLAST RADIUS: 100 → 140 frames (0630–0770). Los hops se separan
  — locales 008–030, 032–056, 058–082, ventanas de 18 a 22–24 frames con la misma
  separación de dos, el frente entero de 60 a 74 frames — y la card entra en
  066–088 en vez de 055–075, seis frames después de que aterrice el último hop.
  Dwell de la card: 1,47 s. El recorte de 120 a 100 frames de este mismo día
  estaba bien medido y mal argumentado: contaba frames congelados, no tiempo de
  lectura, y una imagen quieta delante de alguien que todavía está leyendo es la
  escena, no tiempo perdido.
- SCENE 07 — NAME ≠ SYMBOL: 180 → 200 frames (0770–0970). De los 20 frames
  nuevos, 13 van a la construcción — cada ventana pasa de 18 a 20 frames y su
  separación de 10 a 12, así que la comparación cierra en el local 98 y no en el
  85 — y 7 al asentamiento antes del corte, que pasa de 7 a 14 frames. El segundo
  entero de lectura se queda intacto en 60 frames y ahora es un still completo:
  1,00 s de dwell en los contadores. La salida sigue siendo una sola ventana de
  28 frames, local 158–186.
- SCENE 08 — RETURN TO AGENT: 90 → 180 frames (0970–1150). Retorno del rig local
  000–024, cruce de capas 024–030, bloques en 030–046, 046–062 y 064–080, label
  en 080–094 y estática de ahí al final. Dwell: 2,23 s el arranque de la
  respuesta, 1,97 s las cifras, 1,67 s la frase del path — 44 caracteres por
  segundo — y 1,43 s el label. Queda escrita la regla que sale de esta medición:
  una frase se queda en pantalla, después de entrar, el tiempo de leerla a 40
  caracteres por segundo como mínimo.
- Las escenas 09, 10 y 11 no cambian por dentro: se desplazan +150 frames
  (1150–1270, 1270–1360, 1360–1480). El master pasa de 1330 a 1480 frames
  (24,7 s) y `mountedFrames` a 1150 (19,17 s), así que de los 1480 quedan 330 en
  negro (5,5 s).
- Medido tras el pase: los 1150 frames montados no tienen ni un frame negro y el
  barrido marca 0969 y 0970, que son los dos lados del match cut. Costuras:
  0629/0630 a 62,93 dB (sólo antialiasing), 0769/0770 idéntica píxel a píxel,
  0969/0970 a 41,35 dB sobre la región del símbolo. Tramos estáticos: 0722–0770
  (49 frames, la card leyéndose), 0864–0928 (65, el reposo de la 07), 0956–0969
  (14, su asentamiento hasta el corte) y 1063–1149 (87, el hold de la 08).
- Stills clave: 0080 y 0620 no se mueven. 0710 → 0718, local 88 de la 06, el
  frame en el que la card se asienta; 0840 → 0864, local 94 de la 07, primer
  frame de su reposo; 0970 → 1064, local 94 de la 08, el frame en el que se lee
  el label y la escena se queda quieta; 1040 → 1190, local 40 de la 09; 1200 →
  1350, local 80 de la 10. Los tres primeros no son desplazamientos limpios: su
  definición se movió dentro de una escena retimada, y por eso se anota la
  definición y no sólo el número.
- Afecta a las secciones 2, 15, 26, 28, 29 y 34 y a los rangos y beats de las
  escenas 06–11.
```

```text
2026-08-26
- SCENE 09 — BENCHMARK implementada (`BenchmarkScene`, `src/data/benchmark.ts` y
  `BenchmarkMetric`). No hay módulo de estado: el timing son cuatro rampas y un
  fade, y un módulo para eso sería un fichero vacío. Sin Three.js, sin canvas,
  sin chrome de producto.
- Aterriza en 170 frames y no en los 120 dibujados, así que el master pasa de 1480
  a 1530 frames (25,5 s) y `mountedFrames` de 1150 a 1320 (22,0 s): de los 1530
  quedan 210 en negro (3,5 s). Sólo se mueven la 10 y la 11, +50 cada una
  (1320–1410 y 1410–1530). Nada anterior a 1150 se mueve.
- Los 50 frames se pagan con la misma medición que el pase de ritmo del 25:
  **dwell**. Con 120 la última afirmación se asentaba con 10 frames por delante,
  0,17 s. Con 170, y el fade arrancando en 1308: `tokens / 6.2k` 2,10 s,
  `grep + read / 63.5k` 2,00 s, `exact answers / 7 / 7` 1,50 s,
  `repositories / 37` 1,07 s y `published benchmark` 1,00 s. Las dos últimas filas
  son 33 caracteres en 1,00 s — 33 caracteres por segundo, dentro de los 25–40.
- La escena se construye como **tabla** por dirección de arte directa, no como la
  composición de valor con etiqueta debajo que describía este documento: la unidad
  a la izquierda, la cifra medida alineada a la derecha en su propia columna.
  `BenchmarkMetric` es por tanto una fila de tabla, dueña de la escala tipográfica
  y de la geometría de columnas, y exporta `tableGrid`.
- Dos cadenas se parten en cifra y unidad, porque una tabla necesita la cantidad
  medida en su propia columna: `7 / 7 exact answers` → `7 / 7` + `exact answers`,
  y `37 repositories` → `37` + `repositories`. Ningún valor cambia — `7 / 7`
  conserva su espaciado y `37` su precisión —, y `published benchmark` pasa de ser
  la etiqueta de `37` a ser la nota de procedencia debajo de la tabla. Los valores
  se guardan como cadenas y no como números: `6.2k` no es `6200` con un sufijo,
  porque formatear un número dejaría que una edición futura cambiara la precisión,
  y cambiar la precisión es cambiar el valor.
- Ventanas en frames de master: `6.2k` 1154–1182, `63.5k` 1168–1188, la regla
  1190–1210 hasta 0,9 de opacidad, `7 / 7` 1196–1218, `37` 1222–1244 y
  `published benchmark` 1226–1248; fade out 1308–1320 con las cuatro filas
  saliendo juntas. La rampa de `63.5k` va adelantada dentro de la ventana
  1170–1210 de este documento para que el still 1190 tenga las dos cifras
  completas.
- `6.2k` domina por escala y nunca por color: es la única cifra que rompe el
  tamaño de las demás, y esa desproporción es el argumento de la escena, así que
  la comparación tiene que sobrevivir en escala de grises. Una sola regla fina, del
  ancho de la tabla, y ningún borde. La geometría exacta — columnas, coordenadas,
  escala tipográfica, ritmo vertical y centrado óptico — se documenta en
  `docs/scenes/07-benchmark.md` § Visual composition y no aquí.
- Medido: los 1320 frames montados no tienen ni un frame negro y el barrido marca
  sólo los dos hard cuts, 969/970 y 1149/1150. Costuras: 0629/0630 sigue en
  62,93 dB y 0769/0770 sigue idéntica píxel a píxel; 0969/0970 sigue en 28,69 dB
  de cuadro completo; la nueva 1149/1150 mide 22,30 dB, que es lo que tiene que
  medir un hard cut. La tabla asentada es byte-idéntica durante 61 frames,
  1248–1308.
- Stills clave: 1190 no se movió — la escena creció por la cola y sigue siendo su
  local 40 — y 1350 → 1400, local 80 de la 10. El compromiso de 1190 queda
  anotado: el par queda por encima del centro del cuadro porque el bloque está
  maquetado para la tabla asentada y las filas de abajo están todavía vacías.
  Centrar el par descentraría la tabla, que es la imagen que la película sostiene
  61 frames; un still que lo necesite centrado se recorta.
- Rechazado: contadores que suben (un frame intermedio muestra un número que no es
  el benchmark publicado), par ganador/perdedor codificado por color, gráfico de
  barras y bordes en la tabla.
- Afecta a las secciones 2, 15, 24, 26, 28, 29 y 34 y a los rangos y beats de las
  escenas 09–11.
```

```text
2026-08-26
- SCENE 09 — BENCHMARK reconstruida por segunda vez el mismo día, por dirección de
  arte directa: una tabla comparativa con dos brazos como cabeceras de columna y
  cuatro medidas como filas, en lugar de una columna de valores medidos. `src/**`
  está commiteado en 7d9e88f.
- EN ESPERA: este documento no escribe ninguna cifra del benchmark hasta que se
  verifique. El registro legible por máquina del benchmark upstream no sostiene el
  juego de cifras con el que se escribió la reconstrucción, así que los bloques de
  beats de la 09, su copy, su tabla de dwell y su sección «Por qué 170 frames y no
  120» siguen describiendo la versión superada. Quedan marcados con una nota de
  estado al principio de la escena. No arrastrar sus valores. Donde una frase
  necesita una cifra sin confirmar se deja un marcador
  `<!-- FIGURE PENDING: … -->` en su sitio.
- Timeline, que sí está fijado: 170 → 210 frames. El master pasa de 1530 a 1570
  frames (26,17 s) y `mountedFrames` de 1320 a 1360 (22,67 s). De los 1570 siguen
  quedando 210 en negro (3,5 s), porque el master y el montaje crecen juntos. Sólo
  se mueven la 10 y la 11, +40 cada una además del +50 de la pasada anterior del
  mismo día: 09 en 1150–1360, 10 en 1360–1450 y 11 en 1450–1570. Nada anterior a
  1150 se mueve.
- Beats fijados de la 09: el hard cut en 1150, el still en 1190, la tabla asentada
  desde 1286 y el fade en 1348–1360. Es lo que recoge la sección 28; qué entra en
  cada ventana queda en espera con las cifras.
- Medido: los 1360 frames montados no tienen ni un frame negro y el barrido marca
  sólo los dos hard cuts, 969/970 y 1149/1150. Costuras sin cambio: 0629/0630 en
  62,93 dB, 0769/0770 idéntica píxel a píxel, 0969/0970 en 28,69 dB de cuadro
  completo y la 1149/1150 en 22,30 dB. La tabla asentada es byte-idéntica durante
  63 frames, 1286–1348, donde antes eran 61 en 1248–1308.
- Stills clave: 1400 → 1440, arrastrado por el +40 de la 10. El 1190 no se movió,
  y su definición en la sección 29 pasa a ser estructural — la fila de coste
  completa con sus dos brazos ya nombrados encima — en lugar de un par de cifras.
  Con la reconstrucción el still mejora y no sólo se mueve: antes eran dos cifras
  desnudas sin decir de quién era cada una. La cifra concreta queda marcada como
  pendiente y la definición se queda estructural cuando llegue.
- `BenchmarkMetric` pasa de fila de una cifra a fila de comparación: una etiqueta a
  la izquierda y una cifra por columna, cada una alineada a la derecha contra el
  borde de su columna. La geometría exacta sigue en
  `docs/scenes/07-benchmark.md` § Visual composition y no aquí.
- Afecta a las secciones 2, 15, 24, 26, 28, 29 y 34 y a los rangos y beats de las
  escenas 09–11.
```

```text
2026-08-26
- Cifras de la 09 resueltas y hold levantado. Se elige el juego de 29 preguntas del
  bloque `aggregate` de
  `kivgraph/benchmarks/graph-tools-comparison/results-all.json` (commit `954b9eb`,
  corpus de 37 repositorios): `tokens` 35,961 contra 267,980, `exact answers`
  28 / 29 en los dos brazos, `precision` 1.000 en los dos y `recall` 0.996 contra
  0.989, con la nota de procedencia `37 repositories · published benchmark`. La
  razón de coste queda en 7,45×.
- El juego de 7 preguntas queda abandonado: ningún fichero de resultados registra
  `7 / 7`. Los pases en disco leen `4 / 7` y `6 / 7`; el `7 / 7` sale de la prosa de
  cierre de `remeasure.md`, y los tres pases de ese documento escribieron al mismo
  nombre de fichero, así que la ejecución que lo sostenía ya no existe.
- La nota de estado del principio de la escena pasa a nota de resolución, y los
  bloques de beats, el copy y la tabla de dwell de la 09 dejan de describir la
  versión superada: ya son la escena que hay. Desaparece el marcador
  `<!-- FIGURE PENDING: … -->` de la sección 29, que pasa a ser la fila de coste
  con sus dos brazos nombrados encima.
- Ventanas en frames de master, sin tocar el timeline: cabeceras 1152–1172, regla
  1160–1180, `tokens` 1164–1188, `exact answers` 1192–1212, `precision` 1216–1236,
  `recall` 1240–1260 y la nota de procedencia 1266–1286; reposo 1286–1348 y fade
  out 1348–1360. La fila de coste está completa en 1188, así que el still 1190 se
  lee sin adelantar nada dentro de ninguna rampa — la excepción que necesitaba la
  versión anterior desaparece.
- Dwell en caracteres por segundo contra el presupuesto de 25–40: cabeceras 6,5,
  `tokens` 7,1, `exact answers` 11,9, `precision` 10,2, `recall` 10,9 y la nota de
  procedencia 35,8. La nota es la fila que fija el suelo con sus 37 caracteres, y
  entra. El recuento de preguntas se deja fuera de la nota porque ya está en
  pantalla, en el denominador de `28 / 29`.
- `precision` se escribe con tres decimales para igualar la profundidad de `recall`
  en la misma columna: con dos, `recall` leería `1.00` frente a `0.99`, un pleno que
  kivgraph no se ha ganado y el doble de hueco aparente. Los tokens van exactos y
  con separador de millares, nunca redondeados a `36k`. Nada está coloreado para
  sostener el argumento: la tabla tiene que aguantar en escala de grises.
- Se retira de la escena la afirmación de que una cifra domina por escala: era una
  propiedad de la versión con un `6.2k` gigante. La geometría y la escala
  tipográfica siguen en `docs/scenes/07-benchmark.md` § Visual composition y no
  aquí.
- Medido: la costura 1149/1150 pasa de 22,30 dB a 24,21 dB. No es mejora ni
  regresión — la PSNR de un corte es propiedad de sus dos frames, y el lado derecho
  de este corte es justo la tabla nueva. La 0629/0630, la 0769/0770 y la 0969/0970
  se dejan como estaban, medidas en su propio pase; el número de región de la
  0969/0970 y el de cuadro completo no se comparan entre sí.
- Afecta a la sección 29, al registro de costuras de la SCENE 05 y a los beats, el
  copy y la tabla de dwell de la escena 09.
```

```text
2026-08-26
- Se añade una transición entre la escena 06 y la 07, por dirección de arte
  directa. Es un match cut, no un fundido: la línea de atribución `Answered with
  Kivgraph` cruza el corte 1149/1150 idéntica píxel a píxel y se retira en el
  local 2-18 de la 07 mientras entran las cabeceras, pasando la palabra
  `Kivgraph` de firma a cabecera de columna.
- Nuevo bloque «El relevo de la firma» bajo SCENE 09, después del frame 1150. Las
  seis condiciones del frame 1150 no se tocan y siguen siendo exactas: la
  atribución es tipografía.
- Se rechazó el fundido, que es lo que los dos documentos de escena ya habían
  rechazado por separado: mezcla dos afirmaciones en una. Además habría empeorado
  el problema real — el corte nunca fue demasiado abrupto, caía en el vacío.
- Razón medida, no estética: la 06 pasa sus últimos 87 frames congelada y ahí es
  donde se lee la respuesta, así que no se puede recortar; la 07 abría con el 34%
  de su tinta final.
- Medido: la costura 1149/1150 pasa de 24,21 a 24,25 dB — movimiento
  insignificante, que es justo la prueba de que el corte no se ablandó — y la
  región que cruza mide `inf`. Los stills 1190 y 1345 quedan idénticos píxel a
  píxel al render anterior.
- Afecta al registro de costuras de la SCENE 05 y al frame 1150 de la SCENE 09.
```

```text
2026-08-26
- La SCENE 10 — BRAND REVEAL está implementada. `src/scenes/BrandScene.tsx` y
  `src/components/BrandLogo.tsx`, montada en 1360-1450, 90 frames. Nada del
  timeline se mueve: el master sigue en 1570 y los beats de la escena son los
  que este documento fija desde que se escribió. `mountedFrames` pasa de 1360 a
  1450, así que lo único que no renderiza ya es la SCENE 11.
- Copy corregido: el reveal del frame 1430 pasa de `Kivgraph` a `kivgraph`. El
  lockup real lleva el wordmark mono en minúscula, y la película ya llevaba las
  dos formas con una regla — la prosa toma la mayúscula, un identificador toma
  la minúscula — que el match cut de 1149/1150 atraviesa. La razón queda escrita
  bajo el propio frame 1430.
- La marca es el ráster que Kivgraph publica — favicon, icono de app, icono que
  enseña un cliente MCP — y no el cuadrado 8 x 8 de `accent`. Por dirección de
  arte directa. Las dos marcas son reales: el cuadrado es el lockup de la
  cabecera web y `TopBar.astro` lo sigue dibujando, así que la web y la película
  no enseñan hoy la misma marca. La sección 10 no se toca: el accent sigue
  significando lo que significaba, pero deja de aparecer en el lockup.
- Consecuencia sobre la sección 10 que sí hay que saber: después del 1430 no
  queda `#2563eb` en pantalla en toda la película. El accent se gasta entero en
  las relaciones que llegan y se va con ellas en el 1428, que es exactamente lo
  que la sección 12 pide — «el accent se gasta en establecer la relación, no en
  tenerla». La marca aporta dos colores que no están en ningún token, un
  hueso `#e9e2dc` y un verdeazulado `#56818a`, y son suyos: nada más en el cuadro
  puede tomarlos prestados.
- «No hacer literalmente un grafo como logo si no corresponde con el logotipo
  actual» se cumple ahora en sentido literal, porque lo que queda en pie es el
  logotipo que el producto publica.
- Dos excepciones más a este documento, las dos por dirección de arte directa y
  las dos acotadas. Van escritas como excepciones, no como deducciones, porque
  quien lea sólo el resultado reconstruiría el razonamiento contrario.
  1. Las cinco relaciones llevan **estela**, hechas en R3F con un shader. La
     sección 12 permite «un punto de energía muy sutil recorriendo el edge» y
     esto es más que eso, y `AGENTS.md` tiene «Partículas, `Trail`, estelas» en
     su lista de lo rechazado de entrada «para que no vuelva a proponerse». Lo
     que la excepción **no** cubre, y no debe ampliarse sin decirlo: no hay
     postprocesado ni `bloom` — el brillo vive dentro del material de cada línea
     —, no hay partículas, no hay `uTime` ni `useFrame`, la cámara es ortográfica
     y no se mueve, y **el lockup no entra en el canvas**: sigue en DOM, porque
     su posición tiene que sobrevivir al límite 1450 hacia una escena 11 que es
     DOM.
  2. La marca **gira una vuelta** al entrar el wordmark, del 1420 al 1436. Va
     contra «avoid dramatic spins» de `AGENTS.md`. Se acotó por el still: termina
     en 1436, así que el 1440 no lo toca y el cuadro está quieto desde el 1438.
     Una vuelta que para, nunca un bucle, y nada gira después del 1436.
  La prueba de que las dos excepciones quedaron bien acotadas: el frame 1440
  salió de las dos idéntico byte a byte al render anterior a que existieran. Se
  movió después, y por un tercer motivo: estabilizar el ráster que gira obligó a
  promover la marca a su propia capa de composición, y eso vuelve a muestrear sus
  bordes. El 1440 no cambia de contenido, posición ni tamaño; cambia hasta 35
  niveles en el 6 % de los subpíxeles de dentro de la marca, 43,6 dB sobre su
  región y 60,8 dB sobre el cuadro entero, y a 3x con vecino más próximo los dos
  son indistinguibles.
- Defecto encontrado y corregido en la 09 al montar la 10: `BenchmarkScene`
  llevaba la opacidad del fundido en el mismo `AbsoluteFill` que pintaba el
  fondo, así que el cuadro llegaba a `#000000` puro en el 1356 y se quedaba ahí
  hasta el 1359, y la 10 devolvía `#0a0b0d` en el 1360. Eso es el salto de
  niveles que `docs/scenes/08-brand.md` prohíbe por escrito, y estaba invisible
  sólo porque la película terminaba en 1360. Verificado idéntico byte a byte en
  1190, 1300 y 1347; sólo cambian los frames 1348-1359.
- Medido sobre PNG exportados del rango 1340-1449, no sobre el scrubber. La
  costura 1359/1360 mide `inf` y la esquina sostiene 10 11 13 al cruzarla. Rachas
  idénticas: 1340-1348 la tabla asentada, 1358-1369 el silencio — doce frames,
  porque el fundido llega dos frames antes y los diez de la 10 se le suman —,
  1416-1418 la figura completa de la convergencia, 1428-1430 las líneas fuera con
  el wordmark leído, y 1438-1449 el lockup quieto. 76 imágenes distintas en 110
  frames.
- El still clave 1440 de la sección 28 no se mueve y ahora está asentado desde el
  1438: el easing del proyecto queda dentro de 1/255 de su valor final unos dos
  frames antes de terminar, así que el frame que se exporta lleva dos frames
  quieto.
- Afecta al copy del frame 1430 de esta SCENE 10 y a nada más de este documento.
  La sección 28 y la sección 29 quedan como estaban.
```

```text
2026-08-26
- Dos cambios por dirección de arte directa, los dos por ver la película en vez
  de por leerla.
- La SCENE 08 — RETURN TO AGENT se centra. Toda su capa de prompt — regla,
  pregunta, línea de tool, los tres bloques de respuesta y la atribución — y su
  degradado suben 260 px. La posición baja es de la SCENE 02 y allí es correcta:
  el prompt va debajo del código del que habla, y la cámara abre a 0,66 justo
  para despejar esa mitad. En el 0970 el código está al 0,02 y la respuesta es
  todo el cuadro, así que la misma posición dejaba el bloque caído contra el
  borde inferior. Medido en el 1064: el contenido iba de 604 a 976, centro 790
  contra el 540 del cuadro; ahora va de 344 a 716, centro 530.
- Horizontalmente no se mueve nada y no hacía falta: el contenido va de 440 a
  1458 — la frase de la ruta pasa del extremo derecho de la regla — así que su
  centro ya era 949.
- La geometría compartida no se toca. El prompt de la SCENE 02 y el grafo de las
  SCENE 03 a 08 siguen donde estaban, porque `graphFrame.ts` deriva la posición
  del grafo del rectángulo del token. El 0969 y el still 1190 salen idénticos byte
  a byte al render anterior, y los dos match cuts se sostienen: 0969/0970 pasa de
  29,84 a 29,83 dB de cuadro completo y de 50,99 a 52,14 dB sobre la placa del
  símbolo, y la región de la atribución en 1149/1150 de 56,79 a 56,70 dB.
- La SCENE 10 — BRAND REVEAL pasa de 90 a 170 frames. El master pasa de 1570 a
  1650 (27,5 s), la SCENE 11 a 1530–1650 y `mountedFrames` de 1450 a 1530. Ningún
  beat se mueve: el silencio sigue en 1360–1370, el nodo en 1370, el wordmark lee
  en 1430, el lema en 1440 y el still clave sigue siendo el 1440. Lo que crece es
  el reposo del final, de diez frames a noventa.
- El motivo es de lectura y está medido: el lema tiene 42 caracteres, y a diez
  frames se leía a 252 caracteres por segundo contra el presupuesto de 25–40 con
  el que está cronometrada el resto de la película. A noventa son 28. Los frames
  1440 y 1529 son idénticos byte a byte, así que el reposo entero es una imagen.
- Afecta a la sección Master, a los frames de la SCENE 10 y la SCENE 11, al
  ejemplo de `Composition.tsx` de la sección 26, a la lista de frames críticos de
  la sección 28 — 1450/1510/1569 pasan a 1530/1590/1649 — y a la sección 34.
```

```text
2026-08-26
- La SCENE 11 — CTA está implementada. `src/scenes/OutroScene.tsx`, montada en
  1530–1650. Con ella existen todas las escenas de la película: `mountedFrames`
  se retira y `src/Composition.tsx` exporta `masterFrames = 1650`.
- De las dos direcciones que este documento ofrece gana `kivgraph.dev`, que es la
  que él mismo prioriza, y se comprobó en el producto en vez de elegirse:
  `landing/astro.config.mjs` la hornea como origen de producción de `site` y
  `landing/AGENTS.md` dice que el origen es el apex de ese dominio. Así que este
  documento no cambia. La URL de GitHub no aparece: una sola dirección en pantalla.
- La línea de instalación no se muestra, que es la condición que este documento
  pone — «sólo si la línea es lo bastante corta». El comando real son 89
  caracteres contra los 12 de la URL, y sería el elemento más ancho de toda la
  película.
- Las tres integraciones se verificaron contra el producto: `kivgraph mcp install`
  tiene cinco targets, así que `Claude Code`, `Codex` y `OpenCode` existen. Las
  otras dos —Claude Desktop y Oh My Pi— se dejan fuera: este documento permite
  más «si hay espacio», y no lo hay.
- Medido: los frames 1529 y 1530 son idénticos byte a byte, así que el límite
  entre la SCENE 10 y la SCENE 11 no es una costura — el lockup sencillamente no
  se mueve, que es lo que la sección 27 pide del final. La película entera
  renderiza 1650 frames, 27,5 s, 1920×1080 a 60 fps, sin un solo frame negro.
- Afecta a la SCENE 11 y a nada más de este documento.
```

```text
2026-08-26
- Pasada de legibilidad por dirección de arte directa, hecha viendo la película al
  tamaño al que se embebe y no a tamaño completo. Ni topología, ni concepto, ni
  duraciones: contraste del grafo, la card de impacto y el tamaño de la respuesta.
- El contraste era medible, no una impresión: en el frame 0629 el 94,86 % del
  cuadro estaba por debajo de luminancia 12, y las etiquetas del hop 3 - los tres
  consumidores de `checkout-service`, que son el payoff de la pieza - eran la
  tinta más oscura del cuadro. Se comprimió la escalera de sombras del grafo, se
  subieron las etiquetas de repositorio, las aristas asentadas ganan opacidad en
  vez de perderla, y el código de fondo bajó a algo más de la mitad. La sección 17
  se respeta: el código no desaparece, pero deja de competir.
- La card de `CHANGE IMPACT` deja de ser una card. Sin relleno, sin filete, sin
  padding — que es lo que este documento ya pedía en «No hay claim line»: los tres
  valores se leen contra el grafo sin oscurecer, y el grafo debajo de `7 affected
  symbols` es la prueba de la cifra. Un panel opaco lo impedía.
- La respuesta del agente crece: la frase `7 symbols across 2 repositories.` pasa
  de 32 a 42 px, por encima del rango de la sección 7 — y el motivo es el que la
  propia sección 7 da para existir: «El vídeo debe seguir siendo entendible cuando
  se reproduce dentro de un post social.» La frase de la ruta pasa a dos líneas
  para sobrevivir a los recortes 1:1 y 9:16 de la sección 2. El copy no cambia.
- Sin hacer, y a propósito: más profundidad percibida, más payoff en el reveal
  cross-repo y un puente narrativo hacia el benchmark van en su propia pasada,
  porque dos de ellos mueven duraciones. Acortar el outro contradice una
  instrucción directa de que su duración es definitiva. Y reponer `A name is not a
  symbol.` contradice la sección «No hay frase en el centro» de este mismo
  documento, que la registra construida, vista y cortada.
```

```text
2026-08-27
- Dos cambios de ritmo por dirección de arte directa, y el master pasa de 1650 a
  1750 frames (29,17 s). Es el undécimo retimado y el segundo seguido tomado
  viendo la película en vez de contando frames.
- La SCENE 04 crece de 300 a 360 frames para que el alcance cross-repository sea
  un beat y no una coincidencia. Lo que fallaba era el orden: los tres crossings
  arrancaban mientras la cámara ya estaba abriendo, así que el espacio nuevo y las
  aristas que lo alcanzan llegaban a la vez y no se leía ninguno de los dos. Ahora
  `payments-api` se completa, su etiqueta se asienta, y **no pasa nada durante
  dieciocho frames**; luego un solo crossing dibuja durante cuarenta y cuatro con
  la cámara todavía parada, así que se va del cuadro hacia un sitio que no se ve;
  y sólo entonces la cámara abre, siguiendo por donde ya se fue la arista. Los
  otros dos crossings llegan después, como confirmación y no como el hallazgo.
- La SCENE 09 crece de 210 a 250 frames y estrena una frase, que entra en la
  sección 32 con este mismo cambio:
      Same answer. Less context.
  Va antes de la tabla y nunca comparte cuadro con ella: la atribución se retira
  en ella y ella se retira en las cabeceras de columna. Es una afirmación sobre
  una medición, no sobre el producto, que es lo que la sección 30 exige — Kivgraph
  no puede arrogarse autoridad, tiene que ganársela — y las cuatro filas la
  responden dos segundos después. Sin ella el benchmark se leía como otra
  diapositiva en vez de como la consecuencia de lo que se acababa de ver.
- El dwell de la tabla no cambia: sus 62 frames de reposo siguen siendo 62.
- Stills: el 0629 pasa a 0689 y el 1190 a 1288, los dos recalculados desde su
  propia definición estructural y no arrastrados. La sección 28 y la 29 quedan
  actualizadas.
- Medido: la película renderiza 1750 frames, 29,17 s, sin un solo frame negro.
```

```text
2026-08-27
- Escena nueva al principio: SCENE 00 — INTENT, 0-180, y el tercer match cut de
  la película. El master pasa de 1750 a 1930 frames (32,17 s) y todo lo demás se
  desplaza 180 sin que cambie nada dentro de ninguna escena.
- El motivo es narrativo y no de función: la película abría con `withRetry` ya
  señalado, lo que daba por hecho que el agente sabía cómo se llamaba el símbolo.
  Normalmente no lo sabe. `find_by_intent` es la herramienta de ese paso previo.
- Copy nuevo, literal del ejemplo documentado de la herramienta, y entra en la
  sección 32:
      Where do we retry failed requests?
- Invariantes semánticos de la escena, tomados de la documentación real y no de
  una descripción: `match` viaja visible en cada fila con el vocabulario del
  producto — `lexical`, `lexical+calls` —, no se muestra ningún score porque la
  herramienta no publica ninguno a propósito, y los candidatos salen del fixture
  y no se teclean. Nada implica que un candidato sea una relación resuelta.
- Los tres candidatos son `withRetry`, `Policy.Do` y `Once`, todos de
  `payments-api · internal/retry`. Los otros dos símbolos del grafo no aparecen
  porque no tienen término que casar, no porque se hayan filtrado.
- Medido: el corte candidato → fuente sale con 0 px de error en tres aristas y 1
  px de antialiasing en la cuarta. El corte fuente → Three.js sigue idéntico
  píxel a píxel en su nuevo límite 0509/0510.
- El hold de 39 frames de la SCENE 01 se probó recortar y se conserva: su caption
  son 36 caracteres con 0,65 s por delante, o sea 55 car/s contra el presupuesto
  de 25-40. Ya está por debajo del mínimo.
```
