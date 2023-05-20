import * as THREE from 'three';
import Experience from "../Experience";

import gsap from 'gsap';

import Helper from './Helpers';

export default class World {
    constructor() {
        this.experience = new Experience();
        this.helper = new Helper();

        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.camera = this.experience.camera;

        this.canvasReady = false;
    }

    update() {
        if (this.experience.renderer.instance && this.canvasReady == false) {
            this.canvasReady = true
        }
    }
}