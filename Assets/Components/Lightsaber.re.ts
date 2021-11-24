import * as RE from 'rogue-engine';
import { getComponent, Prop } from 'rogue-engine';
import LightsaberBlade from './LightsaberBlade.re';
import VirtualRealityController from './VirtualRealityController.re';
import { Object3D } from 'three';

export default class Lightsaber extends RE.Component {
  @Prop("Object3D")
  blade: Object3D;

  start() {
    const vrController = getComponent(VirtualRealityController, this.object3d.parent?.parent as Object3D)
    vrController?.addEventListener("selectstart", this.onSelectStart);
  }

  onSelectStart() {
    getComponent(LightsaberBlade, this.blade)?.toggle();
  }
}

RE.registerComponent(Lightsaber);
