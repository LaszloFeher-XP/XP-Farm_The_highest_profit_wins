[![Run Tests](https://github.com/LaszloFeher-XP/XP-Farm_The_highest_profit_wins/actions/workflows/test.yml/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_The_highest_profit_wins/actions/workflows/test.yml/badge.svg) 
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_The_highest_profit_wins&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_The_highest_profit_wins) 
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_The_highest_profit_wins&metric=bugs)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_The_highest_profit_wins) 
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_The_highest_profit_wins&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_The_highest_profit_wins) 
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_The_highest_profit_wins&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_The_highest_profit_wins) 
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_The_highest_profit_wins&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_The_highest_profit_wins) 
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_The_highest_profit_wins&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_The_highest_profit_wins) 
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_The_highest_profit_wins&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_The_highest_profit_wins) 
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_The_highest_profit_wins&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_The_highest_profit_wins) 
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_The_highest_profit_wins&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_The_highest_profit_wins) 
[![Open Issues](https://img.shields.io/github/issues/LaszloFeher-XP/XP-Farm_The_highest_profit_wins/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_The_highest_profit_wins/issues) 

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg) 
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg) 
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg) 
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

[Metrics report](metrics.md) 
[Complexity report](complexity-report.md) 

# The highest profit wins!

... 

## Instructions 

Story

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Task

Write a function that returns both the minimum and maximum number of the given list/array.
Examples
```sh
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
```
Remarks

All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


## User Stories 

### 1. First story 
As a user
I want to get the min and max values of an array
So that create the logic

#### Scenarios 

#### 1. 
Given [1] 
When runs logic
Then return [1,1]

#### 2. 
Given [1,2,3,4,5] 
When runs logic
Then return [1,5]

#### 3. 
Given [2334454,5]
When runs logic
Then return [5,2334454]

#### 4. 
Given [200,4,6,8,10,2]
When runs logic
Then return [2,200]


# Setting up the environment 

## To install dependencies 

To install dependencies, run the following: 

```npm install``` 

## To run the tests 

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains: 

```npm test -- --watchAll --collect-coverage --verbose```  

