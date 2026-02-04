import Folder from "./Folder";

export default interface Picture {
    width: number,
    height: number,
    uri: string,
    format: string,
    folder?: Folder,
}
