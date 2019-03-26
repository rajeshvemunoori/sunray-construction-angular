import { iEntityConstructorParams } from '../entity/index';
export interface iEntityAttributeBuilder {
    build(params: any): iEntityConstructorParams;
}
