export function isFolder(item) {
    return item.type === "directory";
}

export function isFile(item) {
    return item.type === "file";
}

export function isLink(item) {
    return item.type === "link";
}