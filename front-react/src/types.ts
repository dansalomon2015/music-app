export interface ResponseType<T> {
    message: string;
    data: T;
    status: number;
}
