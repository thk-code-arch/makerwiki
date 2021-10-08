<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <h1 class="title">Formular</h1>
    <h2 class="subtitle">Material Formular</h2>
    <FormulateForm>
      <FormulateInput
        type="image"
        name="pic"
        label="Bild Auswählen"
        help="Nimm png, jpg or gif fürs upload."
        validation="mime:image/jpeg,image/png,image/gif"
        v-model="materialData.bilder"
      />
      <FormulateInput type="text" name="ueberschrift" label="Überschrift" v-model="materialData.ueberschrift" />
      <Categories :categoryData="categoryData" />
      <FormulateInput type="group" name="mechanischeEigenschaften" :repeatable="false">
        <h2 class="subtitle">Mechanische Eigenschaften</h2>
        <FormulateInput type="group" name="dichte" :repeatable="false">
          <FormulateInput
            type="number"
            name="min"
            label="min Dichte"
            v-model="materialData.mechanischeEigenschaften.dichte.min"
          />
          <FormulateInput
            type="number"
            name="max"
            label="max Dichte"
            v-model="materialData.mechanischeEigenschaften.dichte.max"
          />
          <FormulateInput
            type="select"
            name="dichteEinheit"
            label="Einheit"
            :options="einheiten"
            v-model="materialData.mechanischeEigenschaften.dichte.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="elastizitaet" :repeatable="false">
          <FormulateInput
            type="number"
            name="min"
            label="min Elastizität"
            v-model="materialData.mechanischeEigenschaften.elastizitaet.min"
          />
          <FormulateInput
            type="number"
            name="max"
            label="max Elastizität"
            v-model="materialData.mechanischeEigenschaften.elastizitaet.max"
          />
          <FormulateInput
            type="select"
            name="elastizitaetEinheit"
            label="Einheit"
            :options="einheiten"
            v-model="materialData.mechanischeEigenschaften.elastizitaet.einheit"
          />
        </FormulateInput>
      </FormulateInput>
      <FormulateInput type="group" name="festigkeit" :repeatable="false">
        <h2 class="subtitle">Festigkeit</h2>
        <FormulateInput type="group" name="druck" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Druck" v-model="materialData.festigkeit.druck.min" />
          <FormulateInput type="number" name="max" label="max Druck" v-model="materialData.festigkeit.druck.max" />
          <FormulateInput
            type="select"
            name="druckEinheit"
            label="Einheit"
            :options="einheiten"
            v-model="materialData.festigkeit.druck.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="zug" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Zug" v-model="materialData.festigkeit.zug.min" />
          <FormulateInput type="number" name="max" label="max Zug" v-model="materialData.festigkeit.zug.max" />
          <FormulateInput
            type="select"
            name="zugEinheit"
            label="Einheit"
            :options="einheiten"
            v-model="materialData.festigkeit.zug.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="biege" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Biege" v-model="materialData.festigkeit.biege.min" />
          <FormulateInput type="number" name="max" label="max Biege" v-model="materialData.festigkeit.biege.max" />
          <FormulateInput
            type="select"
            name="biegEinheit"
            label="Einheit"
            :options="einheiten"
            v-model="materialData.festigkeit.biege.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="brienellehaerte" :repeatable="false">
          <FormulateInput
            type="number"
            name="min"
            label="min Brienellehärte"
            v-model="materialData.festigkeit.brienellehaerte.min"
          />
          <FormulateInput
            type="number"
            name="max"
            label="max Brienellehärte"
            v-model="materialData.festigkeit.brienellehaerte.max"
          />
          <FormulateInput
            type="select"
            name="brienellehaerteEinheit"
            label="Einheit"
            :options="einheiten"
            v-model="materialData.festigkeit.brienellehaerte.einheit"
          />
        </FormulateInput>
        <FormulateInput
          type="text"
          name="nachgiebigkeit"
          label="Nachgiebigkeit (Duktilität)"
          v-model="materialData.festigkeit.nachgiebigkeit"
        />
        <FormulateInput
          type="text"
          name="sproedigkeit"
          label="Sprödigkeit"
          v-model="materialData.festigkeit.sproedigkeit"
        />
      </FormulateInput>
      <FormulateInput type="group" name="differentiellesSchwindmaß " :repeatable="false">
        <h2 class="subtitle">Differentielles Schwindmaß</h2>
        <FormulateInput type="group" name="tangential" :repeatable="false">
          <FormulateInput
            type="number"
            name="min"
            label="min Tangential"
            v-model="materialData.differentiellesSchwindmaß.tangential.min"
          />
          <FormulateInput
            type="number"
            name="max"
            label="max Tangential"
            v-model="materialData.differentiellesSchwindmaß.tangential.max"
          />
          <FormulateInput
            type="select"
            name="tangentialEinheit"
            label="Einheit"
            :options="einheiten"
            v-model="materialData.differentiellesSchwindmaß.tangential.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="radial" :repeatable="false">
          <FormulateInput
            type="number"
            name="min"
            label="min Radial"
            v-model="materialData.differentiellesSchwindmaß.radial.min"
          />
          <FormulateInput
            type="number"
            name="max"
            label="max Radial"
            v-model="materialData.differentiellesSchwindmaß.radial.max"
          />
          <FormulateInput
            type="select"
            name="radialEinheit"
            label="Einheit"
            :options="einheiten"
            v-model="materialData.differentiellesSchwindmaß.radial.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="physikalischeEigenschaften " :repeatable="false">
          <h2 class="subtitle">Physikalische Eigenschaften</h2>
          <FormulateInput type="group" name="elektrischeLeitfaehigkeit" :repeatable="false">
            <FormulateInput
              type="checkbox"
              name="leitfaehigkeit"
              label="leitfähigkeit"
              help="Leitet es oder nicht?"
              v-model="materialData.physikalischeEigenschaften.leitfaehigkeit"
            />
            <FormulateInput
              type="checkbox"
              name="magnetischeBesonderheiten"
              label="Magnetische Besonderheiten"
              v-model="materialData.physikalischeEigenschaften.magnetischeBesonderheiten"
            />
            <FormulateInput
              type="text"
              name="optischeEigenschaften"
              label="Optische Eigenschaften"
              v-model="materialData.physikalischeEigenschaften.optischeEigenschaften"
            />
            <FormulateInput
              type="text"
              name="thermischesVerhalten"
              label="Thermisches Verhalten"
              v-model="materialData.physikalischeEigenschaften.thermischesVerhalten"
            />
          </FormulateInput>
        </FormulateInput>
        <FormulateInput type="group" name="oberflaeche" :repeatable="false">
          <h2 class="subtitle">Oberfläche</h2>
          <FormulateInput
            type="radio"
            name="korrosionOxidation"
            label="Korrosion?"
            :repeatable="false"
            :options="{ ja: 'Ja', nein: 'Nein', vielleicht: 'Vielleicht' }"
            v-model="materialData.oberflaeche.korrosionOxidation"
          />
          <FormulateInput
            type="radio"
            name="abriebVerschleiß"
            label="Abrieb/Verschleiß"
            :repeatable="false"
            :options="{ g: 'Gering', mi: 'Mittel', vi: 'Viel' }"
            v-model="materialData.oberflaeche.abriebVerschleiß"
          />
        </FormulateInput>
        <FormulateInput type="group" name="oekonomie" :repeatable="false">
          <h2 class="subtitle">Ökonomie</h2>
          <FormulateInput
            type="text"
            name="verfuegbarkeittransport"
            label="Verfügbarkeit/Transport"
            v-model="materialData.oekonomie.verfuegbarkeittransport"
          />
          <FormulateInput
            type="radio"
            name="wertschoepfung"
            label="Wertschöpfung"
            :repeatable="false"
            :options="{ g: 'Gering', mi: 'Mittel', vi: 'Viel' }"
            v-model="materialData.oekonomie.wertschoepfung"
          />
        </FormulateInput>
        <FormulateInput type="group" name="oekonomie" :repeatable="false">
          <h2 class="subtitle">Ökologie</h2>
          <FormulateInput
            type="radio"
            name="recyclingfaehigkeit"
            label="Recyclingfähigkeit"
            :repeatable="false"
            :options="{ ja: 'Ja', ne: 'Nein' }"
            v-model="materialData.oekologie.recyclingfaehigkeit"
          />
          <FormulateInput
            type="text"
            name="gefahrenpotentiale"
            label="Gefahrenpotentiale"
            v-model="materialData.oekologie.gefahrenpotentiale"
          />
          <FormulateInput
            type="text"
            name="umweltbelastung"
            label="Umweltbelastung"
            v-model="materialData.oekologie.umweltbelastung"
          >
          </FormulateInput>
        </FormulateInput>
      </FormulateInput>
    </FormulateForm>

    <FormulateInput type="button" label="Save" @click="createMaterial()" />

    <div>
      {{ materialData }}
    </div>
  </div>
