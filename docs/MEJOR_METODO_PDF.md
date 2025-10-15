# MEJOR MÉTODO PARA EXPORTAR PDF
## Usa el botón "Export PDF" integrado

**Actualizado:** Octubre 15, 2025  
**Recomendación:** ⭐ Haz clic en **Export PDF** (auto export). El flujo `Ctrl+P` queda como respaldo manual.

---

### Ventajas del botón "Export PDF"
- ✅ Salida 1920x1080 px pareja (una página por slide)
- ✅ Layout preservado (sin cortar cabeceras ni footers)
- ✅ Colores y fondos exactos
- ✅ Sin ajustes manuales del cuadro de impresión

### Guía rápida
1. Asegúrate de estar en la slide 1 (el export automático restablece el zoom a 100 %).
2. Haz clic en **Export PDF** en la barra inferior.
3. Espera ~20 s mientras se capturan todas las slides (verás una barra de progreso).
4. Se descargará `Mira-Labs-Pitch-Deck-2025.pdf` automáticamente.

### Problemas frecuentes (Auto Export)
- **¿Páginas cortadas?** Recarga la aplicación, vuelve a la slide 1 y repite la exportación; la herramienta restablece el zoom automáticamente a 1920×1080.
- **¿Colores apagados?** Revisa que no tengas extensiones como "dark reader" activas durante la exportación.
- **¿Descarga bloqueada?** El navegador puede pedir permiso para múltiples descargas; acéptalo y reintenta.

> Si necesitas control manual o tu entorno bloquea la descarga automática, utiliza la alternativa `Ctrl+P` descrita a continuación.

---

## ALTERNATIVA: CTRL+P (Manual)

### Ventajas:
- ✅ **Calidad perfecta** (usa engine nativo del navegador)
- ✅ **Rápido** (2-3 segundos vs 20-25 segundos)
- ✅ **Sin distorsiones** de layout
- ✅ **Colores exactos** automáticamente
- ✅ **Fuentes nítidas**
- ✅ **Gráficas perfectas**

---

## 📖 INSTRUCCIONES PASO A PASO

### 1. Preparación (Una sola vez)

**A. Ocultar la Barra de Navegación:**

Necesitamos ocultar los controles antes de imprimir. Voy a crear una clase CSS que puedes activar.

**Por ahora, la forma más fácil:**
1. Abre DevTools (F12)
2. En Console, pega:
   ```javascript
   document.querySelector('.bg-slate-900.px-2').style.display = 'none'
   ```
3. Presiona Enter

**B. Navegar a la Primera Slide:**
- Click en el primer dot de navegación
- O presiona `Home` en el teclado

### 2. Abrir Diálogo de Impresión

**Windows/Linux:**
```
Ctrl + P
```

**Mac:**
```
Cmd + P
```

### 3. Configurar Opciones

⚠️ **MUY IMPORTANTE: Selecciona "Horizontal" (Landscape)**

```yaml
Destino: Guardar como PDF (o "Save as PDF")
Diseño: ⚫ Horizontal (Landscape) ← ¡CRÍTICO!
Márgenes: Ninguno (None)
Escala: 100% (o ajustar si es necesario)

✅ Gráficos de fondo: ACTIVADO
✅ Colores de fondo: ACTIVADO

❌ Headers y footers: DESACTIVADO
```

**Si las páginas salen en vertical/portrait:**
- Asegúrate de seleccionar **"Horizontal"** o **"Landscape"** en el selector de diseño
- Por defecto viene en "Vertical", debes cambiarlo manualmente

**Configuración Visual:**

```
┌─────────────────────────────────────┐
│ Destino: [Guardar como PDF ▼]      │
│                                     │
│ Diseño:  ⚪ Vertical               │
│          ⚫ Horizontal              │
│                                     │
│ Márgenes: [Ninguno ▼]              │
│                                     │
│ Escala: [100 ▼]                    │
│                                     │
│ Opciones:                           │
│ ✅ Gráficos de fondo               │
│ ❌ Headers y footers               │
│                                     │
│         [Cancelar]  [Guardar]       │
└─────────────────────────────────────┘
```

