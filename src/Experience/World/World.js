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
        this.boxes["ki1"] = new Box(new THREE.Vector3(10.925, 4.945, -8.1), new THREE.Vector3(1.25, 1.25, 4.2), 0xffffff, 0, "Keepin 1", true);
        this.boxes["ki2"] = new Box(new THREE.Vector3(10, 4.41, -10.05), new THREE.Vector3(1, 0.78, 0.9), 0xffffff, 0, "Keepin 2", true);
        
        this.boxes["ko1"] = new Box(new THREE.Vector3(10.927, 4.9509, -9.7914), new THREE.Vector3(0.288, 0.2312, 0.197), 0xFF0000, 0.5,"Keepout 1");
        this.boxes["ko2"] = new Box(new THREE.Vector3(10.914, 4.5131, -8.9024), new THREE.Vector3(0.0976, 0.254, 0.342), 0xFF0000, 0.5,  "Keepout 2");
        this.boxes["ko3"] = new Box(new THREE.Vector3(10.925, 4.41,  -8.3326), new THREE.Vector3(1.48, 0.525, 0.1), 0xFF0000, 0.5, "Keepout 3");
        this.boxes["ko4"] = new Box(new THREE.Vector3(11.074, 5.118, -7.897), new THREE.Vector3(0.557, 0.025, 0.333), 0xFF0000, 0.5,"Keepout 4");
        this.boxes["ko5"] = new Box(new THREE.Vector3(10.636, 4.7354, -6.9774), new THREE.Vector3(0.146, 0.162, 0.335), 0xFF0000, 0.5, "Keepout 5");

        this.boxes["origin"] = new Box(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.15, 0.15, 0.15), 0xfacadf, 0.5, "ISS Origin");

        this.boxes["start"] = new Box(new THREE.Vector3(9.815, 4.293, -9.816), new THREE.Vector3(0.15, 0.15, 0.15), 0x00FF00, 0.5, "Start");
        this.boxes["goal"] = new Box(new THREE.Vector3(11.143, 4.9654, -6.7607), new THREE.Vector3(0.15, 0.15, 0.15), 0x00FF00, 0.5, "End");

        this.boxes["target1"] = new Box(new THREE.Vector3(11.2625, 5.3625, -10.58), new THREE.Vector3(0.1, 0.1, 0.1), 0xFFA500, 0.5, "Target 1");
        this.boxes["target2"] = new Box(new THREE.Vector3(10.513384, 3.76203, -9.085172), new THREE.Vector3(0.1, 0.1, 0.1), 0xFFA500, 0.5, "Target 2");
        this.boxes["target3"] = new Box(new THREE.Vector3(10.6031, 3.76093, -7.71007), new THREE.Vector3(0.1, 0.1, 0.1), 0xFFA500, 0.5, "Target 3");
        this.boxes["target4"] = new Box(new THREE.Vector3(9.866984, 5.09531, -6.673972), new THREE.Vector3(0.1, 0.1, 0.1), 0xFFA500, 0.5, "Target 4");
        this.boxes["target5"] = new Box(new THREE.Vector3(11.102, 5.9076, -8.0304), new THREE.Vector3(0.1, 0.1, 0.1), 0xFFA500, 0.5, "Target 5");
        this.boxes["target6"] = new Box(new THREE.Vector3(12.023, 4.8305, -8.989), new THREE.Vector3(0.1, 0.1, 0.1), 0xFFA500, 0.5, "Target 6");
        this.boxes["qrCode"] = new Box(new THREE.Vector3(11.381944, 3.76203, -8.566172), new THREE.Vector3(0.1, 0.1, 0.1), 0xFFA500, 0.5, "QR Code");
    }

    update() {
        if (this.experience.renderer.instance && this.canvasReady == false) {
            this.canvasReady = true
        }

        for (const key in this.boxes) {
            this.boxes[key].update();
        }
    }
}