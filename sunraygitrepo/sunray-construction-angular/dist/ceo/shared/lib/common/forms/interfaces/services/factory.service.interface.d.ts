export interface iFactory<T, K> {
    build(params: K): T;
}
