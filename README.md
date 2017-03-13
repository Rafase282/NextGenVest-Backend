# NextGenVest Backend Challenge

## Code challenge

Hi! Very excited to see what you can do. Please complete this coding challenge and submit within 7 days.
Pick either the front-end or back-end challenge (depending on what you're interested in applying for). You can also do both if you want to be considered for both positions.

## Languages

Please choose from one of these languages as these are what we use in-house.

- Javascript
- Python

## Submit instructions

1. Create a github repository to use while you implement your challenge.
2. We'll look at the commit history and workflow as part of the evaluation process.
3. When you are done, email back with the link to your repo.

## Challenge for Back-End

Lucky you! Your hacking skills have been recognized and you've been awarded a bunch of scholarships (woot!). The catch is that you can only pick 11 scholarships...

In this challenge, pick the 11 scholarships that give you the most money! You can only pick sequential scholarships and the product of all scholarships you pick is how much money you'll be awarded! (this school is very cheap, so you only need a few dollars... scholarships are in the range 0-100)

The number of scholarships n is such that n >= 100.

Once you've implemented your scholarship selection algorithm, build a small REST API that takes in the nxn matrix of scholarships given and returns your selections. An example request is outlined below.

- Example (can only pick 3 scholarships) (n=5)

  ```
  1 2 3 4 5
  1 1 2 3 5
  3 4 5 5 5
  3 4 5 9 5
  1 1 5 5 25
  ```

Answer: `5 * 9 * 25 = 1125`

API Specs:
`POST /max_scholarship`
`'Content-Type: application/json'`

Sample json:

```json
{"data": [[1,2,3,4,5], [1,1,2,3,5], [3,4,5,5,5], [3,4,5,9,5], [1,1,5,5,25]]}
```

Response:

```json
{"sequence": [5,9,25], "total": 1125}
```

## Credits

- Original problem from [NextGenVest/challenge](https://github.com/NextGenVest/challenge) at GitHub.
- Original base for REST API [Rafase282/Mangadb](https://github.com/Rafase282/Mangadb), **My own RESTful API.**
- Help with Mocha/Chai POST test from [scotch tutorials](https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai).
