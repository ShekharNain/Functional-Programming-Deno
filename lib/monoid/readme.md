# Monoid data types
Sum
Product
Any
Max/Min

# Applications
- Map-reduce
  - Because of `associativity` of the data & op, can perform merging parallely
  - Because of `close` nature of accumulator, can concat easily
  - `Identity` element is required to initiate the accumulation
