import React, { Fragment, Component } from "react";
import { html } from "lit-html";
import ProtvistaDatatable from "protvista-datatable";
import ProtvistaTrack from "protvista-track";
import ProtvistaManager from "protvista-manager";
import ProtvistaNavigation from "protvista-navigation";
import ProtvistaFeatureAdapter from "protvista-feature-adapter";
import DataLoader from "data-loader";
import loadWebComponent from "../utils/load-web-component";
import readmeContent from "../../../packages/protvista-datatable/README.md";
import Readme from "./Readme";

const columnConfig = {
  type: {
    label: "Feature key",
    resolver: d => d.type
  },
  description: {
    label: "Description",
    resolver: d => d.description
  },
  positions: {
    label: "Positions",
    resolver: d => `${d.start}-${d.end}`
  },
  consequence: {
    label: "Evidences",
    child: true,
    resolver: d => {
      const { evidences } = d;
      if (evidences && evidences.length > 0) {
        return html`
          <ul>
            ${evidences.map(
              evidence =>
                html`
                  <li>${evidence.code}</li>
                `
            )}
          </ul>
        `;
      }
    }
  },
  ftId: {
    label: "Feature ID",
    child: true,
    resolver: d => d.ftId
  }
};
class ProtvistaDatatableWrapper extends Component {
  componentDidMount() {
    document.querySelector("#data-table").columns = columnConfig;
  }

  render() {
    loadWebComponent("data-loader", DataLoader);
    loadWebComponent("protvista-datatable", ProtvistaDatatable);
    loadWebComponent("protvista-manager", ProtvistaManager);
    loadWebComponent("protvista-track", ProtvistaTrack);
    loadWebComponent("protvista-navigation", ProtvistaNavigation);
    loadWebComponent("protvista-feature-adapter", ProtvistaFeatureAdapter);
    return (
      <Fragment>
        <Readme content={readmeContent} />
        <h2>Track with data-loader</h2>
        <protvista-feature-adapter subscribers="#my-protvista-track,#data-table">
          <data-loader>
            <source src="https://www.ebi.ac.uk/proteins/api/features/P05067?categories=MOLECULE_PROCESSING" />
          </data-loader>
        </protvista-feature-adapter>
        <protvista-manager attributes="length displaystart displayend variantfilters highlight selectedid">
          <protvista-navigation length="770" />
          <protvista-track
            id="my-protvista-track"
            length="770"
            layout="non-overlapping"
            filter-scroll
          ></protvista-track>
          <protvista-datatable
            id="data-table"
            filter-scroll
          ></protvista-datatable>
        </protvista-manager>
        <div>
          LitElement A simple base class for creating fast, lightweight web
          components with lit-html. Build Status Published on npm Join our Slack
          Published on webcomponents.org Mentioned in Awesome lit-html
          BrowserStack Status Documentation Full documentation is available at
          lit-element.polymer-project.org. Overview LitElement uses lit-html to
          render into the element's Shadow DOM and adds API to help manage
          element properties and attributes. LitElement reacts to changes in
          properties and renders declaratively using lit-html. See the lit-html
          guide for additional information on how to create templates for
          lit-element. Properties. Decorators are a proposed standard currently
          available in TypeScript or Babel. LitElement also supports a vanilla
          JavaScript method of declaring reactive properties. Examples Runs in
          all supported browsers: Glitch Runs in browsers with JavaScript
          Modules: Stackblitz, JSFiddle, JSBin, CodePen. You can also copy this
          HTML file into a local file and run it in any browser that supports
          JavaScript Modules. Installation From inside your project folder, run:
          $ npm install lit-element To install the web components polyfills
          needed for older browsers: $ npm i -D @webcomponents/webcomponentsjs
          Supported Browsers The last 2 versions of all modern browsers are
          supported, including Chrome, Safari, Opera, Firefox, Edge. In
          addition, Internet Explorer 11 is also supported. Edge and Internet
          Explorer 11 require the web components polyfills. Contributing Please
          see CONTRIBUTING.md LitElement A simple base class for creating fast,
          lightweight web components with lit-html. Build Status Published on
          npm Join our Slack Published on webcomponents.org Mentioned in Awesome
          lit-html BrowserStack Status Documentation Full documentation is
          available at lit-element.polymer-project.org. Overview LitElement uses
          lit-html to render into the element's Shadow DOM and adds API to help
          manage element properties and attributes. LitElement reacts to changes
          in properties and renders declaratively using lit-html. See the
          lit-html guide for additional information on how to create templates
          for lit-element. Properties. Decorators are a proposed standard
          currently available in TypeScript or Babel. LitElement also supports a
          vanilla JavaScript method of declaring reactive properties. Examples
          Runs in all supported browsers: Glitch Runs in browsers with
          JavaScript Modules: Stackblitz, JSFiddle, JSBin, CodePen. You can also
          copy this HTML file into a local file and run it in any browser that
          supports JavaScript Modules. Installation From inside your project
          folder, run: $ npm install lit-element To install the web components
          polyfills needed for older browsers: $ npm i -D
          @webcomponents/webcomponentsjs Supported Browsers The last 2 versions
          of all modern browsers are supported, including Chrome, Safari, Opera,
          Firefox, Edge. In addition, Internet Explorer 11 is also supported.
          Edge and Internet Explorer 11 require the web components polyfills.
          Contributing Please see CONTRIBUTING.md LitElement A simple base class
          for creating fast, lightweight web components with lit-html. Build
          Status Published on npm Join our Slack Published on webcomponents.org
          Mentioned in Awesome lit-html BrowserStack Status Documentation Full
          documentation is available at lit-element.polymer-project.org.
          Overview LitElement uses lit-html to render into the element's Shadow
          DOM and adds API to help manage element properties and attributes.
          LitElement reacts to changes in properties and renders declaratively
          using lit-html. See the lit-html guide for additional information on
          how to create templates for lit-element. Properties. Decorators are a
          proposed standard currently available in TypeScript or Babel.
          LitElement also supports a vanilla JavaScript method of declaring
          reactive properties. Examples Runs in all supported browsers: Glitch
          Runs in browsers with JavaScript Modules: Stackblitz, JSFiddle, JSBin,
          CodePen. You can also copy this HTML file into a local file and run it
          in any browser that supports JavaScript Modules. Installation From
          inside your project folder, run: $ npm install lit-element To install
          the web components polyfills needed for older browsers: $ npm i -D
          @webcomponents/webcomponentsjs Supported Browsers The last 2 versions
          of all modern browsers are supported, including Chrome, Safari, Opera,
          Firefox, Edge. In addition, Internet Explorer 11 is also supported.
          Edge and Internet Explorer 11 require the web components polyfills.
          Contributing Please see CONTRIBUTING.md.
        </div>
      </Fragment>
    );
  }
}

export default ProtvistaDatatableWrapper;
