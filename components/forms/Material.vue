<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <div v-if="isLoggedin">
      <h1 class="title">Formular</h1>
      <h2 class="subtitle">Material Formular</h2>
    </div>

    <FormulateForm>
      <FormulateInput
        v-if="isLoggedin"
        type="image"
        name="pic"
        label="Bild Auswählen"
        help="Nimm png, jpg or gif fürs upload."
        validation="mime:image/jpeg,image/png,image/gif"
        :uploader="uploadImage"
      />
      <FormulateInput
        v-if="isLoggedin"
        type="text"
        name="ueberschrift"
        label="Überschrift"
        :disabled="!isLoggedin"
        validation="required"
        v-model.lazy="materialData.ueberschrift"
      />
      <Categories
        v-if="isLoggedin"
        :categoryData="categoryData"
        :selectedCategories="materialData.kategorie"
        categoryType="material"
        @changeCategories="ChangeC($event)"
      />
      <MechProperties
        :einheiten="einheiten"
        :selectedMechprops="materialData.mechanischeEigenschaften"
        @changeMP="ChangeMP($event)"
      />
      <FormulateInput type="group" name="festigkeit" :repeatable="false">
        <h2 class="subtitle">Festigkeit</h2>
        <FormulateInput type="group" name="druck" :repeatable="false">
          <FormulateInput
            type="number"
            v-if="showForm(materialData.festigkeit.druck.min)"
            name="min"
            label="min Druck"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.druck.min"
          />
          <FormulateInput
            type="number"
            v-if="showForm(materialData.festigkeit.druck.max)"
            name="max"
            label="max Druck"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.druck.max"
          />
          <FormulateInput
            type="select"
            v-if="showForm(materialData.festigkeit.druck.einheit)"
            name="druckEinheit"
            label="Einheit"
            :options="einheiten"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.druck.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="zug" :repeatable="false">
          <FormulateInput
            type="number"
            v-if="showForm(materialData.festigkeit.zug.min)"
            name="min"
            label="min Zug"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.zug.min"
          />
          <FormulateInput
            type="number"
            v-if="showForm(materialData.festigkeit.zug.max)"
            name="max"
            label="max Zug"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.zug.max"
          />
          <FormulateInput
            type="select"
            v-if="showForm(materialData.festigkeit.zug.einheit)"
            name="zugEinheit"
            label="Einheit"
            :options="einheiten"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.zug.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="biege" :repeatable="false">
          <FormulateInput
            type="number"
            v-if="showForm(materialData.festigkeit.biege.min)"
            name="min"
            label="min Biege"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.biege.min"
          />
          <FormulateInput
            type="number"
            v-if="showForm(materialData.festigkeit.biege.max)"
            name="max"
            label="max Biege"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.biege.max"
          />
          <FormulateInput
            type="select"
            v-if="showForm(materialData.festigkeit.biege.einheit)"
            name="biegEinheit"
            label="Einheit"
            :options="einheiten"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.biege.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="brienellehaerte" :repeatable="false">
          <FormulateInput
            type="number"
            v-if="showForm(materialData.festigkeit.brienellehaerte.min)"
            name="min"
            label="min Brienellehärte"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.brienellehaerte.min"
          />
          <FormulateInput
            type="number"
            v-if="showForm(materialData.festigkeit.brienellehaerte.max)"
            name="max"
            label="max Brienellehärte"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.brienellehaerte.max"
          />
          <FormulateInput
            type="select"
            v-if="showForm(materialData.festigkeit.brienellehaerte.einheit)"
            name="brienellehaerteEinheit"
            label="Einheit"
            :options="einheiten"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.festigkeit.brienellehaerte.einheit"
          />
        </FormulateInput>
        <FormulateInput
          type="text"
          v-if="showForm(materialData.festigkeit.nachgiebigkeit)"
          name="nachgiebigkeit"
          label="Nachgiebigkeit (Duktilität)"
          :disabled="!isLoggedin"
          v-model.lazy="materialData.festigkeit.nachgiebigkeit"
        />
        <FormulateInput
          type="text"
          v-if="showForm(materialData.festigkeit.sproedigkeit)"
          name="sproedigkeit"
          label="Sprödigkeit"
          :disabled="!isLoggedin"
          v-model.lazy="materialData.festigkeit.sproedigkeit"
        />
      </FormulateInput>
      <FormulateInput type="group" name="differentiellesSchwindmass " :repeatable="false">
        <h2 class="subtitle">Differentielles Schwindmass</h2>
        <FormulateInput type="group" name="tangential" :repeatable="false">
          <FormulateInput
            type="number"
            v-if="showForm(materialData.differentiellesSchwindmass.tangential.min)"
            name="min"
            label="min Tangential"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.differentiellesSchwindmass.tangential.min"
          />
          <FormulateInput
            type="number"
            v-if="showForm(materialData.differentiellesSchwindmass.tangential.max)"
            name="max"
            label="max Tangential"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.differentiellesSchwindmass.tangential.max"
          />
          <FormulateInput
            type="select"
            v-if="showForm(materialData.differentiellesSchwindmass.tangential.einheit)"
            name="tangentialEinheit"
            label="Einheit"
            :options="einheiten"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.differentiellesSchwindmass.tangential.einheit"
          />
        </FormulateInput>
        <FormulateInput type="group" name="radial" :repeatable="false">
          <FormulateInput
            type="number"
            name="min"
            label="min Radial"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.differentiellesSchwindmass.radial.min"
          />
          <FormulateInput
            type="number"
            name="max"
            label="max Radial"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.differentiellesSchwindmass.radial.max"
          />
          <FormulateInput
            type="select"
            name="radialEinheit"
            label="Einheit"
            :options="einheiten"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.differentiellesSchwindmass.radial.einheit"
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
              :disabled="!isLoggedin"
              v-model.lazy="materialData.physikalischeEigenschaften.leitfaehigkeit"
            />
            <FormulateInput
              type="checkbox"
              name="magnetischeBesonderheiten"
              label="Magnetische Besonderheiten"
              :disabled="!isLoggedin"
              v-model.lazy="materialData.physikalischeEigenschaften.magnetischeBesonderheiten"
            />
            <FormulateInput
              type="text"
              name="optischeEigenschaften"
              label="Optische Eigenschaften"
              :disabled="!isLoggedin"
              v-model.lazy="materialData.physikalischeEigenschaften.optischeEigenschaften"
            />
            <FormulateInput
              type="text"
              name="thermischesVerhalten"
              label="Thermisches Verhalten"
              :disabled="!isLoggedin"
              v-model.lazy="materialData.physikalischeEigenschaften.thermischesVerhalten"
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
            :disabled="!isLoggedin"
            v-model.lazy="materialData.oberflaeche.korrosionOxidation"
          />
          <FormulateInput
            type="radio"
            name="abriebVerschleiss"
            label="Abrieb/Verschleiss"
            :repeatable="false"
            :options="{ g: 'Gering', mi: 'Mittel', vi: 'Viel' }"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.oberflaeche.abriebVerschleiss"
          />
        </FormulateInput>
        <FormulateInput type="group" name="oekonomie" :repeatable="false">
          <h2 class="subtitle">Ökonomie</h2>
          <FormulateInput
            type="text"
            name="verfuegbarkeittransport"
            label="Verfügbarkeit/Transport"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.oekonomie.verfuegbarkeittransport"
          />
          <FormulateInput
            type="radio"
            name="wertschoepfung"
            label="Wertschöpfung"
            :repeatable="false"
            :options="{ g: 'Gering', mi: 'Mittel', vi: 'Viel' }"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.oekonomie.wertschoepfung"
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
            :disabled="!isLoggedin"
            v-model.lazy="materialData.oekologie.recyclingfaehigkeit"
          />

          <FormulateInput
            type="text"
            name="gefahrenpotentiale"
            label="Gefahrenpotentiale"
            placeholder="edit me"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.oekologie.gefahrenpotentiale"
          />
          <FormulateInput
            type="text"
            name="umweltbelastung"
            label="Umweltbelastung"
            :disabled="!isLoggedin"
            v-model.lazy="materialData.oekologie.umweltbelastung"
          >
          </FormulateInput>
        </FormulateInput>
      </FormulateInput>
    </FormulateForm>

    <FormulateInput v-if="isNew" type="button" label="Save" @click="createMaterial()" />
    <FormulateInput v-if="!isNew && isLoggedin" type="button" label="Update" @click="updateMaterial()" />
    <FormulateInput v-if="!isNew && isLoggedin" type="button" label="Delete" @click="deleteMaterial()" />

    <div></div>
  </div>
