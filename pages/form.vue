<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <h1 class="title">Formular</h1>
    <h2 class="subtitle">Material Formular</h2>
    <FormulateForm v-model="fields">
      <FormulateInput
        type="image"
        name="pic"
        label="Bild Auswählen"
        help="Nimm png, jpg or gif fürs upload."
        validation="mime:image/jpeg,image/png,image/gif"
      />
      <FormulateInput type="text" name="ueberschrift" label="Überschrift" />
      <h2 class="subtitle">Kategorie</h2>
      <FormulateInput type="group" name="kategorie" :repeatable="false">
        <FormulateInput type="select" name="gruppe" label="Gruppe" :options="kategorie.gruppe" v-model="materialData.kategorie.gruppe" />
        <FormulateInput type="select" name="unterGruppe" label="Untergruppe" :options="kategorie.unterGruppe" />
        <FormulateInput type="select" name="art" label="Art" :options="kategorie.art" />
      </FormulateInput>
      <FormulateInput type="group" name="mechanischeEigenschaften" :repeatable="false">
        <h2 class="subtitle">Mechanische Eigenschaften</h2>
        <FormulateInput type="group" name="dichte" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Dichte" />
          <FormulateInput type="number" name="max" label="max Dichte" />
          <FormulateInput type="select" name="dichteEinheit" label="Einheit" :options="einheiten" />
        </FormulateInput>
        <FormulateInput type="group" name="elastizität" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Elastizität" />
          <FormulateInput type="number" name="max" label="max Elastizität" />
          <FormulateInput type="select" name="elastizitaetEinheit" label="Einheit" :options="einheiten" />
        </FormulateInput>
      </FormulateInput>
      <FormulateInput type="group" name="festigkeit" :repeatable="false">
        <h2 class="subtitle">Festigkeit</h2>
        <FormulateInput type="group" name="druck" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Druck" />
          <FormulateInput type="number" name="max" label="max Druck" />
          <FormulateInput type="select" name="druckEinheit" label="Einheit" :options="einheiten" />
        </FormulateInput>
        <FormulateInput type="group" name="zug" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Zug" />
          <FormulateInput type="number" name="max" label="max Zug" />
          <FormulateInput type="select" name="zugEinheit" label="Einheit" :options="einheiten" />
        </FormulateInput>
        <FormulateInput type="group" name="biege" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Biege" />
          <FormulateInput type="number" name="max" label="max Biege" />
          <FormulateInput type="select" name="biegEinheit" label="Einheit" :options="einheiten" />
        </FormulateInput>
        <FormulateInput type="group" name="brienellehärte" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Brienellehärte" />
          <FormulateInput type="number" name="max" label="max Brienellehärte" />
          <FormulateInput type="select" name="brienellehärteEinheit" label="Einheit" :options="einheiten" />
        </FormulateInput>
        <FormulateInput type="text" name="nachgiebigkeit" label="Nachgiebigkeit (Duktilität)" />
        <FormulateInput type="text" name="sproedigkeit" label="Sprödigkeit" />
      </FormulateInput>
      <FormulateInput type="group" name="differentiellesSchwindmaß " :repeatable="false">
        <h2 class="subtitle">Differentielles Schwindmaß</h2>
        <FormulateInput type="group" name="tangential" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Tangential" />
          <FormulateInput type="number" name="max" label="max Tangential" />
          <FormulateInput type="select" name="tangentialEinheit" label="Einheit" :options="einheiten" />
        </FormulateInput>
        <FormulateInput type="group" name="radial" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Radial" />
          <FormulateInput type="number" name="max" label="max Radial" />
          <FormulateInput type="select" name="radialEinheit" label="Einheit" :options="einheiten" />
        </FormulateInput>
        <FormulateInput type="group" name="physikalischeEigenschaften " :repeatable="false">
          <h2 class="subtitle">Physikalische Eigenschaften</h2>
          <FormulateInput type="group" name="elektrischeLeitfähigkeit" :repeatable="false">
            <FormulateInput type="checkbox" name="leitfaehigkeit" label="leitfähigkeit" help="Leitet es oder nicht?" />
            <FormulateInput />
            <FormulateInput type="checkbox" name="magnetischeBesonderheiten" label="Magnetische Besonderheiten" />
            <FormulateInput type="text" name="optischeEigenschaften" label="Optische Eigenschaften" />
            <FormulateInput type="text" name="thermischesVerhalten" label="Thermisches Verhalten  " />
          </FormulateInput>
        </FormulateInput>
        <FormulateInput type="group" name="oberfläche" :repeatable="false">
          <FormulateInput
            type="radio"
            name="korrosionOxidation"
            label="Korrosion?"
            :repeatable="false"
            :options="{ ja: 'Ja', nein: 'Nein', vielleicht: 'Vielleicht' }"
          >
          </FormulateInput>
        </FormulateInput>
      </FormulateInput>
    </FormulateForm>
    <div>
      {{ materialData }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      materialData: {
        kategorie: { gruppe: '', unterGruppe: '', art: '' },
        mechanischeEigenschaften: { dichte: '', min: '', max: '', dichteEinheit: '' }
      },
      fields: {},
      einheiten: {
        kgm3: 'k/mg³',
        nmm2: 'N/mm²',
        prozent: '%'
      },
      kategorie: { gruppe: ['Holz', 'Stahl'], unterGruppe: ['Laubholz', 'Eisen'], art: ['Eiche', 'Aluminium'] }
    }
  }
}
</script>
