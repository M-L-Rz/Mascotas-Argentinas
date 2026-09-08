# Mascotas Argentinas — Modelo de negocio

**Documento:** modelo de negocio y hoja de ruta  
**Versión:** 1.0  
**Fecha:** 7 de septiembre de 2026  
**Estado:** decisión de producto para el MVP y el escalado  
**Alcance legal de la marca:** limitación INPI (publicidad y marketing por internet, gestión comercial, retail/mayorista de cinco rubros, registro de razas)

Este documento define qué es Mascotas Argentinas, hasta dónde llega, en cuánto tiempo, cómo genera ingresos y si hay o no usuarios registrados. No es un plan de inversión ni un dictamen jurídico. Es la referencia interna para no construir fuera de la marca ni del MVP.

---

## 1. Resumen ejecutivo

Mascotas Argentinas es un **medio digital de mascotas en Argentina** cuya finalidad comercial es **publicidad, marketing y, más adelante, comercio electrónico acotado**. El nombre y el logo están protegidos como marca mixta. Los dominios `.com` y `.com.ar` ya están pagos. Eso cubre la identidad; no cubre el tráfico ni cualquier rubro de “mascotas”.

**Producto de arranque:** sitio de noticias, datos curiosos y guías locales. Sin cuentas de usuario. Monetización inicial por publicidad y contenidos patrocinados.

**Producto de destino (24 meses):** el mismo medio, más un directorio pago de comercios (veterinarias, pet shops, servicios) con mapa “cerca mío”, más una tienda o canal de venta de **camas, lechos, piensos, utensilios de belleza y de higiene**. El registro de razas queda como opción de nicho, no como hito del primer año.

**Tesis:** el nombre es una categoría nacional. Se ocupa primero con contenido (SEO y audiencia). Esa audiencia se vende como inventario publicitario. Recién con demanda se cobra el directorio y se abre el mostrador que la marca sí cubre.

---

## 2. Identidad y perímetro legal

### 2.1 Qué es la marca en la práctica

| Activo | Rol |
| --- | --- |
| Marca mixta INPI | Excluye a terceros que usen el mismo nombre + logo en **esta** limitación |
| `mascotasargentinas.com` y `.com.ar` | URLs canónicas, correo corporativo, SEO de marca |
| Limitación de servicios | Define el negocio defendible, no el slogan |

La marca **no** es un monopolio de la palabra “mascotas”, ni de mapas, ni de la profesión veterinaria.

### 2.2 Lo que la limitación habilita (negocio)

1. **Publicidad por medios electrónicos e internet**, marketing y promoción.  
   Sitio, notes patrocinadas, banners, afiliados, directorio pago, media kit.
2. **Gestión de negocios comerciales.**  
   Operar el propio medio/comercio; eventualmente gestionar campañas para terceros.
3. **Venta al por menor y al por mayor** de: camas, lechos, piensos, utensilios de belleza, utensilios de higiene.
4. **Registro de razas de animales.**  
   Nicho explícito. No forma parte del MVP.

### 2.3 Lo que esta marca no cubre (y por tanto no es el destino del signo)

Servicios veterinarios, peluquería como prestación, software/app clínica, seguros propios, adopción operada como refugio, educación/academia, venta “oficial” de juguetes, ropa, medicamentos o animales vivos.

Esas actividades se pueden **anunciar** (publicidad de terceros). Operarlas bajo este signo exigiría otras clases o no usar esta marca ahí.

### 2.4 Encuadre del medio

El sitio no se posiciona como diario periodístico puro (clase 41 típica). Se posiciona como **medio electrónico de contenidos cuya finalidad comercial es publicidad y marketing**. Las notas son el imán; el inventario publicitario es el negocio. Si el medio escala, se evalúa ampliar a clase 41 para cerrar el gris editorial.

---

## 3. Problema, mercado y audiencia

### 3.1 Problema

Quien convive con un perro, gato u otra mascota en Argentina consume contenido todo el tiempo (salud, alimentación, conducta, normas, urgencias, curiosidades) y después busca un comercio cerca. Hoy eso está fragmentado: portales genéricos, grupos de Facebook, Google Maps y marcas de alimento. No hay un referente nacional con nombre de categoría, tono local y un camino claro de “leo → confío → encuentro un comercio / compro”.

### 3.2 Audiencia primaria (B2C, el lector)

- Personas en Argentina con perro o gato (núcleo); aves y otras especies como extensión natural del logo.
- Búsqueda: dudas concretas (“¿puedo darle X?”, “urgencia vet en…”, “pienso para…”), entretenimiento (datos curiosos) y noticias locales (ordenanzas, brotes, eventos).
- No se pide registro para leer. El contrato es: contenido útil y claro, sin fingir que sustituye al veterinario.

