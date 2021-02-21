<template>
  <b-card class="guardian-view" bg-variant="light">
    <h2>Guardian</h2>
    <!-- <div class="form-group row"> -->
    <!--   <div class="col-sm-6"> -->
    <!--     <label for="guardian-diplomacy">Diplomacy</label> -->
    <!--   </div> -->
    <!--   <div class="col-sm-3"> -->
    <!--     <b-img src="@/assets/images/Diplomacy.png" height="24"></b-img> -->
    <!--   </div> -->
    <!--   <div class="col-sm-3"> -->
    <!--     <b-form-input -->
    <!--       v-model.number="guardian.diplomacy" -->
    <!--       type="number" -->
    <!--       id="guardian-diplomacy" -->
    <!--     ></b-form-input> -->
    <!--   </div> -->
    <!-- </div> -->
    <b-form-group
      id="guardian-diplomacy-group"
      label-cols-sm="6"
      label-cols-lg="8"
      content-cols-sm
      content-cols-lg="2"
      label="Diplomacy"
      label-for="guardian-diplomacy"
    >
      <b-form-input
        v-model.number="guardian.diplomacy"
        type="number"
        id="guardian-diplomacy"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="guardian-martial-group"
      label-cols-sm="6"
      label-cols-lg="8"
      content-cols-sm
      content-cols-lg="2"
      label="Martial"
      label-for="guardian-martial"
    >
      <b-form-input
        v-model.number="guardian.martial"
        type="number"
        id="guardian-martial"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="guardian-stewardship-group"
      label-cols-sm="6"
      label-cols-lg="8"
      content-cols-sm
      content-cols-lg="2"
      label="Stewardship"
      label-for="guardian-stewardship"
    >
      <b-form-input
        v-model.number="guardian.stewardship"
        type="number"
        id="guardian-stewardship"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="guardian-intrigue-group"
      label-cols-sm="6"
      label-cols-lg="8"
      content-cols-sm
      content-cols-lg="2"
      label="Intrigue"
      label-for="guardian-intrigue"
    >
      <b-form-input
        v-model.number="guardian.intrigue"
        type="number"
        id="guardian-intrigue"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="guardian-learning-group"
      label-cols-sm="6"
      label-cols-lg="8"
      content-cols-sm
      content-cols-lg="2"
      label="Learning"
      label-for="guardian-learning"
    >
      <b-form-input
        v-model.number="guardian.learning"
        type="number"
        id="guardian-learning"
      ></b-form-input>
    </b-form-group>

    <intellect-trait-select kind="guardian" :character="guardian" />
    <!-- <b-form-group -->
    <!--   id="guardian-intellect-attribute-group" -->
    <!--   label-cols-sm="6" -->
    <!--   label-cols-lg="6" -->
    <!--   content-cols-sm -->
    <!--   content-cols-lg="4" -->
    <!--   label="Intellect Trait" -->
    <!--   label-for="guardian-intellect-trait" -->
    <!-- > -->
    <!--   <b-form-select -->
    <!--     v-model="guardian.intellectTrait" -->
    <!--     :options="intellectTraitOptions" -->
    <!--     id="guardian-intellect-trait" -->
    <!--   > -->
    <!--   </b-form-select> -->
    <!-- </b-form-group> -->

    <b-form-checkbox
      id="guardian-shrewd-checkbox"
      v-model="guardian.isShrewd"
      name="guardian-shrewd-checkbox"
    >
      Shrewd
    </b-form-checkbox>

    <b-form-checkbox
      id="guardian-dull-checkbox"
      v-model="guardian.isDull"
      name="guardian-dull-checkbox"
    >
      Dull
    </b-form-checkbox>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Character } from "@/models";
import { IntellectTraitSelect } from "../intellect-trait-select";

@Component({
  components: {
    IntellectTraitSelect
  }
})
export default class GuardianView extends Vue {
  @Prop() guardian!: Character;
}
</script>

<style scoped lang="scss"></style>