### 4. Vista Previa

**Verifica:**
- ✅ Todas las slides visibles (debería mostrar 10 páginas)
- ✅ Layout correcto
- ✅ Colores bien
- ✅ No hay cortes extraños

**Si NO ves 10 páginas:**
- Ajusta escala a 90% o 95%
- Verifica que márgenes estén en "Ninguno"

### 5. Guardar

1. Click en **"Guardar"**
2. Elige ubicación
3. Nombre sugerido: `Mira-Labs-Pitch-Deck-2025.pdf`
4. Click **"Guardar"**

**¡Listo!** - PDF de alta calidad en 2-3 segundos

---

## 🎯 COMPARACIÓN

| Aspecto | Botón "Export PDF" | Ctrl+P |
|---------|-------------------|--------|
| **Calidad** | 6/10 (puede tener issues) | **10/10** ⭐ |
| **Velocidad** | 20-25 segundos | **2-3 segundos** ⭐ |
| **Facilidad** | 1 click | 2 pasos |
| **Consistencia** | Variable | **100% confiable** ⭐ |
| **Colores** | A veces desaturados | **Perfectos** ⭐ |
| **Layout** | Puede distorsionar | **Exacto** ⭐ |
| **Gráficas** | Puede pixelar | **Nítidas** ⭐ |

**Resultado:** Ctrl+P es MUCHO mejor

---

## 🐛 TROUBLESHOOTING

### Problema: Los fondos no imprimen

**Solución:**
1. En Chrome: **Más opciones** → ✅ **Gráficos de fondo**
2. En Firefox: ✅ **Imprimir fondos**
3. Asegúrate que está activado

### Problema: Sale más de 10 páginas

**Causa:** La barra de navegación está visible

**Solución:**
```javascript
// En DevTools Console (F12):
document.querySelector('.bg-slate-900.px-2').style.display = 'none'
```

Luego vuelve a abrir Ctrl+P

### Problema: Las páginas salen en vertical (portrait) en lugar de horizontal

**Solución:**
1. En el diálogo de impresión, busca la opción **"Diseño"** o **"Layout"**
2. Selecciona **"Horizontal"** o **"Landscape"** (por defecto está en "Vertical"/"Portrait")
3. Asegúrate que el radio button esté en la opción horizontal

### Problema: Slides cortadas verticalmente

**Solución:**
1. Cambia **Márgenes** a "Ninguno"
2. Ajusta **Escala** a 90-95%

### Problema: Colores se ven apagados

**Solución:**
1. Verifica que **Gráficos de fondo** esté activado
2. Los estilos CSS ya incluyen `print-color-adjust: exact`

### Problema: Texto borroso

**Solución:**
1. Usa **100% escala** (no más)
2. Asegúrate de guardar como PDF (no imprimir físicamente)
3. Abre el PDF en Adobe Acrobat o similar (no navegador)

---

## 🎨 ALTERNATIVA: SLIDES INDIVIDUALES

Si necesitas solo algunas slides:

### Método 1: Screenshot Individual

Para cada slide que quieras:

1. Navega a la slide
2. **Windows:** `Win + Shift + S` (Snipping Tool)
3. **Mac:** `Cmd + Shift + 4`
4. Selecciona el área de la slide
5. Guarda como PNG

**Ventaja:** Calidad máxima por slide

### Método 2: Print Range

1. `Ctrl + P`
2. En **"Páginas"**, selecciona: `1-3` (ejemplo)
3. Solo exporta esas páginas

**Ejemplo:** Si quieres slides 2, 5 y 7:
```
Páginas: 2,5,7
```

---

## 💡 MEJORA FUTURA

### Agregar Botón "Print Mode"

Voy a crear un botón que:
1. Oculta automáticamente la navegación
2. Va a primera slide
3. Abre Ctrl+P automáticamente

**Código que necesitarías:**