### 3.3 Audiencia secundaria (B2B, quien paga)

- Marcas de alimento, higiene, camas y accesorios permitidos.
- Veterinarias, pet shops, paseadores, guarderías (ellos prestan el servicio; Mascotas Argentinas les vende visibilidad).
- Distribuidores (canal mayorista, fase tardía).

### 3.4 Promesa

Mascotas Argentinas es el lugar en español rioplatense donde se entiende qué pasa con las mascotas en el país, se aprende algo concreto, y más adelante se encuentra un comercio de confianza cerca. No es una red social ni una clínica.

---

## 4. Visión, horizonte y lo que no seremos

### 4.1 Desde dónde arrancamos (hoy)

Identidad legal y dominios listos. Sitio aún no publicado. Capacidad de construir el producto con ingeniería propia.

### 4.2 Hasta dónde queremos llegar (horizonte 24 meses)

Un **medio de referencia** en búsqueda orgánica para consultas de mascotas en Argentina, con:

- Publicación sostenida (noticias + curiosos + unas pocas guías de calidad).
- Monetización publicitaria propia (no solo una red genérica).
- Directorio con mapa en al menos el AMBA, con fichas verificadas y perfiles destacados pagos.
- Canal de venta de los cinco rubros de la marca (propia, afiliada o híbrida), sin fingir un pet shop universal.

A cinco años, si el medio sostiene audiencia, el mismo paraguas puede ser la cabecera de un marketplace **solo de esas categorías** y, si hay demanda real, un padrón de razas. Eso no se compromete en el año 1.

### 4.3 Qué queda explícitamente fuera

- App nativa y “IA veterinaria”.
- Marketplace de cualquier SKU.
- Turnos veterinarios operados por Mascotas Argentinas.
- Red social, comentarios abiertos el día uno, gamificación.
- Mapa nacional vacío “para ocupar territorio”.
- Adopción operada (sí se puede cubrir periodísticamente y anunciar refugios).

---

## 5. Arquitectura de producto (capas)

La marca es paraguas. Cada capa es un producto. No se lanzan juntas.

| Capa | Qué es | Estado |
| --- | --- | --- |
| **Medio** | Noticias, datos curiosos, guías | MVP — se construye ahora |
| **Inventario publicitario** | Sponsors, nativas, afiliados, media kit | Se enciende cuando hay tráfico medible |
| **Directorio** | Fichas + mapa “cerca mío” | Reservado en rutas; no se implementa vacío |
| **Comercio** | Retail/mayorista de 5 rubros | Después de directorio o en paralelo si hay partner |
| **Registro de razas** | Servicio nominado en la marca | Opcional; no es hito |

Rutas previstas en el sitio (reservadas, no todas activas al lanzar): `/noticias`, `/curiosos`, `/guia`, `/directorio`, `/tienda`, `/contacto`, `/legal`.

---

## 6. Usuarios registrados: decisión

### 6.1 Decisión

**El MVP y toda la fase de medio (aproximadamente el primer año) no tienen usuarios registrados del público.** No hay login, no hay perfiles, no hay comentarios atados a cuenta, no hay “mi mascota”.

La captura de audiencia se hace por **newsletter (email)** y, si aplica, WhatsApp/canal de difusión. Eso no es una cuenta: es permiso de contacto.

### 6.2 Por qué no hay cuentas B2C ahora

- El valor se entrega leyendo. La cuenta no mejora el artículo.
- Cada usuario registrado implica autenticación, recuperación, abuso, moderación y obligaciones de datos personales (Ley 25.326 y buenas prácticas de consentimiento).
- Un medio chico con registro vacío se ve menos serio que un medio sin registro.
- Comentarios abiertos en un sitio de animales atraen pelea y riesgo (consejos médicos de extraños).

### 6.3 Cuándo sí hay cuentas, y de qué tipo

| Quién | Cuándo | Para qué |
| --- | --- | --- |
| **Nadie (lector)** | Año 1 | Lee, comparte, se suscribe al newsletter |
| **Comercio (B2B)** | Al cobrar el directorio | Panel para reclamar ficha, cargar horario, pagar destacado |
| **Lector (B2C)** | Solo si hay demanda clara, post-directorio | Guardar clínicas, alertas de zona. No es red social |
| **Criador / titular (razas)** | Solo si se lanza el padrón | Expediente del animal. Producto aparte |

Las cuentas B2B del directorio **no** convierten el sitio en una plataforma de usuarios masivos. Son clientes, no comunidad.

### 6.4 Datos que sí se tratan sin “usuario”

- Analytics (con política de cookies/privacidad).
- Email de newsletter (doble opt-in recomendado).
- Formulario de contacto y, más adelante, leads de comercios que quieren anunciarse.

---

## 7. Modelo de ingresos

