class ChildrenDetails {
    publishedfileid?: string;
    result?: number;
    children?: [ { publishedfileid?: string } ]
}


export interface CollectionDetails {
    count?: number;
    resultcount?: number
    collectiondetails?: ChildrenDetails[];
}
