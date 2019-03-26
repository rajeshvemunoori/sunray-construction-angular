import { iEntityEffectsConfigArgs, iEntityEffectsConfig } from '../../interfaces/index';
export declare class EntityEffectsConfig implements iEntityEffectsConfig {
    config: iEntityEffectsConfigArgs;
    private sliceName;
    private initialEntity;
    private effectTypes;
    private defaultEffectTypes;
    constructor(config: iEntityEffectsConfigArgs);
    hasEffectType(effectTypeName: string): any;
    getConfig(configItem: string): any;
}