El orden importa: no se abre tienda ni directorio para “tener un business model”. Se cobra lo que la limitación ya describe, en el momento en que hay alguien del otro lado.

### 7.1 Fase A — Medio (meses 1 a 6)

**Objetivo:** existir en Google y en redes, con inventario mínimo vendible.

| Fuente | Cómo | Rol |
| --- | --- | --- |
| Publicidad programática | Red de anuncios (p. ej. Google AdSense u equivalente) cuando el tráfico lo justifique | Ingreso chico; valida que el inventario existe |
| Contenido patrocinado | Nota o módulo pagado, rotulado como publicidad | Primer ingreso B2B realista |
| Afiliados | Enlaces a pienso, camas, lechos, higiene/belleza (rubros cubiertos) | Solo SKUs alineados a la marca |

No se cuenta con estos ingresos para vivir en los primeros meses. Sirven para no construir un medio que después no se puede cobrar.

### 7.2 Fase B — Media kit (meses 4 a 12)

**Objetivo:** vender audiencia argentina de mascotas a marcas, no depender solo de la red programática.

- Tarifario simple: nota nativa, home take-over, newsletter mention, paquete trimestral.
- Transparencia: lo pago se etiqueta. La confianza del lector es el activo.
- Encaje legal: publicidad y marketing por internet.

Este es el **negocio central de clase 35** mientras el directorio no exista.

### 7.3 Fase C — Directorio pago (meses 9 a 18, un territorio primero)

**Objetivo:** que el comercio pague por ser encontrado.

- Ficha básica: puede ser gratuita o de reclamo, para densificar el mapa (decisión táctica al implementar).
- **Destacado / posición en zona / ficha verificada:** el ingreso.
- El mapa “veterinarias cerca” es el gancho. Mascotas Argentinas no atiende, no da turnos y no diagnostica.

Arranque geográfico: **CABA y GBA**, no el país. Un mapa denso en una región vale más que 24 provincias con tres pines.

### 7.4 Fase D — Comercio de los cinco rubros (año 2, o antes con partner)

**Objetivo:** usar el tráfico de guías de alimentación e higiene para vender lo que la marca cubre.

- Venta propia, mayorista a pet shops, o afiliación estricta a esas categorías.
- No se arma un catálogo de juguetes y farmacia “porque el pet shop lo tiene”. Eso queda fuera del signo.

### 7.5 Fase E — Registro de razas (opcional, no calendarizado)

Solo si aparece un segmento (criadores, clubes) dispuesto a pagar un padrón serio. Requiere proceso, no una landing.

### 7.6 Qué no es una fuente de ingreso en este plan

- Suscripción de pago para leer (paywall). El medio tiene que ser indexable y compartible.
- Venta de datos de lectores.
- “Membresía club” sin beneficio concreto.
- Comisiones por acto médico veterinario.

### 7.7 Lógica de mezcla (a 24 meses, si se ejecuta)

Orden de importancia prevista, no garantía de montos:

1. Directorio / perfiles destacados (B2B local, recurrente).  
2. Publicidad nativa y media kit (B2B marcas).  
3. Afiliados + tienda de 5 rubros (transaccional).  
4. Programática (complemento).  
5. Registro de razas (opción).

Hasta que el directorio no facture, el media kit es el camino principal.

---

## 8. Cronograma

Calendario para **una persona** que construye con Cursor y publica en paralelo. Las fechas son de producto, no de valuación.

### 8.1 Días 1–14 — Sitio mínimo publicable

- Home, `/noticias`, `/curiosos`, páginas de contacto y legal.
- Identidad visual a partir del logo cedido.
- SEO base: títulos, slugs, `sitemap`, schema de artículo, Open Graph.
- 8–12 piezas reales (no lorem). Mezcla: 60 % útil / local, 40 % curiosos.
- Footer: el contenido no sustituye consulta veterinaria.
- Analytics y Search Console.

**Criterio de listo:** se puede mandar el link a alguien y no da vergüenza.

### 8.2 Meses 1–3 — Ritmo editorial

- Cadencia objetivo: **2 a 3 piezas por semana** (sostenible; 7 notas/semana se abandona).
- Newsletter desde el día en que haya 10 artículos.
- Redes: cada nota se recorta a un formato corto que **apunta al artículo**, no al revés.
- Una guía piloto (ejemplo: urgencias o vacunación en CABA), no un wiki nacional.
- Medir: clics orgánicos, consultas de marca, páginas por sesión.

**Criterio de listo para vender publicidad:** tráfico orgánico recurrente y 1–2 piezas que rankean.

### 8.3 Meses 4–8 — Inventario B2B

- Media kit de una página (audiencia, formatos, precio de entrada bajo para el primer anunciante).
- Primeros sponsors o notas pagas.
- Afiliados solo de rubros cubiertos.
- Preparar taxonomía del directorio (tipo de comercio, zona, urgencias sí/no) **sin** lanzar el mapa.

