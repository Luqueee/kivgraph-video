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
Duration: 22.2 s
Frames: 1330
Aspect ratio: 16:9
```

También debe ser posible generar posteriormente:

```text
1920 × 1080   landing / YouTube / GitHub
1080 × 1080   X / LinkedIn
1080 × 1350   LinkedIn / social
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
Después de 0598 el rig se mueve dos veces, y ninguna de las dos compra ángulo: la
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
viven el blast radius y la comparación semántica, y donde el still clave 0710
tiene que leerse reducido a ancho de README— y bajando a 15 px en los frames *de
paso*, que se veían una fracción de segundo. Ese compromiso se va con la escena:
los 15 px los producía su giro, y el único movimiento que queda sobre el grafo
después de 0598 —el retorno de veinte frames de la 08— no llega a tocar la
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
costura en los 1000 frames montados.

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

---

## SCENE 01 — THE SYMBOL

### Frames

```text
0000–0120
0.0–2.0 s
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

### Frames 0000–0028

El primer frame ya tiene información visual. No se abre en negro.

Se empieza muy cerca de `withRetry`, rodeado de fragmentos de código.

El espectador necesita un instante para entender qué está viendo.

Cámara:

```text
dolly out, un solo movimiento
scale: 2.35 → 1.12 (se completa en 0080)
```

Sin titular. Sin caption todavía. El código está por debajo de su luminancia
final: se lee que hay código, no *qué* código.

---

### Frames 0028–0080

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
frame 0080. Antes se repartían en cuatro tiempos y la apertura se sentía como
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

### Frames 0080–0120

La escena está quieta. Byte-idéntica de 0080 a 0119: no hay deriva, ni
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
0120–0330
2.0–5.5 s
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

### Frames 0120–0190

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

### Frames 0165–0245

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

### Frame 0255

Enter.

Pequeño feedback visual: el caret se retira y el glifo `❯` gana peso.

---

### Frames 0270–0300

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

### Frames 0300–0330

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
0330–0480
5.5–8.0 s
```

Primera escena con grafo 3D — pero no un cambio de plató. El mundo de código no
se apaga en el corte: sigue renderizándose debajo, congelado en su último frame,
y sólo después empieza a retirarse hasta quedar en textura.

---

### Frame 0330

El texto:

```text
withRetry()
```

permanece exactamente en la misma posición visual que ocupaba en el prompt.

La capa de prompt se retira. El mundo de código **no**: se queda debajo,
congelado, sosteniendo el corte.

---

### Frames 0330–0360

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

### Frames 0360–0390

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

### Frame 0395

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

### Frames 0400–0430

Primer nodo del hop 1: aparece al final del edge que ya lo estaba señalando.

Label:

```text
Policy.Do()
```

---

### Frames 0420–0450

Segundo edge, hacia el mismo hop: el hop 1 tiene dos nodos y se completa antes de
que el grafo mire más lejos. Los dos hermanos se separan en vertical lo justo
para no tocarse, y sus curvas se comban a lados opuestos para que no se lean como
un solo trazo.

---

