import { Group } from "../models/group.model";

const groupStub1: Group = {
    id: 1,
    name: 'Groupe 1',
    color: 'red',
}

const groupStub2: Group = {
    id: 2,
    name: 'Groupe 2',
    color: '',
}

const groupsStub = [groupStub1, groupStub2];

export const groupStub = {
    get group1(): Group {
        return {...groupStub1};
    },
    get group2(): Group {
        return {...groupStub2};
    },
    get groups(): Group[] {
        return [...groupsStub];
    }
}