### 8.4 Meses 9–14 — Directorio v1 (un territorio)

- Cuentas **B2B** para comercios (acá aparece el primer login).
- Mapa y listado “cerca mío” con fuente de datos lícita (carga propia, partnerships; no scrapear Maps).
- Producto pago: destacado.
- Disclaimer visible: no es un servicio veterinario de Mascotas Argentinas.

**Criterio de listo:** N fichas útiles en AMBA (umbral a fijar al implementar; si no se llega, no se abre al público).

### 8.5 Meses 15–24 — Comercio y expansión

- Tienda o canal de los cinco rubros.
- Segundo territorio del directorio solo si el primero retiene anunciantes.
- Evaluar clase 41 (publicaciones) con agente de marcas si el medio ya es el centro de la operación.

---

## 9. Operación y contenidos

### 9.1 Línea editorial

- Tono: claro, argentino, no infantil, no alarmista.
- Noticias: hechos locales y nacionales que afecten a tutores (normativa, salud pública animal, eventos).
- Curiosos: entretenimiento con un hecho verificable; no faunas inventadas.
- Guías: pocas, profundas, fechadas, con “consultá a tu vet”.
- Publicidad: separable del editorial.

### 9.2 Producción

En el arranque, la producción es interna (titular del proyecto + Cursor para el sitio). El cuello de botella es el texto, no el código. No se automatiza la “noticia” con IA sin edición: el riesgo reputacional y de salud animal es inaceptable.

### 9.3 Distribución

1. Búsqueda orgánica (prioridad).  
2. Newsletter.  
3. Redes como canal de entrada al dominio propio (el activo es el sitio, no el algoritmo ajeno).

---

## 10. Métricas

No se optimiza para “usuarios registrados”. Se optimiza para audiencia y para plata B2B.

| Etapa | Indicadores |
| --- | --- |
| MVP | Artículos indexados, impresiones Search Console, clics a `/noticias` y `/curiosos` |
| Medio | Sesiones orgánicas / semana, suscriptores de newsletter, páginas/sesión |
| Publicidad | Consultas de sponsors, notas pagas cerradas, RPM si hay programática |
| Directorio | Fichas reclamadas, destacados pagos, retención trimestral de comercios |
| Tienda | Pedidos o comisiones **solo** en los 5 rubros |

Vanidad a ignorar: seguidores sin clic al sitio, mapa con miles de pines no verificados, cuentas B2C infladas.

---

## 11. Riesgos y controles

| Riesgo | Control |
| --- | --- |
| Construir fuera de la limitación INPI | Este documento; catálogo de tienda cerrado a 5 rubros |
| Medio vacío o abandonado | Cadencia baja y constante; no inflar el stack |
| Consejo médico implícito | Disclaimer; no diagnosticar; no “esta vet es la indicada para tu síntoma” |
| Mapa ilegal o frágil | Datos con permiso; API de mapas licenciada |
| Confundir marca con clínica | Copy de directorio: terceros, no turnos nuestros |
| Paywall o red social prematura | Sin registro B2C en fase medio |
| Dominios ≠ negocio | Publicar; el SEO de marca se ocupa con contenido |

---

## 12. Inversión de esfuerzo (orden de magnitud)

No hay presupuesto de equipo en este documento. El orden de magnitud de ingeniería ya estimado:

- Sitio estático publicable: un fin de semana concentrado.  
- CMS/SEO/newsletter: dos semanas de noches.  
- El mes 1 en adelante es **hábito editorial**, no features.

El directorio es el primer salto de producto (datos, mapa, billing B2B). No se adelanta.

---

## 13. Decisión resumida

1. **Somos** un medio digital de mascotas en Argentina, de vocación publicitaria.  
2. **Llegamos** en 24 meses a medio + directorio local pago + comercio de cinco rubros.  
3. **Cobramos** primero sponsors/nativas/afiliados permitidos; después fichas destacadas; después el mostrador.  
4. **No hay usuarios registrados** para el público en el MVP ni en la fase de medio. El newsletter basta. El login nace con el **comercio anunciante**, no con el lector.  
5. **No hacemos** clínica, app, marketplace total ni mapa nacional vacío.

Cualquier feature nueva se pregunta: ¿entra en la limitación, sirve al medio o al B2B, y se puede operar con una persona? Si no, no entra en el backlog.

---

## 14. Próximo paso de ejecución

Publicar el MVP editorial sobre la estructura ya creada en el repositorio (`content/`, `src/app/noticias`, `src/app/curiosos`), con piezas reales y páginas legales mínimas. El modelo de negocio se revisa cuando exista tráfico medible o el primer anunciante, no antes.
