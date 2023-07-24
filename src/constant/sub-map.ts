/**
 * SubMap[Cin][A][B] = S
 */
export type SubMap = [
    [
        [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        [1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
        [2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
        [3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
        [4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
        [5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
        [6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
        [7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
        [8, 7, 6, 5, 4, 3, 2, 1, 0, 9],
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    ],
    [
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        [1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
        [2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
        [3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
        [4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
        [5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
        [6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
        [7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
        [8, 7, 6, 5, 4, 3, 2, 1, 0, 9]
    ]
];

/**
 * SubCarryMap[Cin][A][B] = C
 */
export type SubCarryMap = [
    [
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    ]
];