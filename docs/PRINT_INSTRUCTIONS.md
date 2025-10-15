# INSTRUCCIONES DE IMPRESIÓN / PDF EXPORT
## Mira Labs Pitch Deck

**Fecha:** Octubre 14, 2025
**Actualización:** Estilos de impresión mejorados aplicados

---

## 📄 CÓMO IMPRIMIR/EXPORTAR A PDF

### Opción 1: Chrome/Edge (RECOMENDADO)

1. **Abrir la Presentación**
   - Navega a: `http://localhost:5174/`
   - O abre el archivo `dist/index.html` en tu navegador

2. **Preparar para Imprimir**
   - Presiona `Ctrl+P` (Windows/Linux) o `Cmd+P` (Mac)
   - O: Menú → Imprimir

3. **Configurar Opciones de Impresión**
   ```
   Destino: Guardar como PDF
   Diseño: Horizontal (Landscape)
   Márgenes: Ninguno
   Escala: 100% (o ajustar si es necesario)

   ✅ Activar "Gráficos de fondo" (Background graphics)
   ✅ Activar "Imprimir colores de fondo"
   ```

4. **Guardar**
   - Click en "Guardar" o "Save"
   - Nombre sugerido: `Mira-Labs-Pitch-Deck-2025.pdf`

### Opción 2: Firefox

1. Abrir la presentación
2. `Ctrl+P` o `Cmd+P`
3. Configurar:
   ```
   Orientación: Horizontal
   Márgenes: Ninguno
   ✅ Imprimir fondos
   ```
4. Guardar como PDF

### Opción 3: Safari (Mac)

1. Abrir la presentación
2. `Cmd+P`
3. Click en "PDF" (esquina inferior izquierda)
4. Seleccionar "Guardar como PDF"
5. Configurar:
   ```
   Orientación: Horizontal
   Escala: 100%
   ```

---

## ⚙️ MEJORAS DE PRINT APLICADAS

### ✅ Estilos de Impresión Mejorados (index.css)

```css
@media print {
  /* Página horizontal sin márgenes */
  @page {
    size: landscape;
    margin: 0;
  }

  /* Colores y fondos exactos */
  * {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  /* Evitar cortes en slides */
  .slide-content {
    page-break-inside: avoid;
  }

  /* Forzar página nueva entre slides */
  .slide-container {
    page-break-after: always;
  }

  /* Ocultar controles de navegación */
  button, nav {
    display: none !important;
  }

  /* Tablas, gráficas e imágenes no se cortan */
  table, svg, canvas, img, .grid {
    page-break-inside: avoid;
  }
}
```

---

## 📋 CHECKLIST PRE-IMPRESIÓN

Antes de imprimir/exportar, verifica:

- [ ] **Todas las diapositivas visibles** - Navega por las 10 slides
- [ ] **Sin errores de consola** - Abre DevTools (F12) y verifica
- [ ] **Zoom al 100%** - Usa los controles de zoom para resetear
- [ ] **Colores correctos** - Los fondos azules/grises se ven bien
- [ ] **Tablas completas** - Las tablas financieras muestran todos los datos
- [ ] **Texto legible** - Fuentes no muy pequeñas ni muy grandes

---

## 🎯 CALIDAD DE EXPORTACIÓN

### Configuraciones para Máxima Calidad:

#### Chrome/Edge
```
Opciones avanzadas:
- Escala: 100%
- Márgenes: Ninguno
- Gráficos de fondo: ✅ SÍ
- Headers y footers: ❌ NO
```

#### Para Presentación en Proyector:
```
Recomendación: Mantener 100% o 95%
Las slides están optimizadas para 1920x1080
```

#### Para Impresión Física (A4):
```
Escala: 90-95%
Orientación: Horizontal
Papel: A4 Landscape
```

---

## 🔧 RESOLUCIÓN DE PROBLEMAS

### Problema: Los fondos no imprimen

**Solución:**
1. En Chrome: Activar "Gráficos de fondo" en las opciones de impresión
2. En Firefox: Activar "Imprimir fondos"
3. Los estilos CSS ahora fuerzan `print-color-adjust: exact`

### Problema: Las diapositivas se cortan entre páginas

**Solución:**
- Ya está resuelto con `page-break-inside: avoid`
- Si persiste, ajusta la escala al 90%

### Problema: Las tablas no caben

**Solución:**
- Usa Zoom 85-90% antes de imprimir
- O ajusta escala en opciones de impresión

### Problema: Los botones de navegación aparecen

**Solución:**
- Ya están ocultos con `button { display: none !important; }`
- Si aparecen, verifica que estés en modo impresión real (Ctrl+P)

### Problema: Fuentes muy pequeñas

**Solución:**
```css
/* Ya configurado en index.css */
@media print {
  body {
    font-size: 10px;
  }
}
```
- Puedes ajustar zoom antes de imprimir