</template>

<script>
import Categories from '~/components/Categories'
export default {
  components: {
    Categories
  },
  methods: {
    async createMaterial() {
      console.log('created')
      await this.$axios.$post('api/materials', { materialData: JSON.stringify(this.materialData) })
    }
  },
  async asyncData({ $axios }) {
    const categoryData = await $axios.$get('api/materials/category')

    return { categoryData }
  },
  mounted() {
    console.log(this.kategorie)
  },

  data() {
    return {
      materialData: {
        bilder: '',
        ueberschrift: '',
        kategorie: { gruppe: '', unterGruppe: '', art: '' },
        mechanischeEigenschaften: {
          dichte: { min: '', max: '', einheit: '' },
          elastizitaet: { min: '', max: '', einheit: '' }
        },
        festigkeit: {
          druck: { min: '', max: '', einheit: '' },
          zug: { min: '', max: '', einheit: '' },
          biege: { min: '', max: '', einheit: '' },
          brienellehaerte: { min: '', max: '', einheit: '' },
          nachgiebigkeit: '',
          sproedigkeit: ''
        },
        differentiellesSchwindmaß: {
          tangential: { min: '', max: '', einheit: '' },
          radial: { min: '', max: '', einheit: '' }
        },
        physikalischeEigenschaften: {
          elektrischeLeitfaehigkeit: '',
          leitfaehigkeit: false,
          magnetischeBesonderheiten: '',
          optischeEigenschaften: '',
          thermischesVerhalten: ''
        },
        oberflaeche: {
          korrosionOxidation: '',
          abriebVerschleiß: ''
        },
        oekonomie: {
          verfuegbarkeittransport: '',
          wertschoepfung: ''
        },
        oekologie: {
          recyclingfaehigkeit: '',
          gefahrenpotentiale: '',
          umweltbelastung: ''
        }
      },
      einheiten: {
        kgm3: 'k/mg³',
        nmm2: 'N/mm²',
        prozent: '%'
      }
    }
  }
}
</script>
