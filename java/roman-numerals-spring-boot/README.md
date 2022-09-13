# Arabic to roman number converter endpoint

Based of [roman-numerals-kata](https://kata-log.rocks/roman-numerals-kata)

## Requirements

- [JDK >=17](https://adoptium.net/)
- [mob](https://mob.sh/)
- Uses [gradle](https://gradle.org/) wrapper 

## User story


As a researcher I want to have a web service interface,
so that I can convert any arabic number to its corresponding roman
number

```gherkin
Given the arabic number 1
When I HTTP GET /arabic2roman/1
Then I get an HTTP Response with status 200
And a content-type of application/json
And a body containing the JSON object { "roman": "I" }
```

## Test cases

| Arabic number | roman number |
|---------------|--------------|
| 1             | I            |
| 2             | II           |
| 3             | III          |
| 4             | IV           |
| 5             | V            |
| 6             | VI           |
| 7             | VII          |
| 8             | VIII         |
| 9             | IX           |
| 10            | X            |
| 11            | XI           |
| 14            | XIV          |
| 15            | XV           |
| 17            | XVII         |
| 19            | XIX          |
| 20            | XX           |
| 34            | XXXIV        |
| 39            | XXXIX        |
| 40            | XL           |
| 45            | XLV          |
| 50            | L            |
| 100           | C            |
| 400           | CD           |
| 500           | D            |
| 900           | CM           |
| 1000          | M            |
