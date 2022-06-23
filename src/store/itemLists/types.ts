import { ErrorType } from "../types";

export type TaskType = {
    id?: string;
    title: string;
}

export type ItemType = {
    id?: string;
    listTitle: string;
    date: string;
    category: string;
    listItem: TaskType[];
    isFavorites: boolean;
}

export type ItemStateType = {
    data: ItemType[];
    isLoading: boolean;
    error: ErrorType | null
}

// accessToken(pin):"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlkb29sZGltYUBnbWFpbC5jb20iLCJpZCI6IjYyYjJjZTA3MjJlOGU2NDk2ZGUzZTY5OCIsImlhdCI6MTY1NTk5MjM4MywiZXhwIjoxNjU1OTk0MTgzfQ.0VHSo48_r1QcChEpajFmF6Q1AdyQYmFLv4Qe2bMDEjU"
// refreshToken(pin):"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlkb29sZGltYUBnbWFpbC5jb20iLCJpZCI6IjYyYjJjZTA3MjJlOGU2NDk2ZGUzZTY5OCIsImlhdCI6MTY1NTk5MjM4MywiZXhwIjoxNjU4NTg0MzgzfQ.Pbi4a9u7YHyTFMuoUiP0tB2GkpaU0RAz6p2WA_blmkA"