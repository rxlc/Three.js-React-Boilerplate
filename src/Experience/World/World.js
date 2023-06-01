import * as THREE from 'three';
import Experience from "../Experience";

import Box from './Box';

import Helper from './Helpers';

export default class World {
    constructor() {
        this.experience = new Experience();
        this.helper = new Helper();

        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.camera = this.experience.camera;

        this.canvasReady = false;

        this.boxes = {};
        
        this.initScene();
    }

    initScene() {
        this.boxes["ki1"] = new Box(new THREE.Vector3(10.925, 4.945, -8.1), new THREE.Vector3(1.25, 1.25, 4.2), 0x00ff00, 0.1, true);
        this.boxes["ki2"] = new Box(new THREE.Vector3(10, 4.41, -10.05), new THREE.Vector3(1, 0.78, 0.9), 0x00ff00, 0.1, true);
        
        this.boxes["ko1"] = new Box(new THREE.Vector3(10.927, 4.9509, -9.7914), new THREE.Vector3(0.288, 0.2312, 0.197), 0xFF0000, 0.5);
        this.boxes["ko2"] = new Box(new THREE.Vector3(10.914, 4.5131, -8.9024), new THREE.Vector3(0.0976, 0.254, 0.342), 0xFF0000, 0.5);
        this.boxes["ko3"] = new Box(new THREE.Vector3(10.925, 4.41,  -8.3326), new THREE.Vector3(1.48, 0.525, 0.1), 0xFF0000, 0.5);
        this.boxes["ko4"] = new Box(new THREE.Vector3(11.074, 5.118, -7.897), new THREE.Vector3(0.557, 0.025, 0.333), 0xFF0000, 0.5);
        this.boxes["ko5"] = new Box(new THREE.Vector3(10.636, 4.7354, -6.9774), new THREE.Vector3(0.146, 0.162, 0.335), 0xFF0000, 0.5);
    }

    update() {
        if (this.experience.renderer.instance && this.canvasReady == false) {
            this.canvasReady = true
        }
    }
}