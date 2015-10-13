// Merge sort -- upshot: <= 4m + 2
// C = output array [ length = n ]
// A = 1st sorted array [ n/2 ]
// B = 2nd sorted array [ n/2 ]
// i = 1
// j = 1
//
// for k = 1 to n
//   if A(i) < B(j)
//     C(k) = A(i)
//     i++
//   else (B(j) < A(i)]
//     C(k) = B(j)
//     j++
// end

// Claim: Merge sort requires <= 6n log2 n + 6n operations to sort n numbers.

var items = [5,4,1,8,7,2,6,3];
