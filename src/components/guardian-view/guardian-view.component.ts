//===- guardian-view.component.ts - Guardian View Component ----------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./guardian-view.template.html";

import { Character } from "@/models";
import { IntellectTraitSelect } from "../intellect-trait-select";

@WithRender
@Component({
  components: {
    IntellectTraitSelect
  }
})
export default class GuardianView extends Vue {
  @Prop() guardian!: Character;
}
