import { of } from "rxjs";
import { groupStub } from "../stubs/group.stub";
import { categoryStub } from "../stubs/category.stub";

export class MockStore { 
    select =  jasmine.createSpy().and.returnValue(of(null)); 
    dispatch = jasmine.createSpy();
}

export class MockStoreGroupsSelect { 
    select =  jasmine.createSpy().and.returnValue(of(groupStub.groups)); 
    dispatch = jasmine.createSpy();
}

export class MockStoreCategoryCard { 
    select =  jasmine.createSpy().and.returnValue(of(categoryStub.category1.id)); 
    dispatch = jasmine.createSpy();
}