import * as THREE from 'three';
import Experience from "../Experience";

import createText from '../Utils/Text'

export default class Box {
    constructor(originVec, sizeVec, color, opacity, textContent, outline = false) {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.textContent = textContent;
        this.outline = outline;
        this.originVec = originVec;
        this.sizeVec = sizeVec;
        this.color = color;
        this.opacity = opacity;

        this.instance = null;

        this.initInstance();
        this.initText();
    }

    initInstance() {
        const geometry = new THREE.BoxGeometry(this.sizeVec.x, this.sizeVec.y, this.sizeVec.z);

        if (!this.outline) {
            const material = new THREE.MeshBasicMaterial({
                color: this.color,
                opacity: this.opacity,
                transparent: true,
            });

            this.instance = new THREE.Mesh(geometry, material);
            this.instance.position.copy(this.originVec);
            this.scene.add(this.instance);
        } else {
            const edges = new THREE.EdgesGeometry(geometry); 
            const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) ); 

            line.position.copy(this.originVec);
            this.scene.add(line);
        }
    }

    initText() {
        this.text = createText(this.textContent, 0.08);
        this.text.position.set(this.originVec.x-(this.textContent.length*0.02), this.originVec.y + this.sizeVec.y + 0.1, this.originVec.z-(this.textContent.length*0.02));
        this.scene.add(this.text);
    }

    update() {
        this.text.lookAt(this.experience.camera.instance.position);
    }
}