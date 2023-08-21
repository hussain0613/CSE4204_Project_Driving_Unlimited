import { MeshBody } from "../physics/meshbody.js";
import * as THREE from "three";
import * as CANNON from "cannon-es";

export { randinrnge, create_obstacel };

function randinrnge(min, max){
    return Math.random() * (max - min) + min;
}

function create_obstacel(world, scene, mass = undefined){
    if (mass === undefined){
        mass = randinrnge(0, 500);
    }

    var w = randinrnge(.1, 5);
    var h = randinrnge(.1, 5);
    var d = randinrnge(.1, 5);

    var x = randinrnge(-100, 100);
    var y = 0; //randinrnge(0, 10);
    var z = randinrnge(-100, 100);


    const obst = new MeshBody({
        mass: mass, // kg
        shape: new CANNON.Box(new CANNON.Vec3(w, h, d)), // 2m x 1m x 5m
        material: new CANNON.Material(), // this is the default material
    });

    world.addBody(obst); // add to the world
    
    obst.position.set(x, y, z); // x, y, z
    obst.createMesh(new THREE.BoxGeometry(2*w, 2*h, 2*d), new THREE.MeshPhysicalMaterial({ color: 0x00ffff }), scene);
}