</template>

<script>
import Categories from '~/components/forms/Categories'
import MechProperties from '~/components/forms/MechProperties'

export default {
  props: ['existingmaterialData'],
  components: {
    Categories,
    MechProperties,
  },
  methods: {
    async createMaterial() {
      console.log('created')
      await this.$axios.$post('api/materials', { materialData: this.materialData })
      this.$router.push({ path: '/material' })
    },
    async updateMaterial() {
      console.log('updated')
      await this.$axios.$post('api/materials/update', {
        id: this.existingmaterialData?.id,
        materialData: this.materialData,
      })
      this.$router.push({ path: '/material' })
    },
    async deleteMaterial() {
      if (confirm('Do you really want to delete?')) {
        console.log('deleted')
        await this.$axios.$post('api/materials/delete', { id: this.existingmaterialData?.id })
        this.$router.push({ path: '/material' })
      }
    },
    ChangeC(categories) {
      this.materialData.kategorie = categories
    },
    ChangeMP(mechproperties) {
      console.log('text')
      this.materialData.mechanischeEigenschaften = mechproperties
    },
    async uploadImage(file, progress, error, options) {
      let formData = new FormData()
      formData.append('file', file)

      const res = await this.$axios.$post('api/upload_image', formData)
      console.log(res)
      this.materialData.bilder = res.filepath
    },
    showForm(vModel) {
      if (this.$store.state.auth.loggedIn) {
        return true
      }
      if (vModel) {
        return true
      }
      return false
    },
  },
  computed: {
    categoryData() {
      return this.$store.getters['data/sortedCategories']('material')
    },
    isLoggedin() {
      return this.$store.state.auth.loggedIn
    },
    isNew() {
      return this.existingmaterialData?.id ? false : true
    },
  },

  data() {
    return {
      materialData: {
        bilder: '',
        ueberschrift: '',
        kategorie: { gruppe: '', unterGruppe: '', art: '' },
        mechanischeEigenschaften: {
          dichte: { min: '', max: '', einheit: '' },
          elastizitaet: { min: '', max: '', einheit: '' },
        },
        festigkeit: {
          druck: { min: '', max: '', einheit: '' },
          zug: { min: '', max: '', einheit: '' },
          biege: { min: '', max: '', einheit: '' },
          brienellehaerte: { min: '', max: '', einheit: '' },
          nachgiebigkeit: '',
          sproedigkeit: '',
        },
        differentiellesSchwindmass: {
          tangential: { min: '', max: '', einheit: '' },
          radial: { min: '', max: '', einheit: '' },
        },
        physikalischeEigenschaften: {
          elektrischeLeitfaehigkeit: '',
          leitfaehigkeit: false,
          magnetischeBesonderheiten: '',
          optischeEigenschaften: '',
          thermischesVerhalten: '',
        },
        oberflaeche: {
          korrosionOxidation: '',
          abriebVerschleiss: '',
        },
        oekonomie: {
          verfuegbarkeittransport: '',
          wertschoepfung: '',
        },
        oekologie: {
          recyclingfaehigkeit: '',
          gefahrenpotentiale: '',
          umweltbelastung: '',
        },
        ...this.existingmaterialData?.materialData,
      },
      einheiten: {
        kgm3: 'k/mg³',
        nmm2: 'N/mm²',
        prozent: '%',
      },
    }
  },
}
</script>
