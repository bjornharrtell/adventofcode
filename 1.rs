use std::fs;

fn main() {
    // Read the contents of the file
    let data = fs::read_to_string("1.data").expect("Unable to read file");

    // Parse the data into pairs
    let pairs: Vec<Vec<i32>> = data
        .lines()
        .map(|line| {
            line.split_whitespace()
                .map(|x| x.parse::<i32>().expect("Unable to parse integer"))
                .collect()
        })
        .collect();

    // Separate the pairs into two lists
    let mut list1: Vec<i32> = pairs.iter().map(|pair| pair[0]).collect();
    let mut list2: Vec<i32> = pairs.iter().map(|pair| pair[1]).collect();

    // Sort both lists
    list1.sort_unstable();
    list2.sort_unstable();

    // Compute the differences
    let diff: Vec<i32> = list1.iter()
        .zip(list2.iter())
        .map(|(a, b)| (a - b).abs())
        .collect();

    // Compute the sum of differences
    let sum: i32 = diff.iter().sum();

    // Print the result
    println!("{}", sum);
}