### Frames 0440–0480

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
0480–0630
8.0–10.5 s
```

---

### Frame 0480

La cámara no se detiene en el límite de escena: viene de la escena 03 en un único
movimiento continuo que no se invierte. Aquí todavía está acompañando al impacto;
la apertura llega después, cuando el ojo se eleva por encima de la cadena y la
deja entera en cuadro.

La escena termina con toda la cadena en el frame y `withRetry()` en su extremo
más cercano, y ese es el encuadre que hereda la escena siguiente.

---

### Frames 0490–0550

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

### Frames 0530–0570

Surge la etiqueta del repositorio cercano:

```text
payments-api
```

Flota en el aire que su propio grupo deja libre, debajo de él. Nombra una zona;
no etiqueta ninguna caja, porque no hay caja. Y llega cuando esa estructura
cercana ya está completa: primero se ve el código, después se dice de dónde es.

---

### Frames 0560–0600

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

### Frame 0590

No cruza un edge largo: cruzan tres a la vez. Son los crossings, los tres únicos
edges que salen de `payments-api`, y los tres van hacia el fondo, separándose.

El impacto no se escapa hacia un lado del frame: se escapa hacia el fondo, en
tres direcciones a la vez.

Estos tres edges deben ser visualmente más importantes que los anteriores.

---

### Frames 0590–0620

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

### Frame 0620

Los tres nodos remotos se activan.

Hold muy breve.

Este es uno de los frames principales del vídeo.

---

### Mensaje implícito

No mostrar todavía texto explicando cross-repo.

Dejar que el espectador lo vea primero.

---

# SCENE 05 — CROSS-REPOSITORY (cortada)

Esta escena existió. Ocupaba 90 frames — 0630–0720 del master anterior — y hacía
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

- todo lo posterior a 0630 se adelanta 90 frames y el master pasa de 1410 a 1320
  frames (22 s);
- la 06 ya no hereda un grafo aislado ni una pose movida: hereda el estado
  asentado completo con el que termina la 04, en el encuadre con el que la 04
  termina — ojo en `(7.0, 3.2, 10.0)` mirando a `(8.0, 0.0, -2.4)`, 15,1° fuera
  de `-Z` — y ese encuadre se mantiene hasta el aplanado de la 07: después de
  0598 nadie explora el grafo, sólo se endereza el rig y, en la 08, se devuelve a
  la pose del match cut;
- la regla de la que venía esta escena sigue en pie y ahora se cumple sola:

```text
No mostrar todavía texto explicando cross-repo.
Dejar que el espectador lo vea primero.
```

Antes de cortarse la escena ya se había cortado su palabra: el cuadro entero se
oscurecía a `0.86` y se leía `Cross-repository.` sobre el velo, centrado, entre
0658 y 0708. Aterrizaba como un subtítulo quemado sobre un plano y no como parte
de la película.

Medido tras el corte, tras el recorte de la 06 y tras crecer la 07: las costuras
0330 y 0730 son idénticas píxel a píxel, la 0630 mide 62,93 dB — sólo
antialiasing — y los 1000 frames montados no tienen ni un frame negro. El barrido
marca un único frame, el 0909, y ese es el corte mismo: un escalón, no un pico.
La costura 0909 → 0910 es un match cut y no una costura invisible, así que no
mide como las otras — 41,4 dB sobre la región del símbolo, que es la que el corte
sostiene.

El número 05 se queda ocupado por este registro y las escenas siguientes
conservan su numeración de storyboard.

---

# SCENE 06 — BLAST RADIUS

### Frames

```text
0630–0730
10.5–12.17 s
```

---

### Frame 0630

El nodo `withRetry()` pulsa una única vez.

No loop.

---

### Frames 0640–0710

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

---

### Frames 0709–0729

Hold. El cuadro no vuelve a cambiar: 21 frames idénticos píxel a píxel, los que
la card necesita para que se lean sus tres líneas y para que el corte hacia la 07
caiga sobre una imagen quieta.

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
escena. Medido sobre el render: el cuadro deja de cambiar en el frame local 78 y
los 41 frames restantes eran idénticos píxel a píxel, un tercio de la escena
convertido en imagen congelada. Por eso la escena se recorta de 120 a 100 frames
— 0630–0730, 1,67 s — y el hold se queda en 21 frames, 0709–0729: bastante para
leer las tres líneas de la card y para que el corte caiga sobre una imagen
quieta. La costura nueva 0729 → 0730 es idéntica píxel a píxel; el corte hacia la
07 sigue siendo invisible.

---

# SCENE 07 — NAME ≠ SYMBOL

### Frames

```text
0730–0910
12.17–15.17 s
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

### Frames 0730–0815

Aquí ocurre lo que la escena construye: el aplanado, la vuelta a frontal y las
dos columnas. La comparación termina de construirse en el frame local 85.

---

### Frames 0815–0875

De 0815 en adelante no se va nada del cuadro durante sesenta frames — un segundo
entero. Es el tiempo de lectura de las dos columnas, y es la única razón por la
que la escena pasó de 150 a 180 frames: la versión anterior empezaba a vaciar el
cuadro veintisiete frames después de terminar de construirlo, y veintisiete
frames no dan para leer dos columnas.

Lo único que se mueve dentro del reposo es la rampa de opacidad del lado
izquierdo, local 84–112 — de 0814 a 0842 —, y por eso el hold byte-idéntico son
los últimos treinta y cinco frames, 0841–0875, y no los sesenta. Cuando la rampa
cierra, el izquierdo queda apagado, el derecho permanece claro, y esa asimetría
es todo lo que la escena tiene que sostener.

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

### Frames 0875–0903

Todo sale en una sola ventana, y sale más tarde. Los contadores de la columna
derecha, los nodos y los tubos, y el chrome de la comparación se van juntos en
veintiocho frames.

Antes salían en tres ventanas distintas: los contadores en el local 112–130, los
nodos y los tubos en el 112–140, el chrome en el 118–142. El cuadro se vaciaba en
tres oleadas, y eso no se lee como una escena que termina sino como piezas que
alguien va apagando una detrás de otra. Una sola ventana, para las tres cosas.

---

### Frames 0903–0909

Hold. La ventana cierra siete frames antes del corte y el cuadro es idéntico
píxel a píxel de 0903 a 0909, así que la forma que el match cut de la 08 necesita
llega al corte en reposo.

---

# SCENE 08 — RETURN TO AGENT

### Frames

