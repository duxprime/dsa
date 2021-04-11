import { Node } from '../library';

/**
 * List of patient IDs and the IDs of patients they have infected.
 */
export type PatientList = [number, number[]][];

export function findPatientZero(patients:PatientList){
    const graph = buildGraph(patients);
    const infected = new Map<Node<number>, boolean>();

    Object.values(graph).forEach(node => {
        if(!infected.has(node)){
            infected.set(node, false);
        }

        node.children.forEach(child => {
            infected.set(child, true);
        });
    });

    return Array
        .from(infected)
        .filter(([node, infected]) => !infected)
        .map(([node, infected]) => node);
}

function buildGraph(patients:PatientList){
    const nodes:Record<number, Node<number>> = {};

    patients.forEach(([id, infected]) => {
        if(!nodes[id]){
            nodes[id] = new Node(id);
        }

        const infector = nodes[id];
        infected.forEach(i => {
            if(!nodes[i]){
                nodes[i] = new Node(i);
            }

            const infected = nodes[i];
            infector.addChild(infected);
        });
    });

    return nodes;
}