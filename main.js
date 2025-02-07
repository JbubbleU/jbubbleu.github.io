import * as THREE from 'three';
import {Color} from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbbbbbb);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x07fff7 } );

const circle = new THREE.SphereGeometry(1,50,50)
const circleMaterial = new THREE.MeshDepthMaterial({color: 0x07fff7});


const cube = new THREE.Mesh( geometry, material );

const texture = new THREE.TextureLoader().load( 'Kitten.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 2, 1 );

const newMaterial = new THREE.MeshBasicMaterial( {map: texture});
const circ = new THREE.Mesh(circle, newMaterial);
scene.add( circ );


camera.position.z = 5;

function animate() {
    circ.rotation.y -= 0.01;

    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