```text
0910–1000
15.17–16.67 s
```

---

### Frame 0910

El grafo se contrae hacia el nodo seleccionado.

Match cut hacia la capa de prompt de la escena 02, reconstruida alrededor del
mismo token `withRetry()`.

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

---

### Frame 0970

Pequeño label:

```text
Answered with Kivgraph
```

---

# SCENE 09 — BENCHMARK

### Frames

```text
1000–1120
16.67–18.67 s
```

---

### Frame 1000

Hard cut limpio.

Background.

Sin grafo.

Sin terminal.

Sólo tipografía.

---

### Frames 1000–1040

Aparece:

# 6.2k

Muy grande.

Debajo:

```text
tokens
```

---

### Frames 1020–1060

A la derecha:

```text
63.5k
grep + read
```

Mucho menos protagonista.

---

### Frames 1050–1090

Aparece:

```text
7 / 7 exact answers
```

---

### Frames 1070–1110

Aparece:

```text
37 repositories
published benchmark
```

---

### Nota visual

Nada de gráficos de barras enormes.

Nada de confetti.

Nada de:

```text
90% BETTER!!!
```

Los números deben hablar solos.

---

# SCENE 10 — BRAND REVEAL

### Frames

```text
1120–1210
18.67–20.17 s
```

---

### Frame 1120

Todo desaparece.

Negro.

---

### Frame 1130

Aparece un único nodo.

---

### Frames 1130–1170

Pequeñas líneas empiezan a llegar desde fuera del frame hacia ese nodo.

```text
↘
 → ● ←
↗
```

---

### Frames 1160–1190

Las relaciones convergen formando una composición inspirada en el lenguaje visual de Kivgraph.

No hacer literalmente un grafo como logo si no corresponde con el logotipo actual.

La animación simplemente sirve como transición.

---

### Frame 1190

Aparece:

# Kivgraph

---

### Frame 1200

Debajo:

# Exact code intelligence for coding agents.

---

# SCENE 11 — CTA

### Frames

```text
1210–1330
20.17–22.17 s
```

---

### Frames 1210–1240

Aparecen integrations:

```text
Claude Code · Codex · OpenCode
```

Opcionalmente otras compatibles si hay espacio.

---

### Frame 1240

CTA:

```text
github.com/luqueee/kivgraph
```

o dominio oficial:

```text
kivgraph.dev
```

---

### Frame 1260

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

### Frames 1270–1330

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

---

# 25. Escenas Remotion

```text
scenes/
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

---

# 26. Timeline

```tsx
<>
  <Sequence from={0} durationInFrames={120}>
    <SymbolScene />
  </Sequence>

  <Sequence from={120} durationInFrames={210}>
    <AgentScene />
  </Sequence>

  <Sequence from={330} durationInFrames={300}>
    <GraphRevealScene />
  </Sequence>

  <Sequence from={630} durationInFrames={100}>
    <BlastRadiusScene />
  </Sequence>

  <Sequence from={730} durationInFrames={180}>
    <SemanticScene />
  </Sequence>

  <Sequence from={910} durationInFrames={90}>
    <AgentAnswerScene />
  </Sequence>

  <Sequence from={1000} durationInFrames={120}>
    <BenchmarkScene />
  </Sequence>

  <Sequence from={1120} durationInFrames={90}>
    <BrandScene />
  </Sequence>

  <Sequence from={1210} durationInFrames={120}>
    <OutroScene />
  </Sequence>
</>
```

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
0028
0055
0080
0100
0119

0120
0150
0180
0210
0255
0270
0300
0329

0330
0360
0390
0450

0480
0540
0590
0620

0630
0670
0710
0729

0730
0790
0840
0875
0903
0909

0910
0970

1000
1040
1080
1119

1120
1170
1200

1210
1270
1329
```

Los frames:

```text
0080
0620
0710
0840
1040
1200
```

deben funcionar incluso como capturas estáticas.

---

# 29. Key visual frames

## Frame ~0080

```text
Code field +
withRetry accented +
semantic mark under it
```

Sin una sola palabra sobre el código, aparte del caption de ruta.

Usable como thumbnail.

---

## Frame ~0620

```text
The cascade complete, seen from above it.
Three crossings running into checkout-service.
```

Usable para social.

---

## Frame ~0710

```text
Blast radius +
impact card.
```

La card va sola. No hay claim line debajo ni velo detrás: sus tres valores se
leen contra el grafo sin oscurecer.

Usable en README.

---

## Frame ~0840

```text
Name matching vs Semantic resolution
```

Sin frase en el centro. El still es la asimetría de las dos columnas, y es lo
único que tiene que sostener.

Usable para marketing técnico.

---

## Frame ~1040

```text
6.2k vs 63.5k
```

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
22.2 s master
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
```