```typescript
const printMode = () => {
  // Ocultar navegación
  const nav = document.querySelector('.bg-slate-900.px-2') as HTMLElement;
  if (nav) nav.style.display = 'none';

  // Ir a primera slide
  setCurrentSlide(0);

  // Esperar un momento
  setTimeout(() => {
    window.print();
  }, 500);
};
```

**¿Quieres que lo implemente ahora?**

---

## 📝 CHECKLIST PRE-IMPRESIÓN

Antes de hacer Ctrl+P:

- [ ] Oculté la barra de navegación inferior
- [ ] Estoy en la primera slide
- [ ] Cerré otros tabs (libera memoria)
- [ ] Tengo `Gráficos de fondo` activado
- [ ] Diseño está en `Horizontal`
- [ ] Márgenes en `Ninguno`
- [ ] Escala en `100%`

**Resultado esperado:** 10 páginas, alta calidad, 2-3 segundos

---

## 🎯 PROCESO RÁPIDO (30 SEGUNDOS)

### Quick Guide:

1. **F12** → Console
2. Pega:
   ```javascript
   document.querySelector('.bg-slate-900.px-2').style.display = 'none'
   ```
3. Presiona **Home** (ir a slide 1)
4. **Ctrl+P**
5. Config:
   - ⚠️ **IMPORTANTE: Selecciona "Horizontal/Landscape"** (viene en vertical por defecto)
   - ✅ Sin márgenes
   - ✅ Gráficos de fondo
6. **Guardar**

**¡Listo en 30 segundos!** ⚡

⚠️ **CRÍTICO:** No olvides cambiar de "Vertical" a "Horizontal" en el diálogo de impresión

---

## ⭐ RECOMENDACIÓN FINAL

**Para distribución a inversores:**
```
USA EL BOTÓN EXPORT PDF

✅ Calidad 1920×1080 consistente
✅ Layout intacto (cabecera y footer incluidos)
✅ Colores / fondos exactos
✅ Sin configuración manual
```

**Ctrl+P queda como respaldo cuando:**
- El navegador bloquea la descarga automática
- Necesitas ajustes personalizados de impresión
- Quieres enviar un PDF alternativo rápidamente

En cualquier caso, verifica siempre el archivo final antes de compartirlo.

---

## 📧 PARA ENVIAR A INVERSORES

Una vez tengas el PDF:

### Verificación Final:

1. **Abre el PDF** en Adobe Reader / Preview
2. **Verifica cada página:**
   - ✅ 10 páginas total
   - ✅ Todas en horizontal
   - ✅ Colores correctos
   - ✅ Texto nítido
   - ✅ Gráficas bien
   - ✅ Tablas completas

3. **Propiedades del PDF:**
   ```
   Título: Mira Labs - Pre-Seed Investment Deck
   Autor: Mira Labs
   Tema: Investment Opportunity
   ```

4. **Tamaño:** Debería ser 2-5 MB

5. **Opcional:** Password-protect si tiene info confidencial

---

## 🔧 RESUMEN TÉCNICO

### Por qué Ctrl+P es mejor:

**html2canvas (botón Export PDF):**
- Renderiza DOM a canvas
- Luego canvas a imagen
- Luego imagen a PDF
- **3 conversiones** = pérdida de calidad

**window.print() (Ctrl+P):**
- Usa PDF engine nativo del browser
- Renderiza directamente vectores
- **0 conversiones** = calidad perfecta

**Conclusión:** Ctrl+P es técnicamente superior

---

## ✅ SOLUCIÓN FINAL

**Para presentación a inversores:**

1. Usa **Ctrl+P** (no el botón)
2. Configura correctamente (horizontal, sin márgenes, gráficos activados)
3. Guarda como `Mira-Labs-Pitch-Deck-2025.pdf`
4. Verifica calidad antes de enviar

**Tiempo total:** 30 segundos
**Calidad:** 10/10 ⭐

---

**Fecha:** Octubre 14, 2025
**Método recomendado:** Ctrl+P en Chrome/Edge
**Calidad:** Profesional, lista para inversores
**URL:** http://localhost:5174/

---

*End of Better PDF Export Method*
