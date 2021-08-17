<template>
  <div class="main text-center flex flex-col flow-root">
    <h1 class="title">Formular</h1>
    <h2 class="subtitle">Process Formular</h2>

    <FormulateInput type="group" name="raster" :repeatable="false" />
    <h2 class="subtitle">Raster</h2>
    <FormulateInput type="number" name="power" label="Power" placeholder="In %" />
    <FormulateInput type="number" name="frequenz" label="Frequenz" placeholder="In %" />
    <FormulateInput type="number" name="speed" label="Speed" placeholder="In %" />
    <FormulateInput type="group" name="schnitt" :repeatable="false" />
    <h2 class="subtitle">Schnitt</h2>
    <FormulateInput type="number" name="power" label="Power" placeholder="In %" />
    <FormulateInput type="number" name="frequenz" label="Frequenz" placeholder="In %" />
    <FormulateInput type="number" name="speed" label="Speed" placeholder="In %" />
    <FormulateInput type="button" label="Save" class="main text-center flex flex-col flow-root" />
    <div>
      {{ processData }}
    </div>
  </div>
</template>

<script></script>
