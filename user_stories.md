# User Stories

## Requirements

* I want to have an account
* Connect FB to BF
* Check stats for day
* I want motivation to work out
* I don't want to lose evenything if I fail once
* I want to directly challenge 'friends'
* I wanna have a competition edge by leveling up my ikigai, enhancing it
* I want my ikigai to be 'mine'
* I want to be rewarded for my efforts
* I want to see my fitness progress/history

## List of stories

### Signup

As a user I want to signup/register so that I can keep track stats and be
responsible for my fitigachi

Given I have a fitbit
When I go to sign up
And I provide my details
And I link my fitbit
Then I get an initial fitigachi
And I'm brought to my root page

### Tracking Progress

As a user I want to be able to track my fitness daily progress so that I can
stay motivated

Given I am an active user
When I sign in
Then I am immediately provided with my daily progress info

### Progress History

As a user I want to be able to see my activity history so that I can how much
I've improved and where I've fallen behind

Given I have used the app in the past
When I go to my progress history page
Then I see my detailed progress report

### Start a Battle (Random)

As a user I want to battle other users so that I can be validated for my efforts

Given I am a user
When I go to the battle menu
And I click on find a foe
Then I am connected with a random user to battle

### Start a battle (friend)

As a user I want to battle my friends so that we can keep each other motivated

Given I am a user
And I have friends that are users
When I go to the battle menu
And I click on fight a friend
Then I am connected with that friend to battle

### Fitigachi dies

As the system I want reap the flesh of the neglected Fitigachi so that I can
keep them motivated to stay healthy

Given a user has not met the minimum requirements for Fitigachi life
Then their Fitigachi dies :,(

### Resurrecting a Fitigachi

As a user I want to be able to resurrect my Fitigachi after it dies so that I
have reason to continue working out after failing

Given my Fitigachi has died
When I sign in next
And I see the cold, lifeless corpse of my Fitigachi, death looming over it
Then I am offered to resurrect the Fitigachi with a challenge

### Personalize my Fitigachi

As a user I want to be able to mod my Fitigachi so that I can have a sense of
ownership

Given I am a user
And I have points
When I go to the shop menu
Then I am provided with options to personalize my Fitigachi (colors, move sets, swag)
And I can choose to purchase an item or swap between items I've already purchased


