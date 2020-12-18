/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/prefer-default-export */

// Main type definitions used throughout the Nightingale project

// eslint-disable-next-line @typescript-eslint/ban-types
export type TrackData = object;

export class NightingaleElement extends HTMLElement {
  static get is(): string {
    throw new Error(
      '"is" static property needs to be defined as the element\'s tag name'
    );
  }

  // eslint-disable-next-line class-methods-use-this
  protected render(): void {
    /* */
  }
}

export abstract class NightingaleAdapterElement extends NightingaleElement {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static transform(data: any): TrackData | undefined {
    return data;
  }
}
