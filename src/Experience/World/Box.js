import * as THREE from 'three';
import Experience from "../Experience";

export default class Box {
    constructor(originVec, sizeVec, color, opacity, outline = false) {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.outline = outline;
        this.originVec = originVec;
        this.sizeVec = sizeVec;
        this.color = color;
        this.opacity = opacity;

        this.instance = null;

        this.initInstance();
    }

    initInstance() {
        if (this.outline) {
            const outlineMaterial = new THREE.MeshBasicMaterial({
                color: this.color,
                side: THREE.BackSide,
                transparent: true,
                opacity: this.opacity,
            });
            const outlineMesh = new THREE.Mesh(
                new THREE.BoxGeometry(this.sizeVec.x, this.sizeVec.y, this.sizeVec.z),
                outlineMaterial
            );
            outlineMesh.position.copy(this.originVec);
            this.scene.add(outlineMesh);

        } else {
            const geometry = new THREE.BoxGeometry(this.sizeVec.x, this.sizeVec.y, this.sizeVec.z);

            const material = new THREE.MeshBasicMaterial({
                color: this.color,
                opacity: this.opacity,
                transparent: true,
            });
    
            this.instance = new THREE.Mesh(geometry, material);
            this.instance.position.copy(this.originVec);
            this.scene.add(this.instance);
        }
    }
}