---

## 📊 ESTRUCTURA DEL PDF EXPORTADO

El PDF tendrá 10 páginas en este orden:

```
Página 1:  Title - MIRA LABS
Página 2:  The Opportunity - Executive Summary
Página 3:  Strategic Rationale
Página 4:  Leadership Team
Página 5:  Institutional Infrastructure
Página 6:  Financial Projections
Página 7:  Investment Structure
Página 8:  Platform Business Model
Página 9:  Technology Market Solution
Página 10: Valuation & Returns Analysis
```

---

## 🚀 TIPS PARA MEJOR CALIDAD

### Antes de Exportar:

1. **Cierra otros tabs** - Libera memoria del navegador
2. **Espera carga completa** - Asegúrate que todas las fuentes cargaron
3. **Resetea zoom** - Usa el botón de zoom o presiona `0` (cero)
4. **Navega todas las slides** - Asegura que todas se renderizaron

### Durante la Exportación:

1. **No cambies de tab** - Mantén el foco en la ventana
2. **Espera renderizado** - Chrome puede tardar 5-10 segundos
3. **Verifica preview** - Revisa la vista previa antes de guardar

### Después de Exportar:

1. **Abre el PDF** - Verifica que todo se exportó correctamente
2. **Revisa colores** - Los fondos oscuros deben verse bien
3. **Check tablas** - Las tablas financieras deben estar completas
4. **Prueba en proyector** - Si vas a presentar, prueba antes

---

## 🎨 ESTADO UX/UI ACTUAL

### ✅ Implementado:
- Print styles optimizados
- Diseño responsive
- Zoom controls (50-150%)
- Espaciado compacto
- Colores Tailwind consistentes

### ❌ Pendiente (No afecta impresión):
- Identidad visual personalizada (colores marca)
- Animaciones y transiciones
- Charts/gráficas interactivas
- Botón "Export PDF" automático
- Micro-interacciones

**Nota:** Las mejoras pendientes están documentadas en `/docs/UX_UI_RECOMMENDATIONS.md`

---

## 📝 ALTERNATIVA: EXPORTAR TODAS LAS SLIDES

Si necesitas exportar todas las slides a la vez como páginas separadas:

### Método Manual:
1. Navega a la primera slide
2. `Ctrl+P` → Guardar como PDF
3. Repite para cada slide
4. Combina PDFs con una herramienta online

### Método Automático (Futuro):
El documento UX_UI_RECOMMENDATIONS.md incluye código para un botón "Export PDF" que exportaría todas las slides automáticamente usando `jspdf` y `html2canvas`.

**Para implementarlo:**
```bash
npm install jspdf html2canvas
```

Luego seguir las instrucciones en `/docs/UX_UI_RECOMMENDATIONS.md` líneas 693-717.

---

## 📧 PARA ENVIAR A INVERSORES

### Recomendaciones:

1. **Nombre del archivo:**
   ```
   Mira-Labs-Pre-Seed-Deck-Oct2025.pdf
   ```

2. **Tamaño del archivo:**
   - Esperado: 2-5 MB
   - Si es >10MB, comprime en Adobe Acrobat o online

3. **Metadata del PDF:**
   - Título: "Mira Labs - Pre-Seed Investment Deck"
   - Autor: "Mira Labs"
   - Tema: "Investment Opportunity"
   - Palabras clave: "Digital Asset Management, FINMA, FPGA Trading"

4. **Protección:**
   - Considera password-protect si tiene info confidencial
   - Adobe Acrobat: File → Protect Using Password

---

## ✅ VERIFICACIÓN FINAL

Antes de enviar el PDF a inversores:

- [ ] 10 páginas en total
- [ ] Todas en orientación horizontal
- [ ] Colores y fondos visibles
- [ ] Tablas completas y legibles
- [ ] Texto sin cortes
- [ ] Números y cálculos correctos ($60M, $20-30M pipeline, etc.)
- [ ] Series A timing consistente (Q2-Q3 2027)
- [ ] Márgenes EBITDA correctos (44-57%)
- [ ] Use of proceeds suma $5M
- [ ] Footer con ubicaciones presente en todas las slides
- [ ] Slide numbers correctos (1-10)

---

## 📞 SOPORTE

Si tienes problemas con la impresión:

1. Revisa `/docs/PROJECT_DOCUMENTATION.md` para detalles técnicos
2. Revisa `/docs/NUMERICAL_RECONCILIATION.md` para verificar números
3. Revisa `/docs/UX_UI_RECOMMENDATIONS.md` para mejoras futuras

---

**Última actualización:** Octubre 14, 2025
**Estilos de impresión:** ✅ Mejorados y probados
**Estado:** ✅ LISTO PARA IMPRIMIR

---

*Para mejores resultados, usa Chrome o Edge en modo landscape con gráficos de fondo activados.*
