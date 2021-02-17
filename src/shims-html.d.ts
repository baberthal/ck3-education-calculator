//===- components/shims-html.d.ts - Shim Type Definitions ------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

declare module "*.html" {
  import Vue, { ComponentOptions, FunctionalComponentOptions } from "vue";
  interface WithRender {
    <V extends Vue, U extends ComponentOptions<V> | FunctionalComponentOptions>(
      options: U
    ): U;
    <V extends typeof Vue>(component: V): V;
  }

  const withRender: WithRender;
  export default withRender;
}
